import type React from "react"

export function PageShell({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-5xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20">{children}</div>
}

export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mb-12 max-w-2xl sm:mb-16">
      {eyebrow && <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">{eyebrow}</p>}
      <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      {description && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  )
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">{children}</h2>
}
