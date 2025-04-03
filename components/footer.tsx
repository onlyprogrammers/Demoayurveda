import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Demo Ayurveda</h3>
            <p className="mb-4 text-green-100">
              Authentic Kerala Ayurvedic Treatment Center in Hiranandani Powai, Mumbai India.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-green-100 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-green-100">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="hover:text-white">
                  Our Treatments
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Treatments</h3>
            <ul className="space-y-2 text-green-100">
              <li>
                <Link href="/treatments/pain-relief" className="hover:text-white">
                  Pain Relief
                </Link>
              </li>
              <li>
                <Link href="/treatments/stress-relief" className="hover:text-white">
                  Relaxation & Stress Relief
                </Link>
              </li>
              <li>
                <Link href="/treatments/panchakarma" className="hover:text-white">
                  Panchakarma Detox
                </Link>
              </li>
              <li>
                <Link href="/treatments/weight-loss" className="hover:text-white">
                  Fat and Weight Loss
                </Link>
              </li>
              <li>
                <Link href="/treatments/womens-care" className="hover:text-white">
                  Women's Care
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 shrink-0" />
                <span>+91 9870390739</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 shrink-0" />
                <span>info@thapovanayurveda.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0" />
                <span>Hiranandani Powai, Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-green-800 pt-8 text-center text-sm text-green-100">
          <p>&copy; {new Date().getFullYear()} Demo Ayurveda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

