import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import aboutimage from "@/components/images/aboutimage.png"

import {
  Calendar,
  FileBarChart,
  Stethoscope,
  UserCog,
  Globe,
  Smartphone,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl md:text-5xl">
          Dayush Clinics
        </h1>
        
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          <Image src={aboutimage} alt="Dayush Clinics Center" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-800">Our Story</h2>
          <p className="mt-4 text-gray-600">
          At Dayush Clinics, we are inspired by the timeless principles of traditional medicine and the need for accessible, convenient healthcare in today’s digital age. Our platform brings together the best of both worlds—offering direct online video consultations with experienced doctors and practitioners in Ayurveda, Siddha, Naturopathy, Unani, Homeopathy, and Yoga.

          </p>
          <p className="mt-4 text-gray-600">
          We understand that wellness is personal and rooted in trust. That’s why every practitioner on Dayush Clinics has a minimum of 8 years of clinical experience, ensuring you receive expert guidance and care tailored to your needs. Whether you're managing a chronic condition, seeking natural remedies, or simply improving your overall wellbeing, our specialists are here to support you.

          </p>
          <p className="mt-4 text-gray-600">
          With direct video consultations, there’s no need to travel or wait in crowded clinics. You can connect with a qualified doctor instantly or schedule an appointment at your convenience. Each session is designed to feel just like an in-person visit—with the added comfort of being at home.      
          </p>
          <p  className="mt-4 text-gray-600">
          To make holistic healthcare truly accessible, our consultations are offered at near-free cost, because we believe quality care shouldn’t be a luxury. After your consultation, you'll receive a digital prescription that’s instantly available for download, making it easy to follow your treatment plan or order medications.        
          </p>
          <p  className="mt-4 text-gray-600">
          Dayush Clinics is more than just a telemedicine app—it’s your trusted partner for natural, personalized, and authentic healing.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-green-800 text-center">Why Choose Us?</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {/* Easy Appointments */}
  <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
      <Calendar className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-medium text-green-800">Easy Appointments</h3>
    <p className="mt-2 text-gray-600">
      Book your consultation effortlessly through our app or website with just a few clicks.
    </p>
  </div>

  {/* Instant Reports */}
  <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
      <FileBarChart className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-medium text-green-800">Instant Reports</h3>
    <p className="mt-2 text-gray-600">
      Access your treatment reports and health records instantly and securely from anywhere.
    </p>
  </div>

  {/* Expert Doctors */}
  <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
      <Stethoscope className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-medium text-green-800">Expert Doctors</h3>
    <p className="mt-2 text-gray-600">
      Consult with experienced Ayurvedic practitioners dedicated to your health journey.
    </p>
  </div>

  {/* Personalized Care */}
  <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
      <UserCog className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-medium text-green-800">Personalized Care</h3>
    <p className="mt-2 text-gray-600">
      Get tailor-made treatment plans designed according to your body type and health goals.
    </p>
  </div>

  {/* Your Wellness, Anytime & Anywhere */}
  <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
      <Globe className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-medium text-green-800">Your Wellness, Anytime & Anywhere</h3>
    <p className="mt-2 text-gray-600">
      Stay connected to your care with remote consultations and continuous support.
    </p>
  </div>

  {/* iOS & Android Support */}
  <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
      <Smartphone className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-medium text-green-800">iOS & Android Support</h3>
    <p className="mt-2 text-gray-600">
      Our mobile app is available on both iOS and Android, making your wellness journey seamless.
    </p>
  </div>
</div>

      </div>

      <div className="mt-12 text-center">
        <Button asChild className="bg-green-700 text-white hover:bg-green-800">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
