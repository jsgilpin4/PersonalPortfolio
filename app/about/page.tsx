import type { Metadata } from "next"
import { bio, certifications, profile, publications, timeline } from "@/lib/site"
import { PageHero } from "@/components/page-header"

export const metadata: Metadata = { title: "About" }

export default function AboutPage() {
  return (
    <>
      <PageHero title="Securing systems, one layer at a time." lead={`${profile.role}, ${profile.location}.`} />

      <section className="section">
        <div className="container grid">
          <div className="bio">
            {bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="photo" data-slot="portrait" data-alt={profile.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.photo} alt={profile.name} width={519} height={808} />
          </div>
        </div>
      </section>

      <section className="section section--ruled">
        <div className="container grid">
          <div className="head head--top">
            <h2>Experience and education</h2>
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
                      {t.description && <span className="t-note">{t.description}</span>}
                    </td>
                    <td className="muted">{t.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--ruled">
        <div className="container grid">
          <div className="head head--top">
            <h2>Research and certifications</h2>
            <p className="lead">The papers open as PDFs.</p>
          </div>
          <ul className="files files--full">
            {publications.map((p) => (
              <li key={p.href} className="file">
                <span>
                  <a href={p.href} className="link file__name" target="_blank" rel="noopener noreferrer">
                    {p.title}
                  </a>
                  <span className="file__meta">
                    {p.kind}, {p.year}
                  </span>
                </span>
                <span className="muted small">{p.size}</span>
              </li>
            ))}
            {certifications.map((c) => (
              <li key={c.name} className="file">
                <span>
                  <span className="file__name">{c.name}</span>
                  <span className="file__meta">{c.issuer}</span>
                </span>
                <span className="muted small">{c.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
