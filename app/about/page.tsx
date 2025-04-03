import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl md:text-5xl">
          About Demo Ayurveda
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Authentic Kerala Ayurvedic Treatment Center in Hiranandani Powai, Mumbai India
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          <Image src="/about-image.jpg" alt="Thapovan Ayurveda Center" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-800">Our Story</h2>
          <p className="mt-4 text-gray-600">
            Demo Ayurveda was established with a vision to provide authentic Kerala Ayurvedic treatments to people
            seeking natural and holistic healthcare solutions. With over 30 years of experience, we have successfully
            treated more than 20 lakh patients across 35+ countries worldwide.
          </p>
          <p className="mt-4 text-gray-600">
            Our center combines traditional Ayurvedic wisdom with modern healthcare practices to deliver effective
            treatments for various health conditions. We focus on addressing the root cause of health issues rather than
            just treating the symptoms.
          </p>
          <p className="mt-4 text-gray-600">
            At Demo Ayurveda, we believe in the power of nature to heal and restore balance in the body. Our treatments
            are designed to enhance your body's natural healing abilities and promote overall wellbeing.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-green-800">Why Choose Thapovan Ayurveda?</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-certificate"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="M12 8v8" />
                <path d="M8 11h8" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-green-800">Authentic Treatments</h3>
            <p className="mt-2 text-gray-600">
              We offer genuine Kerala Ayurvedic treatments performed by experienced therapists trained in traditional
              techniques.
            </p>
          </div>
          <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-stethoscope"
              >
                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
                <circle cx="20" cy="10" r="2" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-green-800">Expert Doctors</h3>
            <p className="mt-2 text-gray-600">
              Our team consists of qualified and experienced Ayurvedic doctors who provide personalized care and
              treatment plans.
            </p>
          </div>
          <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-flask-conical"
              >
                <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
                <path d="M8.5 2h7" />
                <path d="M7 16h10" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-green-800">Quality Medicines</h3>
            <p className="mt-2 text-gray-600">
              We use high-quality herbal medicines prepared using traditional methods to ensure maximum efficacy and
              safety.
            </p>
          </div>
          <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-clipboard-list"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                <path d="M12 11h4" />
                <path d="M12 16h4" />
                <path d="M8 11h.01" />
                <path d="M8 16h.01" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-green-800">Personalized Care</h3>
            <p className="mt-2 text-gray-600">
              We develop customized treatment plans based on your unique constitution and health condition.
            </p>
          </div>
          <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-spa"
              >
                <path d="M12 22a7 7 0 0 0 7-7c0-2-1-4-3-5.5s-3-2.5-4-5.5c-1 3-2 4-4 5.5S5 13 5 15a7 7 0 0 0 7 7z" />
                <path d="M12 22V11" />
                <path d="M8 18a4 4 0 0 0 8 0" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-green-800">Holistic Approach</h3>
            <p className="mt-2 text-gray-600">
              We focus on treating the whole person—body, mind, and spirit—rather than just the disease or condition.
            </p>
          </div>
          <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart-handshake"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
                <path d="m18 15-2-2" />
                <path d="m15 18-2-2" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-green-800">Proven Results</h3>
            <p className="mt-2 text-gray-600">
              Our treatments have helped thousands of patients achieve significant improvements in their health and
              wellbeing.
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

