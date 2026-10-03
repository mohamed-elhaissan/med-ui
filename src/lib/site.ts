export const siteConfig = {
  name: "i-ui",
  description: "A custom component library built on shadcn/ui.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  github: "https://github.com/mohamed-elhaissan/i-ui",
}

export function installCommand(component: string) {
  return `npx shadcn@latest add ${siteConfig.url}/r/${component}.json`
}
