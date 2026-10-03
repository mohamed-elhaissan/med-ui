"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/site/code-block"
import { demos } from "@/components/site/demos"

export function ComponentPreview({ name, source }: { name: string; source: string }) {
  const Demo = demos[name]

  return (
    <Tabs defaultValue="preview" className="gap-4">
      <TabsList variant="line">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div className="flex min-h-[450px] w-full items-center justify-center rounded-xl border p-6 sm:p-10">
          {Demo ? <Demo /> : <p className="text-sm text-muted-foreground">No preview yet.</p>}
        </div>
      </TabsContent>
      <TabsContent value="code">
        <CodeBlock code={source} className="[&_pre]:max-h-[450px]" />
      </TabsContent>
    </Tabs>
  )
}

export function InstallTabs({
  command,
  manual,
}: {
  command: React.ReactNode
  manual: React.ReactNode
}) {
  return (
    <Tabs defaultValue="command" className="mt-6 gap-4">
      <TabsList variant="line">
        <TabsTrigger value="command">Command</TabsTrigger>
        <TabsTrigger value="manual">Manual</TabsTrigger>
      </TabsList>
      <TabsContent value="command">{command}</TabsContent>
      <TabsContent value="manual">{manual}</TabsContent>
    </Tabs>
  )
}
