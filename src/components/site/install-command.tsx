"use client"

import * as React from "react"
import { TerminalIcon } from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyButton } from "@/components/site/copy-button"

const MANAGERS = {
  pnpm: "pnpm dlx shadcn@latest",
  npm: "npx shadcn@latest",
  yarn: "yarn shadcn@latest",
  bun: "bunx --bun shadcn@latest",
} as const

type Manager = keyof typeof MANAGERS

export function InstallCommand({
  target = "",
  subcommand = "add",
}: {
  target?: string
  subcommand?: "add" | "init"
}) {
  const [manager, setManager] = React.useState<Manager>("pnpm")
  const command = `${MANAGERS[manager]} ${subcommand} ${target}`.trim()

  return (
    <figure className="relative overflow-hidden rounded-xl border bg-card">
      <Tabs value={manager} onValueChange={(value) => setManager(value as Manager)}>
        <div className="flex h-10 items-center gap-2 border-b px-3">
          <TerminalIcon className="size-4 text-muted-foreground" />
          <TabsList variant="line" className="h-8">
            {Object.keys(MANAGERS).map((key) => (
              <TabsTrigger key={key} value={key} className="font-mono text-[0.8rem]">
                {key}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </Tabs>
      <CopyButton value={command} className="absolute top-1.5 right-1.5" />
      <pre className="no-scrollbar overflow-x-auto px-4 py-3.5 font-mono text-[0.8rem]">
        <code>
          <span className="text-primary">{MANAGERS[manager].split(" ")[0]}</span>
          {command.slice(MANAGERS[manager].split(" ")[0].length)}
        </code>
      </pre>
    </figure>
  )
}
