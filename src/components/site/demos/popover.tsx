"use client"

import * as React from "react"
import { Check, Copy, Link } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

const SHARE_URL = "https://acme.app/share/q3-roadmap"

export function PopoverDemo() {
  const [copied, setCopied] = React.useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(SHARE_URL)
    } catch {
      // Clipboard access can be blocked; the link stays selectable in the input.
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        <Link data-icon="inline-start" />
        Share
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>Share this roadmap</PopoverTitle>
          <PopoverDescription>
            Anyone with the link can view. Only editors can make changes.
          </PopoverDescription>
        </PopoverHeader>
        <div className="flex items-center gap-2">
          <Input
            readOnly
            aria-label="Share link"
            defaultValue={SHARE_URL}
          />
          <Button
            size="icon"
            variant="secondary"
            aria-label={copied ? "Copied" : "Copy link"}
            onClick={handleCopy}
          >
            {copied ? <Check /> : <Copy />}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
