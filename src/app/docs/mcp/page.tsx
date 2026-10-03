import type { Metadata } from "next"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/site/code-block"
import { DocsPage } from "@/components/site/docs-page"
import { Code, DocLinkA, H2, P, UL } from "@/components/site/docs-typography"

export const metadata: Metadata = { title: "MCP Server · i-ui" }

const CLIENTS = [
  { value: "claude", label: "Claude Code" },
  { value: "cursor", label: "Cursor" },
  { value: "vscode", label: "VS Code" },
  { value: "codex", label: "Codex" },
  { value: "opencode", label: "OpenCode" },
]

const MCP_CONFIG = JSON.stringify(
  { mcpServers: { shadcn: { command: "npx", args: ["shadcn@latest", "mcp"] } } },
  null,
  2
)

export default function McpPage() {
  return (
    <DocsPage
      href="/docs/mcp"
      title="MCP Server"
      description="Let your AI assistant browse, search and install i-ui components using natural language."
      toc={[
        { id: "how-it-works", title: "How It Works" },
        { id: "quick-start", title: "Quick Start" },
        { id: "manual-setup", title: "Manual Setup" },
        { id: "example-prompts", title: "Example Prompts" },
      ]}
    >
      <H2 id="how-it-works">How It Works</H2>
      <P>
        The shadcn CLI ships an MCP (Model Context Protocol) server. Once connected, your AI
        assistant can list every registry configured in your <Code>components.json</Code>, read
        component source and examples, and install components into your project, including
        everything from i-ui.
      </P>

      <H2 id="quick-start">Quick Start</H2>
      <P>
        First, add the <Code>@i-ui</Code> registry to your project as described in{" "}
        <DocLinkA href="/docs#add-registry">Installation</DocLinkA>. Then run the
        setup command for your client:
      </P>
      <Tabs defaultValue="claude" className="mt-6 gap-4">
        <TabsList variant="line">
          {CLIENTS.map((client) => (
            <TabsTrigger key={client.value} value={client.value}>
              {client.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {CLIENTS.map((client) => (
          <TabsContent key={client.value} value={client.value}>
            <CodeBlock code={`npx shadcn@latest mcp init --client ${client.value}`} />
          </TabsContent>
        ))}
      </Tabs>
      <P>Restart your client afterwards so it picks up the new server.</P>

      <H2 id="manual-setup">Manual Setup</H2>
      <P>
        If your client isn&apos;t listed, add the server to its MCP configuration yourself. For
        Claude Code, that is <Code>.mcp.json</Code> in your project root:
      </P>
      <CodeBlock title=".mcp.json" code={MCP_CONFIG} className="mt-6" />

      <H2 id="example-prompts">Example Prompts</H2>
      <P>Once connected, ask your assistant things like:</P>
      <UL>
        <li>Show me all the components in the i-ui registry.</li>
        <li>Add the i-ui button, dialog and field components to my project.</li>
        <li>Build a settings page with a sidebar using i-ui components.</li>
      </UL>
    </DocsPage>
  )
}
