"use client"

import type React from "react"
import { useEffect, useMemo, useRef } from "react"
import { portraitCols, portraitRows } from "@/lib/portrait"

type Props = { text: string; label: string }

// Assigns one character of `text` (spaces skipped) to every lit cell, in reading order.
function layout(text: string) {
  const chars = text.replace(/\s+/g, "").split("")
  let i = 0
  return portraitRows.map((row) =>
    row.split("").map((c) => {
      const level = Number(c)
      if (!level) return { level: 0, ch: " " }
      const ch = chars[i % chars.length]
      i += 1
      return { level, ch }
    }),
  )
}

const NOISE = "#$%&*+-=/\\|<>?~:;01"

export function GlyphPortrait({ text, label }: Props) {
  const wrap = useRef<HTMLDivElement>(null)
  const canvas = useRef<HTMLCanvasElement>(null)
  const cells = useMemo(() => layout(text), [text])
  // Static fallback: one span per run of cells at the same level.
  const runs = useMemo(
    () =>
      cells.map((row) => {
        const out: { level: number; s: string }[] = []
        for (const c of row) {
          const last = out[out.length - 1]
          if (last && last.level === c.level) last.s += c.ch
          else out.push({ level: c.level, s: c.ch })
        }
        return out
      }),
    [cells],
  )

  useEffect(() => {
    const el = wrap.current
    const cv = canvas.current
    if (!el || !cv) return
    const ctx = cv.getContext("2d")
    if (!ctx) return

    const styles = getComputedStyle(el)
    const glyph = Array.from({ length: 8 }, (_, i) => styles.getPropertyValue(`--glyph-${i}`).trim())
    const accent = styles.getPropertyValue("--color-accent").trim()
    const family = getComputedStyle(el.querySelector("pre") ?? el).fontFamily
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const rows = portraitRows.length
    const cols = portraitCols
    const flare = new Float32Array(rows * cols)
    let cw = 0
    let chh = 0
    let raf = 0
    let resolved = reduce ? rows : 0
    let start = 0

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = el.clientWidth
      const h = el.clientHeight
      cv.width = Math.round(w * dpr)
      cv.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cw = w / cols
      chh = h / rows
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
    }

    const draw = () => {
      ctx.clearRect(0, 0, cv.width, cv.height)
      const full = cw * 1.7
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const cell = cells[y][x]
          if (!cell.level) continue
          let ch = cell.ch
          let color = glyph[cell.level - 1]
          // Brightness carries the picture: size, weight and colour all step with the level.
          let px = full * (0.42 + 0.58 * (cell.level / 8))
          const weight = cell.level >= 7 ? 800 : cell.level >= 5 ? 600 : 400
          if (y >= resolved) {
            if (y > resolved + 2) continue
            ch = NOISE[(x * 7 + y * 13 + Math.floor(performance.now() / 60)) % NOISE.length]
            color = glyph[1]
            px = full * 0.62
          }
          const f = flare[y * cols + x]
          if (f > 0.02) {
            color = accent
            px = full
          }
          ctx.font = `${f > 0.02 ? 700 : weight} ${px.toFixed(1)}px ${family}`
          ctx.fillStyle = color
          ctx.fillText(ch, x * cw + cw / 2, y * chh + chh / 2)
        }
      }
    }

    const tick = (t: number) => {
      raf = 0
      let busy = false
      if (resolved < rows) {
        if (!start) start = t
        resolved = Math.min(rows, Math.floor(((t - start) / 1500) * rows))
        busy = true
      }
      for (let i = 0; i < flare.length; i++) {
        if (flare[i] > 0.02) {
          flare[i] *= 0.9
          busy = true
        } else flare[i] = 0
      }
      draw()
      if (busy) raf = requestAnimationFrame(tick)
    }

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const onMove = (e: PointerEvent) => {
      if (reduce) return
      const r = el.getBoundingClientRect()
      const cx = (e.clientX - r.left) / cw
      const cy = (e.clientY - r.top) / chh
      const rad = 4
      for (let y = Math.max(0, Math.floor(cy - rad)); y <= Math.min(rows - 1, Math.ceil(cy + rad)); y++) {
        for (let x = Math.max(0, Math.floor(cx - rad * 1.8)); x <= Math.min(cols - 1, Math.ceil(cx + rad * 1.8)); x++) {
          const d = Math.hypot((x - cx) / 1.8, y - cy)
          if (d < rad && cells[y][x].level) flare[y * cols + x] = Math.max(flare[y * cols + x], 1 - d / rad)
        }
      }
      kick()
    }

    let started = false
    const begin = () => {
      if (started) return
      started = true
      size()
      el.dataset.drawn = "true"
      if (reduce) draw()
      else kick()
    }

    const ro = new ResizeObserver(() => {
      if (!started) return
      size()
      draw()
    })
    ro.observe(el)
    el.addEventListener("pointermove", onMove)
    if (document.fonts?.ready) document.fonts.ready.then(begin)
    else begin()

    return () => {
      ro.disconnect()
      el.removeEventListener("pointermove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [cells])

  return (
    <div
      ref={wrap}
      className="art"
      role="img"
      aria-label={label}
      style={{ aspectRatio: `${portraitCols} / ${(portraitRows.length * 1.85).toFixed(2)}`, "--cols": portraitCols } as React.CSSProperties}
    >
      <pre aria-hidden="true">
        {runs.map((row, y) => (
          <span key={y}>
            {row.map((r, i) => (r.level ? <span key={i} className={`g${r.level}`}>{r.s}</span> : r.s))}
            {"\n"}
          </span>
        ))}
      </pre>
      <canvas ref={canvas} aria-hidden="true" />
    </div>
  )
}
