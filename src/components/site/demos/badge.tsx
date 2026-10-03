"use client"

// Badge renders through Base UI's useRender (client-only hooks), so this demo
// must be a client component.
import { ArrowUpRightIcon, BadgeCheckIcon, ClockIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Badge variant="secondary">
          <BadgeCheckIcon data-icon="inline-start" />
          Verified
        </Badge>
        <Badge variant="outline">
          <ClockIcon data-icon="inline-start" />
          Pending review
        </Badge>
        <Badge className="tabular-nums">12</Badge>
        <Badge variant="link" render={<a href="#" />}>
          Changelog
          <ArrowUpRightIcon data-icon="inline-end" />
        </Badge>
      </div>
    </div>
  )
}
