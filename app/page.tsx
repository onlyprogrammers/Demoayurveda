"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
// import HeroSlider from "@/components/hero-slider"
import TreatmentCard from "@/components/treatment-card"
import StatsSection from "@/components/stats-section"
// import ConsultationForm from "@/components/consultation-form"
// import DoctorCard from "@/components/doctor-card"
import TestimonialCard from "@/components/testimonial-card"
import TreatmentTypesSection from "@/components/treatment-types-section"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import treatment1 from "@/components/images/treatment1.png"
import { cn } from "@/lib/utils"
import ModernSlider from "@/components/slider/modern-slider"

// images for diseases
import asthma from "@/components/images/diseas/asthma.JPG"
import diabetes from "@/components/images/diseas/diabetes .JPG"
import digestivedisorder from "@/components/images/diseas/digestive disorders.JPG"
import headache from "@/components/images/diseas/headache.JPG"
import ibs from "@/components/images/diseas/ibs & piles.JPG"
import jointpain from "@/components/images/diseas/jointpain.JPG"
import kidneydisorder from "@/components/images/diseas/kidney disorder.JPG"
import skin from "@/components/images/diseas/skin disorders.JPG"


export default function Home() {
  const treatmentTypesSection = useScrollAnimation()
  const treatmentsSection = useScrollAnimation()
  const aboutSection = useScrollAnimation()
  const doctorsSection = useScrollAnimation()
  const consultationSection = useScrollAnimation()
  const testimonialsSection = useScrollAnimation()

  return (
    <div>
      <ModernSlider />

      {/* Treatment Types Section */}
      <section ref={treatmentTypesSection.ref as React.RefObject<HTMLElement>}>
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            treatmentTypesSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <TreatmentTypesSection />
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-12 md:py-16" ref={treatmentsSection.ref as React.RefObject<HTMLElement>}>
        <div
          className={cn(
            "container px-4 md:px-6 transition-all duration-700 ease-out",
            treatmentsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">Popular Treatments</h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover our range of authentic treatments for various health conditions
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
            <TreatmentCard title="" icon={asthma} href="/treatments/pain-relief" />
            <TreatmentCard
              title=""
              icon={diabetes}
              href="/treatments/stress-relief"
            />
            <TreatmentCard title="" icon={digestivedisorder} href="/treatments/panchakarma" />
            <TreatmentCard title="" icon={headache} href="/treatments/weight-loss" />
            <TreatmentCard title="" icon={ibs} href="/treatments/womens-care" />
            <TreatmentCard
              title=""
              icon={jointpain}
              href="/treatments/other-illnesses"
            />
          </div>

          <div className="mt-10 text-center">
            <Button asChild className="bg-green-700 text-white hover:bg-green-800">
              <Link href="/treatments">View All Treatments</Link>
            </Button>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* About Section */}
      <section className="py-12 md:py-16" ref={aboutSection.ref as React.RefObject<HTMLElement>}>
        <div
          className={cn(
            "container px-4 md:px-6 transition-all duration-700 ease-out",
            aboutSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
                30+ years of Holistic Healthcare Expertise
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Treated more than 20 lakh patients across 35+ countries worldwide with multiple traditional Indian
                treatment systems
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
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
                      className="lucide lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Multiple traditional Indian treatment systems under one roof</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
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
                      className="lucide lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Personalized treatment plans based on your unique constitution</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
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
                      className="lucide lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Holistic approach addressing the root cause of health issues</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
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
                      className="lucide lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Natural remedies prepared using traditional methods</p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-green-700 text-white hover:bg-green-800">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg justify-center bg-green-100">
              <Image src={treatment1} alt="Holistic Treatment" fill className="object w-max" style={{width:"100%"}}  />
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      

      {/* Testimonials Section */}
      <section className="bg-green-50 py-12 md:py-16" ref={testimonialsSection.ref as React.RefObject<HTMLElement>}>
        <div
          className={cn(
            "container px-4 md:px-6 transition-all duration-700 ease-out",
            testimonialsSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl">
              Demo Ayurveda Google Reviews
            </h2>
            <div className="mx-auto mt-4 flex items-center justify-center">
              <p className="mr-2 text-3xl font-bold text-green-800">4.9</p>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-amber-400"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Priya Sharma"
              rating={5}
              text="I had been suffering from chronic back pain for years. After just a few sessions of Ayurvedic treatment, I experienced significant relief. The doctors are knowledgeable and the staff is very caring."
            />
            <TestimonialCard
              name="Rahul Mehta"
              rating={5}
              text="The Homeopathic treatment completely transformed my health. I feel more energetic and my digestive issues have resolved. Highly recommend their approach to chronic conditions."
            />
            <TestimonialCard
              name="Anjali Patel"
              rating={4}
              text="I visited for stress management and sleep issues. The combination of Naturopathy treatments and herbal medicines has made a huge difference. I'm sleeping better and feeling much more relaxed."
            />
          </div>

          <div className="mt-10 text-center">
            <Button asChild className="bg-green-700 text-white hover:bg-green-800">
              <Link href="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

