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
import Link from "next/link";
import { Instagram } from "lucide-react";
import { Section, Header, H2, SubTitle } from "@/components/typography";

const instagramPosts = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750662036/51155905954_b93dfcce74_z_sq0hes.jpg",
    caption: "Fresh catch of the day!",
    likes: 234,
    url: "#",
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750661969/KEMPINSKI-SEYCHELLES-RESORT-_-MAHE-PRIVATE-DINING-SUN-SET_wzcwva.jpg",
    caption: "Sunset dining at its finest",
    likes: 456,
    url: "#",
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750661866/caption_zr7zhs.jpg",
    caption: "Kayaking adventures await!",
    likes: 189,
    url: "#",
  },
  {
    id: "4",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750662114/IMG-20230311-WA0017_scipxe.jpg",
    caption: "Signature cocktails by the sea",
    likes: 312,
    url: "#",
  },
  {
    id: "5",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750662213/blue-hill-seychelles-events-meeting4-682d04b4747125d681cc667bac3d6b92_err67t.jpg",
    caption: "Private dining perfection ",
    likes: 278,
    url: "#",
  },
  {
    id: "6",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750662294/SEY_885_original_ecrxni.jpg",
    caption: "Ocean views from every table",
    likes: 401,
    url: "#",
  },
];

export default function InstagramCarousel() {
  return (
    <Section>
      <Header>
        <div className="flex items-center justify-center mb-4">
          <Instagram className="w-8 h-8 text-pink-500 mr-3" />
          <H2>Follow Our Journey</H2>
        </div>
        <SubTitle>
          Stay connected with Azure Shores and discover daily moments of coastal
          luxury
        </SubTitle>
      </Header>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {instagramPosts.map((post) => (
            <CarouselItem
              key={post.id}
              className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Card className="overflow-hidden group cursor-pointer py-0 pb-3 h-full">
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.caption}
                    width={300}
                    height={300}
                    sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20  group-hover:bg-black/0 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                      <Instagram className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-sm font-medium">
                        View on Instagram
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm text-gray-600 text-center">
                    {post.caption}
                  </p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Button asChild>
        <Link href="https://www.instagram.com/azureshores" target="_blank">
          <Instagram className="w-5 h-5 mr-2" />
          Follow @AzureShores
        </Link>
      </Button>
    </Section>
  );
}
