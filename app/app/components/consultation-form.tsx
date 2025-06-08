"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function ConsultationForm() {
  const [phone, setPhone] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!phone || !agreed) {
      setMessage("Please fill all required fields and agree to terms")
      return
    }

    setIsSubmitting(true)
    setMessage("")

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setMessage("Thank you! We will contact you shortly.")
      setPhone("")
      setAgreed(false)
    }, 1000)
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-md border border-green-100 hover:border-green-200 transition-all">
      <h3 className="mb-4 text-center text-xl font-medium text-green-800">Book Free Consultation</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex">
          <div className="flex h-10 items-center justify-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
            +91
          </div>
          <Input
            type="tel"
            placeholder="Enter 10-Digit Mobile Number"
            className="rounded-l-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={10}
            pattern="[0-9]{10}"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
          <Label htmlFor="terms" className="text-sm text-muted-foreground">
            I agree to the Terms & Conditions*
          </Label>
        </div>

        {message && (
          <p className={`text-sm ${message.includes("Thank you") ? "text-green-600" : "text-red-500"}`}>{message}</p>
        )}

        <Button type="submit" className="w-full bg-green-700 hover:bg-green-800 transition-all" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "SUBMIT"}
        </Button>
      </form>
    </div>
  )
}

