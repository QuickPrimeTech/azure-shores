// "use client";

// import { useState } from "react";
// import CategoryTabs from "@/components/category-tabs"

// const galleryCategories = [
//   { id: "all", name: "All Photos", count: 120 },
//   { id: "food", name: "Food", count: 45 },
//   { id: "interior", name: "Interior", count: 25 },
//   { id: "events", name: "Events", count: 30 },
//   { id: "ocean", name: "Ocean Views", count: 20 },
// ];

export default function CategoryBar() {
  // const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section className="sticky top-20 z-40 bg-white border-b border-gray-200 py-4">
      {/* <CategoryTabs
          categories={galleryCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        /> */}
      <div>Category</div>
    </section>
  );
}
