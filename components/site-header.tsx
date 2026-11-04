"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { navItems, profile } from "@/lib/site"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => setOpen(false), [pathname])

  // The bar retracts while scrolling down and returns on the way up.
  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const y = window.scrollY
        const delta = y - lastY.current
        if (Math.abs(delta) > 6) {
          setHidden(delta > 0 && y > 160)
          lastY.current = y
        }
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <>
      <div className="banner">
        <div className="container">
          <Link href="/contact" className="link">
            Available for consulting
          </Link>
        </div>
      </div>
      <header className="bar" data-hidden={hidden && !open ? "true" : "false"} onFocusCapture={() => setHidden(false)}>
        <div className="container bar__inner">
          <Link href="/" className="wordmark" aria-label={`${profile.name}, home`}>
            {profile.name}
          </Link>

          <nav className="nav" aria-label="Main">
            {navItems
              .filter((item) => item.href !== "/contact")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav__link"
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.href}
                </Link>
              ))}
            <Link href="/contact" className="btn btn--quiet nav__cta" aria-current={isActive("/contact") ? "page" : undefined}>
              Contact
            </Link>
          </nav>

          <button
            type="button"
            className="menu-btn"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
            <div className="container">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav__link"
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.href}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
