import { readFileSync } from "node:fs"
import { join } from "node:path"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CodeBlock } from "@/components/site/code-block"
import { ComponentPreview, InstallTabs } from "@/components/site/component-preview"
import { DocsPage } from "@/components/site/docs-page"
import { H2, P, Steps } from "@/components/site/docs-typography"
import { InstallCommand } from "@/components/site/install-command"
import { components, getComponent } from "@/lib/registry"
import { registryItemUrl } from "@/lib/site"

function readSource(...segments: string[]) {
  return readFileSync(join(process.cwd(), "src", ...segments), "utf8").trim()
}

function exportedNames(source: string) {
  const block = source.match(/export\s*\{([^}]+)\}/)?.[1] ?? ""
  return block
    .split(",")
    .map((name) => name.trim())
    .filter((name) => /^[A-Z]/.test(name))
}

export function generateStaticParams() {
  return components.map(({ name }) => ({ name }))
}

export async function generateMetadata({
  params,
}: PageProps<"/docs/components/[name]">): Promise<Metadata> {
  const { name } = await params
  return { title: `${getComponent(name)?.title ?? "Component"} · med-ui` }
}

export default async function ComponentPage({ params }: PageProps<"/docs/components/[name]">) {
  const { name } = await params
  const component = getComponent(name)
  if (!component) notFound()

  const demoSource = readSource("components", "site", "demos", `${name}.tsx`)
  const uiSource = readSource("components", "ui", `${name}.tsx`)
  const names = exportedNames(uiSource)
  const from = `from "@/components/ui/${name}"`
  const usage =
    names.length > 2
      ? `import {\n${names.map((n) => `  ${n},`).join("\n")}\n} ${from}`
      : `import { ${names.join(", ")} } ${from}`

  return (
    <DocsPage
      href={`/docs/components/${name}`}
      title={component.title}
      description={component.description}
      toc={[
        { id: "installation", title: "Installation" },
        { id: "usage", title: "Usage" },
      ]}
    >
      <ComponentPreview name={name} code={<CodeBlock code={demoSource} label={`${component.title} example code`} />} />

      <H2 id="installation">Installation</H2>
      <InstallTabs
        command={
          <InstallCommand
            target={registryItemUrl(name)}
            label={`${component.title} install command`}
          />
        }
        manual={
          <Steps>
            {component.dependencies.length > 0 && (
              <>
                <P>Install the following dependencies:</P>
                <CodeBlock
                  lang="bash"
                  code={`npm install ${component.dependencies.join(" ")}`}
                  label={`${component.title} dependencies command`}
                />
              </>
            )}
            <P>Copy and paste the following code into your project.</P>
            <CodeBlock
              title={`components/ui/${name}.tsx`}
              code={uiSource}
              label={`${component.title} source code`}
            />
            <P>Update the import paths to match your project setup.</P>
          </Steps>
        }
      />

      <H2 id="usage">Usage</H2>
      <CodeBlock code={usage} label={`${component.title} usage`} className="mt-6" />
    </DocsPage>
  )
}
