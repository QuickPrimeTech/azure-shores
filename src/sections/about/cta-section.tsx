import { Button } from "@/components/ui/button";
import { Calendar, Utensils } from "lucide-react";
import { Section, Header, H2, SubTitle } from "@/components/typography";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <Section className="bg-secondary text-secondary-foreground">
      <Header>
        <H2>Experience Our Story</H2>
        <SubTitle className="text-xl text-blue-100 leading-relaxed">
          Reserve your table today and become part of the Azure Shores story.
          Taste the passion, feel the ocean breeze, and create memories that
          will last a lifetime.
        </SubTitle>
      </Header>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Button size="lg" asChild>
          <Link href={"/reserve"}>
            <Calendar className="size-5" />
            Reserve Your Table
          </Link>
        </Button>
        <Button variant="outline" size="lg">
          <Link href={"/menu"}>
            <Utensils className="size-5" />
            Discover Our Menu
          </Link>
        </Button>
      </div>
    </Section>
  );
}
