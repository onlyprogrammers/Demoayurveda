import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { User, Star, MapPin, Languages, Video, MessageSquare, Users, Calendar, CheckCircle, Mail } from "lucide-react"
import doctorsData from "@/components/data.json"
// Mock database - in a real app, this would come from a database


export default function DoctorProfilePage({ params }: { params: { username: string } }) {
  const doctor = doctorsData.find((doc) => doc.username === params.username)

  if (!doctor) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="overflow-hidden max-w-4xl mx-auto">
        {/* Header with green background */}
        <div className="bg-emerald-600 p-6 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="h-24 w-24 border-4 border-white">
              <AvatarImage src={doctor.image || "/placeholder.svg"} alt={doctor.name} />
              <AvatarFallback className="bg-emerald-200 text-emerald-800 text-xl">
                {doctor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <h1 className="text-2xl font-bold">{doctor.name}</h1>
                {doctor.isVerified && <CheckCircle className="h-5 w-5 text-emerald-200" />}
              </div>
              <p className="text-emerald-100">{doctor.specialty}</p>
              <div className="flex items-center justify-center md:justify-start mt-2 gap-1">
                <Star className="h-5 w-5 fill-yellow-300 text-yellow-300" />
                <span className="font-medium">{doctor.rating}</span>
                <span className="text-emerald-200 text-sm">({doctor.patients}+ patients)</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Badge className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800">{doctor.availability}</Badge>
              <Badge className="bg-white hover:bg-gray-100 text-emerald-800">
                {doctor.consultationFee} per session
              </Badge>
            </div>
          </div>
        </div>

        {/* Profile details */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold text-emerald-800 mb-4">Doctor Information</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Experience</p>
                    <p className="text-gray-600">{doctor.experience} years</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">{doctor.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Languages className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Languages</p>
                    <p className="text-gray-600">{doctor.languages.join(", ")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Contact</p>
                    <p className="text-gray-600">{doctor.contactEmail}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-emerald-800 mb-4">Consultation Details</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-emerald-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Patients Treated</p>
                    <p className="text-gray-600">{doctor.patients}+</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center text-emerald-600 mt-0.5">
                    <span className="text-lg font-bold">H</span>
                  </div>
                  <div>
                    <p className="font-medium">Therapy Types</p>
                    <p className="text-gray-600">Homeopathy</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="font-medium flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-emerald-600" />
                    Consultation Modes
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {doctor.consultationMode.includes("Video Call") && (
                      <Badge variant="outline" className="flex items-center gap-1 border-emerald-200">
                        <Video className="h-3 w-3" />
                        Video Call
                      </Badge>
                    )}
                    {doctor.consultationMode.includes("Chat") && (
                      <Badge variant="outline" className="flex items-center gap-1 border-emerald-200">
                        <MessageSquare className="h-3 w-3" />
                        Chat
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6 bg-emerald-100" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded-full font-medium transition-colors">
              Book Appointment
            </button>
            <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-2 px-6 rounded-full font-medium transition-colors">
              Contact Doctor
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}
