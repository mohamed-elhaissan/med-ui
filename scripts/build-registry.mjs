// Generates registry.json from src/components/ui, src/hooks and src/lib/utils.ts by reading each file's imports.
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs"
import { basename, extname, join } from "node:path"

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ui.elhcn.com"
const DESCRIPTIONS = JSON.parse(readFileSync("scripts/descriptions.json", "utf8"))
const PEER_PACKAGES = new Set(["react", "react-dom", "next"])

const sources = [
  { dir: "src/components/ui", type: "registry:ui", alias: "@/components/ui/" },
  { dir: "src/hooks", type: "registry:hook", alias: "@/hooks/" },
]

function title(name) {
  return name
    .split("-")
    .map((part) => (part === "otp" ? "OTP" : part[0].toUpperCase() + part.slice(1)))
    .join(" ")
}

function packageName(specifier) {
  const parts = specifier.split("/")
  return specifier.startsWith("@") ? parts.slice(0, 2).join("/") : parts[0]
}

function itemUrl(name) {
  return `${BASE_URL}/r/${name}.json`
}

function readImports(path) {
  const code = readFileSync(path, "utf8")
  const pattern = /(?:import|export)\s[^"']*?from\s*["']([^"']+)["']|import\s*["']([^"']+)["']/g
  return [...code.matchAll(pattern)].map((match) => match[1] ?? match[2])
}

function buildItem(path, type, name) {
  const dependencies = new Set()
  const registryDependencies = new Set()

  for (const specifier of readImports(path)) {
    const local = sources.find((source) => specifier.startsWith(source.alias))
    if (local) {
      const dep = specifier.slice(local.alias.length)
      if (dep !== name) registryDependencies.add(itemUrl(dep))
    } else if (specifier === "@/lib/utils") {
      registryDependencies.add(itemUrl("utils"))
    } else if (!specifier.startsWith(".") && !specifier.startsWith("@/")) {
      const pkg = packageName(specifier)
      if (!PEER_PACKAGES.has(pkg)) dependencies.add(pkg)
    }
  }

  return {
    name,
    type,
    title: title(name),
    ...(DESCRIPTIONS[name] && { description: DESCRIPTIONS[name] }),
    ...(dependencies.size && { dependencies: [...dependencies].sort() }),
    ...(registryDependencies.size && { registryDependencies: [...registryDependencies].sort() }),
    files: [{ path: path.replaceAll("\\", "/"), type }],
  }
}

const items = []

for (const { dir, type } of sources) {
  if (!existsSync(dir)) continue
  for (const file of readdirSync(dir).sort()) {
    if (![".ts", ".tsx"].includes(extname(file))) continue
    items.push(buildItem(join(dir, file), type, basename(file, extname(file))))
  }
}

items.push(buildItem("src/lib/utils.ts", "registry:lib", "utils"))

items.push({
  name: "all",
  type: "registry:item",
  title: "All Components",
  description: "Every i-ui component in one install.",
  registryDependencies: items
    .filter((item) => item.type === "registry:ui")
    .map((item) => itemUrl(item.name)),
})

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "i-ui",
  homepage: BASE_URL,
  items,
}

writeFileSync("registry.json", JSON.stringify(registry, null, 2) + "\n")
mkdirSync("public", { recursive: true })
copyFileSync("src/styles/base.css", "public/base.css")
console.log(`registry.json: ${items.length} items (${BASE_URL})`)
