"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import mainlogo from '@/components/images/logos/mainlogo.png'

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Treatments", href: "/treatments" },
  { name: "Specializations", href: "/treatment-systems" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-25 items-center justify-between px-4 md:px-6 mainnav">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <Image src={mainlogo} alt="Logo" height={100} className="h-25 mainlogo" />
          </div>
        </Link>

        <nav className="hidden md:flex flex-col md:gap-6 lg:gap-1 items-center">
          <div className="hidden md:flex items-center gap-6">

          {navLinks.map((link) => (
            <Link
            key={link.name}
            href={link.href}
            className="text-lg font-medium text-green-800 transition-colors hover:text-green-600"
            >
              {link.name}
            </Link>
          ))}
          </div>
          <i className="text-green-800 text-sm translate-y-2 opacity-70 ">"Digital Care, Personalized Healing"</i>
        </nav>

        <div className="hidden md:flex md:items-center md:gap-4">
          <Button
            asChild
            variant="outline"
            className="border-green-700 text-green-800 hover:bg-green-50 hover:text-green-900"
          >
            <Link href="/book/all">Book Consultation</Link>
          </Button>
          <Button asChild className="bg-green-700 text-white hover:bg-green-800">
            {/* <Link href="/book-now">Book Now</Link> */}
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-green-800" /> : <Menu className="h-6 w-6 text-green-800" />}
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute left-0 right-0 top-16 z-50 bg-white p-4 shadow-md md:hidden transition-all duration-200 ease-in-out",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none",
        )}
      >
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-green-800 transition-colors hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Button
              asChild
              variant="outline"
              className="border-green-700 text-green-800 hover:bg-green-50 hover:text-green-900"
            >
              <Link href="/book/all">Book Consultation</Link>
            </Button>
            
          </div>
        </nav>
      </div>
    </header>
  )
}

