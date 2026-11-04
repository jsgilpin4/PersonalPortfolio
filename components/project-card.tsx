import Link from "next/link"
import type { Project } from "@/lib/projects"

/** The projects as an index: one row per project, each opening its own page. */
export function ProjectIndex({ projects }: { projects: Project[] }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Project</th>
            <th scope="col">Year</th>
            <th scope="col">Status</th>
            <th scope="col">Stack</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.slug}>
              <td>
                <Link href={`/projects/${p.slug}`} className="link t-title index-row">
                  {p.title}
                </Link>
                <span className="t-note">{p.summary}</span>
              </td>
              <td className="t-period">{p.year}</td>
              <td className="t-period">{p.status ?? "Shipped"}</td>
              <td>
                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
