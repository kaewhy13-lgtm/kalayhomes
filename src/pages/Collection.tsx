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

      {/* Filters */}
      <ScrollReveal variant="fade-up" delay={0.1}>
        <section className="flex flex-col md:flex-row justify-between items-center mb-stack-lg gap-gutter">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`${activeCategory === cat ? "bg-primary text-on-primary" : "bg-secondary-container text-on-secondary-container hover:bg-primary-container hover:text-on-primary-container"} px-6 py-2 rounded-full font-label-caps text-label-caps whitespace-nowrap transition-colors cursor-pointer`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 border-b border-outline-variant pb-1 w-full md:w-auto justify-between md:justify-start">
            <span className="font-label-caps text-label-caps text-secondary uppercase">Sort by</span>
            <select
              className="bg-transparent border-none font-label-caps text-label-caps text-on-surface focus:ring-0 cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </section>
      </ScrollReveal>

      {/* Product Grid */}
      {loading ? (
        <ProductGridSkeleton count={6} />
      ) : (
        <>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-section-gap gap-x-gutter" staggerDelay={0.12} key={activeCategory + sortBy}>
            {filtered.map((p) => (
              <StaggerItem key={p.id} variant="scale-up">
                <article className="flex flex-col group">
                  <Link to={`/product/${p.slug}`} className="tonal-card rounded-xl p-4 mb-stack-md overflow-hidden block relative">
                    {p.badge && <span className="absolute top-8 right-8 bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-caps text-[10px] uppercase z-10">{p.badge}</span>}
                    <img alt={p.name} className="w-full aspect-[4/5] object-cover rounded-lg" src={p.imageUrl} />
                  </Link>
                  <div className="flex justify-between items-start">
                    <div>
                      <Link to={`/product/${p.slug}`}><h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors">{p.name}</h3></Link>
                      <p className="font-body-md text-secondary">{p.variant}</p>
                    </div>
                    <span className="font-label-caps text-label-caps text-on-surface">${p.price.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => handleAddToBag(p)}
                    className={`mt-stack-md border py-3 rounded-lg font-label-caps text-label-caps uppercase transition-all cursor-pointer ${
                      addedId === p.id
                        ? "bg-primary border-primary text-white"
                        : "border-on-surface hover:bg-primary hover:border-primary hover:text-white"
                    }`}
                  >
                    {addedId === p.id ? "✓ Added!" : "Add to Bag"}
                  </button>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body-lg text-secondary">No products found in this category.</p>
            </div>
          )}
        </>
      )}
    </main>
  );
}
