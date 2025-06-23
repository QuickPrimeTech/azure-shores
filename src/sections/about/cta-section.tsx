import { Button } from "@/components/ui/button";
import { Calendar, Utensils } from "lucide-react";
import { Section, Header, H2, SubTitle } from "@/components/typography";

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
        <Button size="lg">
          <Calendar className="w-5 h-5 mr-2" />
          Reserve Your Table
        </Button>
        <Button variant="outline" size="lg">
          <Utensils className="w-5 h-5 mr-2" />
          Discover Our Menu
        </Button>
      </div>
    </Section>
  );
}
