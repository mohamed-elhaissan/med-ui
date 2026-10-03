"use client"

import { ChevronsUpDownIcon, GitBranchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

const branches = ["feature/date-picker", "fix/menu-focus-trap", "chore/deps"]

export function CollapsibleDemo() {
  return (
    <Collapsible className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between gap-4 px-1">
        <h4 className="text-sm font-medium">4 open branches</h4>
        <CollapsibleTrigger
          render={<Button variant="ghost" size="icon-sm" />}
          aria-label="Toggle branches"
        >
          <ChevronsUpDownIcon />
        </CollapsibleTrigger>
      </div>
      <BranchRow name="main" />
      <CollapsibleContent className="flex flex-col gap-2">
        {branches.map((branch) => (
          <BranchRow key={branch} name={branch} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}

function BranchRow({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border px-3 py-2 font-mono text-sm">
      <GitBranchIcon className="size-4 text-muted-foreground" />
      {name}
    </div>
  )
}
