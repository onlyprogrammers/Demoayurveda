import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { MapPin, Clock, Stethoscope, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      
      {/* Application Form */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Form</h2>
              <p className="text-lg text-gray-600">
                {"Don't see the perfect role? Send us your resume and we'll keep you in mind for future opportunities."}
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-green-800">General Application</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 48 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Position of Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="practitioner">Senior Ayurvedic Practitioner</SelectItem>
                      <SelectItem value="coordinator">Digital Health Coordinator</SelectItem>
                      <SelectItem value="therapist">Ayurvedic Therapist</SelectItem>
                      <SelectItem value="other">Other/General Interest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="2-5">2-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Cover Letter / Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your interest in Ayurvedic healthcare and why you'd like to join our team..."
                    rows={4}
                  />
                </div>

                <Separator />

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700">Submit Application</Button>
                  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      
    </div>
  )
}
