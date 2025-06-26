import { Section, Header, H2, SubTitle } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";

export default function MenuCTASection() {
  return (
    <Section className="bg-secondary text-secondary-foreground">
      <Header>
        <H2>Ready to Experience the Menu</H2>
        <SubTitle className="text-xl text-blue-100 leading-relaxed">
          Book your table today and discover why Azure Shores is the
          coast&apos;s premier destination.
        </SubTitle>
      </Header>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Button size="lg">
          <Calendar className="w-5 h-5 mr-2" />
          Reserve Your Table
        </Button>
        <Button variant="outline" size="lg">
          <Users className="w-5 h-5 mr-2" />
          Book an Event
        </Button>
      </div>
    </Section>
  );
}
