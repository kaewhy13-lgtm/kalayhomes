import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowRight, Truck, ShieldCheck, ShoppingBag } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem, TextReveal } from "../components/ScrollReveal";
import { CartPageSkeleton } from "../components/Skeleton";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, removeItem, updateQuantity, cartCount, subtotal, tax, total } = useCart();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  // Empty cart
  if (!loading && items.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-section-gap text-center">
        <ScrollReveal variant="fade-up">
          <div className="py-20">
            <ShoppingBag size={64} className="mx-auto text-stone-300 mb-6" />
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-4">Your bag is empty</h1>
            <p className="font-body-lg text-secondary mb-8">Discover our curated collection of artisanal pieces.</p>
            <Link to="/collection" className="bg-on-surface text-background px-12 py-4 rounded-lg font-label-caps text-label-caps uppercase hover:bg-primary transition-colors inline-block">
              Shop Collection
            </Link>
          </div>
        </ScrollReveal>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-section-gap">
      <ScrollReveal variant="fade-up">
        <div className="mb-stack-lg">
          <h1 className="font-headline-lg text-headline-lg text-on-surface">
            <TextReveal text="Your Selection" />
          </h1>
          {!loading && (
            <p className="font-body-md text-body-md text-on-secondary-container mt-unit">
              {cartCount} {cartCount === 1 ? "item" : "items"} in your bag.
            </p>
          )}
        </div>
      </ScrollReveal>

      {loading ? (
        <CartPageSkeleton />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Cart Items */}
          <StaggerContainer className="lg:col-span-8 space-y-8" staggerDelay={0.15}>
            {items.map((item) => (
              <StaggerItem key={item.productId} variant="slide-left">
                <div className="flex flex-col md:flex-row gap-6 p-6 bg-surface-container-lowest rounded-lg group">
                  <Link to={`/product/${item.slug}`} className="w-full md:w-40 h-40 overflow-hidden rounded-lg bg-surface-container-low block">
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={item.name} src={item.imageUrl} />
                  </Link>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-label-caps text-label-caps text-primary uppercase mb-1 block">{item.tag}</span>
                        <Link to={`/product/${item.slug}`}>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors">{item.name}</h3>
                        </Link>
                        <p className="font-body-md text-body-md text-on-secondary-container">{item.variant}</p>
                      </div>
                      <p className="font-body-lg text-body-lg font-semibold text-on-surface">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between mt-stack-md">
                      <div className="flex items-center border border-outline-variant rounded-lg px-2">
                        <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} className="p-2 text-on-surface-variant hover:text-primary cursor-pointer"><Minus size={14} /></button>
                        <span className="px-4 font-body-md text-on-surface min-w-[32px] text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="p-2 text-on-surface-variant hover:text-primary cursor-pointer"><Plus size={14} /></button>
                      </div>
                      <button onClick={() => removeItem(item.productId)} className="text-on-secondary-container hover:text-error flex items-center gap-1 font-label-caps text-label-caps transition-colors cursor-pointer">
                        <Trash2 size={18} /> REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Order Summary */}
          <ScrollReveal variant="slide-right" delay={0.2} className="lg:col-span-4">
            <div className="bg-surface-container-low p-8 rounded-lg lg:sticky lg:top-32">
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-8">Order Summary</h2>
              <div className="space-y-4 font-body-md text-on-surface-variant mb-8">
                <div className="flex justify-between"><span>Subtotal ({cartCount} {cartCount === 1 ? "item" : "items"})</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span className="text-primary font-semibold">{subtotal >= 100 ? "Free" : "$12.00"}</span></div>
                <div className="flex justify-between"><span>Estimated Tax</span><span>${tax.toFixed(2)}</span></div>
                <div className="border-t border-outline-variant pt-4 flex justify-between text-on-surface font-bold text-body-lg">
                  <span>Total</span><span>${(subtotal >= 100 ? total : total + 12).toFixed(2)}</span>
                </div>
                {subtotal < 100 && <p className="text-xs text-primary">Add ${(100 - subtotal).toFixed(2)} more for free shipping!</p>}
              </div>
              <div className="space-y-4">
                <button className="w-full bg-on-background text-on-secondary py-4 font-label-caps text-label-caps rounded-lg hover:bg-primary transition-colors flex items-center justify-center gap-2 cursor-pointer">PROCEED TO CHECKOUT <ArrowRight size={14} /></button>
                <div className="relative py-2 flex items-center"><div className="flex-grow border-t border-outline-variant" /><span className="flex-shrink mx-4 font-label-caps text-label-caps text-on-secondary-container">OR PAY WITH</span><div className="flex-grow border-t border-outline-variant" /></div>
                <button className="w-full bg-[#ffc439] py-3 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"><span className="font-bold font-sans italic text-xl text-[#003087]">PayPal</span></button>
                <button className="w-full bg-black py-3 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"><span className="text-white font-sans font-semibold text-lg">Apple Pay</span></button>
              </div>
              <div className="mt-8 space-y-4 pt-8 border-t border-outline-variant">
                <div className="flex items-center gap-3 text-on-secondary-container"><Truck size={20} /><p className="font-body-md text-sm">Carbon neutral shipping on all orders</p></div>
                <div className="flex items-center gap-3 text-on-secondary-container"><ShieldCheck size={20} /><p className="font-body-md text-sm">Secure 256-bit SSL encrypted payments</p></div>
                <div className="flex items-center gap-3 text-on-secondary-container"><ShoppingBag size={20} /><p className="font-body-md text-sm">30-day effortless return policy</p></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      )}
    </main>
  );
}
