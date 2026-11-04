import type { Metadata } from "next"
import { projects } from "@/lib/projects"
import { ProjectIndex } from "@/components/project-card"
import { PageHero } from "@/components/page-header"

export const metadata: Metadata = { title: "Projects" }

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Selected work"
        lead="Security tools, research and experiments. Open a project to read the full write-up."
      />
      <section className="section section--s">
        <div className="container grid">
          <ProjectIndex projects={projects} />
        </div>
      </section>
    </>
  )
}
