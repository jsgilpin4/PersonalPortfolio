"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { GlitchText } from "@/components/glitch-text"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/utils/translations"

export default function Contact() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }))
  }

  const constructMailtoLink = () => {
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio Website")
    // Add the user's name as a signature at the bottom of the message
    const body = encodeURIComponent(`${formData.message}\n\n${formData.name}`)
    return `mailto:joel.gilpin.4@gmail.com?subject=${subject}&body=${body}`
  }

  const isFormValid = () => {
    return formData.name.trim() !== "" && formData.message.trim() !== ""
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isFormValid()) {
      window.location.href = constructMailtoLink()
    }
  }

  return (
    <main className="container min-h-screen pt-32 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-green-400 font-mono">
          <GlitchText text={t("contact.title", language)} />
        </h1>

        <div className="grid gap-8 ">
          <Card className="bg-black/50 border-green-900/50 text-green-400">
            <CardHeader>
              <CardTitle className="text-green-400">{t("contact.form.title", language)}</CardTitle>
              <CardDescription className="text-white">{t("contact.form.description", language)}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-white">
                    {t("contact.form.name", language)}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("contact.form.namePlaceholder", language)}
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-black/50 border-green-900/50 text-white placeholder-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-white">
                    {t("contact.form.subject", language)}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder={t("contact.form.subjectPlaceholder", language)}
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-black/50 border-green-900/50 text-white placeholder-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-white">
                    {t("contact.form.message", language)}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("contact.form.messagePlaceholder", language)}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-black/50 border-green-900/50 text-white placeholder-gray-500 min-h-[150px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-mono"
                  disabled={!isFormValid()}
                >
                  {t("contact.form.submit", language)}
                </Button>
                <p className="text-xs text-gray-400 text-center mt-2">
                  {language === "en"
                    ? "This will open your default email client with your name as signature"
                    : "Cela ouvrira votre client de messagerie par défaut avec votre nom comme signature"}
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-6">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-green-400 hover:text-green-500 hover:bg-green-500/10"
            >
              <Link href="https://github.com/CrypticCyclone">
                <Github className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-green-400 hover:text-green-500 hover:bg-green-500/10"
            >
              <Link href="https://www.linkedin.com/in/joelgilpin/">
                <Linkedin className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-green-400 hover:text-green-500 hover:bg-green-500/10"
            >
              <Link href="mailto:joel.gilpin.4@gmail.com">
                <Mail className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </main>
  )
}

