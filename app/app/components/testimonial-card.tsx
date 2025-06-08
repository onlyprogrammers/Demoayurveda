import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  image?: string
  rating: number
  text: string
}

export default function TestimonialCard({ name, image, rating, text }: TestimonialCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md border border-green-100 hover:border-green-200 transition-all hover:shadow-lg">
      <div className="mb-4 flex items-center gap-4">
        <div className="h-12 w-12 overflow-hidden rounded-full bg-green-100 flex items-center justify-center">
          {image ? (
            <Image
              src={image || "/placeholder.svg?height=48&width=48"}
              alt={name}
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-lg font-medium text-green-700">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{text}</p>
    </div>
  )
}

