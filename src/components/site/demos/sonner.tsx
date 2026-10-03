"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"

function exportReport() {
  return new Promise<{ name: string }>((resolve) => {
    window.setTimeout(() => resolve({ name: "Q3 revenue report" }), 2000)
  })
}

export function SonnerDemo() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button
          variant="outline"
          onClick={() =>
            toast("Meeting scheduled", {
              description: "Thursday, October 9 at 2:30 PM",
              action: {
                label: "Undo",
                onClick: () => toast("Meeting removed from your calendar"),
              },
            })
          }
        >
          Show toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.success("Changes saved", {
              description: "Your profile is up to date.",
            })
          }
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.promise(exportReport(), {
              loading: "Exporting report…",
              success: (data) => `${data.name} is ready to download`,
              error: "Export failed. Please try again.",
            })
          }
        >
          Promise
        </Button>
      </div>
      {/* Mounted here because the app layout has no global Toaster. */}
      <Toaster position="bottom-center" />
    </>
  )
}
