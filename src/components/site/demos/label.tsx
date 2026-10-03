import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LabelDemo() {
  return (
    <div className="grid w-full max-w-xs gap-6">
      <div className="grid gap-2">
        <Label htmlFor="label-demo-name">Display name</Label>
        <Input id="label-demo-name" placeholder="Jordan Lee" />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="label-demo-terms" defaultChecked />
        <Label htmlFor="label-demo-terms">Email me about product updates</Label>
      </div>
    </div>
  )
}
