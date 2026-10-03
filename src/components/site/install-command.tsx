"use client"

import * as React from "react"
import { TerminalIcon } from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CopyButton } from "@/components/site/copy-button"
import { CLI } from "@/lib/site"

const MANAGERS = {
  pnpm: `pnpm dlx ${CLI}`,
  npm: `npx ${CLI}`,
  yarn: `yarn ${CLI}`,
  bun: `bunx --bun ${CLI}`,
} as const

type Manager = keyof typeof MANAGERS

function wordColor(word: string, index: number) {
  if (index === 0) return "text-(--code-keyword)"
  if (word.startsWith("shadcn")) return "text-(--code-function)"
  if (word.startsWith("-")) return "text-(--code-punctuation)"
  if (word === "add" || word === "init" || word === "dlx") return "text-foreground"
  return "text-(--code-string)"
}

export function InstallCommand({
  target = "",
  subcommand = "add",
  label = "Install command",
}: {
  target?: string
  subcommand?: "add" | "init"
  label?: string
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
      <CopyButton value={command} label={label} className="absolute top-1.5 right-1.5" />
      <pre className="no-scrollbar overflow-x-auto px-4 py-3.5 font-mono text-[0.8rem]">
        <code>
          {command.split(" ").map((word, index) => (
            <span key={index} className={wordColor(word, index)}>
              {index > 0 && " "}
              {word}
            </span>
          ))}
        </code>
      </pre>
    </figure>
  )
}
