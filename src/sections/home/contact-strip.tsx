import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Section } from "@/components/typography";
import Link from "next/link";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "(555) 123-4567",
    action: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@azureshores.com",
    action: "mailto:info@azureshores.com",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Ocean Drive, Coastal Bay",
    action: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Daily 11AM - 11PM",
    action: "#",
  },
];

export default function ContactStrip() {
  return (
    <Section
      className="bg-secondary/30"
      aria-labelledby="contact-section-title"
      role="region"
    >
      <h2 id="contact-section-title" className="sr-only">
        Contact Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contactInfo.map((info, index) => {
          const IconComponent = info.icon;
          const isInteractive = !info.action.startsWith("#");
          const Content: React.ElementType = isInteractive ? Link : "div";

          return (
            <article
              key={index}
              className="flex flex-col gap-1.5 items-center"
              aria-label={info.label}
            >
              <div
                className="p-3 bg-secondary/30 rounded-full"
                aria-hidden="true"
              >
                <IconComponent className="w-6 h-6 text-white" />
              </div>

              <p className="text-sm font-medium text-gray-600 mt-2">
                {info.label}
              </p>

              <Content
                {...(isInteractive
                  ? {
                      href: info.action,
                      className:
                        "font-semibold hover:text-ocean-blue transition-colors focus:ring-2 focus:ring-ocean-blue",
                    }
                  : {
                      className: "font-semibold",
                    })}
              >
                <span className="sr-only">{info.label}: </span>
                {info.value}
              </Content>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
