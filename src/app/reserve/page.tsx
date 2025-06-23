import ReservationHero from "@/sections/reserve/reservation-hero"
import ReservationForm from "@/sections/reserve/reservation-form"
import AlternativeContact from "@/sections/reserve/alternative-contact"

export const metadata = {
  title: "Reserve Table - Azure Shores Restaurant",
  description:
    "Reserve your table at Azure Shores for an unforgettable oceanfront dining experience. Book online or contact us directly.",
}

export default function ReservePage() {
  return (
    <>
      <ReservationHero />
      <ReservationForm />
      <AlternativeContact />
    </>
  )
}
