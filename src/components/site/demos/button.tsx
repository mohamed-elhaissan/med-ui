import { ArrowRight, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="sm">
          <Plus data-icon="inline-start" />
          New project
        </Button>
        <Button variant="outline">
          Continue
          <ArrowRight data-icon="inline-end" />
        </Button>
        <Button size="icon" variant="secondary" aria-label="Add">
          <Plus />
        </Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  )
}
