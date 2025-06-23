import Image from "next/image";
import { Section, Header, H2 } from "@/components/typography";

export default function StoryCard() {
  return (
    <Section>
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-96 lg:h-auto">
            <Image
              src="https://res.cloudinary.com/dhlyei79o/image/upload/v1750677860/818f767ca81a8358866ddb108f8808e7_frnmrt.jpg"
              alt="Azure Shores founding story"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            />
          </div>
          <div className="p-8 lg:p-12 flex items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                A Dream Born by the
                <span className="block font-script text-ocean-blue">
                  Endless Blue
                </span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In 2010, Chef Marina Rodriguez stood on this very shoreline
                  with a vision: to create a dining experience that celebrates
                  both the bounty of the ocean and the spirit of coastal
                  adventure.
                </p>
                <p>
                  What began as a small beachside café has evolved into Azure
                  Shores, a destination where culinary artistry meets the raw
                  beauty of the sea. Every dish tells a story of our commitment
                  to sustainability, local sourcing, and the timeless connection
                  between land and sea.
                </p>
                <p>
                  Today, we continue to honor that original vision while pushing
                  the boundaries of coastal cuisine, creating memories that last
                  as long as the tides that shape our shores.
                </p>
              </div>
              <div className="pt-4">
                <div className="text-sm text-gray-500 mb-2">Founded by</div>
                <div className="font-semibold text-gray-900">
                  Chef Marina Rodriguez
                </div>
                <div className="text-sm text-gray-600">
                  Executive Chef & Owner
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
