import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-start px-5 py-32 sm:px-8">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted-foreground">That page doesn't exist or has moved.</p>
      <Link href="/" className="mt-8 text-sm font-medium underline underline-offset-4">
        Back home
      </Link>
    </div>
  )
}
