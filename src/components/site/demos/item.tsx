"use client"

import { BadgeCheck, ChevronRight, ShieldCheck } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export function ItemDemo() {
  return (
    <ItemGroup className="w-full max-w-md">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldCheck />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Two-factor authentication</ItemTitle>
          <ItemDescription>
            Add an extra layer of security when signing in on new devices.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Enable
          </Button>
        </ItemActions>
      </Item>

      <Item variant="outline">
        <ItemMedia>
          <Avatar>
            <AvatarFallback>MR</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Maya Robinson</ItemTitle>
          <ItemDescription>Invited you to edit Q3 Launch Plan</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="ghost">
            Decline
          </Button>
          <Button size="sm">Accept</Button>
        </ItemActions>
      </Item>

      <Item variant="muted" size="sm" render={<a href="#item" />}>
        <ItemMedia variant="icon">
          <BadgeCheck />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Your profile has been verified.</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRight className="size-4 text-muted-foreground" />
        </ItemActions>
      </Item>
    </ItemGroup>
  )
}
