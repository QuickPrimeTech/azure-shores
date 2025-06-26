import { Section, Header, H2, SubTitle } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";
import Link from "next/link";

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
        <Button size="lg" asChild>
          <Link href={"/reserve"}>
            <Calendar className="size-5" />
            Reserve Your Table
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href={"/reserve"}>
            <Users className="size-5" />
            Book an Event
          </Link>
        </Button>
      </div>
    </Section>
  );
}
