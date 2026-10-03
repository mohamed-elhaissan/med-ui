"use client"

import { Button } from "@/components/ui/button"
import { Toaster, toast } from "@/components/ui/toast"

function showUndoToast() {
  const id = toast.add({
    title: "Message archived",
    description: "You can find it later in the Archive folder.",
    actionProps: {
      children: "Undo",
      onClick() {
        toast.close(id)
        toast.add({ type: "info", description: "Message moved back to Inbox." })
      },
    },
  })
}

function showPromiseToast() {
  toast.promise(
    new Promise<{ count: number }>((resolve) => {
      window.setTimeout(() => resolve({ count: 24 }), 2000)
    }),
    {
      loading: "Uploading photos…",
      success: (data) => `${data.count} photos uploaded.`,
      error: "Upload failed. Please try again.",
    }
  )
}

// Base UI toasts need a provider + viewport. The app layout mounts none, so the
// demo renders its own Toaster (independent of the sonner Toaster).
export function ToastDemo() {
  return (
    <Toaster>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="outline" onClick={showUndoToast}>
          Archive message
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              type: "success",
              title: "Payment received",
              description: "Invoice INV-1042 was paid in full.",
            })
          }
        >
          Success
        </Button>
        <Button variant="outline" onClick={showPromiseToast}>
          Upload photos
        </Button>
      </div>
    </Toaster>
  )
}
