"use client"

import { CalendarDaysIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HoverCardDemo() {
  return (
    <div className="flex items-center gap-1 text-sm text-muted-foreground">
      Maintained by
      <HoverCard>
        <HoverCardTrigger
          delay={150}
          closeDelay={100}
          render={<Button variant="link" className="h-auto px-0" />}
        >
          @acme-design
        </HoverCardTrigger>
        <HoverCardContent className="w-80 p-4">
          <div className="flex gap-4">
            <Avatar size="lg">
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <h4 className="font-medium">Acme Design</h4>
              <p className="text-muted-foreground">
                The design system team behind Acme&apos;s web and mobile apps.
              </p>
              <div className="flex items-center gap-1.5 pt-1 text-xs text-muted-foreground">
                <CalendarDaysIcon className="size-3.5" />
                Joined March 2024
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
