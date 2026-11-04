"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"
import { profile } from "@/lib/site"

const lines = [
  { id: "email", label: "email", value: profile.email, href: `mailto:${profile.email}` },
  { id: "linkedin", label: "linkedin", value: profile.links.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: profile.links.linkedin },
  { id: "github", label: "github", value: profile.links.github.replace(/^https?:\/\//, ""), href: profile.links.github },
]

export function ContactLines() {
  const [active, setActive] = useState(0)
  const [done, setDone] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(lines[active].href.startsWith("mailto:") ? lines[active].value : lines[active].href)
      setDone(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setDone(false), 1400)
    } catch {
      setDone(false)
    }
  }

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return
    const next = (active + (e.key === "ArrowRight" ? 1 : lines.length - 1)) % lines.length
    setActive(next)
    setDone(false)
    tabs.current[next]?.focus()
  }

  const line = lines[active]

  return (
    <div className="lines">
      <div className="tabs" role="tablist" aria-label="Ways to reach me" onKeyDown={onKey}>
        {lines.map((l, i) => (
          <button
            key={l.id}
            ref={(n) => {
              tabs.current[i] = n
            }}
            type="button"
            role="tab"
            id={`tab-${l.id}`}
            aria-selected={i === active}
            aria-controls="contact-line"
            tabIndex={i === active ? 0 : -1}
            className="tab"
            onClick={() => {
              setActive(i)
              setDone(false)
            }}
          >
            {l.label}
          </button>
        ))}
      </div>
      <div className="line" id="contact-line" role="tabpanel" aria-labelledby={`tab-${line.id}`}>
        <p className="line__cmd">
          <a href={line.href} target={line.href.startsWith("http") ? "_blank" : undefined} rel={line.href.startsWith("http") ? "noopener noreferrer" : undefined}>
            {line.value}
          </a>
        </p>
        <button type="button" className="copy" onClick={copy} data-done={done} aria-label={done ? "Copied" : `Copy ${line.label}`}>
          {done ? <Check className="h-4 w-4" aria-hidden="true" width={16} height={16} /> : <Copy aria-hidden="true" width={16} height={16} />}
        </button>
        <span className="visually-hidden" aria-live="polite">
          {done ? "Copied" : ""}
        </span>
      </div>
    </div>
  )
}
