import type { BundledLanguage } from "shiki"

import { CopyButton } from "@/components/site/copy-button"
import { highlight } from "@/lib/highlight"
import { cn } from "@/lib/utils"

export async function CodeBlock({
  code,
  lang = "tsx",
  title,
  className,
}: {
  code: string
  lang?: BundledLanguage
  title?: string
  className?: string
}) {
  const html = await highlight(code, lang)

  return (
    <figure className={cn("relative overflow-hidden rounded-xl border bg-card", className)}>
      {title && (
        <figcaption className="flex h-10 items-center border-b px-4 font-mono text-[0.8rem] text-muted-foreground">
          {title}
        </figcaption>
      )}
      <CopyButton value={code} className="absolute top-2 right-2 z-10 bg-card hover:bg-muted" />
      <div
        className="[&_pre]:no-scrollbar [&_pre]:max-h-[450px] [&_pre]:overflow-auto [&_pre]:px-4 [&_pre]:py-3.5 [&_pre]:pr-12 [&_pre]:font-mono [&_pre]:text-[0.8rem] [&_pre]:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </figure>
  )
}
