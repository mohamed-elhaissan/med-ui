"use client"

import { useState } from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const STEP = 500

export function DrawerDemo() {
  const [goal, setGoal] = useState(8000)

  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        Set daily goal
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>Daily step goal</DrawerTitle>
            <DrawerDescription>
              Pick a target you can hit most days of the week.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex items-center justify-center gap-6 p-6">
            <Button
              variant="outline"
              size="icon-lg"
              className="rounded-full"
              aria-label="Decrease goal"
              disabled={goal <= 2000}
              onClick={() => setGoal((value) => value - STEP)}
            >
              <MinusIcon />
            </Button>
            <div className="flex w-36 flex-col items-center">
              <span className="text-5xl font-semibold tracking-tight tabular-nums">
                {goal.toLocaleString("en-US")}
              </span>
              <span className="text-xs text-muted-foreground uppercase">
                Steps / day
              </span>
            </div>
            <Button
              variant="outline"
              size="icon-lg"
              className="rounded-full"
              aria-label="Increase goal"
              disabled={goal >= 20000}
              onClick={() => setGoal((value) => value + STEP)}
            >
              <PlusIcon />
            </Button>
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button />}>Save goal</DrawerClose>
            <DrawerClose render={<Button variant="outline" />}>
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
