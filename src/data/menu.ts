import type { MenuItem } from "@/types";

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Grilled Atlantic Salmon",
    description:
      "Fresh Atlantic salmon with lemon herb butter, seasonal vegetables, and quinoa pilaf",
    price: 32,
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750915579/How_To_Grill_Salmon_on_a_Cedar_Plank_ai8yfo.jpg",
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
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750915706/Butter-Poached-Lobster-and-Orange-Tomato-Bisque-scaled_t8xi4n.jpg",
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
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750915855/aromatic-spanish-seafood-paella-delicious-culinary-journey-spains-coastal-flavors-featuring-saffroninfused-experience-354040695_knr3i3.jpg",
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
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750915980/scallops-thumb_qc5qyq.jpg",
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
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750915980/scallops-thumb_qc5qyq.jpg",
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
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750916146/Ocean-Breeze-Square_t2qd0e.jpg",
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
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750916347/Kealys-of-Cloghran-2019-1-owf9nt59rwty2krenyrfmq4deriwfypat8n8gikim8_wucuhb.jpg",
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
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1750916235/vegan-buddha-bowl-with-chickpeas-avocado-colorful-veggies-and-green-dressing-on-the-side_hc3erf.jpg",
    category: "mains",
    tags: ["Vegan", "Gluten-Free", "Healthy"],
    isVegan: true,
    isPopular: false,
  },
];
