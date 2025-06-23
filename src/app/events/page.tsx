import HeroSection from "@/sections/sports/hero"
import ActivitiesGrid from "@/sections/sports/activities-grid"
import PackagesSection from "@/sections/sports/packages-section"
import GallerySection from "@/sections/sports/gallery-section"
import BookingSection from "@/sections/sports/booking-section"
import SafetySection from "@/sections/sports/safety-section"

export const metadata = {
  title: "Water Sports & Activities - Azure Shores",
  description:
    "Experience thrilling water sports and beach activities at Azure Shores. From kayaking to jet skiing, create unforgettable ocean adventures.",
}

export default function SportsPage() {
  return (
    <>
      <HeroSection />
      <ActivitiesGrid />
      <PackagesSection />
      <GallerySection />
      <SafetySection />
      <BookingSection />
    </>
  )
}
