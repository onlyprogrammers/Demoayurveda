import TherapyBookingClient from "./TherapyBookingClient"

export default function Page({ searchParams }: { searchParams: { therapy?: string } }) {
  const therapy = searchParams?.therapy || "all"
  return <TherapyBookingClient therapy={therapy} />
}
