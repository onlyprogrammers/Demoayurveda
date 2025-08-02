"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Clock,
  Filter,
  MapPin,
  Search,
  Star,
  Users,
  X,
  Phone,
  Mail,
  Video,
  MessageCircle,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
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

const Doctors_if_notload: any = [
  {
    id: 8,
    name: "Ayush Varma",
    username: "Ayush Varma",
    specialty: "",
    experience: 9,
    location: "Mumbai, India",
    image: "/placeholder.svg?height=300&width=300",
    therapyTypes: ["Ayurveda"],
    availability: "offline",
    consultationFee: "250.00",
    languages: ["English", "Hindi & Marathi"],
    contactEmail: "aysuhvarma@gmail.com",
    isVerified: true,
    consultationMode: ["Video Call", "Chat"],
    rating: 4,
    patients: 443,
  },
  {
    id: 9,
    name: "Vijendra Singh",
    username: "Vijendra Singh",
    specialty: "",
    experience: 20,
    location: "Jaipur, Rajastan",
    image: "/placeholder.svg?height=300&width=300",
    therapyTypes: ["Ayurveda"],
    availability: "offline",
    consultationFee: "500.00",
    languages: ["Hindi & English"],
    contactEmail: "vijendrasingh@gmail.com",
    isVerified: true,
    consultationMode: ["Video Call", "Chat"],
    rating: 1,
    patients: 407,
  },
  {
    id: 6,
    name: "Anjali Raj",
    username: "Anjali Raj",
    specialty: "",
    experience: 11,
    location: "Kerala, India",
    image: "/placeholder.svg?height=300&width=300",
    therapyTypes: ["Ayurveda"],
    availability: "online",
    consultationFee: "1.00",
    languages: ["English", "Hindi", "Malayalam", "Tamil & Telugu"],
    contactEmail: "anjaliraj@gmail.com",
    isVerified: true,
    consultationMode: ["Video Call", "Chat"],
    rating: 4,
    patients: 70,
  },
  {
    id: 7,
    name: "Rakhy M",
    username: "Rakhy M",
    specialty: "MS(Ayu)",
    experience: 11,
    location: "Kerala, India",
    image: "/placeholder.svg?height=300&width=300",
    therapyTypes: ["Ayurveda"],
    availability: "online",
    consultationFee: "1.00",
    languages: ["English", "Malayalam", "Tamil & Kannada"],
    contactEmail: "rakhym@gmail.com",
    isVerified: true,
    consultationMode: ["Video Call", "Chat"],
    rating: 2,
    patients: 137,
  },
  {
    id: 10,
    name: "Moinurul Haque",
    username: "Moinurul Haque",
    specialty: "",
    experience: 20,
    location: "Hyderabad, Telangana",
    image: "/placeholder.svg?height=300&width=300",
    therapyTypes: ["Homeopathy"],
    availability: "offline",
    consultationFee: "500.00",
    languages: ["Telugu", "Hindi & English"],
    contactEmail: "moinurulhaque@gmail.com",
    isVerified: true,
    consultationMode: ["Video Call", "Chat"],
    rating: 1,
    patients: 424,
  },
  {
    id: 13,
    name: "Aravind Pillai",
    username: "Aravind Pillai",
    specialty: "",
    experience: 15,
    location: "Banglore, Karnataka",
    image: "/placeholder.svg?height=300&width=300",
    therapyTypes: ["Naturopathy"],
    availability: "offline",
    consultationFee: "500.00",
    languages: ["Kannada", "Malayalam", "Tamil & English"],
    contactEmail: "aravindpillai@gmail.com",
    isVerified: true,
    consultationMode: ["Video Call", "Chat"],
    rating: 3,
    patients: 324,
  },
  {
    id: 12,
    name: "Rohini Ramasamy",
    username: "Rohini Ramasamy",
    specialty: "",
    experience: 15,
    location: "Chennai, Tamil Nadu",
    image: "/placeholder.svg?height=300&width=300",
    therapyTypes: ["Sidha"],
    availability: "online",
    consultationFee: "500.00",
    languages: ["Tamil & English"],
    contactEmail: "rohiniramasamy@gmail.com",
    isVerified: true,
    consultationMode: ["Video Call", "Chat"],
    rating: 3,
    patients: 426,
  },
  {
    id: 11,
    name: "Fidha Fathima",
    username: "Fidha Fathima",
    specialty: "",
    experience: 8,
    location: "Kerala, India",
    image: "/placeholder.svg?height=300&width=300",
    therapyTypes: ["Unani"],
    availability: "online",
    consultationFee: "500.00",
    languages: ["Malayalam & English"],
    contactEmail: "fidhafathima@gmail.com",
    isVerified: true,
    consultationMode: ["Video Call", "Chat"],
    rating: 3,
    patients: 276,
  },
  {
    id: 14,
    name: "Yogacharya Shilpi Patel",
    username: "Yogacharya Shilpi Patel",
    specialty: "",
    experience: 10,
    location: "Surat, Gujarat",
    image: "/placeholder.svg?height=300&width=300",
    therapyTypes: ["Yoga and Meditation"],
    availability: "offline",
    consultationFee: "500.00",
    languages: ["Gujarati", "Hindi & English"],
    contactEmail: "shilpipatel@gmail.com",
    isVerified: true,
    consultationMode: ["Video Call", "Chat"],
    rating: 1,
    patients: 529,
  },
]

type TherapyType = "unani" | "ayurveda" | "homeo" | "yoga" | "all"

