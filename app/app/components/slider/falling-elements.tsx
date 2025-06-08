"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Medical-themed falling elements
const elements = [
  { id: 1, icon: "🌿", size: 24, delay: 0 },
  { id: 2, icon: "🥗", size: 28, delay: 2 },
  { id: 3, icon: "🍀", size: 32, delay: 4 },
  { id: 4, icon: "🧬", size: 26, delay: 6 },
  { id: 5, icon: "🌱", size: 22, delay: 8 },
  { id: 6, icon: "🩹", size: 20, delay: 10 },
  { id: 7, icon: "🌾", size: 30, delay: 12 },
  { id: 8, icon: "🍃", size: 24, delay: 14 },
]

interface FallingElement {
  id: number
  icon: string
  size: number
  x: number
  delay: number
  duration: number
  rotation: number
}

export default function FallingElements() {
  const [fallingElements, setFallingElements] = useState<FallingElement[]>([])

  useEffect(() => {
    // Create falling elements with random positions
    const leftElements = elements.map((element) => ({
      ...element,
      x: Math.random() * 150,
      duration: 15 + Math.random() * 20,
      rotation: Math.random() * 360,
    }))

    const rightElements = elements.map((element) => ({
      ...element,
      id: element.id + 100, // Ensure unique IDs
      x: window.innerWidth - Math.random() * 150 - element.size,
      duration: 15 + Math.random() * 20,
      rotation: Math.random() * 360,
    }))

    setFallingElements([...leftElements, ...rightElements])
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {fallingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            fontSize: element.size,
            top: -element.size,
            left: element.x,
          }}
          animate={{
            y: ["0vh", "100vh"],
            rotate: [0, element.rotation],
            opacity: [1, 0.8, 0.6, 0.4, 0],
          }}
          transition={{
            y: {
              duration: element.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              ease: "linear",
            },
            rotate: {
              duration: element.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              ease: "linear",
            },
            opacity: {
              duration: element.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              times: [0, 0.7, 0.8, 0.9, 1],
            },
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  )
}

