import { Card, CardContent } from "@/components/ui/card";
import { getNameInitials } from "@/lib/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Section, Header, H2, SubTitle } from "@/components/typography";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Miami, FL",
    rating: 5,
    text: "Absolutely incredible experience! The seafood was the freshest I&apos;ve ever had, and the ocean view made it even more special. The water sports activities were a perfect addition to our dining experience.",
  },
  {
    name: "Michael Chen",
    location: "San Francisco, CA",
    rating: 5,
    text: "Azure Shores exceeded all expectations. The service was impeccable, the food was extraordinary, and the ambiance was perfect for our anniversary dinner. We&apos;ll definitely be back!",
  },
  {
    name: "Emily Rodriguez",
    location: "Austin, TX",
    rating: 5,
    text: "From the moment we arrived, we felt like VIPs. The staff was incredibly attentive, the cocktails were creative, and the sunset view from our table was breathtaking. A must-visit destination!",
  },
  {
    name: "David Thompson",
    location: "Seattle, WA",
    rating: 5,
    text: "The perfect blend of luxury and coastal charm. Every dish was a masterpiece, and the water sports activities made it a complete experience. Highly recommend for special occasions!",
  },
];

export default function Testimonials() {
  return (
    <Section className="bg-gray-50">
      <Header>
        <H2>What Our Guests Say</H2>
        <SubTitle>
          Discover why Azure Shores is the premier destination for coastal
          dining and adventure
        </SubTitle>
      </Header>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <Avatar className="bg-secondary/20 items-center justify-center size-12">
                      <AvatarFallback>
                        {getNameInitials(testimonial.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5">
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}
