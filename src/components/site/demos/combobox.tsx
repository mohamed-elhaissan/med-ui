"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"

const frameworks = [
  "Next.js",
  "React Router",
  "Astro",
  "SvelteKit",
  "Nuxt",
  "SolidStart",
  "TanStack Start",
  "Vite",
]

export function ComboboxDemo() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="combobox-framework">Framework</FieldLabel>
      <Combobox items={frameworks}>
        <ComboboxInput
          id="combobox-framework"
          placeholder="Search frameworks..."
        />
        <ComboboxContent>
          <ComboboxEmpty>No framework found.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldDescription>We&apos;ll tailor the setup guide to it.</FieldDescription>
    </Field>
  )
}
