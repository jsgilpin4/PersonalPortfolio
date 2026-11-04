"use client"

import type React from "react"
import { useState } from "react"

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
    <form onSubmit={submit} className="form">
      <div className="form__pair">
        <label className="field">
          <span>Name</span>
          <input name="name" value={form.name} onChange={update} placeholder="Your name" autoComplete="name" required />
        </label>
        <label className="field">
          <span>Subject</span>
          <input name="subject" value={form.subject} onChange={update} placeholder="What’s it about?" />
        </label>
      </div>
      <label className="field">
        <span>Message</span>
        <textarea name="message" value={form.message} onChange={update} placeholder="Your message" rows={7} required />
      </label>
      <div className="form__foot">
        <button type="submit" className="btn" disabled={!valid}>
          Send message
        </button>
        <p className="muted small">Opens your email app with the message filled in.</p>
      </div>
    </form>
  )
}
