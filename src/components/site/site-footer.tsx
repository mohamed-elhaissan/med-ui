import { siteConfig } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="px-4 xl:px-6">
      <div className="flex h-14 items-center justify-center px-1 text-center text-xs leading-loose text-muted-foreground sm:text-sm">
        {siteConfig.name}. The source code is available on{" "}
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 font-medium underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </div>
    </footer>
  )
}
