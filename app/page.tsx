import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { profile, focusAreas } from "@/lib/site"
import { projects } from "@/lib/projects"
import { ProjectCard } from "@/components/project-card"
import { SectionTitle } from "@/components/page-header"

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
      <section className="pb-20 pt-20 sm:pb-28 sm:pt-32">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for consulting
        </p>
        <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          {profile.name}
          <span className="block text-muted-foreground">{profile.role}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{profile.summary}</p>
        <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" /> {profile.location}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View projects <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-lg border px-5 text-sm font-medium transition-colors hover:bg-accent"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <section className="border-t py-16">
        <SectionTitle>Focus areas</SectionTitle>
        <ul className="flex flex-wrap gap-2">
          {focusAreas.map((area) => (
            <li key={area} className="rounded-full border px-4 py-1.5 text-sm">
              {area}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t py-16">
        <div className="mb-6 flex items-end justify-between">
          <SectionTitle>Projects</SectionTitle>
          <Link href="/projects" className="mb-6 text-sm text-muted-foreground hover:text-foreground">
            All projects →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  )
}
