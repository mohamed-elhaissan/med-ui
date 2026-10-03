"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { COMPONENT_LINKS, DOCS_SECTIONS, NEW_COMPONENTS, type DocLink } from "@/lib/docs"

const NEW_HREFS = NEW_COMPONENTS.map((name) => `/docs/components/${name}`)

export function DocsSidebar() {
  const pathname = usePathname()
  const contentRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    const container = contentRef.current
    const active = container?.querySelector<HTMLElement>('[data-active="true"]:not([data-section])')
    if (!container || !active) return
    const containerRect = container.getBoundingClientRect()
    const activeRect = active.getBoundingClientRect()
    if (activeRect.top < containerRect.top || activeRect.bottom > containerRect.bottom) {
      container.scrollTop +=
        activeRect.top - containerRect.top - (container.clientHeight - activeRect.height) / 2
    }
  }, [pathname])

  return (
    <aside className="sticky top-[calc(var(--header-height)+0.6rem)] z-30 hidden h-[calc(100svh-var(--header-height)-0.6rem)] w-(--sidebar-width) overflow-hidden overscroll-none lg:flex">
      <div className="absolute top-12 right-2 bottom-0 w-px bg-[linear-gradient(to_bottom,transparent_0%,var(--border)_10%,var(--border)_90%,transparent_100%)]" />
      <div
        ref={contentRef}
        className="no-scrollbar scroll-fade flex w-56 flex-col overflow-x-hidden overflow-y-auto pb-12 pl-2.5"
      >
        <SidebarGroup label="Sections" className="pt-12">
          {DOCS_SECTIONS.map((link) => (
            <SidebarLink
              key={link.href}
              link={link}
              section
              active={link.href === "/docs" ? pathname === "/docs" : pathname.startsWith(link.href)}
            />
          ))}
        </SidebarGroup>
        <SidebarGroup label="Components">
          {COMPONENT_LINKS.map((link) => (
            <SidebarLink
              key={link.href}
              link={link}
              active={pathname === link.href}
              isNew={NEW_HREFS.includes(link.href)}
            />
          ))}
        </SidebarGroup>
      </div>
    </aside>
  )
}

function SidebarGroup({
  label,
  className,
  children,
}: {
  label: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={`flex flex-col p-2 ${className ?? ""}`}>
      <p className="flex h-8 shrink-0 items-center px-2 text-sm font-semibold text-foreground">
        {label}
      </p>
      <ul className="flex flex-col gap-0.5 pr-4">{children}</ul>
    </div>
  )
}

function SidebarLink({
  link,
  active,
  section,
  isNew,
}: {
  link: DocLink
  active: boolean
  section?: boolean
  isNew?: boolean
}) {
  return (
    <li>
      <Link
        href={link.href}
        data-active={active}
        data-section={section || undefined}
        className="flex h-8 w-full items-center gap-2 rounded-md px-2 text-[0.85rem] text-muted-foreground transition-colors hover:text-foreground data-[active=true]:bg-primary/10 data-[active=true]:font-medium data-[active=true]:text-primary"
      >
        {link.name}
        {isNew && <span className="size-2 rounded-full bg-primary" title="New" />}
      </Link>
    </li>
  )
}
