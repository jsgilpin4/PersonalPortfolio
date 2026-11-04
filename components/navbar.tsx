"use client"

import { Button } from "@/components/ui/button"
import { Shield, Menu, Globe } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavLink } from "./nav-link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/contexts/language-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()

  const navItems = [
    { href: "/", label: language === "en" ? "Home" : "Accueil" },
    { href: "/about", label: language === "en" ? "About" : "À propos" },
    { href: "/skills", label: language === "en" ? "Skills" : "Compétences" },
    { href: "/projects", label: language === "en" ? "Projects" : "Projets" },
    { href: "/contact", label: language === "en" ? "Contact" : "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-green-900/30 backdrop-blur-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-green-400">
          <Shield className="w-6 h-6" />
          <span className="font-mono text-lg">JSG</span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5 text-green-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("fr")}>Français</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-black/95 border-green-900/30">
            <SheetHeader>
              <SheetTitle className="text-green-400 font-mono">
                {language === "en" ? "Navigation" : "Navigation"}
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 text-sm hover:text-green-400 transition-colors ${
                    pathname === item.href ? "text-green-400" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 text-sm">
                <Globe className="h-4 w-4 text-green-400" />
                <button onClick={() => setLanguage("en")} className="hover:text-green-400">
                  English
                </button>
                <span className="text-green-400">|</span>
                <button onClick={() => setLanguage("fr")} className="hover:text-green-400">
                  Français
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

