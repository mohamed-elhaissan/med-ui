import {
  BoldIcon,
  BookmarkIcon,
  ItalicIcon,
  StarIcon,
  UnderlineIcon,
} from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-1">
        <Toggle aria-label="Toggle bold" defaultPressed>
          <BoldIcon />
        </Toggle>
        <Toggle aria-label="Toggle italic">
          <ItalicIcon />
        </Toggle>
        <Toggle aria-label="Toggle underline">
          <UnderlineIcon />
        </Toggle>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Toggle variant="outline" aria-label="Save to reading list">
          <BookmarkIcon className="group-data-pressed/toggle:fill-current" />
          Bookmark
        </Toggle>
        <Toggle variant="outline" size="sm" aria-label="Add to favorites">
          <StarIcon className="group-data-pressed/toggle:fill-current" />
          Favorite
        </Toggle>
        <Toggle aria-label="Disabled toggle" disabled>
          Disabled
        </Toggle>
      </div>
    </div>
  )
}
