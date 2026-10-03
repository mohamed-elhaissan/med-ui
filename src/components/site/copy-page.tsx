"use client"

import * as React from "react"
import { CheckIcon, ChevronDownIcon, CopyIcon, LinkIcon } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function CopyPage() {
  const [copied, setCopied] = React.useState(false)

  async function copy(text: string, message: string) {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      toast.error("Couldn't copy. Your browser blocked clipboard access.")
      return
    }
    setCopied(true)
    toast.success(message)
    setTimeout(() => setCopied(false), 2000)
  }

  function copyPage() {
    const page = document.querySelector<HTMLElement>("[data-slot=docs-main]")
    if (page) copy(page.innerText, "Page copied to clipboard")
  }

  return (
    <div className="flex rounded-lg bg-secondary">
      <Button variant="secondary" size="sm" className="h-7 text-[0.8rem] shadow-none" onClick={copyPage}>
        {copied ? <CheckIcon /> : <CopyIcon />}
        Copy Page
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="secondary" size="icon" className="-ml-0.5 size-7 shadow-none" />}
        >
          <ChevronDownIcon />
          <span className="sr-only">More copy options</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuItem onClick={copyPage}>
            <CopyIcon />
            Copy page text
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => copy(window.location.href, "Link copied to clipboard")}>
            <LinkIcon />
            Copy page URL
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
