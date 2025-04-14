import type React from "react"
import { Apple, Download, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button" // Make sure this import path is correct
import Link from "next/link"

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-green-800">{title}</h3>
      <p className="text-sm text-green-600 mt-1">{description}</p>
    </div>
  )
}

export default function DownloadAppSection() {
  return (
    <div className="bg-green-50 py-10 sm:py-14">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">Get Healthcare at Your Fingertips</h2>
        <p className="text-md text-green-600 max-w-xl mx-auto mb-8">
          Book consultations, get prescriptions, and track your health—all from our mobile app.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <Feature
            icon={<Smartphone className="h-6 w-6" />}
            title="Easy Appointments"
            description="Book or reschedule appointments anytime, anywhere."
          />
          <Feature
            icon={<Download className="h-6 w-6" />}
            title="Instant Reports"
            description="Access prescriptions and reports in one tap."
          />
          <Feature
            icon={<Apple className="h-6 w-6" />}
            title="iOS & Android Support"
            description="Available on both App Store and Google Play."
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild className="bg-green-700 text-white hover:bg-green-800">
            <Link href="https://play.google.com" target="_blank">Download for Android</Link>
          </Button>
          <Button asChild variant="outline" className="text-green-700 border-green-700 hover:bg-green-100">
            <Link href="https://www.apple.com/app-store/" target="_blank">Download for iOS</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
