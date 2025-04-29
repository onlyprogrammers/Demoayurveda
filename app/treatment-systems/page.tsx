import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface TreatmentSystemProps {
  title: string
  description: string
  icon: string
  features: string[]
  href: string
}

function TreatmentSystem({ title, description, icon, features, href }: TreatmentSystemProps) {
  return (
    <div className="rounded-lg border border-green-100 bg-white p-6 shadow-md hover:shadow-lg transition-all hover:border-green-200">
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
        <div className="w-20 h-20 shrink-0">
          <Image
            src={icon || "/placeholder.svg?height=80&width=80"}
            alt={title}
            width={80}
            height={80}
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-green-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>

          <h3 className="font-medium text-green-700 mb-2">Key Features:</h3>
          <ul className="space-y-1 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4 text-green-600 mt-1"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <Button asChild className="bg-green-700 text-white hover:bg-green-800">
            <Link href={href}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function TreatmentSystemsPage() {
  const treatmentSystems = [
    {
      title: "Ayurveda",
      description:
        "Ayurveda is one of the world's oldest holistic healing systems developed in India thousands of years ago. It's based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit.",
      icon: "/icons/ayurveda.svg",
      features: [
        "Personalized treatment based on your unique constitution (dosha)",
        "Uses herbs, special diets, and other unique health practices",
        "Focuses on prevention and addressing the root cause",
        "Includes detoxification, massage therapy, and yoga",
        "Treats a wide range of conditions from digestive issues to chronic diseases",
      ],
      href: "/treatment-systems/ayurveda",
    },
    {
      title: "Homeopathy",
      description:
        "Homeopathy is a medical system based on the belief that the body can cure itself. It uses tiny amounts of natural substances to stimulate the healing process, following the principle that 'like cures like.'",
      icon: "/icons/homeopathy.svg",
      features: [
        "Highly individualized treatment approach",
        "Uses extremely diluted natural substances",
        "Non-invasive and generally free from side effects",
        "Treats both acute and chronic conditions",
        "Focuses on treating the whole person, not just symptoms",
      ],
      href: "/treatment-systems/homeopathy",
    },
    {
      title: "Naturopathy",
      description:
        "Naturopathy is a system of medicine that focuses on natural remedies and the body’s ability to heal itself. It combines traditional healing methods with modern science. Naturopaths often use techniques like herbal medicine, nutrition, acupuncture, hydrotherapy, massage, and lifestyle counseling.",
      icon: "/icons/naturopathy.svg",
      features: [
        "Emphasizes the healing power of nature",
        "Uses dietary and lifestyle changes",
        "Incorporates hydrotherapy, fasting, and exercise",
        "Focuses on identifying and treating the root cause",
        "Promotes overall wellness and disease prevention",
      ],
      href: "/treatment-systems/naturopathy",
    },
    {
      title: "Siddha Medicine",
      description:
        "Siddha is one of India's oldest medical systems, originating in Tamil Nadu. It shares concepts with Ayurveda while maintaining its own unique identity and approach to healing.",
      icon: "/icons/siddha.svg",
      features: [
        "Based on the balance of three humors: Vata, Pitta, and Kapha",
        "Uses herbal preparations, minerals, and animal products",
        "Includes external therapies like steam baths and oil massages",
        "Emphasizes preventive measures and lifestyle modifications",
        "Particularly effective for skin diseases, digestive disorders, and joint problems",
      ],
      href: "/treatment-systems/siddha",
    },
    {
      title: "Unani Medicine",
      description:
        "Unani medicine is a traditional medical system that originated in ancient Greece, was developed by Arabs and Persians, and was brought to India by Muslim rulers.",
      icon: "/icons/unani.svg",
      features: [
        "Based on the theory of four humors: blood, phlegm, yellow bile, and black bile",
        "Uses natural remedies derived from plants, minerals, and animals",
        "Includes dietary regulations, lifestyle modifications, and regimental therapies",
        "Focuses on strengthening the body's defense mechanisms",
        "Effective for chronic diseases, digestive disorders, and skin conditions",
      ],
      href: "/treatment-systems/unani",
    },
    {
      title: "Yoga Therapy",
      description:
        "Yoga therapy is the adaptation of yoga practices for people with health challenges. It helps to better emotional, physical, mental and spiritual health.",
      icon: "/icons/yoga.svg",
      features: [
        "Combines physical postures, breathing exercises, and meditation",
        "Tailored to individual needs and conditions",
        "Improves flexibility, strength, and balance",
        "Reduces stress, anxiety, and depression",
        "Complements other treatment approaches for holistic healing",
      ],
      href: "/treatment-systems/yoga-therapy",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl md:text-5xl">
          Our Treatment Systems
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We offer a comprehensive range of traditional Indian medical systems to provide holistic healthcare solutions
          tailored to your unique needs
        </p>
      </div>

      <div className="grid gap-8">
        {treatmentSystems.map((system, index) => (
          <TreatmentSystem
            key={index}
            title={system.title}
            description={system.description}
            icon={system.icon}
            features={system.features}
            href={system.href}
          />
        ))}
      </div>
    </div>
  )
}

