"use client"

import * as React from "react"

export interface TocItem {
  id: string
  title: string
}

export function DocsToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = React.useState<string | null>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: "0% 0% -80% 0%" }
    )
    for (const { id } of items) {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    }
    return () => observer.disconnect()
  }, [items])

  return (
    <div className="flex flex-col gap-2 p-4 pt-0 text-sm">
      <p className="h-6 text-xs font-medium text-muted-foreground">On This Page</p>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          data-active={item.id === activeId}
          className="text-[0.8rem] text-muted-foreground transition-colors hover:text-foreground data-[active=true]:font-medium data-[active=true]:text-primary"
        >
          {item.title}
        </a>
      ))}
    </div>
  )
}
