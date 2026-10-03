import type { Metadata } from "next"

import { CodeBlock } from "@/components/site/code-block"
import { DocsPage } from "@/components/site/docs-page"
import { Code, DocLinkA, H2, H3, P, UL } from "@/components/site/docs-typography"
import {
  FrameworkContent,
  FrameworkPicker,
  FrameworkProvider,
} from "@/components/site/framework-picker"
import { InstallCommand } from "@/components/site/install-command"
import { components } from "@/lib/registry"
import { registryItemUrl, siteConfig } from "@/lib/site"

import {
  componentsJson,
  cssDir,
  FRAMEWORKS,
  type Framework,
  type Snippet,
} from "./_content/frameworks"
import * as s from "./_content/snippets"

export const metadata: Metadata = { title: "Introduction · i-ui" }

function Snippets({ items }: { items: Snippet[] }) {
  return items.map((item, index) => (
    <div key={index} className="flex flex-col gap-4">
      {item.note && <p className="leading-relaxed">{item.note}</p>}
      <CodeBlock code={item.code} lang={item.lang} title={item.title} label={item.label} />
    </div>
  ))
}

function perFramework(render: (framework: Framework) => React.ReactNode) {
  return Object.fromEntries(FRAMEWORKS.map((framework) => [framework.id, render(framework)]))
}

export default function IntroductionPage() {
  return (
    <DocsPage
      href="/docs"
      title="Introduction"
      description="Everything you need to build with i-ui from an empty folder: framework, fonts, theme, dark mode, and your first components."
      toc={[
        { id: "what-is-i-ui", title: "What is i-ui?" },
        { id: "quick-start", title: "Quick Start" },
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
      <FrameworkProvider options={FRAMEWORKS.map(({ id, name }) => ({ id, name }))}>
        <H2 id="what-is-i-ui">What is i-ui?</H2>
        <P>
          i-ui is a component library you install one component at a time. It is not an npm
          package you import. Each component&apos;s source code is copied into your project, so you
          can read it, change it, and ship it as your own. It currently has {components.length}{" "}
          components, built with React, Base UI primitives and Tailwind CSS v4.
        </P>

        <H2 id="quick-start">Quick Start</H2>
        <P>Already set up (steps 1 to 5 below)? Install every component with one command:</P>
        <div className="mt-6">
          <InstallCommand target="@i-ui/all" label="Install-all command" />
        </div>
        <P>Starting from scratch? Follow the steps below. They take about five minutes.</P>

        <H2 id="requirements">Requirements</H2>
        <UL>
          <li>Node.js 20 or newer</li>
          <li>React 19</li>
          <li>Tailwind CSS v4</li>
          <li>TypeScript (recommended; every component is written in TSX)</li>
        </UL>

        <H2 id="create-project">1. Create a Project</H2>
        <P>
          i-ui works with any React framework that uses Tailwind CSS v4. Pick yours, and every step
          below updates with the right files and paths.
        </P>
        <FrameworkPicker />
        <FrameworkContent
          variants={perFramework((framework) => (
            <>
              <p className="leading-relaxed text-muted-foreground">{framework.blurb}</p>
              <Snippets items={framework.create} />
            </>
          ))}
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
        <FrameworkContent variants={perFramework((framework) => <Snippets items={framework.fonts} />)} />

        <H2 id="theme">4. Theme</H2>
        <P>
          The theme has two parts: a base stylesheet with the animations and variants the
          components use, and your color tokens. Download the base stylesheet next to your CSS
          file:
        </P>
        <FrameworkContent
          variants={perFramework((framework) => (
            <>
              <CodeBlock
                lang="bash"
                code={s.downloadBaseCss(`${cssDir(framework)}/base.css`)}
                label="Download command"
              />
              <p className="leading-relaxed">
                Then replace the contents of <Code>{framework.css}</Code> with the full i-ui theme
                below.
              </p>
            </>
          ))}
        />
        <P>
          On Windows PowerShell, type <Code>curl.exe</Code> instead of <Code>curl</Code>. This is
          the exact theme this site uses:
        </P>
        <CodeBlock lang="css" title="globals.css" code={s.themeCss()} className="mt-6" />
        <P>
          Want different colors? See <DocLinkA href="/docs/theming">Theming</DocLinkA>.
        </P>

        <H2 id="config">5. Configuration</H2>
        <H3>Utilities</H3>
        <P>
          Components merge class names with a <Code>cn</Code> helper. Create it (or replace it, if
          your project already has one):
        </P>
        <FrameworkContent
          variants={perFramework((framework) => (
            <CodeBlock title={`${framework.libDir}/utils.ts`} code={s.UTILS} />
          ))}
        />
        <H3>components.json</H3>
        <P>
          This file tells the installer where to put components and where to find i-ui. Create it
          in your project root:
        </P>
        <FrameworkContent
          variants={perFramework((framework) => (
            <CodeBlock lang="json" title="components.json" code={componentsJson(framework)} />
          ))}
        />

        <H2 id="dark-mode">6. Dark Mode</H2>
        <P>
          Dark colors apply whenever the <Code>dark</Code> class is on the{" "}
          <Code>&lt;html&gt;</Code> element.
        </P>
        <FrameworkContent
          variants={perFramework((framework) => (
            <>
              <Snippets items={framework.darkMode} />
              {framework.darkNote && <p className="leading-relaxed">{framework.darkNote}</p>}
            </>
          ))}
        />

        <H2 id="add-components">7. Add Components</H2>
        <P>You&apos;re ready. Install all {components.length} components with one command:</P>
        <div className="mt-6">
          <InstallCommand target="@i-ui/all" label="Install-all command" />
        </div>
        <P>Or add only the components you need, by name:</P>
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
          <Code>demos/index.ts</Code>, and run <Code>npm run registry:build</Code>. The component
          gets its own docs page, a place in the sidebar and an install URL automatically.
        </P>

        <H2 id="next-steps">Next Steps</H2>
        <P>
          Make it yours with <DocLinkA href="/docs/theming">Theming</DocLinkA>, connect your AI
          assistant with the <DocLinkA href="/docs/mcp">MCP server</DocLinkA>, or browse the{" "}
          <DocLinkA href="/docs/components">components</DocLinkA>.
        </P>
      </FrameworkProvider>
    </DocsPage>
  )
}
