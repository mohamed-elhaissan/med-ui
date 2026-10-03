import type { Metadata } from "next"

import { CodeBlock } from "@/components/site/code-block"
import { DocsPage } from "@/components/site/docs-page"
import { Code, DocLinkA, H2, P } from "@/components/site/docs-typography"
import { InstallCommand } from "@/components/site/install-command"
import { registryItemUrl, siteConfig } from "@/lib/site"

export const metadata: Metadata = { title: "Installation · i-ui" }

export default function InstallationPage() {
  const registryJson = JSON.stringify(
    { registries: { "@i-ui": `${siteConfig.url}/r/{name}.json` } },
    null,
    2
  )

  return (
    <DocsPage
      href="/docs/installation"
      title="Installation"
      description="How to set up your project and install i-ui components."
      toc={[
        { id: "create-project", title: "Create Project" },
        { id: "add-registry", title: "Add the Registry" },
        { id: "add-components", title: "Add Components" },
        { id: "install-by-url", title: "Install by URL" },
      ]}
    >
      <H2 id="create-project">Create Project</H2>
      <P>
        i-ui works in any React project that uses Tailwind CSS v4 and the shadcn CLI, such as
        Next.js, Vite or React Router. If your project isn&apos;t set up for shadcn yet, run{" "}
        <Code>init</Code> first.
      </P>
      <div className="mt-6">
        <InstallCommand subcommand="init" />
      </div>
      <P>
        This creates a <Code>components.json</Code> file and sets up your CSS variables.
      </P>

      <H2 id="add-registry">Add the Registry</H2>
      <P>
        Register i-ui under the <Code>@i-ui</Code> namespace in your <Code>components.json</Code>:
      </P>
      <CodeBlock title="components.json" code={registryJson} className="mt-6" />

      <H2 id="add-components">Add Components</H2>
      <P>You can now add any component by name:</P>
      <div className="mt-6">
        <InstallCommand target="@i-ui/button" />
      </div>
      <P>
        The component is copied to <Code>components/ui/button.tsx</Code>, and its dependencies are
        installed for you. Import it like any other file in your project.
      </P>

      <H2 id="install-by-url">Install by URL</H2>
      <P>Prefer not to edit components.json? Every component also installs from its full URL:</P>
      <div className="mt-6">
        <InstallCommand target={registryItemUrl("button")} />
      </div>
      <P>
        Find the command for each component on its page in the{" "}
        <DocLinkA href="/docs/components">components</DocLinkA> section.
      </P>
    </DocsPage>
  )
}
