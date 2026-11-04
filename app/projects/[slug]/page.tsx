import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
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
    <article>
      <section className="page-hero">
        <div className="container grid">
          <div className="head">
            <Link href="/projects" className="link back">
              Back to projects
            </Link>
            <div className="case-meta">
              <span>{project.year}</span>
              {project.status && <span>{project.status}</span>}
            </div>
            <h1>{project.title}</h1>
            <p className="lead">{project.summary}</p>
            <ul className="tags">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
            {project.links && project.links.length > 0 && (
              <div className="actions">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="btn btn--quiet">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {project.image && (
        <section className="section section--s">
          <div className="container">
            <div data-slot="project-image" style={{ aspectRatio: "16 / 9" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt="" />
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container grid">
          {project.sections.map((section) => (
            <div key={section.heading} className="case-section">
              <h2>{section.heading}</h2>
              <div className="case-body">
                {section.body?.map((p, i) => <p key={i}>{p}</p>)}
                {section.bullets && (
                  <ol className="steps">
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
