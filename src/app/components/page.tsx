import type { Metadata } from "next"

import registry from "../../../registry.json"
import { CopyCommand } from "@/components/site/copy-command"
import { demos } from "@/components/site/demos"
import { installCommand } from "@/lib/site"

export const metadata: Metadata = { title: "Components · i-ui" }

const components = registry.items.filter((item) => item.type === "registry:ui")

export default function ComponentsPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 gap-10 px-4 sm:px-6">
      <aside className="sticky top-14 hidden h-[calc(100svh-3.5rem)] w-48 shrink-0 overflow-y-auto py-10 lg:block">
        <p className="mb-3 px-2 text-sm font-medium">
          Components <span className="text-muted-foreground">{components.length}</span>
        </p>
        <nav className="flex flex-col">
          {components.map((component) => (
            <a
              key={component.name}
              href={`#${component.name}`}
              className="rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {component.title}
            </a>
          ))}
        </nav>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col gap-14 py-10">
        <header className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold tracking-tight">Components</h1>
          <p className="text-muted-foreground">
            Every component below is installable. Copy the command, run it in your project, and the
            source is yours.
          </p>
        </header>

        {components.map((component) => {
          const Demo = demos[component.name]
          return (
            <section key={component.name} id={component.name} className="flex scroll-mt-20 flex-col gap-4">
              <h2 className="text-xl font-medium">{component.title}</h2>
              <CopyCommand command={installCommand(component.name)} />
              <div className="flex min-h-48 items-center justify-center rounded-2xl border p-6 sm:p-10">
                {Demo ? (
                  <Demo />
                ) : (
                  <p className="text-sm text-muted-foreground">Preview coming soon.</p>
                )}
              </div>
            </section>
          )
        })}
      </main>
    </div>
  )
}
