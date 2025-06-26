import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  PackageCardProps,
  PackageCardPriceProps,
  PackageCardActivitiesProps,
  PackageCardFeaturesProps,
  Children,
  ClassName,
} from "@/types";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

const PackageCard = ({ className, popular, ...props }: PackageCardProps) => (
  <Card
    className={cn(
      "relative flex flex-col overflow-hidden shadow-lg transition-all duration-300 transform",
      popular
        ? "ring-2 ring-secondary scale-105"
        : "hover:scale-[1.02] hover:shadow-2xl",
      className
    )}
    {...props}
  >
    {popular && (
      <div className="absolute top-0 right-0 bg-coral text-white text-xs font-semibold px-4 py-1 rounded-bl-lg z-10 tracking-wider">
        MOST POPULAR
      </div>
    )}
    {props.children}
  </Card>
);

const PackageCardHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <CardHeader className={cn("p-6 pb-4 flex-grow", className)} {...props} />
);

const PackageCardTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <CardTitle
    className={cn("text-2xl font-bold text-gray-900 mb-1", className)}
    {...props}
  />
);

const PackageCardDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <CardDescription
    className={cn("text-base text-gray-600 leading-relaxed", className)}
    {...props}
  />
);

const PackageCardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <CardContent
    className={cn(
      "p-6 pt-0 flex-grow flex flex-col justify-between",
      className
    )}
    {...props}
  />
);

const PackageCardPrice = ({
  className,
  price,
  originalPrice,
  ...props
}: PackageCardPriceProps) => {
  const savings = originalPrice - price;
  const savingsPercent = Math.round((savings / originalPrice) * 100);

  return (
    <div className={cn("text-center my-4", className)} {...props}>
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="text-4xl font-extrabold text-coral">${price}</span>
        <span className="text-xl text-gray-500 line-through">
          ${originalPrice}
        </span>
      </div>
      <Badge className="bg-green-50 text-green-700 px-3 py-1 text-sm font-semibold">
        Save ${savings} ({savingsPercent}%)
      </Badge>
    </div>
  );
};

const PackageCardActivities = ({
  className,
  activities,
  ...props
}: PackageCardActivitiesProps) => (
  <div className={cn("mb-6", className)} {...props}>
    <h4 className="font-bold text-gray-900 mb-3 text-lg">
      Activities Included:
    </h4>
    <ul className="space-y-2">
      {activities.map((activity, index) => (
        <PackageCardFeature key={index}>{activity}</PackageCardFeature>
      ))}
    </ul>
  </div>
);

const PackageCardFeatures = ({
  className,
  features,
  ...props
}: PackageCardFeaturesProps) => (
  <div className={cn("mb-6 hidden lg:block", className)} {...props}>
    <h4 className="font-bold text-gray-900 mb-3 text-lg">Package Features:</h4>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <PackageCardFeature key={index}>{feature}</PackageCardFeature>
      ))}
    </ul>
  </div>
);

const PackageCardFeature = ({
  className,
  children,
  ...props
}: Children & ClassName) => (
  <li
    className={cn("flex items-start text-base text-gray-700", className)}
    {...props}
  >
    <Check className="w-5 h-5 text-coral mr-2 flex-shrink-0 mt-0.5" />
    {children}
  </li>
);

const PackageCardFeaturesCollapsed = ({
  features,
}: PackageCardFeaturesProps) => (
  <div className="block lg:hidden">
    <Collapsible>
      <CollapsibleTrigger className="group w-full inline-flex justify-center items-center gap-2 text-sm font-medium text-secondary border-t border-gray-300 rounded px-4 py-2 hover:bg-gray-50 transition">
        <span className="group-data-[state=open]:hidden">
          View Package Features
        </span>
        <span className="hidden group-data-[state=open]:inline">
          Hide Package Features
        </span>
        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden transition-all data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up mt-5">
        {features.map((feature, index) => (
          <PackageCardFeature key={index}>{feature}</PackageCardFeature>
        ))}
      </CollapsibleContent>
    </Collapsible>
  </div>
);

export {
  PackageCard,
  PackageCardHeader,
  PackageCardTitle,
  PackageCardContent,
  PackageCardDescription,
  PackageCardPrice,
  PackageCardActivities,
  PackageCardFeatures,
  PackageCardFeaturesCollapsed,
};
