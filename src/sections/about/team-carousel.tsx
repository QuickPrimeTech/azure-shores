"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const teamMembers = [
  {
    name: "Marina Rodriguez",
    position: "Executive Chef & Owner",
    image: "/placeholder.svg?height=400&width=300",
    bio: "With over 20 years of culinary experience, Marina brings passion for coastal cuisine and sustainable practices to every dish.",
    specialties: ["Seafood", "Coastal Fusion", "Sustainable Cooking"],
  },
  {
    name: "James Chen",
    position: "Head Sommelier",
    image: "/placeholder.svg?height=400&width=300",
    bio: "James curates our wine selection with expertise in coastal pairings and sustainable viticulture practices.",
    specialties: ["Wine Pairing", "Coastal Wines", "Sustainable Viticulture"],
  },
  {
    name: "Sofia Martinez",
    position: "Pastry Chef",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Sofia creates desserts inspired by coastal flavors, using local fruits and artisanal techniques.",
    specialties: ["Coastal Desserts", "Artisanal Pastries", "Local Ingredients"],
  },
  {
    name: "David Thompson",
    position: "Water Sports Director",
    image: "/placeholder.svg?height=400&width=300",
    bio: "David leads our water sports program with certified instruction and a passion for ocean adventures.",
    specialties: ["Kayaking", "Paddleboarding", "Ocean Safety"],
  },
  {
    name: "Elena Vasquez",
    position: "Events Manager",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Elena orchestrates unforgettable events with attention to detail and coastal elegance.",
    specialties: ["Wedding Planning", "Corporate Events", "Coastal Celebrations"],
  },
  {
    name: "Michael O'Brien",
    position: "Restaurant Manager",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Michael ensures every guest receives exceptional service with his dedication to hospitality excellence.",
    specialties: ["Guest Relations", "Service Excellence", "Team Leadership"],
  },
]

export default function TeamCarousel() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-gradient mb-4 font-cinzel">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-work-sans">
            The passionate professionals who bring Azure Shores to life every day
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
                    <div className="relative">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={400}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <CardTitle className="text-xl text-white font-cinzel">{member.name}</CardTitle>
                        <p className="text-sm text-gray-200 font-work-sans">{member.position}</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 font-work-sans">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-seafoam text-gray-800 text-xs font-work-sans"
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
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
