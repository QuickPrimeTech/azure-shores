import * as React from "react";
import { Card } from "@/components/ui/card";

export interface PackageCardProps
  extends React.ComponentPropsWithoutRef<typeof Card> {
  popular?: boolean; // To pass popularity for conditional styling
}

export interface PackageCardPriceProps
  extends React.HTMLAttributes<HTMLDivElement> {
  price: number;
  originalPrice: number;
}

export interface PackageCardActivitiesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  activities: string[];
}

export interface PackageCardFeaturesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  features: string[];
}
