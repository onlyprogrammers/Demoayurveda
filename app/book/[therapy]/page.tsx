'use client'

import { useParams } from "next/navigation"
import TherapyBookingClient from "./TherapyBookingClient"
type params={
  therapy:String
}
export default function Page({ searchParams }: { searchParams: { therapy?: string } }) {
  const param=useParams()
  const therapy = param?.therapy || "all"
  return <TherapyBookingClient therapy={therapy} />
}
