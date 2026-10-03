import type { Metadata } from "next"
import Link from "next/link"

import { DocsPage } from "@/components/site/docs-page"
import { H2 } from "@/components/site/docs-typography"
import { InstallCommand } from "@/components/site/install-command"
import { NEW_COMPONENTS } from "@/lib/docs"
import { components } from "@/lib/registry"
import { registryItemUrl } from "@/lib/site"

export const metadata: Metadata = { title: "Components · med-ui" }

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
      description="Here you can find all the components available in the library. Install them one by one, or all at once with the command below."
      toc={[
        { id: "new-components", title: "New Components" },
        { id: "all-components", title: "All Components" },
      ]}
    >
      <InstallCommand target={registryItemUrl("all")} label="Install-all command" />
      <H2 id="new-components">New Components</H2>
      <ComponentGrid items={components.filter((c) => NEW_COMPONENTS.includes(c.name))} />
      <H2 id="all-components">All Components</H2>
      <ComponentGrid items={components} />
    </DocsPage>
  )
}
