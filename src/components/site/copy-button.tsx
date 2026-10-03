"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const ICON_TRANSITION =
  "absolute inset-0 size-4 transition-all duration-300 ease-out motion-reduce:transition-none"

export function AnimatedCopyIcon({ copied }: { copied: boolean }) {
  return (
    <span className="relative size-4">
      <CopyIcon
        className={cn(
          ICON_TRANSITION,
          copied ? "scale-50 -rotate-45 opacity-0 blur-[2px]" : "scale-100 opacity-100"
        )}
      />
      <CheckIcon
        className={cn(
          ICON_TRANSITION,
          "text-emerald-500 dark:text-emerald-400",
          copied ? "scale-100 rotate-0 opacity-100" : "scale-50 rotate-45 opacity-0 blur-[2px]"
        )}
      />
    </span>
  )
}

export function CopyButton({
  value,
  label,
  className,
}: {
  value: string
  label?: string
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      toast.error("Couldn't copy. Your browser blocked clipboard access.")
      return
    }
    setCopied(true)
    toast.success(label ? `${label} copied` : "Copied to clipboard")
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={copy}
      className={cn(
        "size-7 text-muted-foreground transition-transform hover:text-foreground active:scale-90",
        className
      )}
    >
      <AnimatedCopyIcon copied={copied} />
      <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
    </Button>
  )
}
