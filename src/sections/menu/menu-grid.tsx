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
import { Leaf, Star } from "lucide-react";
import { filterMenuItems, sortMenuItems } from "@/utils/menu-filter";
import type { MenuGridProps, MenuItem } from "@/types";

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Grilled Atlantic Salmon",
    description:
      "Fresh Atlantic salmon with lemon herb butter, seasonal vegetables, and quinoa pilaf",
    price: 32,
    image: "/placeholder.svg?height=300&width=400",
    category: "seafood",
    tags: ["Gluten-Free", "Healthy"],
    isVegan: false,
    isPopular: true,
  },
  {
    id: "2",
    name: "Lobster Bisque",
    description:
      "Rich and creamy lobster bisque with fresh herbs and a touch of cognac",
    price: 18,
    image: "/placeholder.svg?height=300&width=400",
    category: "starters",
    tags: ["Signature"],
    isVegan: false,
    isPopular: false,
  },
  {
    id: "3",
    name: "Coastal Vegetable Paella",
    description:
      "Traditional Spanish paella with seasonal vegetables, saffron rice, and fresh herbs",
    price: 28,
    image: "/placeholder.svg?height=300&width=400",
    category: "mains",
    tags: ["Vegan", "Gluten-Free"],
    isVegan: true,
    isPopular: false,
  },
  {
    id: "4",
    name: "Pan-Seared Scallops",
    description:
      "Diver scallops with cauliflower puree, pancetta, and microgreens",
    price: 36,
    image: "/placeholder.svg?height=300&width=400",
    category: "seafood",
    tags: ["Chef's Special"],
    isVegan: false,
    isPopular: true,
  },
  {
    id: "5",
    name: "Coconut Panna Cotta",
    description:
      "Silky coconut panna cotta with tropical fruit compote and toasted coconut",
    price: 14,
    image: "/placeholder.svg?height=300&width=400",
    category: "desserts",
    tags: ["Gluten-Free"],
    isVegan: false,
    isPopular: false,
  },
  {
    id: "6",
    name: "Ocean Breeze Cocktail",
    description:
      "House signature cocktail with premium rum, fresh citrus, and tropical fruits",
    price: 16,
    image: "/placeholder.svg?height=300&width=400",
    category: "beverages",
    tags: ["Signature", "Tropical"],
    isVegan: true,
    isPopular: true,
  },
  // Add more menu items...
  {
    id: "7",
    name: "Mediterranean Sea Bass",
    description:
      "Whole roasted sea bass with olive tapenade, roasted tomatoes, and herbs",
    price: 38,
    image: "/placeholder.svg?height=300&width=400",
    category: "seafood",
    tags: ["Mediterranean", "Gluten-Free"],
    isVegan: false,
    isPopular: true,
  },
  {
    id: "8",
    name: "Vegan Buddha Bowl",
    description: "Quinoa, roasted vegetables, avocado, and tahini dressing",
    price: 22,
    image: "/placeholder.svg?height=300&width=400",
    category: "mains",
    tags: ["Vegan", "Gluten-Free", "Healthy"],
    isVegan: true,
    isPopular: false,
  },
];

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
      <section className="section-padding">
        <div className="container-custom">
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
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mb-6 text-sm text-gray-600">
          Showing {filteredItems.length} item
          {filteredItems.length !== 1 ? "s" : ""}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex gap-3">
                  <Button size="sm" className="btn-primary flex-1">
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
      </div>
    </section>
  );
}
