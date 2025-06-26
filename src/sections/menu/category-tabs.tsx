import { Button } from "@/components/ui/button";
import { Section } from "@/components/typography";
const categories = [
  { id: "all", name: "All Items" },
  { id: "starters", name: "Starters" },
  { id: "mains", name: "Main Courses" },
  { id: "seafood", name: "Fresh Seafood" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
];

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryTabs({
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <section className="sticky top-20 z-40 bg-white border-b border-gray-200 py-4 section-x">
      <div className="flex overflow-x-auto space-x-2 pb-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category.id)}
            className={`flex-shrink-0 whitespace-nowrap`}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </section>
  );
}
