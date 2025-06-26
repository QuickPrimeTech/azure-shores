import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Camera } from "lucide-react";
import { Section, Header, H2, SubTitle } from "@/components/typography";
import Link from "next/link";

const atmosphereImages = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750701595/684176a824d3292883204061_Waterfront_Dining-_Best_Restaurants_with_a_View_in_South_Florida_yzegnw.jpg",
    title: "Oceanfront Dining",
    description: "Tables with panoramic ocean views",
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750701960/7e706186_qlqzzt.jpg",
    title: "Sunset Terrace",
    description: "Perfect for romantic evenings",
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750702050/1b-Private-Dining-Carousel_London_vjrhvl.jpg",
    title: "Private Dining",
    description: "Intimate spaces for special occasions",
  },
  {
    id: "4",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750702137/Kali-sBar-Restaurants-SXM--ClementLouineau-20_irlmhw.jpg",
    title: "Beach Bar",
    description: "Casual drinks with your toes in the sand",
  },
  {
    id: "5",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750702243/Matrix-Chefs-table-460-1_qvhbww.png",
    title: "Chef's Table",
    description: "Watch culinary artistry in action",
  },
];

export default function AtmosphereCarousel() {
  return (
    <Section className="bg-gray-50">
      <Header>
        <H2>Our Atmosphere</H2>
        <SubTitle>
          Every corner of Azure Shores is designed to enhance your coastal
          dining experience
        </SubTitle>
      </Header>

      <div className="w-full max-w-6xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {atmosphereImages.map((image) => (
              <CarouselItem
                key={image.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="group cursor-pointer py-0 overflow-hidden">
                  <div className="relative">
                    <Image
                      src={image.image || "/placeholder.svg"}
                      alt={image.title}
                      width={600}
                      height={400}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold mb-1 font-cinzel">
                        {image.title}
                      </h3>
                      <p className="text-sm text-gray-200 font-work-sans">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Button size={"lg"} asChild>
        <Link href={"/gallery"}>
          <Camera className="size-5" />
          View Full Gallery
        </Link>
      </Button>
    </Section>
  );
}
