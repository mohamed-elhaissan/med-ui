import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const steps = [
  {
    title: "Invite your team",
    description: "Add teammates by email and assign roles in seconds.",
  },
  {
    title: "Connect a repository",
    description: "Link GitHub or GitLab to deploy on every push.",
  },
  {
    title: "Review previews",
    description: "Each pull request gets its own shareable preview URL.",
  },
  {
    title: "Ship to production",
    description: "Promote a preview with one click and roll back just as fast.",
  },
  {
    title: "Watch the metrics",
    description: "Track response times and errors from a single dashboard.",
  },
]

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs sm:max-w-sm" opts={{ align: "start" }}>
      <CarouselContent>
        {steps.map((step, index) => (
          <CarouselItem key={step.title}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-4/3 flex-col justify-between">
                  <span className="text-sm text-muted-foreground tabular-nums">
                    Step {index + 1} of {steps.length}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:inline-flex" />
      <CarouselNext className="hidden sm:inline-flex" />
    </Carousel>
  )
}
