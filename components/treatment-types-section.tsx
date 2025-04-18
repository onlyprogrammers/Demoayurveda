import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import ayurvedalogo from "@/components/images/logos/Ayurveda.PNG"
import homeopathy from "@/components/images/logos/homeopathy logo.PNG"
import naturopathy from "@/components/images/logos/naturopathy.PNG"
import siddha from "@/components/images/logos/siddha medicine.PNG"
import yoga from "@/components/images/logos/Yoga Therapy.PNG"

interface TreatmentTypeProps {
  title: string
  description: string
  icon: any
  href: string
  className?: string
}


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
        className="mt-4 border-green-700 text-green-800 hover:bg-green-50 hover:text-green-900"
      >
        <Link href={href}>Learn More</Link>
      </Button>
    </div>
  )
}

export default function TreatmentTypesSection() {
  return (
    <section className="py-12 md:py-16 bg-green-50">
      <div className="container px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">Our Treatment Systems</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of traditional Indian medical systems to provide holistic healthcare
            solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <TreatmentType
            title="Ayurveda"
            description="Ancient Indian system of medicine focusing on balance between mind, body, and spirit using herbs, diet, and lifestyle."
            icon={ayurvedalogo}
            href="/book/ayurveda"
          />
          <TreatmentType
            title="Homeopathy"
            description="Alternative medical system based on the principle of 'like cures like' using highly diluted substances."
            icon={homeopathy}
            href="/book/homeopathy"
          />
          <TreatmentType
            title="Naturopathy"
            description="Natural healing approach that emphasizes the body's inherent ability to heal itself through diet, exercise, and lifestyle."
            icon={naturopathy}
            href="/book/naturopathy"
          />
          <TreatmentType
            title="Siddha Medicine"
            description="One of India's oldest medical systems originating in Tamil Nadu, using herbs, minerals, and animal products."
            icon={siddha}
            href="/book/siddha"
          />
          <TreatmentType
            title="Yoga and Meditation"
            description="Ancient practices that promote physical, mental, and spiritual well-being through postures, breathing techniques, and meditation."
            icon={yoga}
            href="/book/yoga"
          />
          <TreatmentType
            title="Unani Medicine"
            description="Traditional system of medicine based on the teachings of Hippocrates and Galen, focusing on the balance of bodily humors."
            icon={homeopathy}
            href="/book/unani"
          />
           
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

