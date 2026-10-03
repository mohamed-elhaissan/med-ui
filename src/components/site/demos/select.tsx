import * as React from "react"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const timezones = [
  {
    region: "North America",
    zones: [
      { value: "america/new_york", label: "Eastern Time (ET)" },
      { value: "america/chicago", label: "Central Time (CT)" },
      { value: "america/los_angeles", label: "Pacific Time (PT)" },
    ],
  },
  {
    region: "Europe",
    zones: [
      { value: "europe/london", label: "Greenwich Mean Time (GMT)" },
      { value: "europe/paris", label: "Central European Time (CET)" },
    ],
  },
  {
    region: "Asia",
    zones: [
      { value: "asia/dubai", label: "Gulf Standard Time (GST)" },
      { value: "asia/tokyo", label: "Japan Standard Time (JST)" },
    ],
  },
]

const items = timezones.flatMap((group) => group.zones)

export function SelectDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label htmlFor="timezone">Timezone</Label>
      <Select items={items}>
        <SelectTrigger id="timezone" className="w-full">
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent>
          {timezones.map((group, index) => (
            <React.Fragment key={group.region}>
              {index > 0 && <SelectSeparator />}
              <SelectGroup>
                <SelectLabel>{group.region}</SelectLabel>
                {group.zones.map((zone) => (
                  <SelectItem key={zone.value} value={zone.value}>
                    {zone.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </React.Fragment>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
