import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FrameworkTabs({ next, vite }: { next: React.ReactNode; vite: React.ReactNode }) {
  return (
    <Tabs defaultValue="next" className="mt-6 gap-4">
      <TabsList variant="line">
        <TabsTrigger value="next">Next.js</TabsTrigger>
        <TabsTrigger value="vite">Vite</TabsTrigger>
      </TabsList>
      <TabsContent value="next" className="flex flex-col gap-4">
        {next}
      </TabsContent>
      <TabsContent value="vite" className="flex flex-col gap-4">
        {vite}
      </TabsContent>
    </Tabs>
  )
}
