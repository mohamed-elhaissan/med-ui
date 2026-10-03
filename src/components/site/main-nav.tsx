"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MainNav({
  items,
  className,
}: {
  items: { href: string; label: string }[]
  className?: string
}) {
  const pathname = usePathname()

  return (
    <nav className={cn("items-center", className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          data-active={pathname === item.href}
          className={buttonVariants({ variant: "ghost", size: "sm", className: "px-2.5" })}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
