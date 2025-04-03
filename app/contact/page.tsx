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
    setTimeout(() => {
      setIsSubmitting(false)
      setMessage("Thank you for your message. We will contact you shortly.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    }, 1000)
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
              <Phone className="mr-4 h-6 w-6 text-green-700" />
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="mt-1 text-gray-600">+91 9870390739</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="mr-4 h-6 w-6 text-green-700" />
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">info@demoayurveda.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="mr-4 h-6 w-6 text-green-700" />
              <div>
                <h3 className="font-medium text-gray-900">Address</h3>
                <p className="mt-1 text-gray-600">
                  Demo Ayurveda
                  <br />
                  Hiranandani Powai
                  <br />
                  Mumbai, India
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="mr-4 h-6 w-6 text-green-700" />
              <div>
                <h3 className="font-medium text-gray-900">Working Hours</h3>
                <p className="mt-1 text-gray-600">
                  Monday - Saturday: 9:00 AM - 7:00 PM
                  <br />
                  Sunday: 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-green-100 bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold text-green-800">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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

      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold text-green-800">Our Location</h2>
        <div className="h-[400px] w-full overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5!2d72.9!3d19.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzAwLjAiTiA3MsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1617000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

