import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid size-6 place-items-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
            i
          </span>
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-1">
          <Link href="/components" className={buttonVariants({ variant: "ghost", size: "sm" })}>
            Components
          </Link>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
