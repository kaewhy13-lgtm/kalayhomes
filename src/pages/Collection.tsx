import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal, { StaggerContainer, StaggerItem, TextReveal } from "../components/ScrollReveal";
import { CollectionHeaderSkeleton, ProductGridSkeleton } from "../components/Skeleton";
import { useCart } from "../context/CartContext";
import { getProducts } from "../lib/products";
import type { Product } from "../lib/types";

const CATEGORIES = ["All Items", "Plates", "Bowls", "Drinkware", "Serving", "Living", "Bedroom"];
type SortOption = "featured" | "newest" | "price-asc" | "price-desc";

export default function Collection() {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState("All Items");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [addedId, setAddedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const allProducts = getProducts();

  // Simulate loading on initial mount
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  // Brief loading on filter change
  function handleCategoryChange(cat: string) {
    setActiveCategory(cat);
    setLoading(true);
    setTimeout(() => setLoading(false), 350);
  }

  const filtered = useMemo(() => {
    let result = activeCategory === "All Items"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

    switch (sortBy) {
      case "price-asc": result = [...result].sort((a, b) => a.price - b.price); break;
      case "price-desc": result = [...result].sort((a, b) => b.price - a.price); break;
      case "newest": result = [...result].reverse(); break;
      default: break;
    }
    return result;
  }, [activeCategory, sortBy, allProducts]);

  function handleAddToBag(p: Product) {
    addItem({
      productId: p.id,
      name: p.name,
      slug: p.slug,
      imageUrl: p.imageUrl,
      price: p.price,
      quantity: 1,
      variant: p.variant,
      tag: p.category,
    });
    setAddedId(p.id);
    setTimeout(() => setAddedId(null), 1500);
  }

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      {/* Hero */}
      <section className="mb-section-gap text-center">
        <ScrollReveal variant="fade-down" duration={0.6}>
          <span className="font-label-caps text-label-caps text-primary uppercase mb-stack-sm block">Artisan Craftsmanship</span>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={0.1}>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md">
            <TextReveal text="Tableware Collection" staggerDelay={0.06} />
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="blur-in" delay={0.3}>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
            A curated selection of hand-thrown ceramics and stoneware, designed for the quiet moments and shared celebrations of everyday life.
          </p>
        </ScrollReveal>
      </section>

      {/* Coming Soon */}
      <section className="py-24 text-center">
        <ScrollReveal variant="fade-up">
          <h2 className="text-5xl md:text-7xl italic drop-shadow-md" style={{ color: '#D4AF37', fontFamily: 'serif' }}>Coming Soon</h2>
          <p className="mt-6 font-body-lg text-secondary">Our exclusive collection is currently being curated. Stay tuned for elegant pieces to elevate your space.</p>
        </ScrollReveal>
      </section>
    </main>
  );
}
