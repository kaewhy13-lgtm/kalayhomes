import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Leaf, Truck } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem, TextReveal } from "../components/ScrollReveal";
import { ProductDetailSkeleton } from "../components/Skeleton";
import { useCart } from "../context/CartContext";
import { getProductBySlug, getRelatedProducts } from "../lib/products";
import type { Product } from "../lib/types";

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setLoading(true);
    setSelectedVariant(0);
    setAdded(false);
    const t = setTimeout(() => {
      setProduct(getProductBySlug(slug || "") || null);
      setLoading(false);
    }, 600);
    return () => clearTimeout(t);
  }, [slug]);

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <ProductDetailSkeleton />
      </main>
    );
  }

  if (!product) {
    return (
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
        <h1 className="font-headline-lg text-headline-lg text-on-surface mb-4">Product Not Found</h1>
        <p className="font-body-lg text-secondary mb-8">The product you're looking for doesn't exist.</p>
        <Link to="/collection" className="bg-on-surface text-background px-10 py-4 rounded-lg font-label-caps text-label-caps uppercase hover:bg-primary transition-colors">Browse Collection</Link>
      </main>
    );
  }

  const related = getRelatedProducts(product.slug, 4);
  const activeVariant = product.variants[selectedVariant];
  const finalPrice = product.price + (activeVariant?.priceModifier || 0);

  function handleAddToBag() {
    addItem({
      productId: product!.id,
      name: product!.name,
      slug: product!.slug,
      imageUrl: product!.imageUrl,
      price: finalPrice,
      quantity: 1,
      variant: activeVariant?.name || product!.variant,
      tag: product!.category,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  const allImages = [product.imageUrl, ...product.images];

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Image Gallery */}
        <StaggerContainer className="lg:col-span-7 grid grid-cols-2 gap-4" staggerDelay={0.15}>
          <StaggerItem className="col-span-2" variant="scale-up">
            <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden shadow-sm">
              <img alt={product.name} className="w-full h-full object-cover" src={allImages[0]} />
            </div>
          </StaggerItem>
          {allImages.slice(1).map((img, i) => (
            <StaggerItem key={i} variant="fade-up">
              <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden shadow-sm">
                <img alt={`${product.name} detail ${i + 1}`} className="w-full h-full object-cover" src={img} />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Product Info */}
        <div className="lg:col-span-5 flex flex-col gap-stack-lg lg:sticky lg:top-32">
          <ScrollReveal variant="slide-right" duration={0.7}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {product.badge && <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-caps text-[10px] uppercase tracking-widest">{product.badge}</span>}
                <span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full font-label-caps text-[10px] uppercase tracking-widest">{product.category}</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface"><TextReveal text={product.name} delay={0.15} /></h1>
              <p className="font-headline-sm text-headline-sm text-primary">${finalPrice.toFixed(2)}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.3}>
            <div className="space-y-6">
              <p className="font-body-lg text-body-lg text-on-surface-variant">{product.description}</p>
              {product.variants.length > 1 && (
                <div className="pt-6 border-t border-stone-200/50 space-y-4">
                  <h4 className="font-label-caps text-label-caps text-on-surface">Select Variant</h4>
                  <div className="flex gap-4">
                    {product.variants.map((v, i) => (
                      <button key={v.id} onClick={() => setSelectedVariant(i)}
                        className={`w-12 h-12 rounded-full cursor-pointer transition-all ${i === selectedVariant ? "border-2 border-primary scale-110" : "border border-stone-200"}`}
                        style={{ backgroundColor: v.colorHex }} title={v.name} />
                    ))}
                  </div>
                  <p className="text-sm text-on-surface-variant">{activeVariant?.name}</p>
                </div>
              )}
              <div className="pt-8 flex flex-col gap-4">
                <button onClick={handleAddToBag}
                  className={`w-full py-5 rounded-lg font-label-caps text-sm uppercase tracking-widest transition-all duration-300 cursor-pointer ${added ? "bg-primary text-white" : "bg-on-surface text-background hover:bg-primary"}`}>
                  {added ? "✓ Added to Bag!" : "Add to Bag"}
                </button>
                <button onClick={() => navigate("/cart")}
                  className="w-full border border-on-surface text-on-surface py-5 rounded-lg font-label-caps text-sm uppercase tracking-widest hover:bg-surface-container-low transition-all duration-300 cursor-pointer">
                  View Cart
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.45}>
            <div className="pt-12 grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2"><Leaf className="text-primary" size={24} /><h5 className="font-label-caps text-[11px] uppercase tracking-widest text-on-surface">Eco-Friendly</h5><p className="text-xs text-on-secondary-container">100% Recyclable Packaging</p></div>
              <div className="flex flex-col gap-2"><Truck className="text-primary" size={24} /><h5 className="font-label-caps text-[11px] uppercase tracking-widest text-on-surface">Safe Shipping</h5><p className="text-xs text-on-secondary-container">Insured Worldwide Delivery</p></div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* The Craft */}
      <section className="mt-section-gap py-20 border-t border-stone-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <ScrollReveal variant="fade-up"><h2 className="font-headline-md text-headline-md mb-8"><TextReveal text="The Craft" /></h2></ScrollReveal>
            <StaggerContainer className="space-y-12" staggerDelay={0.2}>
              {[
                { num: "01", title: "Sustainable Clay Source", desc: "We source our clay from local deposits that are naturally rich in minerals, requiring minimal processing." },
                { num: "02", title: "3-Day Curing Process", desc: "Each piece undergoes a slow curing process in temperature-controlled rooms for maximum durability." },
                { num: "03", title: "Artisan Signature", desc: "Only pieces meeting the highest aesthetic standards are stamped with the KALAY signature." },
              ].map((s) => (
                <StaggerItem key={s.num} variant="slide-left">
                  <div className="flex gap-6 items-start"><span className="font-serif text-3xl text-primary/30">{s.num}</span><div><h3 className="font-label-caps text-sm uppercase mb-2">{s.title}</h3><p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{s.desc}</p></div></div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
          <ScrollReveal variant="scale-up" duration={0.9} className="order-1 md:order-2">
            <div className="aspect-square rounded-xl overflow-hidden shadow-xl shadow-stone-900/5">
              <img alt="Artisan working" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1000&q=80" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related */}
      <section className="mt-section-gap">
        <ScrollReveal variant="fade-up"><h2 className="font-headline-md text-headline-md mb-12 text-center"><TextReveal text="Complete the Set" /></h2></ScrollReveal>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.12}>
          {related.map((p, i) => (
            <StaggerItem key={p.id} variant="fade-up" className={i % 2 === 1 ? "mt-12 md:mt-24" : ""}>
              <Link to={`/product/${p.slug}`} className="flex flex-col gap-4 group">
                <div className="aspect-[3/4] bg-surface-container-low rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                  <img alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={p.imageUrl} />
                </div>
                <div><p className="font-label-caps text-[10px] uppercase text-stone-400">{p.category}</p><h4 className="font-body-md text-on-surface group-hover:text-primary transition-colors">{p.name}</h4><p className="font-body-md text-primary">${p.price.toFixed(2)}</p></div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </main>
  );
}
