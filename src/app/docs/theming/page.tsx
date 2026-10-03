import type { Metadata } from "next"

import { CodeBlock } from "@/components/site/code-block"
import { DocsPage } from "@/components/site/docs-page"
import { Code, H2, P } from "@/components/site/docs-typography"

export const metadata: Metadata = { title: "Theming · i-ui" }

const TOKENS = `:root {
  --background: #ffffff;
  --foreground: #0f1011;
  --primary: #5e6ad2;
  --primary-foreground: #ffffff;
  --muted: #f6f7f7;
  --muted-foreground: #62666d;
  --border: #e3e4e6;
  --radius: 0.625rem;
}

.dark {
  --background: #010102;
  --foreground: #f7f8f8;
  --card: #0f1011;
  --primary: #5e6ad2;
  --muted: #141516;
  --muted-foreground: #8a8f98;
  --border: #23252a;
}`

const USAGE = `<div className="bg-background text-foreground" />
<div className="bg-primary text-primary-foreground" />
<p className="text-muted-foreground" />`

export default function ThemingPage() {
  return (
    <DocsPage
      href="/docs/theming"
      title="Theming"
      description="Every component reads its colors, radius and fonts from CSS variables, so one set of tokens restyles the whole library."
      toc={[
        { id: "css-variables", title: "CSS Variables" },
        { id: "convention", title: "Convention" },
        { id: "dark-mode", title: "Dark Mode" },
      ]}
    >
      <H2 id="css-variables">CSS Variables</H2>
      <P>
        i-ui ships a Linear-inspired palette: a near-black canvas, charcoal surfaces, hairline
        borders and a lavender-blue accent. The tokens live in your global CSS file:
      </P>
      <CodeBlock lang="css" title="app/globals.css" code={TOKENS} className="mt-6" />

      <H2 id="convention">Convention</H2>
      <P>
        Tokens come in pairs: a background token and a <Code>-foreground</Code> token for text on
        top of it. Use them through Tailwind utilities:
      </P>
      <CodeBlock code={USAGE} className="mt-6" />

      <H2 id="dark-mode">Dark Mode</H2>
      <P>
        Dark values live under the <Code>.dark</Code> class. This site defaults to dark and lets
        visitors switch with the toggle in the header. To rebrand, change the values in{" "}
        <Code>:root</Code> and <Code>.dark</Code>; no component code needs to change.
      </P>
    </DocsPage>
  )
}
