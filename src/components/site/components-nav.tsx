"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  title: string
}

export function ComponentsNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-0.5">
      <NavLink href="/components" active={pathname === "/components"}>
        All components
      </NavLink>
      <p className="mt-6 mb-2 px-2 text-xs text-muted-foreground">Components</p>
      {items.map((item) => (
        <NavLink
          key={item.name}
          href={`/components/${item.name}`}
          active={pathname === `/components/${item.name}`}
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  )
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-muted",
        active ? "bg-muted text-foreground" : "text-foreground/80"
      )}
    >
      {children}
    </Link>
  )
}
