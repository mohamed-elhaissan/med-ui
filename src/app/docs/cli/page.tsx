import type { Metadata } from "next"

import { CodeBlock } from "@/components/site/code-block"
import { DocsPage } from "@/components/site/docs-page"
import { Code, DocLinkA, H2, P } from "@/components/site/docs-typography"

export const metadata: Metadata = { title: "CLI · i-ui" }

export default function CliPage() {
  return (
    <DocsPage
      href="/docs/cli"
      title="CLI"
      description="Use the shadcn CLI to add, inspect and search i-ui components."
      toc={[
        { id: "add", title: "add" },
        { id: "view", title: "view" },
        { id: "search", title: "search" },
      ]}
    >
      <P>
        All commands below assume the <Code>@i-ui</Code> registry is set up in your{" "}
        <Code>components.json</Code>. See <DocLinkA href="/docs/installation">Installation</DocLinkA>.
      </P>

      <H2 id="add">add</H2>
      <P>Add one or more components and their dependencies to your project.</P>
      <CodeBlock code="npx shadcn@latest add @i-ui/button @i-ui/dialog" className="mt-6" />
      <P>
        Use <Code>--overwrite</Code> to replace files that already exist, or <Code>--dry-run</Code>{" "}
        to preview the changes first.
      </P>

      <H2 id="view">view</H2>
      <P>Print a component&apos;s files and metadata without installing it.</P>
      <CodeBlock code="npx shadcn@latest view @i-ui/sidebar" className="mt-6" />

      <H2 id="search">search</H2>
      <P>List or search every item in the registry.</P>
      <CodeBlock code={`npx shadcn@latest search @i-ui -q "menu"`} className="mt-6" />
    </DocsPage>
  )
}
