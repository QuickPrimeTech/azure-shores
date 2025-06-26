import { Button } from "@/components/ui/button";
import { Calendar, Menu } from "lucide-react";
import { Section, Header, H2, SubTitle } from "@/components/typography";

export default function PrimaryCTA() {
  return (
    <Section className="bg-secondary text-secondary-foreground">
      <Header>
        <H2>
          Ready to Dive In?
          <span className="block font-script text-seafoam">
            Your coastal adventure awaits
          </span>
        </H2>
        <SubTitle className="text-xl text-blue-100 leading-relaxed">
          From the first bite to the last wave, Azure Shores offers an
          experience that goes beyond dining. Book your table and discover why
          we're the coast's premier destination.
        </SubTitle>
      </Header>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Button size="lg">
          <Calendar className="w-5 h-5 mr-2" />
          Reserve Your Table
        </Button>
        <Button variant="outline" size="lg">
          <Menu className="w-5 h-5 mr-2" />
          Discover Our Menu
        </Button>
      </div>
    </Section>
  );
}
