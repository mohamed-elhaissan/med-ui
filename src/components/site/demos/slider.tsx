"use client"

import * as React from "react"

import { Slider } from "@/components/ui/slider"

const MIN_PRICE = 0
const MAX_PRICE = 600

export function SliderDemo() {
  const [range, setRange] = React.useState<number[]>([120, 420])

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <span id="slider-demo-price" className="text-sm font-medium">
          Price range
        </span>
        <span className="text-sm text-muted-foreground tabular-nums">
          ${range[0]} – ${range[1]}
        </span>
      </div>
      <Slider
        aria-labelledby="slider-demo-price"
        value={range}
        onValueChange={(value) =>
          setRange(typeof value === "number" ? [value] : [...value])
        }
        min={MIN_PRICE}
        max={MAX_PRICE}
        step={10}
        minStepsBetweenValues={5}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>${MIN_PRICE}</span>
        <span>${MAX_PRICE}+</span>
      </div>
    </div>
  )
}
