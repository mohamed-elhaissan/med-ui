import type { Metadata } from "next"
import Link from "next/link"

import { components } from "@/lib/registry"

export const metadata: Metadata = { title: "Components · i-ui" }

export default function ComponentsPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold tracking-tight">Components</h1>
        <p className="text-muted-foreground">
          Every component in the library. Open one to see it live and copy its install command.
        </p>
      </header>

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold">All Components</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
          {components.map((component) => (
            <Link
              key={component.name}
              href={`/components/${component.name}`}
              className="font-medium underline-offset-4 hover:underline"
            >
              {component.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
