import Image from "next/image";
import { Section, Header, H1 } from "@/components/typography";

export default function HeroSection() {
  return (
    <Section className="relative">
      <div className="absolute inset-0 h-full">
        <Image
          src={
            "https://res.cloudinary.com/dhlyei79o/image/upload/v1750673645/cfa9719a_icomfs.jpg"
          }
          alt="Azure Shores about us image"
          className="object-cover"
          fill
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center text-white container-custom">
        <div className="max-w-4xl mx-auto space-y-6">
          <H1>
            Our Story Begins
            <span className="block font-script text-seafoam">
              With the Ocean
            </span>
          </H1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to coastal luxury, discover the passion and
            dedication that makes Azure Shores a premier dining destination
          </p>
        </div>
      </div>
    </Section>
  );
}
