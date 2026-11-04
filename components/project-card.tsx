import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex h-full flex-col rounded-xl border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-lg hover:shadow-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:hover:shadow-black/40"
    >
      <div className="mb-4 flex items-center justify-between font-mono text-xs text-muted-foreground">
        <span>{project.year}</span>
        {project.status && <span className="rounded-full border px-2 py-0.5">{project.status}</span>}
      </div>
      <h3 className="flex items-start justify-between gap-4 text-lg font-semibold tracking-tight">
        {project.title}
        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  )
}
