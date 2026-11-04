import type { Metadata } from "next"
import { skillGroups } from "@/lib/site"
import { PageHeader, PageShell } from "@/components/page-header"

export const metadata: Metadata = { title: "Skills" }

export default function SkillsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Skills"
        title="Tools and techniques"
        description="What I use day to day across offensive security, defence and infrastructure."
      />
      <div className="divide-y border-y">
        {skillGroups.map((group) => (
          <section key={group.name} className="grid gap-4 py-8 sm:grid-cols-[220px_1fr] sm:gap-8">
            <h2 className="font-semibold">{group.name}</h2>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-md border bg-card px-3 py-1.5 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  )
}
