import MenuPageClient from "./MenuPageClient";
import { Section, Header, H1, SubTitle } from "@/components/typography";
import Image from "next/image";

export const metadata = {
  title: "Menu - Azure Shores Restaurant",
  description:
    "Explore our coastal cuisine menu featuring fresh seafood, signature cocktails, and locally-sourced ingredients.",
};

export default function MenuPage() {
  return (
    <>
      <Section className="relative">
        <div className="absolute inset-0 h-full bg-black/40">
          <Image
            src={
              "https://res.cloudinary.com/dhlyei79o/image/upload/v1750624866/piri-piri-snapper-scaled_e4ilnw.jpg"
            }
            alt="image of a special dish"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 h-full bg-black/40" />
        <Header className="text-white relative z-10">
          <H1>Our Menu</H1>
          <SubTitle className="text-white">Experience our dishes</SubTitle>
        </Header>
      </Section>
      <MenuPageClient />
    </>
  );
}
