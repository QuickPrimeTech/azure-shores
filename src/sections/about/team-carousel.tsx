"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Section, Header, H2, SubTitle } from "@/components/typography";

const teamMembers = [
  {
    name: "Marina Rodriguez",
    position: "Executive Chef & Owner",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750678913/female-chef-11530979687ovz6gt7d9i_ckhz7c.png",
    bio: "With over 20 years of culinary experience, Marina brings passion for coastal cuisine and sustainable practices to every dish.",
    specialties: ["Seafood", "Coastal Fusion", "Sustainable Cooking"],
  },
  {
    name: "James Chen",
    position: "Head Sommelier",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750678986/blog-chef_zhawqu.webp",
    bio: "James curates our wine selection with expertise in coastal pairings and sustainable viticulture practices.",
    specialties: ["Wine Pairing", "Coastal Wines", "Sustainable Viticulture"],
  },
  {
    name: "Sofia Martinez",
    position: "Pastry Chef",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750678943/pj-12_n6406m.jpg",
    bio: "Sofia creates desserts inspired by coastal flavors, using local fruits and artisanal techniques.",
    specialties: [
      "Coastal Desserts",
      "Artisanal Pastries",
      "Local Ingredients",
    ],
  },
  {
    name: "David Thompson",
    position: "Water Sports Director",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750679177/What-is-a-chef-hierarchy_b5lagu.jpg",
    bio: "David leads our water sports program with certified instruction and a passion for ocean adventures.",
    specialties: ["Kayaking", "Paddleboarding", "Ocean Safety"],
  },
  {
    name: "Elena Vasquez",
    position: "Events Manager",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750679231/content-30607aafc2ff7ec65880493c5ea2e6c5_y5r8kv.jpg",
    bio: "Elena orchestrates unforgettable events with attention to detail and coastal elegance.",
    specialties: [
      "Wedding Planning",
      "Corporate Events",
      "Coastal Celebrations",
    ],
  },
  {
    name: "Michael O'Brien",
    position: "Restaurant Manager",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750679042/shutterstock_1518533924-min_c2duru.jpg",
    bio: "Michael ensures every guest receives exceptional service with his dedication to hospitality excellence.",
    specialties: ["Guest Relations", "Service Excellence", "Team Leadership"],
  },
];

export default function TeamCarousel() {
  return (
    <Section aria-labelledby="team-section" role="region">
      <Header>
        <H2 id="team-section">Meet Our Team</H2>
        <SubTitle>
          The passionate professionals who bring Azure Shores to life every day
        </SubTitle>
      </Header>

      <div className="max-w-6xl mx-auto w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="group h-full py-0 pb-3 overflow-hidden">
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300 object-top-left"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <p className="text-sm text-gray-200">{member.position}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 font-work-sans">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-secondary/30 text-gray-800 text-sm rounded-full"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Section>
  );
}
