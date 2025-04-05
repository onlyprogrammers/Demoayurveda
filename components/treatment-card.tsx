import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface TreatmentCardProps {
  title: string
  icon: any
  href: string
  className?: string
}

export default function TreatmentCard({ title, icon, href, className }: TreatmentCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col items-center rounded-lg border border-green-100 bg-white p-6 text-center shadow-sm transition-all hover:border-green-200 hover:shadow-md hover:translate-y-[-4px]",
        className,
      )}
    >
      <div className="mb-4 h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 overflow-hidden">
        <Image
          src={icon || "/placeholder.svg?height=128&width=128"}
          alt={title}
          width={128}
          height={128}
          className="h-full w-full object-contain"
        />
      </div>
      <h3 className="text-lg font-medium text-green-800 group-hover:text-green-700">{title}</h3>
    </Link>
  )
}

