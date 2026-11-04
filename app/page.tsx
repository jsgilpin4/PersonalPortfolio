import Link from "next/link"
import { focusAreas, profile, skillGroups, timeline } from "@/lib/site"
import { projects } from "@/lib/projects"
import { GlyphPortrait } from "@/components/glyph-portrait"
import { ContactLines } from "@/components/contact-lines"

const portraitText = [...focusAreas, ...skillGroups.flatMap((g) => g.items)].join(" ")

export default function Home() {
  return (
    <>
      {/* Hero: Ledge */}
      <section className="hero">
        <div className="container">
          <div className="grid hero__grid">
            <div className="hero__text">
              <h1>Find the hole before someone else does.</h1>
              <p className="lead">
                I’m {profile.name}, a cybersecurity specialist in penetration testing and threat detection.
              </p>
              <div className="actions">
                <Link href="/contact" className="btn">
                  Get in touch
                </Link>
                <Link href="/projects" className="btn btn--quiet">
                  View projects
                </Link>
              </div>
            </div>
            <div className="hero__art">
              <GlyphPortrait text={portraitText} label={`Portrait of ${profile.name}, printed in the words of his focus areas`} />
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="section section--ruled">
        <div className="container grid">
          <p className="statement">Building models and tools that detect threats faster than people can.</p>
          <p className="statement__by muted">What I’m working on now, alongside a Master’s at QUT.</p>
        </div>
      </section>

      {/* Projects: the session at size */}
      <section className="section section--ruled">
        <div className="container grid">
          <div className="session-wrap">
            <div className="well session">
              <p>
                <span className="prompt">~ $ </span>
                <span className="cmd">ls projects/</span>
              </p>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Year</th>
                    <th scope="col" className="hide-sm">Stack</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((p) => (
                    <tr key={p.slug}>
                      <td>
                        <Link href={`/projects/${p.slug}`} className="row-link">
                          {p.slug}
                        </Link>
                      </td>
                      <td className="muted">{p.year}</td>
                      <td className="muted hide-sm">{p.tags.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>
                <span className="prompt">~ $ </span>
                <span className="caret" aria-hidden="true" />
              </p>
            </div>
            <div className="session__side">
              <h2>Projects</h2>
              <p className="lead">Each one opens as a full write-up.</p>
              <p>
                <Link href="/projects" className="link">
                  Open the index
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I work on: a reference as rows */}
      <section className="section section--l section--ruled">
        <div className="container grid">
          <div className="head head--side">
            <h2>What I work on</h2>
            <ul className="tags" aria-label="Focus areas">
              {focusAreas.map((f) => (
                <li key={f} className="tag">
                  {f}
                </li>
              ))}
            </ul>
            <p>
              <Link href="/skills" className="link">
                Every tool and technique
              </Link>
            </p>
          </div>
          <ul className="ref">
            {skillGroups.slice(0, 4).map((g) => (
              <li key={g.name} className="ref__row">
                <span className="ref__name">{g.name}</span>
                <ul className="ref__args">
                  {g.items.slice(0, 5).map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Experience: table */}
      <section className="section section--ruled">
        <div className="container grid">
          <div className="head head--top">
            <h2>Where I’ve worked and studied</h2>
          </div>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">When</th>
                  <th scope="col">Role</th>
                  <th scope="col">Where</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((t) => (
                  <tr key={t.title + t.period}>
                    <td className="t-period">{t.period}</td>
                    <td>
                      <span className="t-title">{t.title}</span>
                      <span className="t-note">{t.org}</span>
                    </td>
                    <td className="muted">{t.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Close: contact */}
      <section className="section band">
        <div className="container grid">
          <div className="close">
            <div className="head">
              <h2>Hiring, or have a question?</h2>
              <div className="close__facts">
                <p>{profile.location}</p>
                <p>Available for consulting</p>
              </div>
              <div className="actions">
                <Link href="/contact" className="btn">
                  Get in touch
                </Link>
              </div>
            </div>
            <ContactLines />
          </div>
        </div>
      </section>
    </>
  )
}
