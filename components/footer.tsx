import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Dayush Clinics</h3>
            <p className="mb-4 text-green-100 ">
              One Stop Solution For Digital Consultations In Alternate Medicine Treatments.
            </p>
            
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
                  Our Specializations
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white">
                  Medical Team
                </Link>
              </li>
             
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Treatments</h3>
            <ul className="space-y-2 text-green-100">
              <li>
                <Link href="/book/ayurveda" className="hover:text-white">
                  Ayurveda
                </Link>
              </li>
              <li>
                <Link href="/book/homeopathy" className="hover:text-white">
                  Homeopathy
                </Link>
              </li>
              <li>
                <Link href="/book/naturopathy" className="hover:text-white">
                  Naturopathy
                </Link>
              </li>
              <li>
                <Link href="/book/siddha" className="hover:text-white">
                  Siddha 
                </Link>
              </li>
              <li>
                <Link href="/book/yoga" className="hover:text-white">
                  Yoga and Meditation
                </Link>
              </li>
              <li>
                <Link href="/book/unani" className="hover:text-white">
                  Unani 
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-green-100">
           
                <Mail className="mr-2 h-5 w-5 shrink-0" />
              <li>
                <span>support@dayushclinics.com</span>

              </li>
              <li className=" items-start ">
                <span>dayushclinics@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-green-800 pt-8 text-center text-sm text-green-100">
          <p>&copy;2024 Dayush clinics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

