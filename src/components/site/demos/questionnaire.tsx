"use client"

import * as React from "react"
import { CircleCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

const roles = [
  { value: "Design", description: "Interfaces, brand and research" },
  { value: "Engineering", description: "Shipping and maintaining code" },
  { value: "Product", description: "Roadmaps, specs and priorities" },
]
const tools = ["Figma", "GitHub", "Linear", "Notion"]
const sizes = ["1–10", "11–50", "51+"]

const items = [
  { name: "role", required: true, choices: roles.map(({ value }) => ({ value })) },
  { name: "tools", choices: tools.map((value) => ({ value })) },
  { name: "size", required: true, choices: sizes.map((value) => ({ value })) },
]

type Answers = { role: string; tools: string; size: string }

export function QuestionnaireDemo() {
  const [answers, setAnswers] = React.useState<Answers | null>(null)
  const [attempt, setAttempt] = React.useState(0)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setAnswers({
      role: String(data.get("role") ?? "—"),
      tools: data.getAll("tools").join(", ") || "None yet",
      size: `${data.get("size") ?? "—"} people`,
    })
  }

  if (answers) {
    return (
      <div className="flex w-full max-w-md flex-col items-center gap-4 text-center">
        <CircleCheck className="size-6 text-primary" />
        <div className="flex flex-col gap-1">
          <p className="font-medium">Your workspace is ready</p>
          <p className="text-sm text-muted-foreground">
            {answers.role} · {answers.size} · {answers.tools}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setAnswers(null)
            setAttempt((n) => n + 1)
          }}
        >
          Start over
        </Button>
      </div>
    )
  }

  return (
    <Questionnaire
      key={attempt}
      className="w-full max-w-md"
      items={items}
      shortcuts="letters"
      onSubmit={handleSubmit}
    >
      <QuestionnaireProgress />
      <QuestionnaireItem name="role" required>
        <QuestionnaireTitle>What best describes your work?</QuestionnaireTitle>
        <QuestionnaireDescription>
          We&apos;ll tailor your starter templates to match.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          {roles.map((role) => (
            <QuestionnaireChoice key={role.value} value={role.value}>
              <span className="font-medium">{role.value}</span>
              <QuestionnaireChoiceDescription>
                {role.description}
              </QuestionnaireChoiceDescription>
            </QuestionnaireChoice>
          ))}
          <QuestionnaireInput
            aria-label="Something else"
            placeholder="Something else…"
          />
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireItem name="tools" multiple>
        <QuestionnaireTitle>Which tools should we connect?</QuestionnaireTitle>
        <QuestionnaireDescription>
          Select all that apply, or skip for now.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          {tools.map((tool) => (
            <QuestionnaireChoice key={tool} value={tool}>
              {tool}
            </QuestionnaireChoice>
          ))}
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireItem name="size" required>
        <QuestionnaireTitle>How big is your team?</QuestionnaireTitle>
        <QuestionnaireChoices>
          {sizes.map((size) => (
            <QuestionnaireChoice key={size} value={size}>
              {size} people
            </QuestionnaireChoice>
          ))}
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>
      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext />
        <QuestionnaireSubmit>Finish setup</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  )
}
