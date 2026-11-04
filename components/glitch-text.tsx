"use client"

import { useState, useEffect } from "react"

const glitchCharacters = "!<>-_\\/[]{}—=+*^?#________"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchedText, setGlitchedText] = useState(text)

  useEffect(() => {
    let interval: NodeJS.Timeout

    const glitch = () => {
      let newText = ""
      for (let i = 0; i < text.length; i++) {
        if (Math.random() < 0.1) {
          newText += glitchCharacters[Math.floor(Math.random() * glitchCharacters.length)]
        } else {
          newText += text[i]
        }
      }
      setGlitchedText(newText)
    }

    const startGlitch = () => {
      interval = setInterval(glitch, 100)
      setTimeout(() => {
        clearInterval(interval)
        setGlitchedText(text)
      }, 2000)
    }

    const glitchLoop = () => {
      startGlitch()
      setTimeout(glitchLoop, Math.random() * 10000 + 5000)
    }

    glitchLoop()

    return () => clearInterval(interval)
  }, [text])

  return <span className={`font-mono ${className}`}>{glitchedText}</span>
}

