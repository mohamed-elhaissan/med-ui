import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

const settings = [
  {
    id: "switch-demo-mentions",
    label: "Mentions",
    description: "Notify me when someone mentions me in a comment.",
    defaultChecked: true,
  },
  {
    id: "switch-demo-digest",
    label: "Weekly digest",
    description: "A summary of project activity every Monday morning.",
    defaultChecked: false,
  },
  {
    id: "switch-demo-marketing",
    label: "Product updates",
    description: "Occasional emails about new features and improvements.",
    defaultChecked: true,
  },
]

export function SwitchDemo() {
  return (
    <FieldGroup className="w-full max-w-sm">
      {settings.map((setting) => (
        <Field key={setting.id} orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor={setting.id}>{setting.label}</FieldLabel>
            <FieldDescription>{setting.description}</FieldDescription>
          </FieldContent>
          <Switch id={setting.id} defaultChecked={setting.defaultChecked} />
        </Field>
      ))}
    </FieldGroup>
  )
}
