import registry from "../../registry.json"

export const components = registry.items
  .filter((item) => item.type === "registry:ui")
  .map(({ name, title }) => ({ name, title }))
  .sort((a, b) => a.title.localeCompare(b.title))

export function getComponent(name: string) {
  return components.find((component) => component.name === name)
}
