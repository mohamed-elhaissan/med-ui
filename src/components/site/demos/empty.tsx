import { ArrowUpRightIcon, FolderCodeIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyDemo() {
  return (
    <Empty className="max-w-md border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderCodeIcon />
        </EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          Projects keep your components, themes and docs in one place. Create
          your first one or import an existing repository.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button>
            <PlusIcon data-icon="inline-start" />
            New project
          </Button>
          <Button variant="outline">Import repository</Button>
        </div>
        <Button variant="link" size="sm" className="text-muted-foreground">
          Read the docs
          <ArrowUpRightIcon data-icon="inline-end" />
        </Button>
      </EmptyContent>
    </Empty>
  )
}
