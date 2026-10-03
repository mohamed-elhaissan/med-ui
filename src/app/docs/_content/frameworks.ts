import type { BundledLanguage } from "shiki"

import { siteConfig } from "@/lib/site"

export type FrameworkId = "next" | "vite" | "react-router" | "tanstack" | "astro" | "laravel"

export interface Snippet {
  code: string
  lang: BundledLanguage
  title?: string
  label?: string
  note?: string
}

export interface Framework {
  id: FrameworkId
  name: string
  blurb: string
  create: Snippet[]
  css: string
  alias: "@" | "~"
  libDir: string
  rsc: boolean
  fonts: Snippet[]
  darkMode: Snippet[]
  darkNote: string
}

const FONTSOURCE_INSTALL =
  "npm install @fontsource-variable/inter @fontsource-variable/source-serif-4 @fontsource-variable/jetbrains-mono"

const FONTSOURCE_IMPORTS = `import "@fontsource-variable/inter"
import "@fontsource-variable/source-serif-4"
import "@fontsource-variable/jetbrains-mono"`

const FONTSOURCE_CSS = `:root {
  --font-sans: "Inter Variable", sans-serif;
  --font-serif: "Source Serif 4 Variable", serif;
  --font-mono: "JetBrains Mono Variable", monospace;
}`

function fontsource(entry: string, css: string, entryLang: BundledLanguage = "tsx"): Snippet[] {
  return [
    { code: FONTSOURCE_INSTALL, lang: "bash", label: "Fonts install command" },
    { code: FONTSOURCE_IMPORTS, lang: entryLang, title: entry, note: "Import them once:" },
    {
      code: FONTSOURCE_CSS,
      lang: "css",
      title: css,
      note: "Point the theme at them by adding this to the end of your CSS file:",
    },
  ]
}

const PATHS_TSCONFIG = `{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`

const DARK_TOGGLE = `document.documentElement.classList.toggle("dark")`

function darkClass(file: string, lang: BundledLanguage, attr: "class" | "className"): Snippet[] {
  return [
    { code: `<html lang="en" ${attr}="dark">`, lang, title: file, note: "To always use dark mode, add the class to the <html> element:" },
    { code: DARK_TOGGLE, lang: "ts", note: "To build a toggle, flip the class from a button:" },
  ]
}

