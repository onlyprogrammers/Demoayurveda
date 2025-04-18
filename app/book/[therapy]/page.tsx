"use client"

import { useState } from "react"
import Image from "next/image"
import { Clock, Filter, MapPin, Search, Star, ThumbsUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useParams } from "next/navigation"
import { useRouter } from "next/router"

// Types
type Doctor = {
  id: number
  name: string
  specialty: string
  experience: number
  rating: number
  patients: number
  location: string
  image: string
  therapyTypes: string[]
  availability: string
}

type Treatment = {
  id: number
  name: string
  description: string
  therapyType: string
  popularity: number
  image: string
  duration: string
  price: string
}
interface PageProps {
  params: {
    therapy: string
  }
}

type TherapyType = "unani" | "ayurveda" | "homeo" | "yoga" | "all"

export default function TherapyBookingPage({ params }: PageProps) {
  // This would normally come from URL params or context
  const { therapy } = useParams()
  const therapyType = therapy as TherapyType

  const [selectedTherapy, setSelectedTherapy] = useState<TherapyType>( therapyType || "all")
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for doctors
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Ayush Sharma",
      specialty: "Ayurvedic Practitioner",
      experience: 12,
      rating: 4.8,
      patients: 1500,
      location: "Mumbai, Maharashtra",
      image: "/placeholder.svg?height=300&width=300",
      therapyTypes: ["ayurveda"],
      availability: "Available Today",
    },
    {
      id: 2,
      name: "Dr. Fatima Khan",
      specialty: "Unani Medicine Expert",
      experience: 8,
      rating: 4.7,
      patients: 1200,
      location: "Delhi, NCR",
      image: "/placeholder.svg?height=300&width=300",
      therapyTypes: ["unani"],
      availability: "Available Tomorrow",
    },
    {
      id: 3,
      name: "Dr. Rajesh Gupta",
      specialty: "Homeopathic Doctor",
      experience: 15,
      rating: 4.9,
      patients: 2000,
      location: "Bangalore, Karnataka",
      image: "/placeholder.svg?height=300&width=300",
      therapyTypes: ["homeo"],
      availability: "Available Today",
    },
    {
      id: 4,
      name: "Yogacharya Sunita Patel",
      specialty: "Yoga Therapist",
      experience: 10,
      rating: 4.6,
      patients: 1800,
      location: "Pune, Maharashtra",
      image: "/placeholder.svg?height=300&width=300",
      therapyTypes: ["yoga"],
      availability: "Available Today",
    },
    {
      id: 5,
      name: "Dr. Vikram Singh",
      specialty: "Ayurvedic Surgeon",
      experience: 14,
      rating: 4.7,
      patients: 1600,
      location: "Jaipur, Rajasthan",
      image: "/placeholder.svg?height=300&width=300",
      therapyTypes: ["ayurveda"],
      availability: "Available in 2 days",
    },
    {
      id: 6,
      name: "Dr. Meera Reddy",
      specialty: "Homeopathic Consultant",
      experience: 9,
      rating: 4.5,
      patients: 1100,
      location: "Chennai, Tamil Nadu",
      image: "/placeholder.svg?height=300&width=300",
      therapyTypes: ["homeo"],
      availability: "Available Today",
    },
  ]

  // Mock data for treatments
  const treatments: Treatment[] = [
    {
      id: 1,
      name: "Panchakarma Therapy",
      description: "A comprehensive detoxification and rejuvenation program",
      therapyType: "ayurveda",
      popularity: 95,
      image: "/placeholder.svg?height=200&width=350",
      duration: "7-21 days",
      price: "₹15,000 - ₹45,000",
    },
    {
      id: 2,
      name: "Hijama (Cupping Therapy)",
      description: "Ancient healing technique for pain relief and detoxification",
      therapyType: "unani",
      popularity: 88,
      image: "/placeholder.svg?height=200&width=350",
      duration: "30-60 mins",
      price: "₹1,500 - ₹3,000",
    },
    
  ]

  // Filter doctors based on selected therapy
  const filteredDoctors = doctors.filter(
    (doctor) =>
      (selectedTherapy === "all" || doctor.therapyTypes.includes(selectedTherapy)) &&
      (searchQuery === "" ||
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  // Filter treatments based on selected therapy
  const filteredTreatments = treatments.filter(
    (treatment) => selectedTherapy === "all" || treatment.therapyType === selectedTherapy,
  )

  // Capitalize first letter for display
  const formatTherapyName = (therapy: string) => {
    return therapy.charAt(0).toUpperCase() + therapy.slice(1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Therapy Banner */}
        <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 bg-gradient-to-r from-green-600 to-emerald-400">
          <div className="absolute inset-0 flex flex-col justify-center px-8 text-white">
            <h1 className="text-3xl font-bold mb-2">{formatTherapyName(selectedTherapy)} Therapy</h1>
            <p className="text-lg max-w-2xl">
              Discover the best {formatTherapyName(selectedTherapy)} practitioners and popular treatments to improve
              your health and wellbeing.
            </p>
          </div>
        </div>

        {/* Therapy Type Selector */}
        <Tabs
          defaultValue={selectedTherapy}
          className="mb-8"
          onValueChange={(value) => setSelectedTherapy(value as TherapyType)}
        >
          <div className="flex items-center justify-between mb-4" style={{ overflowX:'scroll' }}>
            <TabsList>
              <TabsTrigger value="all">All </TabsTrigger>
              <TabsTrigger value="ayurveda">Ayurveda</TabsTrigger>
              <TabsTrigger value="unani">Unani</TabsTrigger>
              <TabsTrigger value="homeo">Homeopathy</TabsTrigger>
              <TabsTrigger value="yoga">Yoga</TabsTrigger>
              <TabsTrigger value="Siddha">Siddha</TabsTrigger>
              <TabsTrigger value="Naturopathy">Naturopathy</TabsTrigger>
            </TabsList>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search doctors..."
                className="pl-10 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </Tabs>

        {/* Doctors Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Top {formatTherapyName(selectedTherapy)} Doctors</h2>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>

          {filteredDoctors.length === 0 ? (
            <div className="text-center py-12 bg-gray-100 rounded-lg">
              <p className="text-gray-500">No doctors found for the selected criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
                <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative h-48 bg-gray-200">
                      <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                      <Badge className="absolute top-4 right-4 bg-green-500">{doctor.availability}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{doctor.name}</CardTitle>
                        <CardDescription>{doctor.specialty}</CardDescription>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{doctor.rating}</span>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span>{doctor.experience} years exp.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span>{doctor.patients}+ patients</span>
                      </div>
                      <div className="flex items-center gap-2 col-span-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>{doctor.location}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <Button variant="outline" className="w-[48%]">
                      View Profile
                    </Button>
                    <Button className="w-[48%]">Book Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Popular Treatments Section */}
        
      </main>

    </div>
  )
}
