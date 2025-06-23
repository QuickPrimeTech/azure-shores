import ContactForm from "@/sections/contact/contact-form"
import ContactMap from "@/sections/contact/contact-map"
import CTASection from "@/sections/contact/cta-section"

export const metadata = {
  title: "Contact Us - Azure Shores Restaurant",
  description:
    "Get in touch with Azure Shores for reservations, events, or inquiries. We're here to help create your perfect coastal dining experience.",
}

export default function ContactPage() {
  return (
    <>
      <ContactForm />
      <ContactMap />
      <CTASection />
    </>
  )
}
