import type { ComponentType } from "react"

import { AccordionDemo } from "./accordion"
import { AlertDemo } from "./alert"
import { AlertDialogDemo } from "./alert-dialog"
import { AspectRatioDemo } from "./aspect-ratio"
import { AttachmentDemo } from "./attachment"
import { AvatarDemo } from "./avatar"
import { BadgeDemo } from "./badge"
import { BreadcrumbDemo } from "./breadcrumb"
import { BubbleDemo } from "./bubble"
import { ButtonDemo } from "./button"
import { ButtonGroupDemo } from "./button-group"
import { CalendarDemo } from "./calendar"
import { CardDemo } from "./card"
import { CarouselDemo } from "./carousel"
import { ChartDemo } from "./chart"
import { CheckboxDemo } from "./checkbox"
import { CollapsibleDemo } from "./collapsible"
import { ComboboxDemo } from "./combobox"
import { CommandDemo } from "./command"
import { ContextMenuDemo } from "./context-menu"
import { DialogDemo } from "./dialog"
import { DirectionDemo } from "./direction"
import { DrawerDemo } from "./drawer"
import { DropdownMenuDemo } from "./dropdown-menu"
import { EmptyDemo } from "./empty"
import { FieldDemo } from "./field"
import { HoverCardDemo } from "./hover-card"
import { InputDemo } from "./input"
import { InputGroupDemo } from "./input-group"
import { InputOtpDemo } from "./input-otp"
import { ItemDemo } from "./item"
import { KbdDemo } from "./kbd"
import { LabelDemo } from "./label"
import { MarkerDemo } from "./marker"
import { MenubarDemo } from "./menubar"
import { MessageDemo } from "./message"
import { MessageScrollerDemo } from "./message-scroller"
import { NativeSelectDemo } from "./native-select"
import { NavigationMenuDemo } from "./navigation-menu"
import { PaginationDemo } from "./pagination"
import { PopoverDemo } from "./popover"
import { ProgressDemo } from "./progress"
import { QuestionnaireDemo } from "./questionnaire"
import { RadioGroupDemo } from "./radio-group"
import { ResizableDemo } from "./resizable"
import { ScrollAreaDemo } from "./scroll-area"
import { SelectDemo } from "./select"
import { SeparatorDemo } from "./separator"
import { SheetDemo } from "./sheet"
import { SidebarDemo } from "./sidebar"
import { SkeletonDemo } from "./skeleton"
import { SliderDemo } from "./slider"
import { SonnerDemo } from "./sonner"
import { SpinnerDemo } from "./spinner"
import { SwitchDemo } from "./switch"
import { TableDemo } from "./table"
import { TabsDemo } from "./tabs"
import { TextareaDemo } from "./textarea"
import { ToastDemo } from "./toast"
import { ToggleDemo } from "./toggle"
import { ToggleGroupDemo } from "./toggle-group"
import { TooltipDemo } from "./tooltip"

export const demos: Record<string, ComponentType> = {
  "accordion": AccordionDemo,
  "alert": AlertDemo,
  "alert-dialog": AlertDialogDemo,
  "aspect-ratio": AspectRatioDemo,
  "attachment": AttachmentDemo,
  "avatar": AvatarDemo,
  "badge": BadgeDemo,
  "breadcrumb": BreadcrumbDemo,
  "bubble": BubbleDemo,
  "button": ButtonDemo,
  "button-group": ButtonGroupDemo,
  "calendar": CalendarDemo,
  "card": CardDemo,
  "carousel": CarouselDemo,
  "chart": ChartDemo,
  "checkbox": CheckboxDemo,
  "collapsible": CollapsibleDemo,
  "combobox": ComboboxDemo,
  "command": CommandDemo,
  "context-menu": ContextMenuDemo,
  "dialog": DialogDemo,
  "direction": DirectionDemo,
  "drawer": DrawerDemo,
  "dropdown-menu": DropdownMenuDemo,
  "empty": EmptyDemo,
  "field": FieldDemo,
  "hover-card": HoverCardDemo,
  "input": InputDemo,
  "input-group": InputGroupDemo,
  "input-otp": InputOtpDemo,
  "item": ItemDemo,
  "kbd": KbdDemo,
  "label": LabelDemo,
  "marker": MarkerDemo,
  "menubar": MenubarDemo,
  "message": MessageDemo,
  "message-scroller": MessageScrollerDemo,
  "native-select": NativeSelectDemo,
  "navigation-menu": NavigationMenuDemo,
  "pagination": PaginationDemo,
  "popover": PopoverDemo,
  "progress": ProgressDemo,
  "questionnaire": QuestionnaireDemo,
  "radio-group": RadioGroupDemo,
  "resizable": ResizableDemo,
  "scroll-area": ScrollAreaDemo,
  "select": SelectDemo,
  "separator": SeparatorDemo,
  "sheet": SheetDemo,
  "sidebar": SidebarDemo,
  "skeleton": SkeletonDemo,
  "slider": SliderDemo,
  "sonner": SonnerDemo,
  "spinner": SpinnerDemo,
  "switch": SwitchDemo,
  "table": TableDemo,
  "tabs": TabsDemo,
  "textarea": TextareaDemo,
  "toast": ToastDemo,
  "toggle": ToggleDemo,
  "toggle-group": ToggleGroupDemo,
  "tooltip": TooltipDemo,
}
