import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const options = [
  {
    value: "standard",
    title: "Standard",
    description: "5–7 business days",
    price: "Free",
  },
  {
    value: "express",
    title: "Express",
    description: "2–3 business days",
    price: "$9.99",
  },
  {
    value: "overnight",
    title: "Overnight",
    description: "Next business day, order by 2pm",
    price: "$24.99",
  },
]

export function RadioGroupDemo() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Shipping method</FieldLegend>
      <RadioGroup defaultValue="express">
        {options.map((option) => (
          <FieldLabel key={option.value} htmlFor={`shipping-${option.value}`}>
            <Field orientation="horizontal">
              <RadioGroupItem
                value={option.value}
                id={`shipping-${option.value}`}
              />
              <FieldContent>
                <div className="font-medium">{option.title}</div>
                <FieldDescription>{option.description}</FieldDescription>
              </FieldContent>
              <span className="text-sm font-medium tabular-nums">
                {option.price}
              </span>
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}
