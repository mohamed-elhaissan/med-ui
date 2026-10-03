import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { CopyCommand } from "@/components/site/copy-command"
import { installCommand, siteConfig } from "@/lib/site"

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-8 px-4 py-20 text-center sm:px-6">
        <h1 className="max-w-3xl text-5xl font-medium tracking-tight text-balance sm:text-7xl">
          Components you own.{" "}
          <span className="text-muted-foreground">Styled your way.</span>
        </h1>

        <p className="max-w-xl text-lg text-balance text-muted-foreground">
          {siteConfig.name} is a component library built on shadcn/ui. Install a component with one
          command and the source code lands in your project, ready to customize.
        </p>

        <Link
          href="/docs/components"
          className={buttonVariants({ size: "lg", className: "h-11 px-5 text-base" })}
        >
          Browse components
          <ArrowRight data-icon="inline-end" />
        </Link>

        <CopyCommand command={installCommand("button")} />
      </div>
    </div>
  )
}
