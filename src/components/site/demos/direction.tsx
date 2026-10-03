import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DirectionProvider } from "@/components/ui/direction"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export function DirectionDemo() {
  return (
    <DirectionProvider direction="rtl">
      <div
        dir="rtl"
        lang="ar"
        className="flex w-full max-w-sm flex-col gap-5 rounded-xl border p-5"
      >
        <div className="flex flex-col gap-1">
          <h4 className="font-medium">إعدادات الإشعارات</h4>
          <p className="text-sm text-muted-foreground">
            اختر كيف ومتى نتواصل معك.
          </p>
        </div>
        <FieldGroup className="gap-5">
          <Field orientation="horizontal">
            <Checkbox id="direction-email" defaultChecked />
            <FieldContent>
              <FieldLabel htmlFor="direction-email">
                تنبيهات البريد الإلكتروني
              </FieldLabel>
              <FieldDescription className="text-start">
                ملخص أسبوعي بنشاط فريقك.
              </FieldDescription>
            </FieldContent>
          </Field>
          <Field>
            <FieldTitle>مستوى الصوت</FieldTitle>
            <Slider defaultValue={[65]} max={100} aria-label="مستوى الصوت" />
          </Field>
        </FieldGroup>
        <div className="flex gap-2">
          <Button>حفظ</Button>
          <Button variant="outline">إلغاء</Button>
        </div>
      </div>
    </DirectionProvider>
  )
}
