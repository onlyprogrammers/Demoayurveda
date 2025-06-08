// app/profile/[id]/page.tsx
import { notFound } from "next/navigation"
import ProfileClient from "./ProfileClient"
import type { Doctor } from "@/types/doctor"

interface PageProps {
  params: { id: string }
}

export default async function Page({ params }: PageProps) {
  const all: Doctor[] = []
  // Fetch all categories’ doctors
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
        languages: (d.languages ?? "").split(",").map((l: string) => l.trim()),
        contactEmail: d.user.email ?? "",
        isVerified: true,
        consultationMode: ["Video Call", "Chat"],
        rating: Math.floor(Math.random() * 5 + 1),
        patients: Math.floor(Math.random() * 500 + 50),
      })
    })
  }

  // Find the one doctor by ID
  const doctor = all.find((d) => String(d.id) === params.id)
  if (!doctor) notFound()

  // Pass it to a client component for rendering
  return <ProfileClient doctor={doctor} />
}
