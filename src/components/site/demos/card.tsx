"use client"

// Badge renders through Base UI's useRender (client-only hooks), so this demo
// must be a client component.
import { CheckIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const features = [
  "Unlimited projects and preview deployments",
  "Role-based access for up to 50 seats",
  "Usage analytics with 90-day history",
  "Priority email support",
]

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Pro</CardTitle>
        <CardDescription>
          For growing teams that need more room to build.
        </CardDescription>
        <CardAction>
          <Badge variant="secondary">Most popular</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="flex items-baseline gap-1">
          <span className="font-heading text-3xl font-semibold tracking-tight">
            $24
          </span>
          <span className="text-muted-foreground">per seat / month</span>
        </p>
        <ul className="flex flex-col gap-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Upgrade to Pro</Button>
        <p className="text-xs text-muted-foreground">
          14-day free trial. Cancel anytime.
        </p>
      </CardFooter>
    </Card>
  )
}
