import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dayush clinics - Digital Consultations for personalized healing",
  description:
    "We offer digital consultations in alternate medicine systems to provide holistic healthcare solutions tailored to your needs.",
    generator: 'Dayush Clinics',
  applicationName: 'Dayush Clinics',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " bg-white"} >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <AppDownloadPopup />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
import AppDownloadPopup from "@/components/ui/appdownloadpopup"
