import type { Metadata } from "next"
import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { PageHeader, PageShell } from "@/components/page-header"

export const metadata: Metadata = { title: "Projects" }

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Projects"
        title="Selected work"
        description="Security tools, research and experiments. Open a project to read the full write-up."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </PageShell>
  )
}
