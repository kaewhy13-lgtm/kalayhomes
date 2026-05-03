import { ParallaxSection } from "../components/ParallaxImage";
import ScrollReveal, { TextReveal } from "../components/ScrollReveal";

export default function OurStory() {
  return (
    <main>
      {/* Hero Section */}
      <ParallaxSection src="/images/vase.png" alt="Kalay Homes Hero" height="70vh" speed={0.2} className="relative">
        <div className="absolute inset-0 bg-stone-900/40 z-0" />
        <div className="relative z-10 text-center px-4 md:px-8 h-full flex flex-col justify-center items-center">
          <ScrollReveal variant="fade-down" duration={0.8}>
            <span className="font-label-caps text-label-caps text-white/90 mb-4 block tracking-[0.3em] drop-shadow-md">
              PREMIUM LIVING, MADE ACCESSIBLE
            </span>
          </ScrollReveal>
          <h1 className="font-headline-lg text-5xl md:text-7xl text-white mb-6 leading-tight drop-shadow-xl" style={{ fontFamily: 'serif' }}>
            <TextReveal text="Our Story" delay={0.2} staggerDelay={0.08} />
          </h1>
        </div>
      </ParallaxSection>

      {/* Section 1: Introduction */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-32 text-center">
        <ScrollReveal variant="fade-up" duration={0.9}>
          <p className="font-headline-sm text-2xl md:text-3xl text-stone-800 leading-relaxed italic" style={{ fontFamily: 'serif' }}>
            "At Kalay Homes, we believe a home is more than just a space—it’s a feeling. It’s the warmth of shared meals, the comfort of everyday rituals, and the small details that turn a house into something truly personal."
          </p>
        </ScrollReveal>
      </section>

      {/* Section 2: Journey & Design */}
      <section className="bg-[#F3E8D9] py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="slide-left" duration={0.9} className="relative h-[600px] rounded-xl overflow-hidden shadow-lg">
              <img src="/images/plate.png" alt="Curated Tableware" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </ScrollReveal>
            <div className="space-y-8">
              <ScrollReveal variant="fade-up">
                <span className="font-label-caps text-primary tracking-widest text-sm font-semibold uppercase">The Vision</span>
                <h2 className="font-headline-md text-4xl text-stone-900 mt-2 mb-6" style={{ fontFamily: 'serif' }}>A Simple Idea</h2>
                <div className="font-body-lg text-stone-700 space-y-6">
                  <p>Our journey began with a simple idea: to make beautifully designed, high-quality tableware and home essentials accessible to modern Indian homes.</p>
                  <p>We work closely with trusted manufacturers and partners across the globe to carefully source products that combine durability, functionality, and timeless design. Every piece in our collection is thoughtfully curated and undergoes quality checks to ensure it meets our standards before it reaches your home.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Material & Focus */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <ScrollReveal variant="slide-right">
              <span className="font-label-caps text-primary tracking-widest text-sm font-semibold uppercase">Our Promise</span>
              <h2 className="font-headline-md text-4xl text-stone-900 mt-2 mb-6" style={{ fontFamily: 'serif' }}>Crafted to Last</h2>
              <div className="font-body-lg text-stone-700 space-y-6">
                <p>We prioritize materials that are food-safe, reliable for everyday use, and crafted to last—because we believe the things you use daily should be both beautiful and dependable.</p>
                <p>While we source globally, including from some of the world’s most advanced manufacturing hubs, every product is chosen to suit the taste, needs, and lifestyles of Indian homes.</p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal variant="slide-left" duration={0.9} className="relative h-[600px] rounded-xl overflow-hidden shadow-lg order-1 md:order-2">
            <img src="/images/linen.png" alt="Timeless Design" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Conclusion */}
      <ParallaxSection src="/images/chair.png" alt="Kalay Homes Space" height="500px" speed={0.15} className="relative">
        <div className="absolute inset-0 bg-stone-900/60 z-0" />
        <div className="relative z-10 text-center px-4 md:px-8 h-full flex flex-col justify-center items-center max-w-4xl mx-auto">
          <ScrollReveal variant="blur-in" duration={1}>
            <p className="font-headline-sm text-3xl md:text-4xl text-white leading-relaxed italic" style={{ fontFamily: 'serif' }}>
              At Kalay Homes, we are not just selling products—we are helping you create spaces that feel elegant, functional, and truly yours.
            </p>
            <p className="font-label-caps text-[#D4AF37] tracking-[0.2em] uppercase mt-10">
              Kalay Homes — Premium living, made accessible.
            </p>
          </ScrollReveal>
        </div>
      </ParallaxSection>
    </main>
  );
}
