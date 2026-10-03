import type { Metadata } from "next"

import { CodeBlock } from "@/components/site/code-block"
import { DocsPage } from "@/components/site/docs-page"
import { Code, H2, P, UL } from "@/components/site/docs-typography"
import { registryItemUrl, siteConfig } from "@/lib/site"

export const metadata: Metadata = { title: "Registry · i-ui" }

export default function RegistryPage() {
  return (
    <DocsPage
      href="/docs/registry"
      title="Registry"
      description="How the i-ui registry is built and served, and how to add a new component to it."
      toc={[
        { id: "how-it-works", title: "How It Works" },
        { id: "endpoints", title: "Endpoints" },
        { id: "adding-a-component", title: "Adding a Component" },
      ]}
    >
      <H2 id="how-it-works">How It Works</H2>
      <P>
        Components live in <Code>src/components/ui</Code>. A build script reads each file&apos;s
        imports to work out its npm dependencies and which other i-ui components it needs, writes{" "}
        <Code>registry.json</Code>, and then <Code>shadcn build</Code> turns every item into a JSON
        file in <Code>public/r</Code>.
      </P>
      <CodeBlock code="npm run registry:build" className="mt-6" />

      <H2 id="endpoints">Endpoints</H2>
      <UL>
        <li>
          The full index: <Code>{`${siteConfig.url}/r/registry.json`}</Code>
        </li>
        <li>
          One component: <Code>{registryItemUrl("button")}</Code>
        </li>
      </UL>

      <H2 id="adding-a-component">Adding a Component</H2>
      <UL>
        <li>
          Create <Code>src/components/ui/your-component.tsx</Code>.
        </li>
        <li>
          Add a demo in <Code>src/components/site/demos</Code> and register it in the demos index.
        </li>
        <li>
          Run <Code>npm run registry:build</Code>. The component gets its own docs page and install
          URL automatically.
        </li>
      </UL>
    </DocsPage>
  )
}
