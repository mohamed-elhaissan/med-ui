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

export const CREATE_NEXT = `npx create-next-app@latest my-app --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
cd my-app`

export const CREATE_VITE = `npm create vite@latest my-app -- --template react-ts
cd my-app
npm install tailwindcss @tailwindcss/vite
npm install -D @types/node`

export const VITE_CONFIG = `import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`

export const VITE_TSCONFIG = `{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`

export const DEPENDENCIES = "npm install cn tw-animate-css lucide-react"

export const FONTS_NEXT = `import { Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google"

import "./globals.css"

const sans = Inter({ variable: "--font-sans", subsets: ["latin"] })
const serif = Source_Serif_4({ variable: "--font-serif", subsets: ["latin"] })
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={\`\${sans.variable} \${serif.variable} \${mono.variable}\`}>
      <body>{children}</body>
    </html>
  )
}`

export const FONTS_VITE_INSTALL =
  "npm install @fontsource-variable/inter @fontsource-variable/source-serif-4 @fontsource-variable/jetbrains-mono"

export const FONTS_VITE_IMPORTS = `import "@fontsource-variable/inter"
import "@fontsource-variable/source-serif-4"
import "@fontsource-variable/jetbrains-mono"`

export const FONTS_VITE_CSS = `:root {
  --font-sans: "Inter Variable", sans-serif;
  --font-serif: "Source Serif 4 Variable", serif;
  --font-mono: "JetBrains Mono Variable", monospace;
}`

export function downloadBaseCss(path: string) {
  return `curl -o ${path} ${siteConfig.url}/base.css`
}

export const UTILS = `export { cn } from "cn"`

export function componentsJson({ rsc, css }: { rsc: boolean; css: string }) {
  return JSON.stringify(
    {
      style: "base-nova",
      rsc,
      tsx: true,
      tailwind: { config: "", css, baseColor: "neutral", cssVariables: true, prefix: "" },
      iconLibrary: "lucide",
      aliases: {
        components: "@/components",
        utils: "@/lib/utils",
        ui: "@/components/ui",
        lib: "@/lib",
        hooks: "@/hooks",
      },
      registries: { "@i-ui": `${siteConfig.url}/r/{name}.json` },
    },
    null,
    2
  )
}

export const THEME_PROVIDER = `"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider(props: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props} />
}`

export const THEME_PROVIDER_USAGE = `<html lang="en" suppressHydrationWarning>
  <body>
    <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  </body>
</html>`

export const DARK_VITE = `<!-- index.html -->
<html lang="en" class="dark">`

export const DARK_VITE_TOGGLE = `document.documentElement.classList.toggle("dark")`

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
