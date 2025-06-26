import HeroSection from "@/sections/events/hero";
import PackagesSection from "@/sections/events/packages-section";
import GallerySection from "@/sections/events/gallery-section";
import BookingSection from "@/sections/events/booking-section";
import SafetySection from "@/sections/events/safety-section";

export const metadata = {
  title: "Water Sports & Activities - Azure Shores",
  description:
    "Experience thrilling water sports and beach activities at Azure Shores. From kayaking to jet skiing, create unforgettable ocean adventures.",
};

export default function SportsPage() {
  return (
    <>
      <HeroSection />
      <PackagesSection />
      <GallerySection />
      <SafetySection />
      <BookingSection />
    </>
  );
}
