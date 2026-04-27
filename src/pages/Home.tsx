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

      {/* Philosophy */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          <ScrollReveal variant="slide-left" duration={0.9} className="md:col-span-8 bg-[#F3E8D9] rounded-xl p-12 flex flex-col justify-end relative overflow-hidden group">
            <img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="artisanal ceramic" src="/images/vase.png" />
            <div className="relative z-10">
              <h2 className="font-headline-md text-headline-md mb-4 text-stone-900"><TextReveal text="The Artisanal Soul" delay={0.2} /></h2>
              <ScrollReveal variant="fade-up" delay={0.5}>
                <p className="font-body-md text-body-md text-stone-700 max-w-md">Every piece in our collection is hand-selected from master craftsmen who prioritize slow production and timeless materials.</p>
              </ScrollReveal>
            </div>
          </ScrollReveal>
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            <ScrollReveal variant="slide-right" delay={0.15} className="bg-secondary-container rounded-xl p-8 flex flex-col justify-center">
              <h3 className="font-headline-sm text-headline-sm mb-2 text-stone-900">Sustainability</h3>
              <p className="font-body-md text-body-md text-on-secondary-container">Consciously sourced materials that respect the Earth.</p>
            </ScrollReveal>
            <ScrollReveal variant="slide-right" delay={0.3} className="bg-surface-container-high rounded-xl p-8 flex flex-col justify-center">
              <h3 className="font-headline-sm text-headline-sm mb-2 text-stone-900">Craftsmanship</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Exceptional attention to detail in every singular curve.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-surface-container-low py-section-gap">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <ScrollReveal variant="fade-up">
              <span className="font-label-caps text-label-caps text-primary mb-2 block">CURATED FOR YOU</span>
              <h2 className="font-headline-md text-headline-md text-stone-900"><TextReveal text="New Arrivals" /></h2>
            </ScrollReveal>
            <ScrollReveal variant="fade-in" delay={0.3}>
              <Link to="/collection" className="font-label-caps text-label-caps border-b border-stone-900 pb-1 hover:text-primary hover:border-primary transition-colors">View All</Link>
            </ScrollReveal>
          </div>

          {loading ? (
            <HomeArrivalsSkeleton />
          ) : (
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
              {newArrivals!.map((p) => (
                <StaggerItem key={p.id}>
                  <Link to={`/product/${p.slug}`} className="group cursor-pointer block">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden bg-white mb-4 relative">
                      <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={p.name} src={p.imageUrl} />
                      {p.badge && <div className="absolute top-4 left-4"><span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">{p.badge}</span></div>}
                    </div>
                    <h3 className="font-body-md font-semibold text-stone-900">{p.name}</h3>
                    <p className="font-body-md text-stone-500">${p.price.toFixed(2)}</p>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* Parallax Quote */}
      <ParallaxSection src="/images/linen.png" alt="serene room" height="400px" speed={0.3} className="relative">
        <div className="absolute inset-0 bg-stone-900/30 z-0" />
        <div className="relative z-10 text-center px-4 md:px-8">
          <ScrollReveal variant="blur-in" duration={1}>
            <p className="font-headline-sm text-headline-sm text-white italic max-w-2xl mx-auto drop-shadow-lg">"Objects that breathe intention into the quiet corners of your home."</p>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Shop Your Sanctuary */}
      <section className="py-section-gap max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal variant="fade-up" className="mb-16 text-center">
          <h2 className="font-headline-md text-headline-md text-stone-900"><TextReveal text="Shop Your Sanctuary" /></h2>
        </ScrollReveal>
        <div className="flex flex-col md:flex-row gap-8">
          <ScrollReveal variant="slide-left" duration={0.8} className="flex-1">
            <Link to="/collection" className="group cursor-pointer relative overflow-hidden rounded-xl h-[500px] block">
              <ParallaxImage src="/images/linen.png" alt="Bedroom" className="absolute inset-0" speed={0.2} overlay overlayOpacity={0.2} />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500 z-20" />
              <div className="absolute bottom-10 left-10 z-30"><h3 className="font-headline-sm text-headline-sm text-white mb-2">Bedroom</h3><span className="text-white font-label-caps text-xs tracking-widest border-b border-white pb-1">Explore Sanctuary</span></div>
            </Link>
          </ScrollReveal>
          <div className="flex-[0.6] flex flex-col gap-8">
            <ScrollReveal variant="slide-right" delay={0.15} className="flex-1">
              <Link to="/collection" className="group cursor-pointer relative overflow-hidden rounded-xl block h-full min-h-[230px]">
                <ParallaxImage src="/images/plate.png" alt="Kitchen" className="absolute inset-0" speed={0.15} overlay overlayOpacity={0.2} />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500 z-20" />
                <div className="absolute bottom-8 left-8 z-30"><h3 className="font-headline-sm text-headline-sm text-white mb-2">Kitchen</h3><span className="text-white font-label-caps text-xs tracking-widest border-b border-white pb-1">Shop Curation</span></div>
              </Link>
            </ScrollReveal>
            <ScrollReveal variant="slide-right" delay={0.3} className="flex-1">
              <Link to="/collection" className="group cursor-pointer relative overflow-hidden rounded-xl block h-full min-h-[230px]">
                <ParallaxImage src="/images/chair.png" alt="Living" className="absolute inset-0" speed={0.15} overlay overlayOpacity={0.2} />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500 z-20" />
                <div className="absolute bottom-8 left-8 z-30"><h3 className="font-headline-sm text-headline-sm text-white mb-2">Living</h3><span className="text-white font-label-caps text-xs tracking-widest border-b border-white pb-1">Browse Living</span></div>
              </Link>
            </ScrollReveal>
          </div>
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
