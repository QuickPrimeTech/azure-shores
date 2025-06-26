import { Button } from "@/components/ui/button";
import { Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src={
            "https://res.cloudinary.com/dhlyei79o/image/upload/v1750620816/the-wedding-photographer-seychelles-laurent-levy-mahe-studio-digifot-A-720x720_qbiitb.jpg"
          }
          alt="people enjoying themselves in seychelles beach"
          sizes="100vw"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-7xl font-bold leading-tight font-primary">
            Where Ocean Meets
            <span className="block text-2xl md:text-4xl">
              Culinary Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-secondary">
            Experience luxury dining by the shore of Seychelles with fresh
            seafood, water sports, and breathtaking ocean views
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" asChild>
              <Link href={"/reserve"}>Reserve Your Table</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={"/menu"}>
                <Utensils className="size-5" />
                Discover Our Menu
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
