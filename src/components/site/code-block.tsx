"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CopyButton({ value, className }: { value: string; className?: string }) {
  const [copied, setCopied] = React.useState(false)

  async function copy() {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={copy}
      className={cn("size-7 text-muted-foreground hover:text-foreground", className)}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
      <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
    </Button>
  )
}

export function CodeBlock({
  code,
  title,
  className,
}: {
  code: string
  title?: string
  className?: string
}) {
  return (
    <figure className={cn("relative overflow-hidden rounded-xl border bg-card", className)}>
      {title && (
        <figcaption className="flex h-10 items-center border-b px-4 font-mono text-[0.8rem] text-muted-foreground">
          {title}
        </figcaption>
      )}
      <CopyButton value={code} className="absolute top-1.5 right-1.5 z-10" />
      <pre className="no-scrollbar max-h-[450px] overflow-auto px-4 py-3.5 pr-12 font-mono text-[0.8rem] leading-relaxed">
        <code>{code}</code>
      </pre>
    </figure>
  )
}
