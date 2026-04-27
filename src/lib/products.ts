import type { Product } from "./types";

export const ALL_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Muted Clay Vase",
    slug: "muted-clay-vase",
    description: "A beautifully hand-thrown vase with a muted clay finish. Each piece is unique, featuring subtle variations in color and texture that celebrate the beauty of imperfection.",
    price: 85,
    category: "Living",
    variant: "Natural Clay",
    badge: "New",
    imageUrl: "/images/vase.png",
    images: [],
    variants: [
      { id: "v1", name: "Natural Clay", colorHex: "#C4956A", priceModifier: 0 },
      { id: "v2", name: "Charcoal", colorHex: "#3C3B3A", priceModifier: 10 },
    ],
  },
  {
    id: "2",
    name: "Stone-Washed Linen Set",
    slug: "stone-washed-linen-set",
    description: "Luxuriously soft stone-washed linen, pre-shrunk and ready for everyday use. The relaxed drape and lived-in texture bring effortless warmth to any room.",
    price: 42,
    category: "Bedroom",
    variant: "Oatmeal",
    imageUrl: "/images/linen.png",
    images: [],
    variants: [
      { id: "v3", name: "Oatmeal", colorHex: "#E5D5C5", priceModifier: 0 },
      { id: "v4", name: "Sage", colorHex: "#9BAF94", priceModifier: 5 },
    ],
  },
  {
    id: "3",
    name: "Orbital Brass Lamp",
    slug: "orbital-brass-lamp",
    description: "A sculptural brass lamp that doubles as a statement piece. The orbital design casts beautiful shadow patterns while providing warm ambient light.",
    price: 210,
    category: "Living",
    variant: "Aged Brass",
    imageUrl: "/images/lamp.png",
    images: [],
    variants: [
      { id: "v5", name: "Aged Brass", colorHex: "#B8860B", priceModifier: 0 },
      { id: "v6", name: "Matte Black", colorHex: "#2C2C2C", priceModifier: 0 },
    ],
  },
  {
    id: "4",
    name: "The Solace Chair",
    slug: "the-solace-chair",
    description: "Designed for deep relaxation, The Solace Chair features a sculpted oak frame and plush cushioning wrapped in sustainably sourced fabric.",
    price: 540,
    category: "Living",
    variant: "Warm Oak",
    imageUrl: "/images/chair.png",
    images: [],
    variants: [
      { id: "v7", name: "Warm Oak", colorHex: "#D2B48C", priceModifier: 0 },
      { id: "v8", name: "Walnut", colorHex: "#5C4033", priceModifier: 40 },
    ],
  },
  {
    id: "5",
    name: "Earthbound Dinner Plate",
    slug: "earthbound-dinner-plate",
    description: "Hand-thrown dinner plate with a matte sand glaze. The organic shape and earthy tones make every meal feel like a special occasion.",
    price: 42,
    category: "Plates",
    variant: "Matte Sand Glaze",
    imageUrl: "/images/plate.png",
    images: [],
    variants: [
      { id: "v9", name: "Sand", colorHex: "#F4F1EC", priceModifier: 0 },
      { id: "v10", name: "Clay", colorHex: "#E5D5C5", priceModifier: 0 },
    ],
  },
  {
    id: "6",
    name: "Cereal Bowl Set",
    slug: "cereal-bowl-set",
    description: "A set of four hand-thrown cereal bowls in terracotta and cream. Perfect for morning rituals and quiet breakfasts.",
    price: 78,
    category: "Bowls",
    variant: "Terracotta & Cream",
    imageUrl: "/images/bowls.png",
    images: [],
    variants: [
      { id: "v11", name: "Terracotta", colorHex: "#C4956A", priceModifier: 0 },
      { id: "v12", name: "Cream", colorHex: "#F5F0E8", priceModifier: 0 },
    ],
  },
  {
    id: "7",
    name: "Ocean Spray Pitcher",
    slug: "ocean-spray-pitcher",
    description: "A limited edition pitcher with a speckled stone glaze reminiscent of ocean spray on coastal rocks. Each piece is truly one-of-a-kind.",
    price: 95,
    category: "Serving",
    variant: "Speckled Stone",
    badge: "Limited Edition",
    imageUrl: "/images/pitcher.png",
    images: [],
    variants: [
      { id: "v13", name: "Speckled Stone", colorHex: "#8B9DAF", priceModifier: 0 },
    ],
  },
  {
    id: "8",
    name: "Basalt Espresso Pair",
    slug: "basalt-espresso-pair",
    description: "A pair of espresso cups in a deep charcoal matte finish. The minimalist form celebrates the ritual of coffee.",
    price: 34,
    category: "Drinkware",
    variant: "Charcoal Matte",
    imageUrl: "/images/vase.png",
    images: [],
    variants: [
      { id: "v14", name: "Charcoal", colorHex: "#3C3B3A", priceModifier: 0 },
      { id: "v15", name: "Cream", colorHex: "#F5F0E8", priceModifier: 0 },
    ],
  },
  {
    id: "9",
    name: "Lichen Serving Platter",
    slug: "lichen-serving-platter",
    description: "A generous serving platter in sage green gloss. The organic shape and lush glaze bring nature to your table.",
    price: 110,
    category: "Serving",
    variant: "Sage Green Gloss",
    imageUrl: "/images/platter.png",
    images: [],
    variants: [
      { id: "v16", name: "Sage Green", colorHex: "#9BAF94", priceModifier: 0 },
    ],
  },
  {
    id: "10",
    name: "Fluted Morning Mug",
    slug: "fluted-morning-mug",
    description: "Start your day with intention. This fluted mug in oatmeal ribbed finish fits perfectly in your hands.",
    price: 38,
    category: "Drinkware",
    variant: "Oatmeal Ribbed",
    imageUrl: "/images/bowls.png",
    images: [],
    variants: [
      { id: "v17", name: "Oatmeal", colorHex: "#E5D5C5", priceModifier: 0 },
      { id: "v18", name: "Moss", colorHex: "#6B7B5E", priceModifier: 0 },
    ],
  },
  {
    id: "11",
    name: "The Terra Shallow Bowl",
    slug: "terra-bowl",
    description: "Each Terra bowl is individually hand-thrown in our Kyoto studio. The unique glaze is inspired by the soft morning mist over the Kamo River, resulting in a matte finish that feels remarkably warm to the touch.",
    price: 124,
    category: "Bowls",
    variant: "Morning Mist",
    badge: "Handcrafted",
    imageUrl: "/images/plate.png",
    images: [
      "/images/bowls.png",
      "/images/vase.png",
    ],
    variants: [
      { id: "v19", name: "Morning Mist", colorHex: "#F4F1EC", priceModifier: 0 },
      { id: "v20", name: "Desert Clay", colorHex: "#E5D5C5", priceModifier: 0 },
      { id: "v21", name: "Midnight Onyx", colorHex: "#3C3B3A", priceModifier: 15 },
    ],
  },
  {
    id: "12",
    name: "Pure Linen Throw",
    slug: "pure-linen-throw",
    description: "A generous pure linen throw blanket, pre-washed for ultimate softness. Drape it over a chair or at the foot of the bed for instant warmth.",
    price: 124,
    category: "Bedroom",
    variant: "Oatmeal / Large",
    imageUrl: "/images/linen.png",
    images: [],
    variants: [
      { id: "v22", name: "Oatmeal", colorHex: "#E5D5C5", priceModifier: 0 },
      { id: "v23", name: "Charcoal", colorHex: "#4A4A4A", priceModifier: 0 },
    ],
  },
  {
    id: "13",
    name: "Cedar & Moss Soy Candle",
    slug: "cedar-moss-candle",
    description: "Hand-poured soy candle with notes of cedarwood, moss, and subtle vanilla. Set of 3 in reusable ceramic vessels.",
    price: 62,
    category: "Living",
    variant: "Set of 3",
    imageUrl: "/images/pitcher.png",
    images: [],
    variants: [
      { id: "v24", name: "Cedar & Moss", colorHex: "#6B7B5E", priceModifier: 0 },
    ],
  },
];

export function getProducts(): Product[] {
  return ALL_PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (!category || category === "All Items") return ALL_PRODUCTS;
  return ALL_PRODUCTS.filter((p) => p.category === category);
}

export function getNewArrivals(count = 4): Product[] {
  return ALL_PRODUCTS.slice(0, count);
}

export function getRelatedProducts(currentSlug: string, count = 4): Product[] {
  return ALL_PRODUCTS.filter((p) => p.slug !== currentSlug).slice(0, count);
}
