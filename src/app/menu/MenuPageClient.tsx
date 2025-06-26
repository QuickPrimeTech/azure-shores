"use client";
import { useState } from "react";
import SearchAndFilter from "@/sections/menu/search-and-filter";
import CategoryTabs from "@/sections/menu/category-tabs";
import MenuGrid from "@/sections/menu/menu-grid";
import CTASection from "@/sections/menu/cta-section";

interface Filters {
  priceRange: [number, number];
  dietaryRestrictions: string[];
  cuisineTypes: string[];
}

export default function MenuPageClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  // Explicitly type filters here:
  const [filters, setFilters] = useState<Filters>({
    priceRange: [0, 50],
    dietaryRestrictions: [],
    cuisineTypes: [],
  });

  return (
    <>
      <SearchAndFilter
        onSearch={setSearchQuery}
        onFilterChange={setFilters}
        searchQuery={searchQuery}
        filters={filters}
      />
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <MenuGrid
        searchQuery={searchQuery}
        filters={filters}
        activeCategory={activeCategory}
      />
      <CTASection />
    </>
  );
}
