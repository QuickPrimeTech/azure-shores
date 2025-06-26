import { Section, Header, H2, SubTitle } from "@/components/typography";

export default function ContactMap() {
  return (
    <Section className="bg-gray-50">
      <Header>
        <H2>Find Us</H2>
        <SubTitle>Located on the pristine shores of Coastal Bay</SubTitle>
      </Header>

      <div className="rounded-2xl overflow-hidden shadow-lg w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7976306270034!2d36.78392127496558!3d-1.2960363986916479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8b0c5a5b3f88bdfb%3A0xb7059623180d3c28!2sQuickPrimeTech!5e0!3m2!1sen!2ske!4v1750942322568!5m2!1sen!2ske"
          className="w-full h-96"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Section>
  );
}
