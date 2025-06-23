"use client"

import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", name: "All Items", count: 48 },
  { id: "starters", name: "Starters", count: 12 },
  { id: "mains", name: "Main Courses", count: 18 },
  { id: "seafood", name: "Fresh Seafood", count: 15 },
  { id: "desserts", name: "Desserts", count: 8 },
  { id: "beverages", name: "Beverages", count: 24 },
]

interface CategoryTabsProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <section className="sticky top-20 z-40 bg-white border-b border-gray-200 py-4">
      <div className="container-custom">
        <div className="flex overflow-x-auto scrollbar-hide space-x-2 pb-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              className={`flex-shrink-0 whitespace-nowrap ${
                activeCategory === category.id ? "btn-primary" : "btn-outline"
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
