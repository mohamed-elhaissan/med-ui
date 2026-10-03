import Link from "next/link"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { CopyPage } from "@/components/site/copy-page"
import { DocsToc, type TocItem } from "@/components/site/docs-toc"
import { getNeighbours } from "@/lib/docs"

export function DocsPage({
  href,
  title,
  description,
  toc,
  children,
}: {
  href: string
  title: string
  description?: string
  toc?: TocItem[]
  children: React.ReactNode
}) {
  const { previous, next } = getNeighbours(href)
  const iconButton = buttonVariants({
    variant: "secondary",
    size: "icon",
    className: "size-8 shadow-none md:size-7",
  })
  const namedButton = buttonVariants({ variant: "secondary", size: "sm", className: "shadow-none" })

  return (
    <div className="flex scroll-mt-24 items-stretch pb-8 text-[1.05rem] sm:text-[15px] xl:w-full">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div
          data-slot="docs-main"
          className="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-6 px-4 py-6 md:px-0 lg:py-8"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between md:items-start">
              <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">{title}</h1>
              <div className="flex items-center gap-2">
                <div className="hidden sm:block">
                  <CopyPage />
                </div>
                <div className="ml-auto flex gap-2">
                  {previous && (
                    <Link href={previous.href} className={iconButton}>
                      <ArrowLeftIcon />
                      <span className="sr-only">Previous</span>
                    </Link>
                  )}
                  {next && (
                    <Link href={next.href} className={iconButton}>
                      <span className="sr-only">Next</span>
                      <ArrowRightIcon />
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {description && (
              <p className="text-[1.05rem] text-muted-foreground sm:text-base sm:text-balance md:max-w-[80%]">
                {description}
              </p>
            )}
          </div>

          <div className="w-full flex-1 pb-16 sm:pb-0">{children}</div>

          <div className="hidden h-16 w-full items-center gap-2 sm:flex">
            {previous && (
              <Link href={previous.href} className={namedButton}>
                <ArrowLeftIcon /> {previous.name}
              </Link>
            )}
            {next && (
              <Link href={next.href} className={`${namedButton} ml-auto`}>
                {next.name} <ArrowRightIcon />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[90svh] w-(--sidebar-width) flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
        <div className="h-(--top-spacing) shrink-0" />
        {toc?.length ? (
          <div className="no-scrollbar flex flex-col gap-8 overflow-y-auto px-8">
            <DocsToc items={toc} />
          </div>
        ) : null}
      </div>
    </div>
  )
}
