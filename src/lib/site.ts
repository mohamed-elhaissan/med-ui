export const siteConfig = {
  name: "i-ui",
  description: "Beautifully designed components you install and own.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ui.elhcn.com",
  github: "https://github.com/mohamed-elhaissan/i-ui",
  navItems: [
    { href: "/", label: "Home" },
    { href: "/docs", label: "Docs" },
    { href: "/docs/components", label: "Components" },
  ],
}

export function registryItemUrl(component: string) {
  return `${siteConfig.url}/r/${component}.json`
}

export function installCommand(component: string) {
  return `npx shadcn@latest add ${registryItemUrl(component)}`
}
