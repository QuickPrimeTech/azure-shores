import { Button } from "@/components/ui/button";
import { Calendar, Menu } from "lucide-react";
import { Section, Header, H2, SubTitle } from "@/components/typography";
import Link from "next/link";

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
          we&apos;re the coast&apos;s premier destination.
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
          <Menu className="size-5" />
          Discover Our Menu
        </Button>
      </div>
    </Section>
  );
}
