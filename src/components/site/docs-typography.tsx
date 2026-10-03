import { AlertTriangleIcon, InfoIcon, LightbulbIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-10 scroll-m-28 text-xl font-medium tracking-tight first:mt-0 lg:mt-12"
    >
      {children}
    </h2>
  )
}

export function H3({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="mt-8 scroll-m-28 text-lg font-medium tracking-tight">
      {children}
    </h3>
  )
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="leading-relaxed [&:not(:first-child)]:mt-6">{children}</p>
}

export function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] break-words">
      {children}
    </code>
  )
}

export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
}

export function Steps({ children }: { children: React.ReactNode }) {
  return <div className="mt-6 flex flex-col gap-4 [&>figure]:mt-0">{children}</div>
}

export function DocLinkA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="font-semibold text-foreground underline decoration-primary decoration-1 underline-offset-4 transition-all hover:decoration-2"
    >
      {children}
    </a>
  )
}

const CALLOUTS = {
  info: { icon: InfoIcon, className: "border-border bg-muted/50 text-foreground" },
  tip: {
    icon: LightbulbIcon,
    className: "border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300",
  },
  warning: {
    icon: AlertTriangleIcon,
    className: "border-amber-500/30 bg-amber-500/10 text-amber-800 dark:text-amber-300",
  },
}

export function Callout({
  type = "info",
  children,
}: {
  type?: keyof typeof CALLOUTS
  children: React.ReactNode
}) {
  const { icon: Icon, className } = CALLOUTS[type]
  return (
    <div
      className={cn(
        "mt-6 flex gap-3 rounded-xl border px-4 py-3.5 text-sm leading-relaxed font-medium [&_a]:text-current [&_a]:decoration-current [&_code]:bg-background/40",
        className
      )}
    >
      <Icon className="mt-0.5 size-4 shrink-0" />
      <div>{children}</div>
    </div>
  )
}
