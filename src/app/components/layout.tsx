import { ComponentsNav } from "@/components/site/components-nav"
import { components } from "@/lib/registry"

export default function ComponentsLayout({ children }: LayoutProps<"/components">) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 gap-12 px-4 sm:px-6">
      <aside className="sticky top-14 hidden h-[calc(100svh-3.5rem)] w-52 shrink-0 overflow-y-auto border-r py-10 pr-4 lg:block">
        <ComponentsNav items={components} />
      </aside>
      <main className="mx-auto w-full max-w-3xl min-w-0 flex-1 py-12">{children}</main>
    </div>
  )
}
