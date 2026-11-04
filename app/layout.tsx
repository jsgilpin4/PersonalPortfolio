import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { MatrixBackground } from "@/components/matrix-background"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "JSG | Cybersecurity Expert",
  description: "Professional portfolio of a cybersecurity expert and ethical hacker",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/shield-icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-black text-white`}>
        <LanguageProvider>
          <MatrixBackground />
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'