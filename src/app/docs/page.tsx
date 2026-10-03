import type { Metadata } from "next"

import { CodeBlock } from "@/components/site/code-block"
import { DocsPage } from "@/components/site/docs-page"
import { Code, DocLinkA, H2, H3, P, UL } from "@/components/site/docs-typography"
import { InstallCommand } from "@/components/site/install-command"
import { components } from "@/lib/registry"
import { registryItemUrl, siteConfig } from "@/lib/site"

export const metadata: Metadata = { title: "Introduction · i-ui" }

const ADD_COMPONENT = `// src/components/ui/price-tag.tsx
import { cn } from "@/lib/utils"

export function PriceTag({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("rounded-md bg-primary/10 px-2 py-0.5 text-sm text-primary", className)}
      {...props}
    />
  )
}`

export default function IntroductionPage() {
  const registryJson = JSON.stringify(
    { registries: { "@i-ui": `${siteConfig.url}/r/{name}.json` } },
    null,
    2
  )

  return (
    <DocsPage
      href="/docs"
      title="Introduction"
      description="Everything you need to use i-ui and grow it into your own component library: what it is, how to install it, the CLI, and how the registry is built."
      toc={[
        { id: "what-is-i-ui", title: "What is i-ui?" },
        { id: "installation", title: "Installation" },
        { id: "add-registry", title: "Add the Registry" },
        { id: "add-components", title: "Add Components" },
        { id: "cli", title: "CLI" },
        { id: "registry", title: "How the Registry Works" },
        { id: "your-own-components", title: "Add Your Own Components" },
        { id: "next-steps", title: "Next Steps" },
      ]}
    >
      <H2 id="what-is-i-ui">What is i-ui?</H2>
      <P>
        i-ui is a component library delivered as a shadcn registry. It is not an npm package you
        import. Each component&apos;s source code is copied into your project, so you can read it,
        change it, and ship it as your own. It currently has {components.length} components, built
        on shadcn/ui, Base UI primitives and Tailwind CSS v4.
      </P>
      <UL>
        <li>
          <strong>Open code:</strong> change any style, variant or behavior directly in the file.
        </li>
        <li>
          <strong>Accessible:</strong> Base UI handles keyboard and screen-reader support.
        </li>
        <li>
          <strong>Themeable:</strong> everything reads from CSS variables. See{" "}
          <DocLinkA href="/docs/theming">Theming</DocLinkA>.
        </li>
      </UL>

      <H2 id="installation">Installation</H2>
      <P>
        i-ui works in any React project with Tailwind CSS v4, such as Next.js, Vite or React
        Router. If your project isn&apos;t set up for shadcn yet, initialize it first:
      </P>
      <div className="mt-6">
        <InstallCommand subcommand="init" />
      </div>
      <P>
        This creates a <Code>components.json</Code> file and sets up your CSS variables.
      </P>

      <H3 id="add-registry">Add the Registry</H3>
      <P>
        Register i-ui under the <Code>@i-ui</Code> namespace in <Code>components.json</Code>:
      </P>
      <CodeBlock lang="json" title="components.json" code={registryJson} className="mt-6" />

      <H3 id="add-components">Add Components</H3>
      <P>Add any component by name. Its dependencies are installed for you:</P>
      <div className="mt-6">
        <InstallCommand target="@i-ui/button" />
      </div>
      <P>Or skip the registry setup and install straight from a component&apos;s URL:</P>
      <div className="mt-6">
        <InstallCommand target={registryItemUrl("button")} />
      </div>

      <H2 id="cli">CLI</H2>
      <P>The shadcn CLI does the rest. Add several components at once:</P>
      <CodeBlock lang="bash" code="npx shadcn@latest add @i-ui/dialog @i-ui/field @i-ui/sidebar" className="mt-6" />
      <P>See a component&apos;s files before installing it:</P>
      <CodeBlock lang="bash" code="npx shadcn@latest view @i-ui/sidebar" className="mt-6" />
      <P>Search everything in the registry:</P>
      <CodeBlock lang="bash" code={`npx shadcn@latest search @i-ui -q "menu"`} className="mt-6" />
      <P>
        Add <Code>--overwrite</Code> to replace existing files, or <Code>--dry-run</Code> to preview
        changes.
      </P>

      <H2 id="registry">How the Registry Works</H2>
      <P>
        Components live in <Code>src/components/ui</Code>. One command reads every file&apos;s
        imports to find its npm dependencies and the other i-ui components it needs, writes{" "}
        <Code>registry.json</Code>, and builds one JSON file per component into{" "}
        <Code>public/r</Code>:
      </P>
      <CodeBlock lang="bash" code="npm run registry:build" className="mt-6" />
      <UL>
        <li>
          Full index: <Code>{`${siteConfig.url}/r/registry.json`}</Code>
        </li>
        <li>
          One component: <Code>{registryItemUrl("button")}</Code>
        </li>
      </UL>
      <P>
        Deploy the site and those URLs are live on your domain. Anyone can install from them.
      </P>

      <H2 id="your-own-components">Add Your Own Components</H2>
      <P>Growing the library is three steps:</P>
      <UL>
        <li>
          Create the component in <Code>src/components/ui</Code>:
        </li>
      </UL>
      <CodeBlock code={ADD_COMPONENT} />
      <UL>
        <li>
          Add a demo in <Code>src/components/site/demos</Code> and register it in{" "}
          <Code>demos/index.ts</Code>.
        </li>
        <li>
          Run <Code>npm run registry:build</Code>. The component gets its own docs page, a place in
          the sidebar and an install URL automatically.
        </li>
      </UL>

      <H2 id="next-steps">Next Steps</H2>
      <P>
        Make it yours with <DocLinkA href="/docs/theming">Theming</DocLinkA>, connect your AI
        assistant with the <DocLinkA href="/docs/mcp">MCP server</DocLinkA>, or browse the{" "}
        <DocLinkA href="/docs/components">components</DocLinkA>.
      </P>
    </DocsPage>
  )
}
