import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
          About Dayush Clinics
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to Dayush Clinics, your trusted partner in Ayurvedic wellness. We are committed to offering holistic healing experiences that restore balance and enhance your overall health.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          <Image src="/about-image.jpg" alt="Dayush Clinics Center" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-800">Our Journey</h2>
          <p className="mt-4 text-gray-600">
            Dayush Clinics began with a mission to make authentic Ayurvedic care accessible to everyone. Over the past 30 years, we've supported over 20 lakh patients in more than 35 countries with our natural and time-tested methods.
          </p>
          <p className="mt-4 text-gray-600">
            Our approach blends traditional Ayurvedic knowledge with modern practices to create effective treatment solutions. We focus on identifying the root cause rather than merely treating symptoms.
          </p>
          <p className="mt-4 text-gray-600">
            Believing in nature’s wisdom, we craft personalized treatments that stimulate the body's natural healing abilities and promote lasting wellbeing.
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
