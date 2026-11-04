"use client"

import type React from "react"
import { useState } from "react"

const fieldClass =
  "w-full rounded-lg border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground/30 focus:ring-2 focus:ring-ring/20"

export function ContactForm({ email }: { email: string }) {
  const [form, setForm] = useState({ name: "", subject: "", message: "" })
  const valid = form.name.trim() !== "" && form.message.trim() !== ""

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid) return
    const subject = encodeURIComponent(form.subject || "Contact from portfolio")
    const body = encodeURIComponent(`${form.message}\n\n${form.name}`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-sm font-medium">Name</span>
          <input name="name" value={form.name} onChange={update} placeholder="Your name" className={fieldClass} required />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-medium">Subject</span>
          <input name="subject" value={form.subject} onChange={update} placeholder="What's it about?" className={fieldClass} />
        </label>
      </div>
      <label className="block space-y-2">
        <span className="text-sm font-medium">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={update}
          placeholder="Your message"
          rows={7}
          className={`${fieldClass} resize-y`}
          required
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={!valid}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Send message
        </button>
        <p className="text-xs text-muted-foreground">Opens your email app with the message filled in.</p>
      </div>
    </form>
  )
}
