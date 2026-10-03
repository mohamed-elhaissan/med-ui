"use client"

import * as React from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { COMPONENT_LINKS, DOCS_SECTIONS } from "@/lib/docs"
import { cn } from "@/lib/utils"

export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false)

  const groups = [
    { label: "Sections", links: DOCS_SECTIONS },
    { label: "Components", links: COMPONENT_LINKS },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" className={cn("size-8", className)} />}
      >
        <MenuIcon />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 gap-0 p-0">
        <SheetTitle className="px-6 pt-5 pb-3 text-sm">Menu</SheetTitle>
        <div className="no-scrollbar flex flex-col gap-6 overflow-y-auto px-4 pb-8">
          {groups.map((group) => (
            <div key={group.label} className="flex flex-col gap-0.5">
              <p className="px-2 pb-1 text-xs font-medium text-muted-foreground">{group.label}</p>
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
