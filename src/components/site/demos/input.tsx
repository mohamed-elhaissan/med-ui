import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <div className="grid gap-2">
        <Label htmlFor="input-demo-email">Work email</Label>
        <Input
          id="input-demo-email"
          type="email"
          placeholder="jordan@acme.com"
          autoComplete="email"
        />
        <p className="text-xs text-muted-foreground">
          We&apos;ll send a sign-in link to this address.
        </p>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="input-demo-avatar">Profile photo</Label>
        <Input id="input-demo-avatar" type="file" accept="image/*" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="input-demo-workspace">Workspace URL</Label>
        <Input
          id="input-demo-workspace"
          defaultValue="acme.i-ui.dev"
          disabled
        />
      </div>
    </div>
  )
}
