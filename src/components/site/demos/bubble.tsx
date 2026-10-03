"use client"

import { HeartIcon } from "lucide-react"

import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/bubble"

export function BubbleDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <p className="text-center text-xs text-muted-foreground">Today · 9:41 AM</p>
      <BubbleGroup>
        <Bubble variant="secondary">
          <BubbleContent>Hi Maya! Your order #4821 shipped this morning.</BubbleContent>
        </Bubble>
        <Bubble variant="secondary">
          <BubbleContent>
            It should arrive on Thursday. Want me to text you the tracking link?
          </BubbleContent>
        </Bubble>
      </BubbleGroup>
      <BubbleGroup>
        <Bubble align="end">
          <BubbleContent>Yes please, that would be perfect.</BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>Also, can I change the delivery address?</BubbleContent>
          <BubbleReactions align="start" role="img" aria-label="Reaction: love">
            <HeartIcon className="size-3.5 fill-current text-destructive" />
          </BubbleReactions>
        </Bubble>
      </BubbleGroup>
      <BubbleGroup>
        <Bubble variant="secondary">
          <BubbleContent>
            Done — the tracking link is on its way. You can update the address
            until 6 PM today from your order page.
          </BubbleContent>
        </Bubble>
      </BubbleGroup>
    </div>
  )
}
