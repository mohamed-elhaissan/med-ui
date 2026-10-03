import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const releases = [
  { version: "v2.4.0", date: "Sep 30", note: "Keyboard shortcuts for every menu action" },
  { version: "v2.3.2", date: "Sep 18", note: "Fixed focus loss when closing nested dialogs" },
  { version: "v2.3.1", date: "Sep 09", note: "Faster cold starts on large workspaces" },
  { version: "v2.3.0", date: "Aug 27", note: "New calendar view with drag to reschedule" },
  { version: "v2.2.4", date: "Aug 12", note: "Improved contrast in dark mode tables" },
  { version: "v2.2.3", date: "Aug 01", note: "CSV export now respects active filters" },
  { version: "v2.2.0", date: "Jul 15", note: "Comments and mentions on any record" },
  { version: "v2.1.1", date: "Jun 28", note: "Patched a race condition in autosave" },
  { version: "v2.1.0", date: "Jun 10", note: "Shared views with link permissions" },
  { version: "v2.0.0", date: "May 22", note: "Rebuilt editor with real-time collaboration" },
]

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-full max-w-sm rounded-xl border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Release notes</h4>
        {releases.map((release, index) => (
          <React.Fragment key={release.version}>
            {index > 0 && <Separator className="my-3" />}
            <div className="flex flex-col gap-1 text-sm">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium">
                  {release.version}
                </span>
                <span className="text-xs text-muted-foreground">
                  {release.date}
                </span>
              </div>
              <p className="text-muted-foreground">{release.note}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}
