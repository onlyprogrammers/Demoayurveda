import { useEffect } from "react"

 export type Doctor = {
  id: number
  name: string
  specialty: string
  experience: number
  consultationFee: string
  languages: string[]
  contactEmail: string
  isVerified: boolean
  consultationMode: string[]
  username: string
  rating: number
  patients: number
  location: string
  image: string
  therapyTypes: string[]
  availability: string
}
function convertDoctorsToMap() {
    const data: [] = []
    useEffect(() => {
        async () => {
            try {
                for (let i = 1; i <= 6; i++) {
                    const response = await fetch("http://65.1.92.125:8080/categories/" + String(i + 10) + "/doctors-web/?all=true")

                    const doctors = await response.json()
                    doctors['doctors'].forEach((jsonData: any) => {
                        console.log("Doctor data:", jsonData)

                    const newdata : Doctor[] = {

                        id: jsonData["id"],
                        name: jsonData['user']['username'],
                        username: jsonData['user']['username'],
                        specialty: jsonData['specialty'],
                        experience: jsonData['years_of_experience'],
                        location: jsonData['clinic_address'],
                        image: "/placeholder.svg?height=300&width=300",
                        therapyTypes: jsonData["category_name"],
                        availability: jsonData['status'],
                        consultationFee: jsonData['consultation_fee'],
                        languages: jsonData['languages'],
                        contactEmail: jsonData['user']['email'],
                        isVerified: true,
                        consultationMode: ["Video Call", "Chat"]
                    }
                    console.log("Data fetched:", jsonData)
                    data.push(newdata)
                })
                }

            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

    }, [])
    return data
}

export default convertDoctorsToMap