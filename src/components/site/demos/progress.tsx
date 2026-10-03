import { FileArchive, FileImage, FileText } from "lucide-react"

import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"

const uploads = [
  { name: "brand-guidelines.pdf", size: "4.2 MB", value: 100, icon: FileText },
  { name: "hero-photo.png", size: "8.7 MB", value: 64, icon: FileImage },
  { name: "assets-export.zip", size: "126 MB", value: 18, icon: FileArchive },
]

export function ProgressDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-5">
      <div className="flex items-baseline justify-between">
        <h3 className="text-sm font-medium">Uploading 3 files</h3>
        <span className="text-xs text-muted-foreground">About 2 min left</span>
      </div>
      {uploads.map((file) => (
        <div key={file.name} className="flex items-start gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
            <file.icon className="size-4" />
          </div>
          <Progress value={file.value} className="min-w-0 flex-1 gap-x-3 gap-y-2">
            <ProgressLabel className="min-w-0 truncate">
              {file.name}
              <span className="ml-2 font-normal text-muted-foreground">
                {file.size}
              </span>
            </ProgressLabel>
            <ProgressValue />
          </Progress>
        </div>
      ))}
    </div>
  )
}
