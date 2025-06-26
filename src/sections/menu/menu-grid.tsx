"use client";

import { useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Leaf, ShoppingBag, Star } from "lucide-react";
import { filterMenuItems, sortMenuItems } from "@/utils/menu-filter";
import type { MenuGridProps, MenuItem } from "@/types";
import { Section } from "@/components/typography";
import { menuItems } from "@/data/menu";

export default function MenuGrid({
  searchQuery,
  filters,
  activeCategory,
}: MenuGridProps) {
  const filteredItems: MenuItem[] = useMemo(() => {
    const items = filterMenuItems(menuItems, {
      query: searchQuery,
      category: activeCategory,
      priceRange: filters.priceRange,
      dietaryRestrictions: filters.dietaryRestrictions,
      cuisineTypes: filters.cuisineTypes,
    });

    return sortMenuItems(items, "popular");
  }, [searchQuery, filters, activeCategory]);

  if (filteredItems.length === 0) {
    return (
      <Section>
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🍽️</div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            No items found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search or filters to find what you&apos;re
            looking for.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <section
      aria-labelledby="menu-grid"
      className="flex flex-col items-center section-x gap-8 py-8"
    >
      <h2 className="sr-only" id="menu-grid">
        Menu Food Items
      </h2>
      <div className="text-sm text-gray-600">
        Showing {filteredItems.length} item
        {filteredItems.length !== 1 ? "s" : ""}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden py-0 pb-3 group">
            <div className="relative overflow-hidden aspect-video">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlays */}
              <div className="absolute top-4 left-4 flex gap-2">
                {item.isVegan && (
                  <Badge className="bg-green-500 text-white">
                    <Leaf className="w-3 h-3 mr-1" />
                    Vegan
                  </Badge>
                )}
                {item.isPopular && (
                  <Badge className="bg-coral text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
              </div>

              <div className="absolute top-4 right-4">
                <div className="bg-white bg-opacity-90 px-3 py-1 rounded-full">
                  <span className="font-bold text-coral">${item.price}</span>
                </div>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-xl">{item.name}</CardTitle>
              <CardDescription className="line-clamp-2">
                {item.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Tags */}
              {item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              <div className="flex gap-3">
                <Button size="sm" className="btn-primary flex-1">
                  <ShoppingBag />
                  Add to Order
                </Button>
                <Button size="sm" variant="outline" className="btn-outline">
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
