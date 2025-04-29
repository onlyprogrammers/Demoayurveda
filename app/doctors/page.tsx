import DoctorCard from "@/components/doctor-card"
import Doctor from "@/components/doctors.json"

export default function DoctorsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-green-800 sm:text-4xl md:text-5xl">Our Doctors</h1>
        <p className="mt-4 text-lg text-gray-600">Meet our team of experienced and certified Ayurvedic doctors</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Doctor.map((doctor, index) => (
          <DoctorCard
          key={index}
          name={doctor.name}
          image="/doctors/doctor-1.jpg"
          experience={doctor.experience}
          qualifications={doctor.qualifications}
          href={"/doctors/"+doctor.username}
        />
        ))}
      </div>  
      
    </div>
  )
}

