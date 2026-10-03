"use client"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function FieldDemo() {
  return (
    <form
      className="w-full max-w-md"
      onSubmit={(event) => event.preventDefault()}
    >
      <FieldSet>
        <FieldLegend>Workspace</FieldLegend>
        <FieldDescription>
          These details are shown to everyone you invite.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="field-workspace-name">Name</FieldLabel>
            <Input id="field-workspace-name" placeholder="Acme Design" />
          </Field>
          <Field>
            <FieldLabel htmlFor="field-workspace-url">URL</FieldLabel>
            <Input id="field-workspace-url" placeholder="acme-design" />
            <FieldDescription>
              Lowercase letters, numbers and dashes only.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="field-workspace-about">About</FieldLabel>
            <Textarea
              id="field-workspace-about"
              placeholder="What does your team work on?"
              className="resize-none"
            />
          </Field>
          <FieldSeparator />
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="field-workspace-public">
                Public workspace
              </FieldLabel>
              <FieldDescription>
                Anyone with the link can view published pages.
              </FieldDescription>
            </FieldContent>
            <Switch id="field-workspace-public" defaultChecked />
          </Field>
          <Field orientation="horizontal">
            <Button type="submit">Save workspace</Button>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}