export const FRAMEWORKS: Framework[] = [
  {
    id: "next",
    name: "Next.js",
    blurb: "Routing, server rendering and SEO out of the box. The best default for most apps.",
    create: [
      { code: "npx create-next-app@latest my-app --src-dir --yes\ncd my-app", lang: "bash", label: "Create command" },
    ],
    css: "src/app/globals.css",
    alias: "@",
    libDir: "src/lib",
    rsc: true,
    fonts: [
      {
        code: `import { Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google"

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
}`,
        lang: "tsx",
        title: "src/app/layout.tsx",
        note: "Load them with next/font in your root layout:",
      },
    ],
    darkMode: [
      { code: "npm install next-themes", lang: "bash", label: "Install command" },
      {
        code: `"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider(props: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props} />
}`,
        lang: "tsx",
        title: "src/components/theme-provider.tsx",
        note: "Create a theme provider:",
      },
      {
        code: `<html lang="en" suppressHydrationWarning>
  <body>
    <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  </body>
</html>`,
        lang: "tsx",
        title: "src/app/layout.tsx",
        note: "Wrap your app with it in the root layout:",
      },
    ],
    darkNote: "Call setTheme(\"light\") or setTheme(\"dark\") from useTheme() to build a toggle.",
  },
  {
    id: "vite",
    name: "Vite",
    blurb: "A light, fast single-page app. Great for dashboards and internal tools.",
    create: [
      {
        code: `npm create vite@latest my-app -- --template react-ts
cd my-app
npm install tailwindcss @tailwindcss/vite
npm install -D @types/node`,
        lang: "bash",
        label: "Create command",
      },
      {
        code: `import path from "path"
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
})`,
        lang: "ts",
        title: "vite.config.ts",
        note: "Add Tailwind and the @/ alias to your Vite config:",
      },
      {
        code: PATHS_TSCONFIG,
        lang: "json",
        title: "tsconfig.app.json",
        note: "Add the same alias to both tsconfig.json and tsconfig.app.json:",
      },
    ],
    css: "src/index.css",
    alias: "@",
    libDir: "src/lib",
    rsc: false,
    fonts: fontsource("src/main.tsx", "src/index.css"),
    darkMode: darkClass("index.html", "html", "class"),
    darkNote: "",
  },
  {
    id: "react-router",
    name: "React Router",
    blurb: "Full-stack React with nested routes, loaders and actions (formerly Remix).",
    create: [
      {
        code: "npm create react-router@latest my-app\ncd my-app",
        lang: "bash",
        label: "Create command",
        note: "Tailwind CSS and the ~/ import alias come configured.",
      },
    ],
    css: "app/app.css",
    alias: "~",
    libDir: "app/lib",
    rsc: false,
    fonts: fontsource("app/root.tsx", "app/app.css"),
    darkMode: darkClass("app/root.tsx", "tsx", "className"),
    darkNote: "",
  },
  {
    id: "tanstack",
    name: "TanStack Start",
    blurb: "Type-safe, full-stack React built on TanStack Router.",
    create: [
      {
        code: "npx @tanstack/cli@latest create my-app\ncd my-app",
        lang: "bash",
        label: "Create command",
        note: "Choose TanStack Start, React and the recommended defaults. Skip any UI library add-ons.",
      },
    ],
    css: "src/styles.css",
    alias: "@",
    libDir: "src/lib",
    rsc: false,
    fonts: fontsource("src/routes/__root.tsx", "src/styles.css"),
    darkMode: darkClass("src/routes/__root.tsx", "tsx", "className"),
    darkNote: "",
  },
  {
    id: "astro",
    name: "Astro",
    blurb: "Content-first sites with React components where you need interactivity.",
    create: [
      {
        code: "npm create astro@latest my-app -- --template with-tailwindcss --install --add react --git\ncd my-app",
        lang: "bash",
        label: "Create command",
      },
      { code: PATHS_TSCONFIG, lang: "json", title: "tsconfig.json", note: "Add the @/ alias to tsconfig.json:" },
    ],
    css: "src/styles/global.css",
    alias: "@",
    libDir: "src/lib",
    rsc: false,
    fonts: fontsource("src/layouts/main.astro", "src/styles/global.css", "astro"),
    darkMode: darkClass("src/layouts/main.astro", "astro", "class"),
    darkNote: "",
  },
  {
    id: "laravel",
    name: "Laravel",
    blurb: "A PHP backend with a React frontend through Inertia, using the React starter kit.",
    create: [
      {
        code: "laravel new my-app\ncd my-app",
        lang: "bash",
        label: "Create command",
        note: "Choose the React starter kit when prompted. It comes with React, TypeScript, Tailwind CSS v4 and the @/ alias.",
      },
    ],
    css: "resources/css/app.css",
    alias: "@",
    libDir: "resources/js/lib",
    rsc: false,
    fonts: fontsource("resources/js/app.tsx", "resources/css/app.css"),
    darkMode: [],
    darkNote: "The React starter kit already includes light, dark and system appearance with a toggle. There's nothing to add.",
  },
]

export function cssDir(framework: Framework) {
  return framework.css.slice(0, framework.css.lastIndexOf("/"))
}

export function componentsJson(framework: Framework) {
  const a = framework.alias
  return JSON.stringify(
    {
      style: "base-nova",
      rsc: framework.rsc,
      tsx: true,
      tailwind: { config: "", css: framework.css, baseColor: "neutral", cssVariables: true, prefix: "" },
      iconLibrary: "lucide",
      aliases: {
        components: `${a}/components`,
        utils: `${a}/lib/utils`,
        ui: `${a}/components/ui`,
        lib: `${a}/lib`,
        hooks: `${a}/hooks`,
      },
      registries: { "@i-ui": `${siteConfig.url}/r/{name}.json` },
    },
    null,
    2
  )
}
