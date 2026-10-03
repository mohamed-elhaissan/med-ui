"use client"

import * as React from "react"
import { REGEXP_ONLY_DIGITS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"

export function InputOtpDemo() {
  const [value, setValue] = React.useState("")

  return (
    <div className="flex flex-col items-center gap-3">
      <Label htmlFor="input-otp-demo">Verification code</Label>
      <InputOTP
        id="input-otp-demo"
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS}
        value={value}
        onChange={setValue}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-center text-xs text-muted-foreground">
        {value.length === 6
          ? "Code entered. Verifying..."
          : "Enter the 6-digit code we sent to •••• 4821."}
      </p>
    </div>
  )
}
