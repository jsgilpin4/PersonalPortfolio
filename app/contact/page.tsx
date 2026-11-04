import type { Metadata } from "next"
import { profile } from "@/lib/site"
import { PageHero } from "@/components/page-header"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = { title: "Contact" }

export default function ContactPage() {
  const channels = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "LinkedIn", value: "in/joelgilpin", href: profile.links.linkedin },
    { label: "GitHub", value: "CrypticCyclone", href: profile.links.github },
  ]

  return (
    <>
      <PageHero
        title="Let’s talk."
        lead="Have a role, project or question in mind? Send a message and I’ll get back to you."
      />
      <section className="section section--s">
        <div className="container grid contact-grid">
          <ContactForm email={profile.email} />
          <ul className="channels">
            {channels.map(({ label, value, href }) => (
              <li key={label}>
                <span className="muted small">{label}</span>
                <a
                  href={href}
                  className="link"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
