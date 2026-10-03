import type { Metadata } from "next"

import { CodeBlock } from "@/components/site/code-block"
import { DocsPage } from "@/components/site/docs-page"
import { Code, DocLinkA, H2, H3, P, UL } from "@/components/site/docs-typography"
import { FrameworkTabs } from "@/components/site/framework-tabs"
import { InstallCommand } from "@/components/site/install-command"
import { components } from "@/lib/registry"
import { registryItemUrl, siteConfig } from "@/lib/site"

import * as s from "./_content/snippets"

export const metadata: Metadata = { title: "Introduction · i-ui" }

export default function IntroductionPage() {
  return (
    <DocsPage
      href="/docs"
      title="Introduction"
      description="Everything you need to build with i-ui from an empty folder: framework, fonts, theme, dark mode, and your first components."
      toc={[
        { id: "what-is-i-ui", title: "What is i-ui?" },
        { id: "requirements", title: "Requirements" },
        { id: "create-project", title: "1. Create a Project" },
        { id: "dependencies", title: "2. Dependencies" },
        { id: "fonts", title: "3. Fonts" },
        { id: "theme", title: "4. Theme" },
        { id: "config", title: "5. Configuration" },
        { id: "dark-mode", title: "6. Dark Mode" },
        { id: "add-components", title: "7. Add Components" },
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
      <P>
        This guide takes you from an empty folder to a project that looks exactly like this site.
        Pick your framework in each step and follow along.
      </P>

      <H2 id="requirements">Requirements</H2>
      <UL>
        <li>Node.js 20 or newer</li>
        <li>React 19</li>
        <li>Tailwind CSS v4</li>
        <li>TypeScript (recommended; every component is written in TSX)</li>
      </UL>

      <H2 id="create-project">1. Create a Project</H2>
      <P>
        <strong>Next.js</strong> is the best fit if you want routing, server rendering and SEO out
        of the box. <strong>Vite</strong> is the lighter choice for single-page apps and
        dashboards.
      </P>
      <FrameworkTabs
        next={
          <>
            <CodeBlock lang="bash" code={s.CREATE_NEXT} label="Create command" />
            <P>Tailwind CSS and the <Code>@/</Code> import alias are set up for you.</P>
          </>
        }
        vite={
          <>
            <CodeBlock lang="bash" code={s.CREATE_VITE} label="Create command" />
            <P>Add Tailwind and the <Code>@/</Code> alias to your Vite config:</P>
            <CodeBlock title="vite.config.ts" code={s.VITE_CONFIG} />
            <P>
              Then add the same alias to both <Code>tsconfig.json</Code> and{" "}
              <Code>tsconfig.app.json</Code>:
            </P>
            <CodeBlock lang="json" title="tsconfig.app.json" code={s.VITE_TSCONFIG} />
          </>
        }
      />

      <H2 id="dependencies">2. Dependencies</H2>
      <P>
        Install the packages every component relies on: the class-name helper, the animation
        utilities and the icon set.
      </P>
      <CodeBlock lang="bash" code={s.DEPENDENCIES} label="Dependencies command" className="mt-6" />
      <P>
        Each component brings its own extra packages when you add it, so this is all you need up
        front.
      </P>

      <H2 id="fonts">3. Fonts</H2>
      <P>
        i-ui uses <strong>Inter</strong> for interface text, <strong>Source Serif 4</strong> for
        headings and <strong>JetBrains Mono</strong> for code. All three are free.
      </P>
      <FrameworkTabs
        next={
          <>
            <P>Load them with <Code>next/font</Code> in your root layout:</P>
            <CodeBlock title="src/app/layout.tsx" code={s.FONTS_NEXT} />
          </>
        }
        vite={
          <>
            <CodeBlock lang="bash" code={s.FONTS_VITE_INSTALL} label="Fonts install command" />
            <P>Import them once in your entry file:</P>
            <CodeBlock title="src/main.tsx" code={s.FONTS_VITE_IMPORTS} />
            <P>Then point the theme at them by adding this to the end of your CSS file:</P>
            <CodeBlock lang="css" title="src/index.css" code={s.FONTS_VITE_CSS} />
          </>
        }
      />

      <H2 id="theme">4. Theme</H2>
      <P>
        The theme has two parts: a base stylesheet with the animations and variants the components
        use, and your color tokens. Download the base stylesheet next to your CSS file:
      </P>
      <FrameworkTabs
        next={
          <CodeBlock
            lang="bash"
            code={s.downloadBaseCss("src/app/base.css")}
            label="Download command"
          />
        }
        vite={
          <CodeBlock lang="bash" code={s.downloadBaseCss("src/base.css")} label="Download command" />
        }
      />
      <P>
        Then replace the contents of your CSS file (<Code>src/app/globals.css</Code> in Next.js,{" "}
        <Code>src/index.css</Code> in Vite) with the full i-ui theme. This is the exact theme this
        site uses:
      </P>
      <CodeBlock lang="css" title="globals.css" code={s.themeCss()} className="mt-6" />
      <P>
        Want different colors? See <DocLinkA href="/docs/theming">Theming</DocLinkA>.
      </P>

      <H2 id="config">5. Configuration</H2>
      <H3>Utilities</H3>
      <P>
        Components merge class names with a <Code>cn</Code> helper. Create it here:
      </P>
      <CodeBlock title="src/lib/utils.ts" code={s.UTILS} className="mt-6" />
      <H3>components.json</H3>
      <P>
        This file tells the installer where to put components and where to find i-ui. Create it in
        your project root:
      </P>
      <FrameworkTabs
        next={
          <CodeBlock
            lang="json"
            title="components.json"
            code={s.componentsJson({ rsc: true, css: "src/app/globals.css" })}
          />
        }
        vite={
          <CodeBlock
            lang="json"
            title="components.json"
            code={s.componentsJson({ rsc: false, css: "src/index.css" })}
          />
        }
      />

      <H2 id="dark-mode">6. Dark Mode</H2>
      <P>
        Dark colors apply whenever the <Code>dark</Code> class is on the <Code>&lt;html&gt;</Code>{" "}
        element.
      </P>
      <FrameworkTabs
        next={
          <>
            <CodeBlock lang="bash" code="npm install next-themes" label="Install command" />
            <P>Create a theme provider:</P>
            <CodeBlock title="src/components/theme-provider.tsx" code={s.THEME_PROVIDER} />
            <P>Wrap your app with it in the root layout:</P>
            <CodeBlock title="src/app/layout.tsx" code={s.THEME_PROVIDER_USAGE} />
            <P>
              Call <Code>setTheme(&quot;light&quot;)</Code> or{" "}
              <Code>setTheme(&quot;dark&quot;)</Code> from <Code>useTheme()</Code> to build a
              toggle.
            </P>
          </>
        }
        vite={
          <>
            <P>To always use dark mode, add the class in your HTML:</P>
            <CodeBlock lang="html" title="index.html" code={s.DARK_VITE} />
            <P>To build a toggle, flip the class from a button:</P>
            <CodeBlock code={s.DARK_VITE_TOGGLE} />
          </>
        }
      />

      <H2 id="add-components">7. Add Components</H2>
      <P>You&apos;re ready. Add any component by name:</P>
      <div className="mt-6">
        <InstallCommand target="@i-ui/button" />
      </div>
      <P>Or install straight from a component&apos;s URL:</P>
      <div className="mt-6">
        <InstallCommand target={registryItemUrl("button")} />
      </div>
      <P>
        Every <DocLinkA href="/docs/components">component page</DocLinkA> has its own command, a
        live preview, and a <strong>Manual</strong> tab if you prefer to copy the code by hand.
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

      <H2 id="your-own-components">Add Your Own Components</H2>
      <P>
        Create the component in <Code>src/components/ui</Code>:
      </P>
      <CodeBlock code={s.OWN_COMPONENT} className="mt-6" />
      <P>
        Add a demo in <Code>src/components/site/demos</Code>, register it in{" "}
        <Code>demos/index.ts</Code>, and run <Code>npm run registry:build</Code>. The component gets
        its own docs page, a place in the sidebar and an install URL automatically.
      </P>

      <H2 id="next-steps">Next Steps</H2>
      <P>
        Make it yours with <DocLinkA href="/docs/theming">Theming</DocLinkA>, connect your AI
        assistant with the <DocLinkA href="/docs/mcp">MCP server</DocLinkA>, or browse the{" "}
        <DocLinkA href="/docs/components">components</DocLinkA>.
      </P>
    </DocsPage>
  )
}
