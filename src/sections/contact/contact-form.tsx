import ContactCard from "@/components/contact-card";
import ReservationForm from "@/components/reservation-form";
import { Section } from "@/components/typography";

export default function ContactForm() {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Send us a Message
          </h2>
          <ReservationForm isContactForm={true} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Contact Information
          </h2>
          <ContactCard />
        </div>
      </div>
    </Section>
  );
}
