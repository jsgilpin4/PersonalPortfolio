import type React from "react"

/** Banner hero for inner pages: the head, one line, and optional extras beneath. */
export function PageHero({ title, lead, children }: { title: string; lead?: string; children?: React.ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container grid">
        <div className="head">
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
