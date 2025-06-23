export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string; // required
  category: string;
  tags: string[];
  isVegan: boolean;
  isPopular: boolean;
}

export type FilterOptions = {
  query?: string;
  category?: string;
  priceRange?: [number, number];
  dietaryRestrictions?: string[];
  cuisineTypes?: string[];
};

export type MenuGridProps = {
  searchQuery: string;
  filters: FilterOptions;
  activeCategory: string;
};
