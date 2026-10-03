import { FileText, Folder, Terminal } from "lucide-react"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

const files = ["layout.tsx", "page.tsx", "globals.css", "utils.ts"]

const code = `export default function Page() {
  return <Dashboard />
}`

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-72 w-full max-w-2xl rounded-xl border text-sm"
    >
      <ResizablePanel defaultSize="28%" minSize="18%">
        <div className="flex h-full flex-col gap-1 p-3">
          <div className="flex items-center gap-2 px-1 pb-1 text-xs font-medium text-muted-foreground">
            <Folder className="size-3.5" />
            src/app
          </div>
          {files.map((file, index) => (
            <div
              key={file}
              data-active={index === 1 || undefined}
              className="flex items-center gap-2 truncate rounded-md px-2 py-1 data-active:bg-muted data-active:font-medium"
            >
              <FileText className="size-3.5 shrink-0 text-muted-foreground" />
              {file}
            </div>
          ))}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="72%" minSize="40%">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize="65%" minSize="30%">
            <pre className="h-full overflow-hidden p-4 font-mono text-xs leading-relaxed">
              {code}
            </pre>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="35%" minSize="20%">
            <div className="flex h-full flex-col gap-1 bg-muted/40 p-3 font-mono text-xs">
              <div className="flex items-center gap-2 font-sans font-medium text-muted-foreground">
                <Terminal className="size-3.5" />
                Terminal
              </div>
              <span>$ npm run dev</span>
              <span className="text-muted-foreground">Ready in 412ms</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
