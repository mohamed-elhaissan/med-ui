# med-ui

**Components you own. Styled your way.**

med-ui is a collection of 62 accessible, beautifully designed React components that you copy into your project with one command. It is not an npm package: the source code lands in your codebase, so you can read it, change it, and ship it as your own.

[**Documentation**](https://ui.elhcn.com/docs) · [**Components**](https://ui.elhcn.com/docs/components) · [**Theming**](https://ui.elhcn.com/docs/theming) · [**MCP**](https://ui.elhcn.com/docs/mcp)

---

## Features

- **62 components**, from Button and Input to Sidebar, Chart, Calendar, Command and chat components like Message and Bubble.
- **You own the code.** Every component is a plain `.tsx` file in your project. No wrapper API, no lock-in.
- **Accessible by default.** Built on [Base UI](https://base-ui.com) primitives with keyboard and screen-reader support.
- **Themeable.** Colors, radius and fonts come from CSS variables. Change a few tokens and the whole library follows.
- **Dark mode** out of the box.
- **Works with your framework:** Next.js, Vite, React Router, TanStack Start, Astro and Laravel.
- **AI-ready.** Connect Claude Code, Cursor, VS Code, Codex or OpenCode through the MCP server and let your assistant install components for you.

## Quick start

Follow the [setup guide](https://ui.elhcn.com/docs) once (framework, fonts, theme and `components.json`), then install everything with one command:

```bash
npx shadcn@4.21.1 add @med-ui/all
```

Or add only what you need:

```bash
npx shadcn@4.21.1 add @med-ui/button @med-ui/dialog @med-ui/field
```

You can also install any component straight from its URL, without any registry setup:

```bash
npx shadcn@4.21.1 add https://ui.elhcn.com/r/button.json
```

Then import it like any other file:

```tsx
import { Button } from "@/components/ui/button"

export default function Page() {
  return <Button>Get started</Button>
}
```

## Requirements

- React 19
- Tailwind CSS v4
- Node.js 20 or newer
- TypeScript (recommended)

## Theming

med-ui ships a Linear-inspired palette with a near-black canvas and a lavender-blue accent, set in Inter, Source Serif 4 and JetBrains Mono. Every color is a CSS variable, so rebranding means editing `:root` and `.dark` in your global CSS. No component code needs to change. See [Theming](https://ui.elhcn.com/docs/theming).

## Use with AI assistants (MCP)

```bash
npx shadcn@4.21.1 mcp init --client claude
```

Replace `claude` with `cursor`, `vscode`, `codex` or `opencode`. Then ask things like *"Add the med-ui sidebar and build a settings page with it."* See [MCP](https://ui.elhcn.com/docs/mcp).

## Running this project locally

This repository is the documentation site and the component registry.

```bash
git clone https://github.com/mohamed-elhaissan/i-ui.git
cd i-ui
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the docs site locally |
| `npm run build` | Production build |
| `npm run lint` | Lint the project |
| `npm run registry:build` | Rebuild `registry.json` and the installable files in `public/r` |

### Project structure

```
src/
  components/ui/     the components (this is what users install)
  components/site/   the docs site itself, plus one demo per component
  app/docs/          documentation pages
  styles/base.css    base animations and variants the components rely on
scripts/
  build-registry.mjs builds the registry from src/components/ui
public/r/            generated registry files served at /r/<name>.json
```

### Adding a component

1. Create `src/components/ui/your-component.tsx`.
2. Add a demo in `src/components/site/demos/` and register it in `demos/index.ts`.
3. Run `npm run registry:build`.

The component gets its own docs page, a place in the sidebar and an install URL automatically.

## Built with

[Next.js](https://nextjs.org) · [React](https://react.dev) · [Tailwind CSS](https://tailwindcss.com) · [Base UI](https://base-ui.com) · [Shiki](https://shiki.style) · [lucide](https://lucide.dev)

Component designs are adapted from [shadcn/ui](https://ui.shadcn.com) (MIT).
