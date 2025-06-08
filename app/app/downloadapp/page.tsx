"use client"

import Image from "next/image"
import { Phone, Video, Gift, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex flex-col">
      {/* Top Notice */}
      <div className="bg-yellow-100 text-yellow-800 text-center py-2">
        Presently, this feature is available only through our mobile applications
      </div>

      {/* Hero Section */}
      <header className="flex flex-col-reverse lg:flex-row items-center justify-between container mx-auto px-6 py-16">
        <div className="space-y-6 lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-emerald-800">
            Download Our App for a Better Experience
          </h1>
          <p className="text-lg text-gray-700">
            Enhance your wellness journey—access Ayurveda, Unani, Yoga, Naturopathy,
            Homeopathy, Siddha and more, all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="default" size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Download for Android
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="h-5 w-5" />
              Download for iOS
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <div className="relative w-64 h-96 mx-auto">
            <Image
              src="/placeholder.svg?height=500&width=250"
              alt="App Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-emerald-700">
          What You Get
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon={<Video className="h-6 w-6 text-primary" />}
            title="Direct Video Consultations"
            description="Connect face-to-face with experts wherever you are."
          />
          <Feature
            icon={<Phone className="h-6 w-6 text-primary" />}
            title="Audio Call Support"
            description="Get guidance on the go with clear, real-time audio."
          />
          <Feature
            icon={<Gift className="h-6 w-6 text-primary" />}
            title="Exclusive Offers"
            description="Unlock special discounts and promotions for app users."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-100 py-6">
        <div className="container mx-auto text-center text-sm text-gray-600">
          © {new Date().getFullYear()} YourAppName. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow">
      <div className="p-3 bg-primary/10 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-emerald-800">{title}</h3>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  )
}
