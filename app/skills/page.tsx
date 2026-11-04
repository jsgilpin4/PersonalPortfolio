import type { Metadata } from "next"
import { skillGroups } from "@/lib/site"
import { PageHero } from "@/components/page-header"

export const metadata: Metadata = { title: "Skills" }

export default function SkillsPage() {
  return (
    <>
      <PageHero
        title="Tools and techniques"
        lead="What I use day to day across offensive security, defence and infrastructure."
      />
      <section className="section section--s">
        <div className="container grid">
          <ul className="ref ref--full ref--big">
            {skillGroups.map((g) => (
              <li key={g.name} className="ref__row">
                <h2 className="ref__name">{g.name}</h2>
                <ul className="ref__args">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
