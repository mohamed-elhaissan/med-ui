"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { ComponentIcon, FileTextIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { COMPONENT_LINKS, DOCS_SECTIONS, type DocLink } from "@/lib/docs"

export function CommandMenu() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement
      const typing = target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
      if ((event.key === "k" && (event.metaKey || event.ctrlKey)) || (event.key === "/" && !typing)) {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  function go(link: DocLink) {
    setOpen(false)
    router.push(link.href)
  }

  return (
    <>
      <Button
        variant="secondary"
        onClick={() => setOpen(true)}
        className="relative h-8 w-full justify-start pl-3 font-normal text-muted-foreground shadow-none sm:pr-12 md:w-48 lg:w-56 xl:w-64"
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <KbdGroup className="absolute top-1.5 right-1.5 hidden sm:flex">
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} title="Search documentation">
        <Command>
          <CommandInput placeholder="Search documentation..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Pages">
              {DOCS_SECTIONS.map((link) => (
                <CommandItem key={link.href} value={link.name} onSelect={() => go(link)}>
                  <FileTextIcon />
                  {link.name}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Components">
              {COMPONENT_LINKS.map((link) => (
                <CommandItem key={link.href} value={link.name} onSelect={() => go(link)}>
                  <ComponentIcon />
                  {link.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
