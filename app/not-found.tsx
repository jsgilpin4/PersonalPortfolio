import Link from "next/link"

export default function NotFound() {
  return (
    <section className="lost">
      <div className="container grid">
        <p className="muted">
          <span className="prompt">~ $ </span>cd {"<"}that page{">"}: no such file or directory
        </p>
        <h1>Page not found</h1>
        <p className="lead">That page doesn’t exist or has moved.</p>
        <p>
          <Link href="/" className="btn btn--quiet">
            Back home
          </Link>
        </p>
      </div>
    </section>
  )
}
