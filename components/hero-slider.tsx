"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Slide {
  image: string
  title: string
  subtitle: string
  buttonText?: string
  buttonLink?: string
}

const slides: Slide[] = [
  {
    image: "/hero-1.jpg",
    title: "Authentic Traditional Treatments",
    subtitle: "Experience the best of Ayurveda, Homeopathy, Naturopathy and more for holistic wellness",
    buttonText: "Explore Treatments",
    buttonLink: "/treatment-systems",
  },
  {
    image: "/hero-2.jpg",
    title: "Consult with Certified Specialists",
    subtitle: "Our team of experienced doctors provide personalized care across multiple treatment systems",
    buttonText: "Meet Our Doctors",
    buttonLink: "/doctors",
  },
  {
    image: "/hero-3.jpg",
    title: "30+ Years of Healthcare Expertise",
    subtitle: "Trusted by thousands of patients worldwide for comprehensive traditional treatments",
    buttonText: "Learn More",
    buttonLink: "/about",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10" />
          <Image
            src={slide.image || "/placeholder.svg?height=600&width=1200"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-md">
              {slide.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl drop-shadow-md">
              {slide.subtitle}
            </p>
            {slide.buttonText && slide.buttonLink && (
              <Button asChild className="mt-6 bg-green-700 hover:bg-green-800 text-white">
                <Link href={slide.buttonLink}>{slide.buttonText}</Link>
              </Button>
            )}
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn("h-2 w-2 rounded-full", index === currentSlide ? "bg-white" : "bg-white/50")}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

