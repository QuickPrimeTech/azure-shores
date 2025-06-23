import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Section, H2 } from "@/components/typography";

const aboutSections = [
  {
    title: "Our Story",
    description:
      "Born from a passion for coastal cuisine and ocean adventures, Azure Shores has been creating unforgettable dining experiences since 2010. Our commitment to fresh, local ingredients and sustainable practices makes every meal a celebration of the sea.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750655735/origin-cruise-galapagos-restaurant_tx8pxx.webp",
    cta: "Our Story",
    reverse: false,
  },
  {
    title: "Host Events",
    description:
      "From intimate beachside weddings to corporate retreats, our stunning oceanfront venue provides the perfect backdrop for your special occasions. Our dedicated events team ensures every detail is perfectly orchestrated.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750655944/kite-surfing-seychelles_fyeefn.jpg",
    cta: "Host an Event",
    reverse: true,
  },
  {
    title: "Dine With Us",
    description:
      "Experience culinary artistry where every dish is crafted with the finest ingredients and presented with coastal elegance. Our chefs blend traditional techniques with innovative flavors to create memorable dining experiences.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750657126/Culinary_20Lifestyle_20Nick_20Punta_20Cana_2012_cvmjo3.webp",
    cta: "Reserve Table",
    reverse: false,
  },
];

export default function AboutCards() {
  return (
    <Section>
      <div className="space-y-24">
        {aboutSections.map((section, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              section.reverse ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            <div
              className={`space-y-6 ${section.reverse ? "lg:col-start-2" : ""}`}
            >
              <H2>{section.title}</H2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {section.description}
              </p>
              <Button className="btn-primary group">
                {section.cta}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div
              className={`relative ${section.reverse ? "lg:col-start-1" : ""}`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={section.image || "/placeholder.svg"}
                  alt={section.title}
                  width={600}
                  height={400}
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
