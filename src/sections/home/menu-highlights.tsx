import { Button } from "@/components/ui/button";
import { Section, Header, H2, SubTitle } from "@/components/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import {
  MenuCard,
  MenuCardImage,
  MenuCardHeaderContent,
  MenuCardContent,
} from "@/components/menu-card";
import Link from "next/link";

const menuItems = [
  {
    id: 1,
    name: "Grilled Red Snapper",
    title: "Grilled Red Snapper",
    price: 28.0,
    description:
      "Whole snapper marinated in Creole spices and grilled to perfection.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750624866/piri-piri-snapper-scaled_e4ilnw.jpg",
    tags: ["Chef's Special", "Seafood", "Creole"],
    featured: true,
  },
  {
    id: 2,
    name: "Octopus Curry",
    title: "Octopus Curry",
    price: 26.5,
    description:
      "Tender octopus simmered in rich coconut milk with local masala.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750625055/octopus-curry_ynoaz6.jpg",
    tags: ["Seafood", "Coconut", "Spicy"],
    featured: true,
  },
  {
    id: 3,
    name: "Breadfruit Chips",
    title: "Breadfruit Chips",
    price: 8.0,
    description: "Crispy fried breadfruit slices served with chili dip.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750625157/ChipsinWoodBowl_5000x_1_m3mrbw.jpg",
    tags: ["Snack", "Vegan", "Local Favorite"],
    featured: false,
  },
  {
    id: 4,
    name: "Shark Chutney",
    title: "Shark Chutney",
    price: 22.0,
    description:
      "Mashed boiled shark with bilimbi and turmeric, served with rice.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750625229/6_3_11zon-min-2048x1365-1_qlnnp9.webp",
    tags: ["Traditional", "Exotic", "Spicy"],
    featured: false,
  },
  {
    id: 5,
    name: "Ladob Banana",
    title: "Ladob Banana",
    price: 9.0,
    description:
      "Sweet ripe bananas stewed in coconut milk, nutmeg, and vanilla.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750625320/9_4_11zon-2048x1365-1_1_g99sqg.webp",
    tags: ["Dessert", "Sweet", "Coconut"],
    featured: false,
  },
  {
    id: 6,
    name: "Tuna Steak",
    title: "Tuna Steak",
    price: 25.0,
    description:
      "Seared yellowfin tuna served with grilled vegetables and Creole sauce.",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750625413/chargrilled-tuna-beans-and-potatoes-with-summer-herb-dressing-20738-1_rj3tmi.jpg",
    tags: ["Seafood", "Healthy", "Grilled"],
    featured: false,
  },
];

export default function MenuHighlights() {
  return (
    <Section>
      <Header>
        <H2 className="text-gradient mb-4">Taste the Ocean</H2>
        <SubTitle>
          From fresh catches to signature cocktails, every dish tells a story of
          coastal luxury
        </SubTitle>
      </Header>

      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="-ml-4">
          {menuItems.slice(0, 6).map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <MenuCard>
                <MenuCardImage
                  src={item.image}
                  alt={item.name}
                  badge={
                    item.tags.includes("Chef's Special")
                      ? "Chef's Special"
                      : undefined
                  }
                />
                <MenuCardHeaderContent title={item.name} price={item.price} />
                <MenuCardContent
                  description={item.description}
                  tags={item.tags}
                />
              </MenuCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Button size={"lg"} asChild>
        <Link href="/menu">Explore Full Menu</Link>
      </Button>
    </Section>
  );
}
