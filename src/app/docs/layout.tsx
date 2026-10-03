import { DocsSidebar } from "@/components/site/docs-sidebar"

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return (
    <div className="flex flex-1 flex-col px-2">
      <div className="flex min-h-min flex-1 items-start [--sidebar-width:calc(var(--spacing)*72)] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--top-spacing:calc(var(--spacing)*4)]">
        <DocsSidebar />
        <div className="h-full w-full">{children}</div>
      </div>
    </div>
  )
}
