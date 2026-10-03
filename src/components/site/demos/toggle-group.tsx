"use client"

import * as React from "react"
import { LayoutGridIcon, ListIcon } from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const ranges = [
  { value: "7d", label: "7 days" },
  { value: "30d", label: "30 days" },
  { value: "90d", label: "90 days" },
  { value: "12m", label: "12 months" },
]

export function ToggleGroupDemo() {
  const [range, setRange] = React.useState("30d")

  return (
    <div className="flex flex-col items-center gap-5">
      <ToggleGroup
        variant="outline"
        spacing={0}
        value={[range]}
        onValueChange={(next) => {
          // Keep one range selected: ignore clicks that would clear it.
          if (next[0]) setRange(next[0])
        }}
        aria-label="Reporting period"
      >
        {ranges.map((item) => (
          <ToggleGroupItem key={item.value} value={item.value}>
            {item.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <p className="text-sm text-muted-foreground">
        Showing revenue for the last{" "}
        {ranges.find((item) => item.value === range)?.label}
      </p>
      <ToggleGroup defaultValue={["grid"]} spacing={1} aria-label="Layout">
        <ToggleGroupItem value="grid" aria-label="Grid view">
          <LayoutGridIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="list" aria-label="List view">
          <ListIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
