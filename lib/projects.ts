// Projects shown on /projects. Each entry gets its own page at /projects/<slug>.
// To add a project, copy the object below, give it a unique slug, and fill it in.

export type Project = {
  slug: string
  title: string
  summary: string
  year: string
  status?: string
  tags: string[]
  /** Optional image path in /public shown on the project page. */
  image?: string
  links?: { label: string; href: string }[]
  /** Page body: each section renders as a heading followed by paragraphs or a bullet list. */
  sections: { heading: string; body?: string[]; bullets?: string[] }[]
}

export const projects: Project[] = [
  {
    slug: "test-project",
    title: "Test Project",
    summary: "A placeholder project that shows how each project opens on its own page. Replace it with a real one.",
    year: "2026",
    status: "Template",
    tags: ["Python", "Network Security", "Example"],
    links: [{ label: "Source code", href: "https://github.com/CrypticCyclone" }],
    sections: [
      {
        heading: "Overview",
        body: [
          "This is where the problem and the outcome go. Two or three sentences are enough: what you built, why it mattered, and what it achieved.",
        ],
      },
      {
        heading: "What I did",
        bullets: [
          "Key contribution or feature one",
          "Key contribution or feature two",
          "Key contribution or feature three",
        ],
      },
      {
        heading: "Tech stack",
        bullets: ["Python", "Docker", "Linux"],
      },
      {
        heading: "Challenges and lessons",
        body: ["The hardest part of the project and how you solved it."],
      },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
