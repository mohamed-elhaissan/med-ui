import { Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <Settings data-icon="inline-start" />
        Workspace settings
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Workspace settings</SheetTitle>
          <SheetDescription>
            Update how your workspace appears to teammates. Changes apply
            immediately after saving.
          </SheetDescription>
        </SheetHeader>
        <FieldGroup className="px-4">
          <Field>
            <FieldLabel htmlFor="sheet-workspace-name">Workspace name</FieldLabel>
            <Input id="sheet-workspace-name" defaultValue="Northwind Studio" />
          </Field>
          <Field>
            <FieldLabel htmlFor="sheet-workspace-url">Workspace URL</FieldLabel>
            <Input id="sheet-workspace-url" defaultValue="northwind" />
          </Field>
          <Field>
            <FieldLabel htmlFor="sheet-workspace-email">Billing email</FieldLabel>
            <Input
              id="sheet-workspace-email"
              type="email"
              defaultValue="billing@northwind.co"
            />
          </Field>
        </FieldGroup>
        <SheetFooter>
          <SheetClose render={<Button />}>Save changes</SheetClose>
          <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
