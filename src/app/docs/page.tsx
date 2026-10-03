import type { Metadata } from "next"

import { DocsPage } from "@/components/site/docs-page"
import { Code, DocLinkA, H2, P, UL } from "@/components/site/docs-typography"
import { components } from "@/lib/registry"

export const metadata: Metadata = { title: "Introduction · i-ui" }

export default function IntroductionPage() {
  return (
    <DocsPage
      href="/docs"
      title="Introduction"
      description="i-ui is a set of beautifully designed components that you can customize, extend, and build on. Start here, then make it your own."
      toc={[
        { id: "what-is-i-ui", title: "What is i-ui?" },
        { id: "open-code", title: "Open Code" },
        { id: "built-on", title: "Built On" },
        { id: "next-steps", title: "Next Steps" },
      ]}
    >
      <H2 id="what-is-i-ui">What is i-ui?</H2>
      <P>
        i-ui is a component library delivered as a shadcn registry. It is not an npm package you
        install and import. Instead, each component&apos;s source code is copied into your project,
        so you can read it, change it, and ship it as your own.
      </P>
      <P>
        The library currently ships {components.length} components, from primitives like Button and
        Input to larger pieces like Sidebar, Chart and Message Scroller.
      </P>

      <H2 id="open-code">Open Code</H2>
      <P>Because you own the code, you are never blocked by the library:</P>
      <UL>
        <li>Change any style, variant or behavior directly in the component file.</li>
        <li>Compose components together without fighting a wrapper API.</li>
        <li>AI tools can read the source and use it to build new UI that matches.</li>
      </UL>

      <H2 id="built-on">Built On</H2>
      <UL>
        <li>
          <strong>shadcn/ui</strong> for the component design and the registry format.
        </li>
        <li>
          <strong>Base UI</strong> for accessible, unstyled primitives with keyboard and
          screen-reader support.
        </li>
        <li>
          <strong>Tailwind CSS v4</strong> with CSS variables, so the whole library follows your
          theme.
        </li>
      </UL>

      <H2 id="next-steps">Next Steps</H2>
      <P>
        Follow the <DocLinkA href="/docs/installation">installation guide</DocLinkA> to connect the
        registry to your project, then browse the <DocLinkA href="/docs/components">components</DocLinkA>.
        Using an AI assistant? Set up the <DocLinkA href="/docs/mcp">MCP server</DocLinkA> so it can
        install components for you. Run <Code>npx shadcn@latest add</Code> with any component URL to
        get started right away.
      </P>
    </DocsPage>
  )
}
