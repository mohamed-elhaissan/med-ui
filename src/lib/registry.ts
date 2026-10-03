import registry from "../../registry.json"

export interface ComponentEntry {
  name: string
  title: string
  description: string
  dependencies: string[]
}

export const components: ComponentEntry[] = registry.items
  .filter((item) => item.type === "registry:ui")
  .map((item) => ({
    name: item.name,
    title: item.title,
    description: ("description" in item && item.description) || "",
    dependencies: ("dependencies" in item && item.dependencies) || [],
  }))
  .sort((a, b) => a.title.localeCompare(b.title))

export function getComponent(name: string) {
  return components.find((component) => component.name === name)
}
