import HeroSection from "@/sections/home/hero";
import MenuHighlights from "@/sections/home/menu-highlights";
import AboutCards from "@/sections/home/about-cards";
import Testimonials from "@/sections/home/testimonials";
import PrimaryCTA from "@/sections/home/primary-cta";
import FAQ from "@/sections/home/faq";
import ContactStrip from "@/sections/home/contact-strip";
import InstagramCarousel from "@/sections/home/instagram-carousel";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MenuHighlights />
      <AboutCards />
      <Testimonials />
      <PrimaryCTA />
      <FAQ />
      <ContactStrip />
      <InstagramCarousel />
    </>
  );
}
