import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    value: "billing",
    question: "How does billing work?",
    answer:
      "You're billed monthly per active seat. Seats added mid-cycle are prorated, and removed seats are credited on your next invoice.",
  },
  {
    value: "trial",
    question: "Can I try it before I pay?",
    answer:
      "Every workspace starts with a 14-day trial of the Pro plan. No credit card is required, and you can downgrade to Free at any time.",
  },
  {
    value: "export",
    question: "Can I export my data?",
    answer:
      "Yes. Owners can export projects, comments, and files as JSON or CSV from workspace settings. Exports are usually ready within a few minutes.",
  },
  {
    value: "cancel",
    question: "What happens if I cancel?",
    answer:
      "Your workspace stays active until the end of the billing period, then moves to the Free plan. Nothing is deleted.",
  },
]

export function AccordionDemo() {
  return (
    <Accordion defaultValue={["billing"]} className="w-full max-w-md">
      {faqs.map((faq) => (
        <AccordionItem key={faq.value} value={faq.value}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
