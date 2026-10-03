"use client"

import * as React from "react"
import { ArrowUp } from "lucide-react"

import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Marker, MarkerContent } from "@/components/ui/marker"
import { Message, MessageContent } from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"

interface ChatMessage {
  id: string
  role: "user" | "agent"
  text: string
}

const initialMessages: ChatMessage[] = [
  { id: "1", role: "user", text: "Hi! I was charged twice for my March invoice." },
  { id: "2", role: "agent", text: "Sorry about that. Could you share the last four digits of the card?" },
  { id: "3", role: "user", text: "Sure, it ends in 4821." },
  { id: "4", role: "agent", text: "Thanks. I can see two charges of $49.00 on March 3rd." },
  { id: "5", role: "agent", text: "The second one was a retry that should have been voided. I've refunded it just now." },
  { id: "6", role: "user", text: "Great, how long until it shows up?" },
  { id: "7", role: "agent", text: "Refunds usually land within 3 to 5 business days, depending on your bank." },
  { id: "8", role: "user", text: "Perfect, thanks for the quick help!" },
]

export function MessageScrollerDemo() {
  const [messages, setMessages] = React.useState(initialMessages)
  const [draft, setDraft] = React.useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = draft.trim()
    if (!text) return
    const id = String(messages.length + 1)
    setMessages((prev) => [
      ...prev,
      { id, role: "user", text },
      { id: `${id}-reply`, role: "agent", text: "Got it! A teammate will follow up by email shortly." },
    ])
    setDraft("")
  }

  return (
    <div className="flex h-96 w-full max-w-md flex-col overflow-hidden rounded-xl border">
      <MessageScrollerProvider>
        <MessageScroller className="min-h-0 flex-1">
          <MessageScrollerViewport>
            <MessageScrollerContent className="gap-4 p-4">
              <MessageScrollerItem>
                <Marker variant="separator">
                  <MarkerContent>Today</MarkerContent>
                </Marker>
              </MessageScrollerItem>
              {messages.map((message) => (
                <MessageScrollerItem
                  key={message.id}
                  messageId={message.id}
                  scrollAnchor={message.role === "user"}
                >
                  <Message align={message.role === "user" ? "end" : "start"}>
                    <MessageContent>
                      <Bubble variant={message.role === "user" ? "default" : "muted"}>
                        <BubbleContent>{message.text}</BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
      <form onSubmit={handleSubmit} className="border-t p-3">
        <InputGroup>
          <InputGroupInput
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Write a reply..."
            aria-label="Message"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton type="submit" size="icon-xs" variant="default" aria-label="Send" disabled={!draft.trim()}>
              <ArrowUp />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </form>
    </div>
  )
}
