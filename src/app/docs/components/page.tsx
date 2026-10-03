import type { Metadata } from "next"
import Link from "next/link"

import { DocsPage } from "@/components/site/docs-page"
import { H2 } from "@/components/site/docs-typography"
import { NEW_COMPONENTS } from "@/lib/docs"
import { components } from "@/lib/registry"

export const metadata: Metadata = { title: "Components · i-ui" }

function ComponentGrid({ items }: { items: typeof components }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
      {items.map((component) => (
        <Link
          key={component.name}
          href={`/docs/components/${component.name}`}
          className="text-lg font-medium underline-offset-4 hover:underline md:text-base"
        >
          {component.title}
        </Link>
      ))}
    </div>
  )
}

export default function ComponentsPage() {
  return (
    <DocsPage
      href="/docs/components"
      title="Components"
      description="Here you can find all the components available in the library. We are working on adding more components."
      toc={[
        { id: "new-components", title: "New Components" },
        { id: "all-components", title: "All Components" },
      ]}
    >
      <H2 id="new-components">New Components</H2>
      <ComponentGrid items={components.filter((c) => NEW_COMPONENTS.includes(c.name))} />
      <H2 id="all-components">All Components</H2>
      <ComponentGrid items={components} />
    </DocsPage>
  )
}
