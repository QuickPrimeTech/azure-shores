import type { MenuItem, FilterOptions } from "@/types";

export function filterMenuItems(
  items: MenuItem[],
  filters: FilterOptions
): MenuItem[] {
  return items.filter((item) => {
    if (
      filters.query &&
      !item.name.toLowerCase().includes(filters.query.toLowerCase())
    ) {
      return false;
    }

    if (
      filters.category &&
      filters.category !== "all" &&
      item.category !== filters.category
    ) {
      return false;
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      if (item.price < min || item.price > max) {
        return false;
      }
    }

    if (filters.dietaryRestrictions && filters.dietaryRestrictions.length > 0) {
      // Example: if filtering by vegan/gluten-free tags, check tags or properties accordingly
      const meetsDietary = filters.dietaryRestrictions.every((restriction) =>
        item.tags
          .map((t) => t.toLowerCase())
          .includes(restriction.toLowerCase())
      );
      if (!meetsDietary) return false;
    }

    if (filters.cuisineTypes && filters.cuisineTypes.length > 0) {
      // Assuming cuisineTypes is matched with item.category or tags, adjust as needed
      const matchesCuisine = filters.cuisineTypes.some(
        (cuisine) =>
          item.category.toLowerCase() === cuisine.toLowerCase() ||
          item.tags.map((t) => t.toLowerCase()).includes(cuisine.toLowerCase())
      );
      if (!matchesCuisine) return false;
    }

    return true;
  });
}

export function sortMenuItems(items: MenuItem[], sortBy: string): MenuItem[] {
  switch (sortBy) {
    case "popular":
      return [...items].sort((a, b) =>
        b.isPopular === a.isPopular ? 0 : b.isPopular ? 1 : -1
      );
    case "priceLowToHigh":
      return [...items].sort((a, b) => a.price - b.price);
    case "priceHighToLow":
      return [...items].sort((a, b) => b.price - a.price);
    case "alphabetical":
      return [...items].sort((a, b) => a.name.localeCompare(b.name));
    default:
      return items;
  }
}
