"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    therapy: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setMessage("Please fill all required fields")
      return
    }

    setIsSubmitting(true)
    setMessage("")

    // Simulate API call
    const apiurl = "https://api.example.com/contact" // Replace with your API URL
    const response = await fetch(apiurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    if (!response.ok) {
      setMessage("Something went wrong. Please try again.")
      setIsSubmitting(false)
      return
    }
    else {

      setMessage("Sending your message...")

      setIsSubmitting(false)
      setMessage("Thank you for your message. We will contact you shortly.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        therapy: "",
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl md:text-5xl">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Get in touch with us for appointments, inquiries, or more information
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div>
          <h2 className="text-2xl font-bold text-green-800">Get In Touch</h2>
          <p className="mt-4 text-gray-600">
            We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
          </p>

          <div className="mt-8 space-y-6">
          
            <div className="flex items-start">
              <Mail className="mr-4 h-6 w-6 text-green-700" />
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">info@dayushclinic.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="mr-4 h-6 w-6 text-green-700" />
              <div>
                <h3 className="font-medium text-gray-900">Working Hours</h3>
                <p className="mt-1 text-gray-600">
                  24/7 Availability
                  <br />
                  `Monday to Sunday`
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-green-100 bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold text-green-800">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="Therapy">Select category</Label>


              <select
                id="Therapy"
                onChange={handleChange}
                defaultValue=""
                name="Therapy"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="" disabled>Choose a Treatment</option>
                <option value="Unani therapy">Unani </option>
                <option value="Yoga therapy">Yoga </option>
                <option value="Homepathy">Homepathy</option>
                <option value="Siddha medicine">Siddha medicine</option>
                <option value="Naturopathy">Naturopathy</option>
                <option value="Ayurveda">Ayurveda</option>
              </select>



            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name*</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email*</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone*</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message*</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                required
              />
            </div>

            {message && (
              <p className={`text-sm ${message.includes("Thank you") ? "text-green-600" : "text-red-500"}`}>
                {message}
              </p>
            )}

            <Button type="submit" className="w-full bg-green-700 hover:bg-green-800" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>

      
    </div>
  )
}

