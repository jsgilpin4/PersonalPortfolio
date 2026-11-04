import Link from "next/link"
import { navItems, profile, publications } from "@/lib/site"

export function SiteFooter() {
  const elsewhere = [
    { href: `mailto:${profile.email}`, label: "Email" },
    { href: profile.links.linkedin, label: "LinkedIn" },
    { href: profile.links.github, label: "GitHub" },
  ]

  return (
    <footer className="footer">
      <div className="container grid footer__grid">
        <div className="footer__mark">
          <Link href="/" className="wordmark">
            {profile.name}
          </Link>
          <p className="muted small">{profile.role}, {profile.location}</p>
        </div>

        <div className="footer__col">
          <h2>Pages</h2>
          <ul>
            <li>
              <Link href="/" className="link">/</Link>
            </li>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link">
                  {item.href}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h2>Elsewhere</h2>
          <ul>
            {elsewhere.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className="link"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__col--wide">
          <h2>Papers</h2>
          <ul>
            {publications.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="link" target="_blank" rel="noopener noreferrer">
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="footer__legal">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
