"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import FallingElements from "./falling-elements"
import { cn } from "@/lib/utils"
import unanitharapy from '@/components/images/unani therapy.jpg'
import { useIsMobile } from "@/hooks/use-mobile"
import Image from "next/image"

const slides = [
  {
    id: 1,
    title: "Unani Therapy",
    description: "A holistic healing system balancing the body's four humors using herbal remedies, diet, and natural therapies for wellness.",
    image: unanitharapy,
    color: "from-blue-500/20 to-cyan-400/20",
  },
  {
    id: 2,
    title: "Expert Doctors",
    description: "Our team of specialists brings years of experience and compassionate care to every patient.",
    image: "/slider-images/doctor.jpg",
    color: "from-emerald-500/20 to-teal-400/20",
  },
  {
    id: 3,
    title: "Modern Facilities",
    description: "State-of-the-art equipment and comfortable environments for your healthcare needs.",
    image: "/slider-images/facility.jpg",
    color: "from-purple-500/20 to-indigo-400/20",
  },
]

export default function ModernSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isMobile = useIsMobile()

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  useEffect(() => {
    startAutoPlay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handlePrevious = () => {
    if (isAnimating) return
    if (intervalRef.current) clearInterval(intervalRef.current)

    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    startAutoPlay()
  }

  const handleNext = () => {
    if (isAnimating) return
    if (intervalRef.current) clearInterval(intervalRef.current)

    setDirection(1)
    // setCurrentIndex((prev) => (prev + 1) % slides.length)
    currentIndex === slides.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)

    startAutoPlay()
  }

  const currentSlide = slides[currentIndex]

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-xl">
      {/* Background gradient */}
      <motion.div
        className={cn("absolute inset-0 bg-gradient-to-r opacity-70 transition-all duration-700", currentSlide.color)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        key={currentSlide.id}
      />

      {/* Falling elements animation */}
      <FallingElements />

      {/* Slider content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
        {/* Text content */}
        <AnimatePresence mode="wait" initial={false} onExitComplete={() => setIsAnimating(false)}>
          <motion.div
            key={`text-${currentSlide.id}`}
            className="w-full md:w-1/2 text-center md:text-left pt-10 md:pt-0"
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
            onAnimationStart={() => setIsAnimating(true)}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">{currentSlide.title}</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-md">{currentSlide.description}</p>

            <motion.button
              className="mt-8 px-6 py-3 bg-white text-gray-800 rounded-full font-medium shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Image content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${currentSlide.id}`}
            className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8, rotate: direction > 0 ? 10 : -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: direction > 0 ? -10 : 10 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-white shadow-xl overflow-hidden">
                <div className="absolute inset-2 rounded-full overflow-hidden">
                 
                  <Image
                    src={currentSlide.image || "/placeholder.svg"}
                    alt={currentSlide.title}
                    className="w-full h-full object-cover"
                    fill
                    sizes="100vw"
                    priority
                    style={{
                      objectFit: "cover",
                      borderRadius: "0.75rem",
                      transform: `scale(${isMobile ? 1 : 1.4})`,
                    }}
                    />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-20">
        <motion.button
          onClick={handlePrevious}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} />
        </motion.button>

        <motion.button
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((slide, index) => (
          <motion.button
            key={slide.id}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
              if (intervalRef.current) clearInterval(intervalRef.current)
              startAutoPlay()
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex ? "w-8 bg-white" : "bg-white/50",
            )}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  )
}

