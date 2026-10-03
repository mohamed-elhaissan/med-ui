import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

export function CheckboxDemo() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field orientation="horizontal">
        <Checkbox id="checkbox-terms" defaultChecked />
        <FieldLabel htmlFor="checkbox-terms">
          Accept terms and conditions
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="checkbox-updates" />
        <FieldContent>
          <FieldLabel htmlFor="checkbox-updates">
            Send me product updates
          </FieldLabel>
          <FieldDescription>
            A short email when we ship something new. No more than twice a
            month.
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal" data-disabled="true">
        <Checkbox id="checkbox-beta" disabled />
        <FieldLabel htmlFor="checkbox-beta">
          Join the beta program (invite only)
        </FieldLabel>
      </Field>
    </FieldGroup>
  )
}
