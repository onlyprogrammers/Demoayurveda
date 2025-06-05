import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface DoctorCardProps {
  name: string
  image: string
  experience: string
  qualifications: string
  href: string
}

export default function DoctorCard({ name, image, experience, qualifications, href }: DoctorCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg hover:translate-y-[-4px] border border-green-50">
      <div className="relative h-56 sm:h-64 w-full">
        <Image src={image || "/placeholder.svg?height=300&width=300"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-green-800">{name}</h3>
        <p className="text-sm text-green-600">{experience} of experience</p>
        <p className="mb-4 text-sm text-gray-600">{qualifications}</p>
        <Button
          asChild
          variant="outline"
          className="w-full border-green-700 text-green-800 hover:bg-green-50 hover:text-green-900"
        >
          <Link href={href}>Book Appointment</Link>
        </Button>
      </div>
    </div>
  )
}

