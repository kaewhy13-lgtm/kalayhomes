import { Link } from "react-router-dom";
import MountainParallax from "../components/MountainParallax";
import ScrollReveal, { StaggerContainer, StaggerItem, TextReveal } from "../components/ScrollReveal";
import ParallaxImage, { ParallaxSection } from "../components/ParallaxImage";
import { HomeArrivalsSkeleton } from "../components/Skeleton";
import { useCart } from "../context/CartContext";
import { getNewArrivals } from "../lib/products";
import { useLoadData } from "../hooks/useLoadData";

export default function Home() {
  const { addItem } = useCart();
  const { data: newArrivals, loading } = useLoadData(() => getNewArrivals(4), 800);

  return (
    <main>
      <MountainParallax />

      {/* Coming Soon */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <ScrollReveal variant="fade-up">
            <h2 className="text-5xl md:text-7xl italic drop-shadow-md" style={{ color: '#D4AF37', fontFamily: 'serif' }}>Coming Soon</h2>
            <p className="mt-6 font-body-lg text-stone-600">Our exclusive collection is currently being curated. Stay tuned for elegant pieces to elevate your space.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quote */}
      <section className="relative py-32" style={{ background: "linear-gradient(135deg, #2A1F18 0%, #4A3728 100%)" }}>
        <div className="absolute inset-0 bg-stone-900/20 z-0" />
        <div className="relative z-10 text-center px-4 md:px-8">
          <ScrollReveal variant="blur-in" duration={1}>
            <p className="font-headline-sm text-headline-sm text-white italic max-w-2xl mx-auto drop-shadow-lg">"Objects that breathe intention into the quiet corners of your home."</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-secondary-fixed">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <ScrollReveal variant="fade-up"><span className="font-label-caps text-label-caps text-on-secondary-fixed-variant mb-6 block">STAY CONNECTED</span></ScrollReveal>
          <ScrollReveal variant="blur-in" duration={0.9} delay={0.15}>
            <h2 className="font-headline-md text-headline-md text-stone-900 mb-8">Join the Journal for stories of intentional living and first access to new arrivals.</h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={0.3}>
            <form className="flex flex-col sm:flex-row gap-0 border border-stone-300 rounded-lg overflow-hidden max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input className="flex-1 bg-white px-6 py-4 outline-none border-none focus:ring-0 font-body-md text-stone-900" placeholder="Email Address" required type="email" />
              <button className="bg-stone-900 text-white px-10 py-4 font-semibold hover:bg-primary-container hover:text-stone-900 transition-colors" type="submit">Subscribe</button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
