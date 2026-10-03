import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const stats = [
  { label: "Visitors", value: "12.4k" },
  { label: "Signups", value: "842" },
  { label: "Conversion", value: "6.8%" },
]

const activity = [
  { who: "Priya", what: "published the pricing page", when: "2h ago" },
  { who: "Marcus", what: "updated the onboarding emails", when: "Yesterday" },
  { who: "Elena", what: "invited 3 teammates", when: "Mon" },
]

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <div className="rounded-xl border p-4">
        <TabsContent value="overview" className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">
                {stat.label}
              </span>
              <span className="text-xl font-semibold tabular-nums">
                {stat.value}
              </span>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="activity" className="flex flex-col gap-3">
          {activity.map((item) => (
            <div key={item.what} className="flex items-baseline gap-2">
              <p className="flex-1">
                <span className="font-medium">{item.who}</span>{" "}
                <span className="text-muted-foreground">{item.what}</span>
              </p>
              <span className="text-xs text-muted-foreground">{item.when}</span>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="settings" className="flex flex-col gap-1">
          <p className="font-medium">Workspace settings</p>
          <p className="text-muted-foreground">
            Rename the project, manage billing, and control who can publish
            changes to production.
          </p>
        </TabsContent>
      </div>
    </Tabs>
  )
}
