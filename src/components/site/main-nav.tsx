"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function isActive(pathname: string, href: string) {
  if (href === "/docs/components") return pathname.startsWith(href)
  if (href === "/docs") return pathname.startsWith("/docs") && !pathname.startsWith("/docs/components")
  return pathname === href
}

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
          data-active={isActive(pathname, item.href)}
          className={buttonVariants({
            variant: "ghost",
            size: "sm",
            className:
              "relative px-2.5 text-muted-foreground hover:bg-transparent data-[active=true]:text-foreground data-[active=true]:after:absolute data-[active=true]:after:inset-x-2.5 data-[active=true]:after:-bottom-[0.9rem] data-[active=true]:after:h-0.5 data-[active=true]:after:rounded-full data-[active=true]:after:bg-primary",
          })}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
