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
      className="font-medium text-primary underline-offset-4 transition-colors hover:underline"
    >
      {children}
    </a>
  )
}
