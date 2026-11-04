"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { GlitchText } from "@/components/glitch-text"
import { useLanguage } from "@/contexts/language-context"
import { t } from "@/utils/translations"

export default function Home() {
  const { language } = useLanguage()

  return (
    <main className="container min-h-screen pt-32">
      <div className="relative">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            <GlitchText text={t("home.title", language)} />
          </h1>
          <h2 className="text-2xl text-green-400 font-mono mb-6">{t("home.subtitle", language)}</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">{t("home.description", language)}</p>
          <div className="space-x-4">
            <Button asChild className="bg-green-500 hover:bg-green-600 text-black font-mono">
              <Link href="/projects">{t("home.cta.work", language)}</Link>
            </Button>
            <Button asChild variant="outline" className="border-green-500 text-green-500 hover:bg-gray-100">
              <Link href="/contact">{t("home.cta.contact", language)}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

