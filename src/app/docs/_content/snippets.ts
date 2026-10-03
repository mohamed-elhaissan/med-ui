import { readFileSync } from "node:fs"
import { join } from "node:path"

import { siteConfig } from "@/lib/site"

const SITE_ONLY_MARKER = "/* @site-only"

export function themeCss() {
  const css = readFileSync(join(process.cwd(), "src", "app", "globals.css"), "utf8")
  return css
    .slice(0, css.indexOf(SITE_ONLY_MARKER))
    .replace('@import "../styles/base.css";', '@import "./base.css";')
    .trim()
}

export const DEPENDENCIES = "npm install cn tw-animate-css lucide-react"

export function downloadBaseCss(path: string) {
  return `curl -o ${path} ${siteConfig.url}/base.css`
}

export const UTILS = `export { cn } from "cn"`

export const OWN_COMPONENT = `// src/components/ui/price-tag.tsx
import { cn } from "@/lib/utils"

export function PriceTag({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn("rounded-md bg-primary/10 px-2 py-0.5 text-sm text-primary", className)}
      {...props}
    />
  )
}`
