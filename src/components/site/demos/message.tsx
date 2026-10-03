"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/components/ui/message"

export function MessageDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-8">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>OR</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>
            <span>Olivia Rose</span>
            <span className="ml-auto font-normal">9:41 AM</span>
          </MessageHeader>
          <BubbleGroup>
            <Bubble variant="muted">
              <BubbleContent>The invoice retry finished overnight.</BubbleContent>
            </Bubble>
            <Bubble variant="muted">
              <BubbleContent>
                All 312 missing invoices are included in the export now.
              </BubbleContent>
            </Bubble>
          </BubbleGroup>
        </MessageContent>
      </Message>

      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>
              Amazing. Can we send the customer update before end of day?
            </BubbleContent>
          </Bubble>
          <MessageFooter>Read 9:43 AM</MessageFooter>
        </MessageContent>
      </Message>

      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>OR</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              Drafting it now. I&apos;ll share it with you by 3 PM.
            </BubbleContent>
            <BubbleReactions>👍 1</BubbleReactions>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  )
}
