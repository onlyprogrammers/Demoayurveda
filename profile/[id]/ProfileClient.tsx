// app/profile/[id]/ProfileClient.tsx
"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  User,
  Star,
  MapPin,
  Languages,
  Video,
  MessageSquare,
  Users,
  Calendar,
  CheckCircle,
  Mail,
} from "lucide-react"
import type { Doctor } from "@/types/doctor"

interface Props {
  doctor: Doctor
}

export default function ProfileClient({ doctor }: Props) {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-600 p-6 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="h-24 w-24 border-4 border-white">
              <AvatarImage src={doctor.image} alt={doctor.name} />
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
              <Badge className="bg-emerald-100 text-emerald-800">{doctor.availability}</Badge>
              <Badge className="bg-white text-emerald-800">
                {doctor.consultationFee} per session
              </Badge>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left info */}
            <div>
              <h2 className="text-lg font-semibold text-emerald-800 mb-4">
                Doctor Information
              </h2>
              <div className="space-y-4">
                <InfoRow icon={User} label="Experience" value={`${doctor.experience} years`} />
                <InfoRow icon={MapPin} label="Location" value={doctor.location} />
                <InfoRow icon={Languages} label="Languages" value={doctor.languages.join(", ")} />
                <InfoRow icon={Mail} label="Contact" value={doctor.contactEmail} />
              </div>
            </div>
            {/* Right info */}
            <div>
              <h2 className="text-lg font-semibold text-emerald-800 mb-4">
                Consultation Details
              </h2>
              <div className="space-y-4">
                <InfoRow
                  icon={Users}
                  label="Patients Treated"
                  value={`${doctor.patients}+`}
                />
                <div className="flex items-start gap-3">
                  <div className="flex h-5 w-5 items-center justify-center text-emerald-600 mt-0.5">
                    <span className="text-lg font-bold">H</span>
                  </div>
                  <div>
                    <p className="font-medium">Therapy Types</p>
                    <p className="text-gray-600">{doctor.therapyTypes.join(", ")}</p>
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
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded-full font-medium">
              Book Appointment
            </button>
            <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-2 px-6 rounded-full font-medium">
              Contact Doctor
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}

// Helper sub-component for info rows
function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: any
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-5 w-5 text-emerald-600 mt-0.5" />
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  )
}
