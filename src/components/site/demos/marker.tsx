"use client"

import { Check, FileText, GitBranch, Search } from "lucide-react"

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import { Spinner } from "@/components/ui/spinner"

export function MarkerDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Marker className="justify-center">
        <MarkerContent>
          <span className="font-medium text-foreground">Olivia</span> joined the
          conversation
        </MarkerContent>
      </Marker>

      <div className="flex flex-col gap-3">
        <Marker variant="border">
          <MarkerIcon>
            <GitBranch />
          </MarkerIcon>
          <MarkerContent>Switched to release/2.4</MarkerContent>
        </Marker>
        <Marker variant="border">
          <MarkerIcon>
            <Search />
          </MarkerIcon>
          <MarkerContent>Reviewed 8 related files</MarkerContent>
        </Marker>
        <Marker variant="border">
          <MarkerIcon>
            <FileText />
          </MarkerIcon>
          <MarkerContent>
            Opened <a href="#marker">implementation notes</a>
          </MarkerContent>
        </Marker>
      </div>

      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent>Running the test suite...</MarkerContent>
      </Marker>

      <Marker variant="separator">
        <MarkerIcon>
          <Check />
        </MarkerIcon>
        <MarkerContent>Worked for 42s</MarkerContent>
      </Marker>
    </div>
  )
}
