import { ArrowBigUp, Command, CornerDownLeft } from "lucide-react"

import { Kbd, KbdGroup } from "@/components/ui/kbd"

const shortcuts = [
  {
    label: "Open command palette",
    keys: [<Command key="cmd" />, "K"],
  },
  {
    label: "Toggle sidebar",
    keys: [<Command key="cmd" />, "B"],
  },
  {
    label: "Redo",
    keys: [<Command key="cmd" />, <ArrowBigUp key="shift" />, "Z"],
  },
  {
    label: "Send message",
    keys: [<CornerDownLeft key="enter" />],
  },
]

export function KbdDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <ul className="flex flex-col gap-3">
        {shortcuts.map((shortcut) => (
          <li
            key={shortcut.label}
            className="flex items-center justify-between gap-4 text-sm"
          >
            <span className="text-muted-foreground">{shortcut.label}</span>
            <KbdGroup>
              {shortcut.keys.map((key, index) => (
                <Kbd key={index}>{key}</Kbd>
              ))}
            </KbdGroup>
          </li>
        ))}
      </ul>
      <p className="border-t pt-4 text-center text-xs text-muted-foreground">
        Press <Kbd>?</Kbd> anywhere to see all shortcuts.
      </p>
    </div>
  )
}
