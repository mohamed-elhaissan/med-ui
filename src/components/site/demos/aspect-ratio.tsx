import { PlayIcon } from "lucide-react"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioDemo() {
  return (
    <figure className="w-full max-w-sm">
      <AspectRatio
        ratio={16 / 9}
        className="overflow-hidden rounded-xl bg-linear-to-br from-muted via-accent to-secondary ring-1 ring-foreground/10"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur">
            <PlayIcon className="size-5 translate-x-px" />
          </span>
        </div>
        <span className="absolute right-3 bottom-3 rounded-md bg-background/80 px-1.5 py-0.5 font-mono text-xs text-foreground tabular-nums backdrop-blur">
          4:32
        </span>
      </AspectRatio>
      <figcaption className="mt-3 space-y-0.5">
        <p className="text-sm font-medium">Getting started in five minutes</p>
        <p className="text-sm text-muted-foreground">
          16:9 &middot; Product walkthrough
        </p>
      </figcaption>
    </figure>
  )
}
