import DoctorCard from "@/components/doctor-card"

export default function DoctorsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl md:text-5xl">Our Doctors</h1>
        <p className="mt-4 text-lg text-gray-600">Meet our team of experienced and certified Ayurvedic doctors</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DoctorCard
          name="Dr. Kanchan Khachane"
          image="/doctors/doctor-1.jpg"
          experience="12+ years"
          qualifications="BAMS, MA"
          href="/doctors/dr-kanchan-khachane"
        />
        <DoctorCard
          name="Dr. Kalpesh Galve"
          image="/doctors/doctor-2.jpg"
          experience="23+ years"
          qualifications="BAMS"
          href="/doctors/dr-kalpesh-galve"
        />
        <DoctorCard
          name="Dr. Snehalata Raaut"
          image="/doctors/doctor-3.jpg"
          experience="15+ years"
          qualifications="BAMS, MD"
          href="/doctors/dr-snehalata-raaut"
        />
        <DoctorCard
          name="Dr. Sudatta Shirolkar"
          image="/doctors/doctor-4.jpg"
          experience="12+ years"
          qualifications="BAMS, MA"
          href="/doctors/dr-sudatta-shirolkar"
        />
        <DoctorCard
          name="Dr. Mukesh Sharma"
          image="/doctors/doctor-5.jpg"
          experience="23+ years"
          qualifications="BAMS"
          href="/doctors/dr-mukesh-sharma"
        />
        <DoctorCard
          name="Dr. Sapna Bhargava"
          image="/doctors/doctor-6.jpg"
          experience="24+ years"
          qualifications="BAMS"
          href="/doctors/dr-sapna-bhargava"
        />
      </div>
    </div>
  )
}

