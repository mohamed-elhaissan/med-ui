"use client"

import * as React from "react"
import {
  Calendar,
  ChartColumn,
  FolderKanban,
  Inbox,
  LayoutDashboard,
  LifeBuoy,
  Users,
  type LucideIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

interface NavItem {
  title: string
  icon: LucideIcon
  badge?: string
}

const groups: { label: string; items: NavItem[] }[] = [
  {
    label: "Workspace",
    items: [
      { title: "Dashboard", icon: LayoutDashboard },
      { title: "Inbox", icon: Inbox, badge: "12" },
      { title: "Calendar", icon: Calendar },
      { title: "Projects", icon: FolderKanban, badge: "4" },
    ],
  },
  {
    label: "Team",
    items: [
      { title: "Members", icon: Users },
      { title: "Reports", icon: ChartColumn },
    ],
  },
]

export function SidebarDemo() {
  const [active, setActive] = React.useState("Dashboard")

  return (
    // The provider normally fills the viewport (min-h-svh); pin it to this box.
    // collapsible="none" renders a static flex child instead of a fixed panel.
    <div className="h-[420px] w-full overflow-hidden rounded-xl border">
      <SidebarProvider className="h-full min-h-0">
        <Sidebar collapsible="none" className="border-r max-sm:w-full">
          <SidebarHeader>
            <div className="flex items-center gap-2 p-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sm font-semibold text-sidebar-primary-foreground">
                N
              </div>
              <div className="grid text-sm leading-tight">
                <span className="font-medium">Northwind</span>
                <span className="text-xs text-sidebar-foreground/70">
                  Pro workspace
                </span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            {groups.map((group) => (
              <SidebarGroup key={group.label}>
                <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          isActive={active === item.title}
                          onClick={() => setActive(item.title)}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                        {item.badge && (
                          <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                        )}
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <LifeBuoy />
                  <span>Help &amp; support</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <div className="hidden min-w-0 flex-1 flex-col bg-background sm:flex">
          <header className="flex h-12 shrink-0 items-center border-b px-4 text-sm font-medium">
            {active}
          </header>
          <div className="grid flex-1 grid-cols-3 grid-rows-[auto_1fr] gap-3 p-4">
            <div className="aspect-video rounded-lg bg-muted/60" />
            <div className="aspect-video rounded-lg bg-muted/60" />
            <div className="aspect-video rounded-lg bg-muted/60" />
            <div className="col-span-3 rounded-lg bg-muted/60" />
          </div>
        </div>
      </SidebarProvider>
    </div>
  )
}
