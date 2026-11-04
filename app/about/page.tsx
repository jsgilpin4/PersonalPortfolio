import type { Metadata } from "next"
import { ArrowUpRight, Briefcase, GraduationCap } from "lucide-react"
import { bio, certifications, profile, publications, timeline } from "@/lib/site"
import { PageHeader, PageShell, SectionTitle } from "@/components/page-header"

export const metadata: Metadata = { title: "About" }

export default function AboutPage() {
  return (
    <PageShell>
      <div className="grid gap-12 md:grid-cols-[1fr_220px] md:gap-16">
        <div>
          <PageHeader eyebrow="About" title="Securing systems, one layer at a time." />
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            {bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profile.photo}
          alt={profile.name}
          className="aspect-[4/5] w-48 rounded-2xl border object-cover md:mt-8 md:w-full"
        />
      </div>

      <section className="mt-20 border-t pt-16">
        <SectionTitle>Experience & education</SectionTitle>
        <ol className="divide-y">
          {timeline.map((item) => {
            const Icon = item.type === "work" ? Briefcase : GraduationCap
            return (
              <li key={item.title + item.period} className="grid gap-2 py-6 sm:grid-cols-[160px_1fr] sm:gap-8">
                <p className="font-mono text-sm text-muted-foreground">{item.period}</p>
                <div>
                  <h3 className="flex items-center gap-2 font-semibold">
                    <Icon className="h-4 w-4 text-primary" /> {item.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {item.org} · {item.location}
                  </p>
                  {item.description && (
                    <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </section>

      <div className="mt-16 grid gap-16 border-t pt-16 md:grid-cols-2">
        <section>
          <SectionTitle>Certifications</SectionTitle>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.name} className="rounded-xl border p-5">
                <p className="font-medium">{c.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.issuer} · {c.status}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <SectionTitle>Research</SectionTitle>
          <ul className="space-y-3">
            {publications.map((p) => (
              <li key={p.title}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 rounded-xl border p-5 transition-colors hover:border-foreground/20 hover:bg-accent/50"
                >
                  <span>
                    <span className="font-medium">{p.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{p.year} · PDF</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageShell>
  )
}
