import type { Metadata } from "next"

import { CodeBlock } from "@/components/site/code-block"
import { DocsPage } from "@/components/site/docs-page"
import { Code, DocLinkA, H2, P, UL } from "@/components/site/docs-typography"
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
  return (
    <DocsPage
      href="/docs"
      title="Introduction"
      description="Everything you need to use i-ui and grow it into your own component library: what it is, how to install components, and how the registry is built."
      toc={[
        { id: "what-is-i-ui", title: "What is i-ui?" },
        { id: "installation", title: "Installation" },
        { id: "registry", title: "How the Registry Works" },
        { id: "your-own-components", title: "Add Your Own Components" },
        { id: "next-steps", title: "Next Steps" },
      ]}
    >
      <H2 id="what-is-i-ui">What is i-ui?</H2>
      <P>
        i-ui is a component library you install one component at a time. It is not an npm package
        you import. Each component&apos;s source code is copied into your project, so you can read
        it, change it, and ship it as your own. It currently has {components.length} components,
        built with React, Base UI primitives and Tailwind CSS v4.
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
        Router. Install a component with one command. Its dependencies come with it:
      </P>
      <div className="mt-6">
        <InstallCommand target={registryItemUrl("button")} />
      </div>
      <P>
        Every component page has its own command. Prefer to do it by hand? Open the{" "}
        <strong>Manual</strong> tab on any <DocLinkA href="/docs/components">component page</DocLinkA>{" "}
        to copy the source directly.
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
