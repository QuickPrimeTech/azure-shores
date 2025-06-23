import HeroSection from "@/sections/gallery/hero"
import CategoryBar from "@/sections/gallery/category-bar"
import ImageGrid from "@/sections/gallery/image-grid"
import CTASection from "@/sections/gallery/cta-section"

export const metadata = {
  title: "Gallery - Azure Shores Restaurant",
  description:
    "Browse our stunning gallery showcasing coastal cuisine, elegant interiors, and memorable events at Azure Shores.",
}

export default function GalleryPage() {
  return (
    <>
      <HeroSection />
      <CategoryBar />
      <ImageGrid />
      <CTASection />
    </>
  )
}
