import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CopyCommand } from "@/components/site/copy-command"
import { demos } from "@/components/site/demos"
import { components, getComponent } from "@/lib/registry"
import { installCommand } from "@/lib/site"

export function generateStaticParams() {
  return components.map(({ name }) => ({ name }))
}

export async function generateMetadata({
  params,
}: PageProps<"/components/[name]">): Promise<Metadata> {
  const { name } = await params
  return { title: `${getComponent(name)?.title ?? "Component"} · i-ui` }
}

export default async function ComponentPage({ params }: PageProps<"/components/[name]">) {
  const { name } = await params
  const component = getComponent(name)
  if (!component) notFound()

  const Demo = demos[component.name]

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-semibold tracking-tight">{component.title}</h1>

      <div className="flex min-h-72 items-center justify-center rounded-2xl border p-6 sm:p-10">
        {Demo ? <Demo /> : <p className="text-sm text-muted-foreground">No preview yet.</p>}
      </div>

      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CopyCommand command={installCommand(component.name)} />
      </section>
    </div>
  )
}
