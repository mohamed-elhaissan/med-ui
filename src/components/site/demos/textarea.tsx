"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

const MAX_LENGTH = 280

export function TextareaDemo() {
  const [message, setMessage] = React.useState("")

  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="textarea-demo-feedback">Feedback</FieldLabel>
      <Textarea
        id="textarea-demo-feedback"
        placeholder="Tell us what you liked, or what we could do better."
        rows={4}
        maxLength={MAX_LENGTH}
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <div className="flex items-center justify-between gap-3">
        <FieldDescription>
          {message.length}/{MAX_LENGTH} characters
        </FieldDescription>
        <Button size="sm" disabled={message.trim().length === 0}>
          Send feedback
        </Button>
      </div>
    </Field>
  )
}
