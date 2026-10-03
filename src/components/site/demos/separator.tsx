import { Separator } from "@/components/ui/separator"

export function SeparatorDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 text-sm">
      <div className="flex flex-col gap-1.5">
        <h4 className="leading-none font-medium">Acme Design System</h4>
        <p className="text-muted-foreground">
          Tokens, components and patterns for every Acme product.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-4">
        <span>Overview</span>
        <Separator orientation="vertical" />
        <span>Components</span>
        <Separator orientation="vertical" />
        <span>Changelog</span>
      </div>
    </div>
  )
}
