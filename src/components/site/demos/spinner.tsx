"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-6">
      <div className="flex w-full items-center gap-3 rounded-xl border p-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
          <Spinner />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium">
            Processing payment
          </span>
          <span className="truncate text-xs text-muted-foreground">
            This usually takes a few seconds
          </span>
        </div>
        <span className="text-sm text-muted-foreground tabular-nums">
          $129.00
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="sm" disabled>
          <Spinner data-icon="inline-start" />
          Saving…
        </Button>
        <Button size="sm" variant="outline" disabled>
          <Spinner data-icon="inline-start" />
          Please wait
        </Button>
        <Badge variant="secondary">
          <Spinner data-icon="inline-start" />
          Syncing
        </Badge>
      </div>
    </div>
  )
}
