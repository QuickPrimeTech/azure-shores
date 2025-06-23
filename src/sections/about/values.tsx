import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Heart, Award, Users, Waves, Utensils } from "lucide-react";
import { Section, Header, H2, SubTitle } from "@/components/typography";

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description:
      "We source locally and practice ocean-conscious dining to protect our marine ecosystem for future generations.",
  },
  {
    icon: Heart,
    title: "Passionate Service",
    description:
      "Every team member shares our love for coastal hospitality and creating unforgettable experiences.",
  },
  {
    icon: Award,
    title: "Culinary Excellence",
    description:
      "Our commitment to quality ingredients and innovative techniques has earned recognition from food critics worldwide.",
  },
  {
    icon: Users,
    title: "Community Connection",
    description:
      "We're proud to be part of the coastal community, supporting local fishermen, farmers, and artisans.",
  },
  {
    icon: Waves,
    title: "Ocean Respect",
    description:
      "The sea is our inspiration and our responsibility. We honor its gifts through sustainable practices.",
  },
  {
    icon: Utensils,
    title: "Authentic Flavors",
    description:
      "Every dish celebrates the true taste of coastal cuisine with fresh, seasonal ingredients.",
  },
];

export default function ValuesSection() {
  return (
    <Section className="bg-gray-50">
      <Header>
        <H2>Our Core Values</H2>
        <SubTitle className="text-xl text-gray-600 max-w-3xl mx-auto">
          These principles guide everything we do, from the ingredients we
          choose to the experiences we create
        </SubTitle>
      </Header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => {
          const IconComponent = value.icon;
          return (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="p-4 bg-secondary rounded-full mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
