import { Label } from "@/components/ui/label"
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"

export function NativeSelectDemo() {
  return (
    <div className="grid w-full max-w-xs gap-6">
      <div className="grid gap-2">
        <Label htmlFor="native-select-timezone">Time zone</Label>
        <NativeSelect id="native-select-timezone" defaultValue="america-new-york" className="w-full">
          <NativeSelectOptGroup label="Americas">
            <NativeSelectOption value="america-los-angeles">Pacific Time (Los Angeles)</NativeSelectOption>
            <NativeSelectOption value="america-chicago">Central Time (Chicago)</NativeSelectOption>
            <NativeSelectOption value="america-new-york">Eastern Time (New York)</NativeSelectOption>
          </NativeSelectOptGroup>
          <NativeSelectOptGroup label="Europe">
            <NativeSelectOption value="europe-london">Greenwich Mean Time (London)</NativeSelectOption>
            <NativeSelectOption value="europe-paris">Central European Time (Paris)</NativeSelectOption>
          </NativeSelectOptGroup>
          <NativeSelectOptGroup label="Asia Pacific">
            <NativeSelectOption value="asia-tokyo">Japan Standard Time (Tokyo)</NativeSelectOption>
            <NativeSelectOption value="australia-sydney">Australian Eastern Time (Sydney)</NativeSelectOption>
          </NativeSelectOptGroup>
        </NativeSelect>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Label htmlFor="native-select-rows">Rows per page</Label>
        <NativeSelect id="native-select-rows" size="sm" defaultValue="25">
          <NativeSelectOption value="10">10</NativeSelectOption>
          <NativeSelectOption value="25">25</NativeSelectOption>
          <NativeSelectOption value="50">50</NativeSelectOption>
          <NativeSelectOption value="100">100</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  )
}
