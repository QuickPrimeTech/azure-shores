import { Badge } from "@/components/ui/badge";
import { Crown, Heart, Zap } from "lucide-react";
import { Section, Header, H2, SubTitle } from "@/components/typography";
import { Button } from "@/components/ui/button";
import {
  PackageCard,
  PackageCardHeader,
  PackageCardTitle,
  PackageCardDescription,
  PackageCardContent,
  PackageCardPrice,
  PackageCardActivities,
  PackageCardFeatures,
  PackageCardFeaturesCollapsed,
} from "@/components/package-card";

const packages = [
  {
    id: "adventure",
    title: "Adventure Seeker",
    description:
      "Perfect for thrill-seekers wanting to try multiple activities",
    price: 199,
    originalPrice: 250,
    duration: "Full Day",
    icon: Zap,
    popular: false,
    activities: [
      "Jet Ski (1 hour)",
      "Kayaking (2 hours)",
      "Snorkeling Tour",
      "Beach Lunch",
    ],
    features: [
      "All equipment included",
      "Professional guides",
      "Lunch at beachside restaurant",
      "Photo package",
    ],
  },
  {
    id: "romantic",
    title: "Romantic Escape",
    description: "Intimate water activities perfect for couples",
    price: 299,
    originalPrice: 350,
    duration: "Half Day + Dinner",
    icon: Heart,
    popular: true,
    activities: [
      "Private Kayak Tour",
      "Sunset Paddleboarding",
      "Couples Snorkeling",
      "Romantic Dinner",
    ],
    features: [
      "Private guide",
      "Champagne toast",
      "3-course oceanfront dinner",
      "Professional photography",
      "Couples massage (30 min)",
    ],
  },
  {
    id: "premium",
    title: "Premium Experience",
    description: "The ultimate luxury water sports package",
    price: 499,
    originalPrice: 650,
    duration: "2 Days",
    icon: Crown,
    popular: false,
    activities: [
      "Deep Sea Fishing",
      "Private Jet Ski Tour",
      "Windsurfing Lessons",
      "Yacht Sunset Cruise",
      "Spa Treatment",
    ],
    features: [
      "Private yacht access",
      "Personal concierge",
      "Gourmet meals included",
      "Premium accommodation",
      "Airport transfers",
      "Professional videography",
    ],
  },
];

export default function PackagesSection() {
  return (
    <Section
      className="bg-gray-50"
      role="region"
      aria-labelledby="packages-header"
    >
      <Header>
        <H2 id="packages-header">Adventure Packages</H2>
        <SubTitle>
          Combine multiple activities and save with our carefully curated
          experience packages
        </SubTitle>
      </Header>
      <PackageCards />
    </Section>
  );
}

const PackageCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
      {packages.map((pkg, index) => {
        const IconComponent = pkg.icon;
        return (
          <PackageCard popular={pkg.popular} key={index}>
            <PackageCardHeader>
              <div className="flex flex-col items-center mb-4">
                <div className="rounded-full p-3 shadow-md">
                  <IconComponent className="size-7 text-secondary" />
                </div>
                <div className="flex flex-col items-center">
                  <PackageCardTitle>{pkg.title}</PackageCardTitle>
                  <Badge
                    variant="outline"
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 font-medium"
                  >
                    {pkg.duration}
                  </Badge>
                </div>
              </div>
              <PackageCardDescription>{pkg.description}</PackageCardDescription>
            </PackageCardHeader>

            <PackageCardContent>
              <PackageCardPrice
                price={pkg.price}
                originalPrice={pkg.originalPrice}
              />

              <PackageCardActivities activities={pkg.activities} />

              <PackageCardFeatures features={pkg.features} />
              <PackageCardFeaturesCollapsed features={pkg.features} />

              <Button size={"lg"}>Book Package</Button>
            </PackageCardContent>
          </PackageCard>
        );
      })}
    </div>
  );
};
