"use client"

import * as React from "react"
import { differenceInCalendarDays, format } from "date-fns"
import { type DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function CalendarDemo() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2026, 9, 12),
    to: new Date(2026, 9, 17),
  })

  const nights =
    range?.from && range.to
      ? differenceInCalendarDays(range.to, range.from)
      : 0

  return (
    <Card className="mx-auto w-fit">
      <CardContent className="px-2">
        <Calendar
          mode="range"
          numberOfMonths={2}
          defaultMonth={new Date(2026, 9, 1)}
          selected={range}
          onSelect={setRange}
        />
      </CardContent>
      <CardFooter className="justify-between gap-4 text-sm">
        <span className="text-muted-foreground">
          {range?.from
            ? `${format(range.from, "MMM d")} – ${
                range.to ? format(range.to, "MMM d") : "Select check-out"
              }`
            : "Select check-in"}
        </span>
        <span className="font-medium tabular-nums">
          {nights > 0 ? `${nights} ${nights === 1 ? "night" : "nights"}` : "—"}
        </span>
      </CardFooter>
    </Card>
  )
}
