"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, Video, Gift, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Link from "next/link"

export default function AppDownloadPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user is new or returning
    const isNewUser = localStorage.getItem("hasVisited") === null

    if (isNewUser) {
      // For new users, show popup immediately
      setIsOpen(true)
      localStorage.setItem("hasVisited", "true")
    } else {
      // For returning users, show popup after random time (1-3 minutes)
      const randomMinutes = Math.floor(Math.random() * 2) + 1 // 1-3 minutes
      const randomTime = randomMinutes * 60 * 1000 // Convert to milliseconds

      const timer = setTimeout(() => {
        setIsOpen(true)
      }, randomTime)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">Download Our App for a Better Experience</DialogTitle>
          <DialogDescription className="text-center">
            Enhance your wellness journey with our mobile app
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Video className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Direct Video Consultations</p>
                <p className="text-sm text-muted-foreground">Connect face-to-face with experts</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Audio Call Support</p>
                <p className="text-sm text-muted-foreground">Get guidance on the go</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Gift className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Exclusive Offers</p>
                <p className="text-sm text-muted-foreground">Special discounts for app users</p>
              </div>
            </div>

          <Link href="https://play.google.com/store/apps/details?id=com.dayush.dayush_clinic_customer&hl=en_IN" target="_blank" rel="noopener noreferrer">
            <Button className="mt-4 gap-2">
              <Download className="h-4 w-4" />
              Download Now
            </Button>
          </Link>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-64 w-full">
              <Image src="/placeholder.svg?height=300&width=200" alt="Wellness App" fill className="object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-2 text-center text-sm text-muted-foreground">
          <p>Access Ayurveda, Unani, Yoga, Naturopathy, Homeopathy, Siddha and more therapies</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

