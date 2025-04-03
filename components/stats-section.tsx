import type React from "react"
import { Users, Award, Calendar } from "lucide-react"

interface StatProps {
  value: string
  label: string
  icon: React.ReactNode
}

function Stat({ value, label, icon }: StatProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
        {icon}
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold text-green-800">{value}</p>
        <p className="text-sm text-green-600">{label}</p>
      </div>
    </div>
  )
}

export default function StatsSection() {
  return (
    <div className="bg-green-50 py-8 sm:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-3">
          <Stat value="30+" label="Years of Experience" icon={<Calendar className="h-6 w-6" />} />
          <Stat value="1.5 Million" label="Successful Treatments" icon={<Award className="h-6 w-6" />} />
          <Stat value="8000+" label="Patient Consultations Everyday" icon={<Users className="h-6 w-6" />} />
        </div>
      </div>
    </div>
  )
}

