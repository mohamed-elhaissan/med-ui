"use client"

import * as React from "react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface FrameworkOption {
  id: string
  name: string
}

const FrameworkContext = React.createContext<{
  framework: string
  setFramework: (id: string) => void
  options: FrameworkOption[]
} | null>(null)

function useFramework() {
  const context = React.useContext(FrameworkContext)
  if (!context) throw new Error("useFramework must be used inside FrameworkProvider")
  return context
}

export function FrameworkProvider({
  options,
  children,
}: {
  options: FrameworkOption[]
  children: React.ReactNode
}) {
  const [framework, setFramework] = React.useState(options[0].id)
  return (
    <FrameworkContext.Provider value={{ framework, setFramework, options }}>
      {children}
    </FrameworkContext.Provider>
  )
}

export function FrameworkPicker() {
  const { framework, setFramework, options } = useFramework()
  return (
    <Tabs value={framework} onValueChange={(value) => setFramework(String(value))} className="mt-6">
      <TabsList variant="line" className="h-auto flex-wrap justify-start">
        {options.map((option) => (
          <TabsTrigger key={option.id} value={option.id} className="flex-none">
            {option.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}

export function FrameworkContent({ variants }: { variants: Record<string, React.ReactNode> }) {
  const { framework, options } = useFramework()
  const name = options.find((option) => option.id === framework)?.name

  return (
    <div className="mt-6 flex flex-col gap-4">
      <p className="text-xs text-muted-foreground">
        Showing <span className="font-medium text-foreground">{name}</span> ·{" "}
        <a href="#create-project" className="text-primary hover:underline">
          change framework
        </a>
      </p>
      {variants[framework]}
    </div>
  )
}
