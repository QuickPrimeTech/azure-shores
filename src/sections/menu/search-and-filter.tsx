"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, X } from "lucide-react";

interface Filters {
  priceRange: [number, number];
  dietaryRestrictions: string[];
  cuisineTypes: string[];
}

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: Filters) => void;
  searchQuery: string;
  filters: Filters;
}

export default function SearchAndFilter({
  onSearch,
  onFilterChange,
  searchQuery,
  filters,
}: SearchAndFilterProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const dietaryOptions = [
    { id: "vegan", label: "Vegan" },
    { id: "vegetarian", label: "Vegetarian" },
    { id: "gluten-free", label: "Gluten-Free" },
    { id: "dairy-free", label: "Dairy-Free" },
    { id: "nut-free", label: "Nut-Free" },
  ];

  const cuisineTypes = [
    { id: "seafood", label: "Seafood" },
    { id: "mediterranean", label: "Mediterranean" },
    { id: "american", label: "American" },
    { id: "asian-fusion", label: "Asian Fusion" },
    { id: "italian", label: "Italian" },
  ];

  const handleDietaryChange = (optionId: string, checked: boolean) => {
    const newDietary = checked
      ? [...filters.dietaryRestrictions, optionId]
      : filters.dietaryRestrictions.filter((id: string) => id !== optionId);

    onFilterChange({ ...filters, dietaryRestrictions: newDietary });
  };

  const handleCuisineChange = (cuisineId: string, checked: boolean) => {
    const newCuisine = checked
      ? [...filters.cuisineTypes, cuisineId]
      : filters.cuisineTypes.filter((id: string) => id !== cuisineId);

    onFilterChange({ ...filters, cuisineTypes: newCuisine });
  };

  const clearAllFilters = () => {
    onFilterChange({
      priceRange: [0, 50],
      dietaryRestrictions: [],
      cuisineTypes: [],
    });
  };

  const hasActiveFilters =
    filters.dietaryRestrictions.length > 0 ||
    filters.cuisineTypes.length > 0 ||
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 50;

  return (
    <section className="py-8 bg-sand-beige-light">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="w-full sm:w-96 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search our menu..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="pl-10 pr-10 py-3 text-lg border-gray-300 focus:border-coral focus:ring-coral"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1"
                onClick={() => onSearch("")}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>

          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="btn-outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
                {hasActiveFilters && (
                  <span className="ml-2 bg-coral text-white text-xs px-2 py-1 rounded-full">
                    {filters.dietaryRestrictions.length +
                      filters.cuisineTypes.length}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="flex items-center justify-between">
                  Filter Menu
                  {hasActiveFilters && (
                    <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                      <X className="w-4 h-4 mr-1" />
                      Clear All
                    </Button>
                  )}
                </SheetTitle>
              </SheetHeader>

              <div className="space-y-8 mt-8">
                {/* Price Range */}
                <div>
                  <Label className="text-base font-medium mb-4 block">
                    Price Range
                  </Label>
                  <div className="px-2">
                    <Slider
                      value={filters.priceRange}
                      onValueChange={(value) =>
                        onFilterChange({
                          ...filters,
                          priceRange: value as [number, number],
                        })
                      }
                      max={50}
                      min={0}
                      step={5}
                      className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${filters.priceRange[0]}</span>
                      <span>${filters.priceRange[1]}+</span>
                    </div>
                  </div>
                </div>

                {/* Dietary Restrictions */}
                <div>
                  <Label className="text-base font-medium mb-4 block">
                    Dietary Options
                  </Label>
                  <div className="space-y-3">
                    {dietaryOptions.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={option.id}
                          checked={filters.dietaryRestrictions.includes(
                            option.id
                          )}
                          onCheckedChange={(checked) =>
                            handleDietaryChange(option.id, checked as boolean)
                          }
                        />
                        <Label
                          htmlFor={option.id}
                          className="text-sm font-normal"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cuisine Type */}
                <div>
                  <Label className="text-base font-medium mb-4 block">
                    Cuisine Type
                  </Label>
                  <div className="space-y-3">
                    {cuisineTypes.map((cuisine) => (
                      <div
                        key={cuisine.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={cuisine.id}
                          checked={filters.cuisineTypes.includes(cuisine.id)}
                          onCheckedChange={(checked) =>
                            handleCuisineChange(cuisine.id, checked as boolean)
                          }
                        />
                        <Label
                          htmlFor={cuisine.id}
                          className="text-sm font-normal"
                        >
                          {cuisine.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <Button
                  className="w-full btn-primary"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Apply Filters
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
}
