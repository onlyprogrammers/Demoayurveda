// app/book/[therapy]/TherapyBookingClient.tsx
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Clock, Filter, MapPin, Search, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// ----------------------
// Types
// ----------------------
export type Doctor = {
  id: number
  name: string
  specialty: string
  experience: number
  consultationFee: string
  languages: string[]
  contactEmail: string
  isVerified: boolean
  consultationMode: string[]
  username: string
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

type TherapyType = "unani" | "ayurveda" | "homeo" | "yoga" | "all"

interface ClientProps {
  therapy: string
}

// ----------------------
// Component
// ----------------------
export default function TherapyBookingClient({ therapy }: ClientProps) {
  // normalize and cast the incoming param
  const therapyParam = (therapy || "all").toLowerCase() as TherapyType

  // state for tab, search, data, filters
  const [selectedTherapy, setSelectedTherapy] = useState<TherapyType>(therapyParam)
  const [searchQuery, setSearchQuery] = useState("")
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch & normalize once on mount
  useEffect(() => {
    async function loadDoctors() {
      try {
        const all: Doctor[] = []
        for (let i = 1; i <= 6; i++) {
          const res = await fetch(
            `http://65.1.92.125:8080/categories/${i + 10}/doctors-web/?all=true`
          )
          const { doctors: arr } = await res.json()
          arr.forEach((d: any) => {
            all.push({
              id: d.id,
              name: d.user.username ?? "",
              username: d.user.username ?? "",
              specialty: d.specialty ?? "",
              experience: d.years_of_experience ?? 0,
              location: d.clinic_address ?? "",
              image: "/placeholder.svg?height=300&width=300",
              therapyTypes: [d.category_name ?? ""],
              availability: d.status ?? "",
              consultationFee: d.consultation_fee ?? "",
              languages: (d.languages ?? "")
                .split(",")
                .map((l: string) => l.trim())
                .filter(Boolean),
              contactEmail: d.user.email ?? "",
              isVerified: true,
              consultationMode: ["Video Call", "Chat"],
              rating: Math.floor(Math.random() * 5 + 1),
              patients: Math.floor(Math.random() * 500 + 50),
            })
          })
        }
        setDoctors(all)
      } catch (e) {
        console.error("Failed to load doctors:", e)
      } finally {
        setLoading(false)
      }
    }
    loadDoctors()
  }, [])

  // Recompute filteredDoctors when dependencies change
  useEffect(() => {
    const fq = searchQuery.toLowerCase()
    setFilteredDoctors(
      doctors.filter((doc) => {
        const matchesTherapy =
          selectedTherapy === "all" ||
          doc.therapyTypes.some((t) => t.toLowerCase() === selectedTherapy)
        const matchesSearch =
          fq === "" ||
          doc.name.toLowerCase().includes(fq) ||
          doc.specialty.toLowerCase().includes(fq)
        return matchesTherapy && matchesSearch
      })
    )
  }, [doctors, selectedTherapy, searchQuery])

  // Static mock treatments
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
  const filteredTreatments = treatments.filter(
    (t) => selectedTherapy === "all" || t.therapyType === selectedTherapy
  )

  // Helper to capitalize labels
  const formatTherapyName = (t: string) => t.charAt(0).toUpperCase() + t.slice(1)

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-6">
        {/* Banner */}
        <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 bg-gradient-to-r from-green-600 to-emerald-400">
          <div className="absolute inset-0 flex flex-col justify-center px-8 text-white">
            <h1 className="text-3xl font-bold mb-2">
              {formatTherapyName(selectedTherapy)}
            </h1>
            <p className="text-lg max-w-2xl">
              Discover the best {formatTherapyName(selectedTherapy)} practitioners and popular treatments.
            </p>
          </div>
        </div>

        {/* Tabs & Search */}
        <Tabs
          defaultValue={selectedTherapy}
          className="mb-8"
          onValueChange={(v) => setSelectedTherapy(v as TherapyType)}
        >
          <div className="flex items-center justify-between mb-4" style={{ overflowX: "scroll" }}>
            <TabsList>
              {["all", "ayurveda", "unani", "homeo", "yoga"].map((t) => (
                <TabsTrigger key={t} value={t}>
                  {formatTherapyName(t)}
                </TabsTrigger>
              ))}
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
            <h2 className="text-2xl font-bold">
              Top {formatTherapyName(selectedTherapy)} Doctors
            </h2>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>

          {loading ? (
            <p>Loading doctors…</p>
          ) : filteredDoctors.length === 0 ? (
            <div className="text-center py-12 bg-gray-100 rounded-lg">
              <p className="text-gray-500">No doctors found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doc) => (
                <Card key={doc.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative h-48 bg-gray-200">
                      <Image src={doc.image} alt={doc.name} fill className="object-cover" />
                      <Badge className="absolute top-4 right-4 bg-green-500">
                        {doc.availability}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{doc.name}</CardTitle>
                        <CardDescription>{doc.specialty}</CardDescription>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{doc.rating}</span>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span>{doc.experience} yrs exp</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span>{doc.patients}+ patients</span>
                      </div>
                      <div className="flex items-center gap-2 col-span-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>{doc.location}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 flex justify-between">
                    <Button variant="outline" className="w-[48%]">
                      <Link href={`/profile/${doc.username}`} className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        View Profile
                      </Link>
                    </Button>
                    <Button className="w-[48%]">Book Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Treatments Section (optional) */}
        {/* {filteredTreatments.map(...)} */}

      </main>
    </div>
  )
}