import { components } from "@/lib/registry"

export interface DocLink {
  name: string
  href: string
}

export const DOCS_SECTIONS: DocLink[] = [
  { name: "Introduction", href: "/docs" },
  { name: "Theming", href: "/docs/theming" },
  { name: "MCP", href: "/docs/mcp" },
]

export const NEW_COMPONENTS = [
  "attachment",
  "bubble",
  "marker",
  "message",
  "message-scroller",
  "questionnaire",
]

export const COMPONENT_LINKS: DocLink[] = components.map((component) => ({
  name: component.title,
  href: `/docs/components/${component.name}`,
}))

const DOCS_ORDER = [
  ...DOCS_SECTIONS,
  { name: "Components", href: "/docs/components" },
  ...COMPONENT_LINKS,
]

export function getNeighbours(href: string) {
  const index = DOCS_ORDER.findIndex((page) => page.href === href)
  return {
    previous: index > 0 ? DOCS_ORDER[index - 1] : null,
    next: index >= 0 && index < DOCS_ORDER.length - 1 ? DOCS_ORDER[index + 1] : null,
  }
}
