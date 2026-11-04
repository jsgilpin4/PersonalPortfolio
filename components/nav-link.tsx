"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "relative px-4 py-2 text-sm transition-colors hover:text-green-400",
        isActive && "text-green-400",
        "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all hover:after:w-full",
      )}
    >
      {children}
    </Link>
  )
}

