import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { getProject, projects } from "@/lib/projects"

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const project = getProject((await params).slug)
  return project ? { title: project.title, description: project.summary } : {}
}

export default async function ProjectPage({ params }: { params: Params }) {
  const project = getProject((await params).slug)
  if (!project) notFound()

  return (
    <article className="mx-auto w-full max-w-3xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14">
      <Link
        href="/projects"
        className="mb-12 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All projects
      </Link>

      <header className="mb-12 border-b pb-10">
        <div className="mb-4 flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span>{project.year}</span>
          {project.status && <span className="rounded-full border px-2 py-0.5">{project.status}</span>}
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{project.summary}</p>

        <ul className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
              {tag}
            </li>
          ))}
        </ul>

        {project.links && project.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-1.5 rounded-lg border px-4 text-sm font-medium transition-colors hover:bg-accent"
              >
                {link.label} <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        )}
      </header>

      {project.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={project.image} alt="" className="mb-12 w-full rounded-xl border object-cover" />
      )}

      <div className="space-y-12">
        {project.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-4 text-xl font-semibold tracking-tight">{section.heading}</h2>
            {section.body?.map((p, i) => (
              <p key={i} className="mb-4 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            {section.bullets && (
              <ul className="space-y-2">
                {section.bullets.map((b) => (
                  <li key={b} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  )
}
