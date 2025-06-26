import ContactForm from "@/sections/contact/contact-form";
import ContactMap from "@/sections/contact/contact-map";
import CTASection from "@/sections/contact/cta-section";
import { Section, Header, H1, SubTitle } from "@/components/typography";
import Image from "next/image";

export const metadata = {
  title: "Contact Us - Azure Shores Restaurant",
  description:
    "Get in touch with Azure Shores for reservations, events, or inquiries. We're here to help create your perfect coastal dining experience.",
};

export default function ContactPage() {
  return (
    <>
      <Section aria-labelledby="hero-header" className="bg-black relative">
        <Image
          src={
            "https://res.cloudinary.com/dhlyei79o/image/upload/v1750940427/a6007ad8db6d1f4727926d18bb59ca68_cbojud.jpg"
          }
          alt="images of a luxury hotel receptionist receiving some guests"
          className="absolute inset-0 object-cover"
          fill
        />
        <div className="absolute inset-0 h-full bg-black/50" />
        <Header className="relative z-10">
          <H1 id="hero-header" className="text-white">
            Get in Touch
            <span className="block">We&apos;re Here to Help</span>
          </H1>
          <SubTitle className="text-gray-100">
            Have questions about our menu, want to make a reservation, or
            planning a special event? We&apos;d love to hear from you.
          </SubTitle>
        </Header>
      </Section>
      <ContactForm />
      <ContactMap />
      <CTASection />
    </>
  );
}
