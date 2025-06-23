import ContactCard from "@/components/contact-card";
import ReservationForm from "@/components/reservation-form";

export default function ContactForm() {
  return (
    <section className="section-padding pt-32">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get in Touch
          <span className="block font-script text-ocean-blue">
            We&apos;re Here to Help
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions about our menu, want to make a reservation, or planning
          a special event? We&apos;d love to hear from you.
        </p>
      </div>

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
    </section>
  );
}
