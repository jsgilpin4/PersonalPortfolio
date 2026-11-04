import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { profile } from "@/lib/site"

export function SiteFooter() {
  const links = [
    { href: profile.links.github, label: "GitHub", icon: Github },
    { href: profile.links.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
  ]

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
