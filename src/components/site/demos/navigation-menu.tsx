import type { LucideIcon } from "lucide-react"
import { BookOpen, LayoutDashboard, Rocket, ShieldCheck, Users, Zap } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface MenuEntry {
  title: string
  description: string
  icon: LucideIcon
}

const product: MenuEntry[] = [
  { title: "Analytics", description: "Track signups, retention, and revenue in one place.", icon: LayoutDashboard },
  { title: "Automations", description: "Trigger workflows when your data changes.", icon: Zap },
  { title: "Team spaces", description: "Share dashboards and notes with your team.", icon: Users },
  { title: "Security", description: "SSO, audit logs, and granular permissions.", icon: ShieldCheck },
]

const resources: MenuEntry[] = [
  { title: "Documentation", description: "Guides and API reference.", icon: BookOpen },
  { title: "Changelog", description: "What shipped this week.", icon: Rocket },
]

function MenuLink({ title, description, icon: Icon }: MenuEntry) {
  return (
    <li>
      <NavigationMenuLink href="#navigation-menu" className="items-start gap-3">
        <Icon className="mt-0.5 text-muted-foreground" />
        <div className="flex flex-col gap-1">
          <span className="leading-none font-medium">{title}</span>
          <span className="line-clamp-2 text-muted-foreground">{description}</span>
        </div>
      </NavigationMenuLink>
    </li>
  )
}

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[min(32rem,calc(100vw-2rem))] gap-1 sm:grid-cols-2">
              {product.map((entry) => (
                <MenuLink key={entry.title} {...entry} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-64 gap-1">
              {resources.map((entry) => (
                <MenuLink key={entry.title} {...entry} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#navigation-menu" className={navigationMenuTriggerStyle()}>
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
