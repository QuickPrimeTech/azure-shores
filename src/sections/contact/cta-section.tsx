import { Section, Header, H2, SubTitle } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Calendar, Utensils } from "lucide-react";
import Link from "next/link";

export default function ContactCTASection() {
  return (
    <Section className="bg-secondary text-secondary-foreground">
      <Header>
        <H2>
          Ready to Experience Azure Shores?
          <span className="block font-script text-seafoam">
            Your coastal dining adventure awaits
          </span>
        </H2>
        <SubTitle className="text-xl text-blue-100 leading-relaxed">
          Dont&apos;t wait to experience the magic of oceanfront dining. Reserve
          your table today and discover why Azure Shores is the coast&apos;s
          premier destination.
        </SubTitle>
      </Header>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <Button size="lg" asChild>
          <Link href={"/reservation"}>
            <Calendar className="size-5" />
            Reserve Your Table
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/menu">
            <Utensils className="size-5" />
            Discover Our Menu
          </Link>
        </Button>
      </div>
    </Section>
  );
}
