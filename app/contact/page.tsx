import type { Metadata } from "next"
import { Github, Linkedin, Mail } from "lucide-react"
import { profile } from "@/lib/site"
import { PageHeader, PageShell } from "@/components/page-header"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = { title: "Contact" }

export default function ContactPage() {
  const channels = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: "LinkedIn", value: "in/joelgilpin", href: profile.links.linkedin, icon: Linkedin },
    { label: "GitHub", value: "CrypticCyclone", href: profile.links.github, icon: Github },
  ]

  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk."
        description="Have a role, project or question in mind? Send a message and I'll get back to you."
      />
      <div className="grid gap-12 md:grid-cols-[1fr_280px] md:gap-16">
        <ContactForm email={profile.email} />
        <ul className="space-y-3">
          {channels.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl border p-4 transition-colors hover:border-foreground/20 hover:bg-accent/50"
              >
                <Icon className="h-5 w-5 text-muted-foreground" />
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{label}</span>
                  <span className="block truncate text-sm text-muted-foreground">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  )
}
