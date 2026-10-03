import { ArrowUp, Paperclip, Search } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function InputGroupDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search docs..." aria-label="Search docs" />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="your-store" aria-label="Store URL" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText>.shop.app</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupTextarea
          placeholder="Ask, search, or make anything..."
          aria-label="Message"
          className="min-h-16"
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton size="icon-xs" variant="outline" aria-label="Attach file">
            <Paperclip />
          </InputGroupButton>
          <InputGroupText className="ml-auto text-xs">
            <Kbd>Enter</Kbd> to send
          </InputGroupText>
          <InputGroupButton size="icon-xs" variant="default" aria-label="Send">
            <ArrowUp />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
