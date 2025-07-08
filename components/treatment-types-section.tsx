import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import axios from "axios"
import ayurvedalogo from "@/components/images/logos/Ayurveda.PNG"
import homeopathy from "@/components/images/logos/homeopathy logo.PNG"
import naturopathy from "@/components/images/logos/naturopathy.PNG"
import siddha from "@/components/images/logos/siddha medicine.PNG"
import yoga from "@/components/images/logos/Yoga Therapy.PNG"
import { useEffect, useState } from "react"
import doctordata from "@/components/doctors"

interface TreatmentTypeProps {
  title: string
  description: string
  icon: any
  href: string
  className?: string
}
const icons=[homeopathy, naturopathy, siddha, yoga, homeopathy, ayurvedalogo]



function TreatmentType({ title, description, icon, href, className }: TreatmentTypeProps) {

  
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-lg border border-green-100 bg-white p-6 text-center shadow-sm transition-all hover:border-green-200 hover:shadow-md hover:translate-y-[-4px]",
        className,
      )}
    >
      <div className="mb-4 h-20 w-20 overflow-hidden">
        <Image
          src={icon || "/placeholder.svg?height=80&width=80"}
          alt={title}
          width={80}
          height={80}
          className="h-full w-full object-contain"
        />
      </div>
      <h3 className="text-xl font-medium text-green-800">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm">{description}</p>
      <Button
        asChild
        variant="outline"
        className="mt-4 border-green-700 text-white bg-green-700 hover:bg-green-50 hover:text-green-900"
      >
        <Link href={href}>Book Now</Link>
      </Button>
    </div>
  )
}
const add_dataIfNotFetched:any = [
    {
        "id": 11,
        "name": "Ayurveda",
        "description": "Ancient Indian system of medicine focusing on balance between mind, body, and spirit using herbs, diet, and lifestyle."
    },
    {
        "id": 12,
        "name": "Homeopathy",
        "description": "Alternative medical system based on the principle of 'like cures like' using highly diluted substances."
    },
    {
        "id": 13,
        "name": "Naturopathy",
        "description": "Natural healing approach that emphasizes the body's inherent ability to heal itself through diet, exercise, and lifestyle."
    },
    {
        "id": 15,
        "name": "Unani",
        "description": "Traditional system of medicine based on the teachings of Hippocrates and Galen, focusing on the balance of bodily humors."
    },
    {
        "id": 16,
        "name": "Yoga and Meditation",
        "description": "Ancient practices that promote physical, mental, and spiritual well-being through postures, breathing techniques, and meditation."
    },
    {
        "id": 14,
        "name": "Sidha",
        "description": "One of India's oldest medical systems originated in Tamil Nadu, using herbs, minerals, and animal products."
    }
]

export default function TreatmentTypesSection() {
    const [categories, setcategories] = useState([])
  useEffect(() => {
    const fetchcategories = async () => {
      try {
        const response = await axios.get("http://65.1.92.125:8080/categories/get-web/")
        setcategories(response.data)
        if (response.data.length === 0) {
          // If no categories are fetched, add default data
          setcategories(add_dataIfNotFetched)
        }
      } catch (error) {
        console.error("Error fetching categories:", error)
        setcategories(add_dataIfNotFetched)
       
      }
    }
    fetchcategories()
  }, [])
  return (
    <section className="py-5 md:py-6 bg-green-100">
      <div className="container px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">Popular Treatments</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We offer digital consultations in alternate medicine systems to provide holistic healthcare
            solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        { categories.map((category, index) => (

          <TreatmentType
            title={category["name"]}
            description={category["description"]}
            key={category["id"]}
            icon={icons[index]}
            href={"/book/"+String(category["name"]).toLowerCase()}
          />
        ))
        }
        
           
        </div>

        <div className="mt-10 text-center">
          <Button asChild className="bg-green-700 text-white hover:bg-green-800">
            <Link href="/treatment-systems">View All Treatment Systems</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
