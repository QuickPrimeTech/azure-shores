"use client";

import { useState } from "react";
import SearchAndFilter from "@/sections/menu/search-and-filter";
import CategoryTabs from "@/sections/menu/category-tabs";
import MenuGrid from "@/sections/menu/menu-grid";
import CTASection from "@/sections/menu/cta-section";
import { H1, Header, Section, SubTitle } from "@/components/typography";
import Image from "next/image";

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
      <Section className="relative">
        <div className="absolute inset-0 h-full bg-black/40">
          <Image
            src={
              "https://res.cloudinary.com/dhlyei79o/image/upload/v1750707696/240715-Crown-Melbourne-Nobu-Restaurant-new-style-sashimi-Salmon-1200x800_vyqihf.jpg"
            }
            alt="image of a special dish"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 h-full bg-black/40" />
        <Header className="text-white relative z-10">
          <H1>Our Menu</H1>
          <SubTitle className="text-white">Experience our dishes</SubTitle>
        </Header>
      </Section>
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