interface ClientProps {
  therapy: string
}

// ----------------------
// Component
// ----------------------
export default function TherapyBookingClient({ therapy }: ClientProps) {
  // normalize and cast the incoming param
  
  const therapyParam = (therapy).toLowerCase() as TherapyType
  
  // state for tab, search, data, filters
  const [selectedTherapy, setSelectedTherapy] = useState<TherapyType>(therapyParam)
  const [searchQuery, setSearchQuery] = useState("")
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([])
  const [loading, setLoading] = useState(true)

  // Dialog state
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Fetch & normalize once on mount
  useEffect(() => {
    async function loadDoctors() {
      try {
        const all: Doctor[] = []
        for (let i = 1; i <= 6; i++) {
          const res = await fetch(`http://65.1.92.125:8080/categories/${i + 10}/doctors-web/?all=true`)
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
              therapyTypes: [String(d.category_name).toLowerCase() ?? ""],
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
        console.log("Loaded doctors:", all)
      } catch (e) {
        console.error("Failed to load doctors:", e)
        setDoctors(Doctors_if_notload) // Fallback to static data
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
        const matchesTherapy =   String(doc.therapyTypes).toLowerCase().includes(selectedTherapy.toLowerCase()) || therapyParam === "all"
        const matchesSearch =
          fq === "" || doc.name.toLowerCase().includes(fq) || doc.specialty.toLowerCase().includes(fq)
        return matchesTherapy && matchesSearch
      }),
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

  const filteredTreatments = treatments.filter((t) => selectedTherapy === therapyParam || t.therapyType === selectedTherapy)

  // Helper to capitalize labels
  const formatTherapyName = (t: string) => t.charAt(0).toUpperCase() + t.slice(1)

  // Handle view profile click
  const handleViewProfile = (doctor: Doctor) => {
    setSelectedDoctor(doctor)
    setIsDialogOpen(true)
  }

  // Handle dialog close
  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setSelectedDoctor(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-6">
        {/* Banner */}
        <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 bg-gradient-to-r from-green-600 to-emerald-400">
          <div className="absolute inset-0 flex flex-col justify-center px-8 text-white">
            <h1 className="text-3xl font-bold mb-2">{formatTherapyName(selectedTherapy)}</h1>
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
                <Link href={`${t}`}>
                <TabsTrigger key={t} value={t}>
                  {formatTherapyName(t)}
                </TabsTrigger>
                </Link>
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
            <h2 className="text-2xl font-bold">Top {formatTherapyName(selectedTherapy)} Doctors</h2>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
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
                      <Image
                        src={`https://source.unsplash.com/400x400/?doctor&sig=${Math.random()}`}
                        alt={doc.name}
                        fill
                        className="object-cover"
                      />
                      <Badge className={`absolute top-4 right-4 bg-green-500 ${doc.availability === "online" ? "bg-green-500" : "bg-red-500"}`}>{doc.availability}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{doc.name}</CardTitle>
                        <CardDescription>{doc.specialty}</CardDescription>
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
                    <Button variant="outline" className="w-[48%] bg-transparent" onClick={() => handleViewProfile(doc)}>
                      <Users className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                    <Link href="/downloadapp">
                      <Button className="w-[100%]">Book Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Doctor Profile Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="text-2xl font-bold">Doctor Profile</DialogTitle>
                <Button variant="ghost" size="sm" onClick={handleCloseDialog} className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </DialogHeader>

            {selectedDoctor && (
              <div className="space-y-6">
                {/* Doctor Header */}
                <div className="flex items-start gap-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={`https://source.unsplash.com/200x200/?doctor&sig=${selectedDoctor.id}`}
                      alt={selectedDoctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">{selectedDoctor.name}</h3>
                      {selectedDoctor.isVerified && <CheckCircle className="h-5 w-5 text-green-500" />}
                    </div>
                    <p className="text-gray-600 mb-2">{selectedDoctor.specialty || "General Practitioner"}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <Badge className={`absolute top-4 right-4 ${selectedDoctor.availability === "online" ? "bg-green-500" : "bg-red-500"}`}>{selectedDoctor.availability}</Badge>

                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{selectedDoctor.experience}</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{selectedDoctor.patients}+</div>
                    <div className="text-sm text-gray-600">Patients Treated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">₹{selectedDoctor.consultationFee}</div>
                    <div className="text-sm text-gray-600">Consultation Fee</div>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{selectedDoctor.contactEmail}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{selectedDoctor.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Specialization</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDoctor.therapyTypes.map((therapy, index) => (
                        <Badge key={index} variant="outline">
                          {therapy}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedDoctor.languages.map((language, index) => (
                        <Badge key={index} variant="secondary">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Consultation Modes */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Consultation Modes</h4>
                    <div className="space-y-2">
                      {selectedDoctor.consultationMode.map((mode, index) => (
                        <div key={index} className="flex items-center gap-2">
                          {mode === "Video Call" ? (
                            <Video className="h-4 w-4 text-blue-500" />
                          ) : (
                            <MessageCircle className="h-4 w-4 text-green-500" />
                          )}
                          <span className="text-sm">{mode}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t">
                  <Link href="/downloadapp" className="flex-1">
                    <Button className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                  </Link>
                  <Button variant="outline" onClick={handleCloseDialog}>
                    Close
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Treatments Section (optional) */}
        {/* {filteredTreatments.map(...)} */}
      </main>
    </div>
  )
}
