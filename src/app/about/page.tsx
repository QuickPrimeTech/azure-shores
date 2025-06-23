import HeroSection from "@/sections/about/hero"
import StoryCard from "@/sections/about/story-card"
import ValuesSection from "@/sections/about/values"
import TeamCarousel from "@/sections/about/team-carousel"
import CTASection from "@/sections/about/cta-section"
import AtmosphereCarousel from "@/sections/about/atmosphere-carousel"
import FinalCTA from "@/sections/about/final-cta"

export const metadata = {
  title: "About Us - Azure Shores Restaurant",
  description:
    "Discover the story behind Azure Shores, our commitment to coastal cuisine excellence, and meet our passionate team.",
}

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <StoryCard />
      <ValuesSection />
      <TeamCarousel />
      <CTASection />
      <AtmosphereCarousel />
      <FinalCTA />
    </>
  )
}
