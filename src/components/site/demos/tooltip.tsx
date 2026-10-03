"use client"

import {
  ArchiveIcon,
  CopyIcon,
  ShareIcon,
  SquarePenIcon,
  Trash2Icon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const actions = [
  { label: "Edit", shortcut: "E", icon: SquarePenIcon },
  { label: "Duplicate", shortcut: "D", icon: CopyIcon },
  { label: "Share", shortcut: "S", icon: ShareIcon },
  { label: "Archive", shortcut: "A", icon: ArchiveIcon },
  { label: "Delete", shortcut: "⌫", icon: Trash2Icon },
]

// The provider is optional in Base UI, but it shares the open delay so moving
// between adjacent buttons switches tooltips instantly.
export function TooltipDemo() {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-1 rounded-xl border p-1 shadow-xs">
        {actions.map(({ label, shortcut, icon: Icon }) => (
          <Tooltip key={label}>
            <TooltipTrigger
              render={<Button variant="ghost" size="icon" aria-label={label} />}
            >
              <Icon />
            </TooltipTrigger>
            <TooltipContent>
              {label}
              <Kbd>{shortcut}</Kbd>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
