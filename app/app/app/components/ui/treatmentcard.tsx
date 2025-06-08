
import React from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp } from "lucide-react"
import { cn } from "@/lib/utils"    
import { useScrollAnimation } from "@/hooks/use-scroll-animation"


export default function TreatmentCard({ title, icon, href }: { title: string; icon: string; href: string }) {
    const filteredTreatments = [
        {
            id: 1,
            name: "Pain Relief",
            description: "Effective treatments for chronic pain.",
            image: "/images/pain-relief.jpg",
            duration: "30-60 mins",
            price: "$50-$100",
            popularity: 85,
        },
        {
            id: 2,
            name: "Stress Relief",
            description: "Relaxation techniques and therapies.",
            image: "/images/stress-relief.jpg",
            duration: "30-60 mins",
            price: "$50-$100",
            popularity: 90,
        },
        // Add more treatments as needed
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTreatments.map((treatment) => (
          <Card key={treatment.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image
                src={treatment.image || "/placeholder.svg"}
                alt={treatment.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">{treatment.name}</h3>
              </div>
              <Badge className="absolute top-4 right-4 bg-red-500">
                <ThumbsUp className="h-3 w-3 mr-1" />
                {treatment.popularity}% Popular
              </Badge>
            </div>
            <CardContent className="pt-4">
              <p className="text-sm text-gray-600 mb-4">{treatment.description}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-500">Duration:</span>
                  <p className="font-medium">{treatment.duration}</p>
                </div>
                <div>
                  <span className="text-gray-500">Price Range:</span>
                  <p className="font-medium">{treatment.price}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
}