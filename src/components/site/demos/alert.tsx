import { CircleAlertIcon, SparklesIcon } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export function AlertDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Alert>
        <SparklesIcon />
        <AlertTitle>Your trial ends in 3 days</AlertTitle>
        <AlertDescription>
          Upgrade now to keep unlimited projects and priority support.
        </AlertDescription>
        <AlertAction>
          <Button size="xs">Upgrade</Button>
        </AlertAction>
      </Alert>
      <Alert variant="destructive">
        <CircleAlertIcon />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>
          We couldn&apos;t charge the card ending in 4242. Update your billing
          details to avoid an interruption.
        </AlertDescription>
      </Alert>
    </div>
  )
}
