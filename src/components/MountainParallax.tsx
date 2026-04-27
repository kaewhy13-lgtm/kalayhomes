import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import ScrollReveal, { TextReveal } from "./ScrollReveal";

interface MountainParallaxProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaLink?: string;
  secondaryLabel?: string;
}

export default function MountainParallax({
  title = "Everyday Intentionality.",
  subtitle = "Discover a curated collection of artisanal objects designed to bring warmth and rhythm to your sanctuary.",
  ctaLabel = "Shop The Collection",
  ctaLink = "/collection",
  secondaryLabel = "Our Story",
}: MountainParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Each layer scrolls at a different speed for depth
  const skyY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const farMountainY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const midMountainY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const nearMountainY = useTransform(scrollYProgress, [0, 1], [0, 280]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] min-h-[700px] overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5E6CF 0%, #E8C9A0 30%, #D4A574 60%, #C4956A 100%)" }}
    >
      {/* Sky / Gradient background layer */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{ y: skyY }}
      >
        {/* Sun glow */}
        <div
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(253,187,55,0.35) 0%, rgba(253,187,55,0.08) 50%, transparent 70%)",
          }}
        />
        {/* Subtle sun disc */}
        <div
          className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[80px] h-[80px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,222,170,0.9) 0%, rgba(253,187,55,0.4) 60%, transparent 100%)",
            filter: "blur(8px)",
          }}
        />
      </motion.div>

      {/* Far mountains (slowest parallax) */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-[2]"
        style={{ y: farMountainY }}
      >
        <svg
          viewBox="0 0 1440 500"
          className="w-full"
          preserveAspectRatio="none"
          style={{ display: "block", marginBottom: "-2px" }}
        >
          <path
            d="M0,400 C120,320 200,250 360,280 C520,310 580,200 720,180 C860,160 960,250 1080,220 C1200,190 1320,280 1440,300 L1440,500 L0,500 Z"
            fill="#B8957A"
            fillOpacity="0.5"
          />
        </svg>
      </motion.div>

      {/* Mid mountains */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-[3]"
        style={{ y: midMountainY }}
      >
        <svg
          viewBox="0 0 1440 450"
          className="w-full"
          preserveAspectRatio="none"
          style={{ display: "block", marginBottom: "-2px" }}
        >
          <path
            d="M0,350 C100,280 180,320 300,260 C420,200 500,280 660,240 C820,200 900,300 1020,260 C1140,220 1260,300 1380,280 L1440,290 L1440,450 L0,450 Z"
            fill="#9A7B65"
            fillOpacity="0.6"
          />
        </svg>
      </motion.div>

      {/* Near mountains */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-[4]"
        style={{ y: nearMountainY }}
      >
        <svg
          viewBox="0 0 1440 400"
          className="w-full"
          preserveAspectRatio="none"
          style={{ display: "block", marginBottom: "-2px" }}
        >
          <path
            d="M0,300 C80,260 160,320 280,240 C400,160 480,260 620,200 C760,140 860,280 980,220 C1100,160 1220,260 1440,240 L1440,400 L0,400 Z"
            fill="#7D5F4C"
            fillOpacity="0.7"
          />
        </svg>
      </motion.div>

      {/* Foreground layer (fastest parallax) */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-[5]"
        style={{ y: foregroundY }}
      >
        <svg
          viewBox="0 0 1440 300"
          className="w-full"
          preserveAspectRatio="none"
          style={{ display: "block", marginBottom: "-2px" }}
        >
          <path
            d="M0,200 C180,160 300,220 480,180 C660,140 780,200 900,170 C1020,140 1160,200 1260,180 C1360,160 1400,180 1440,190 L1440,300 L0,300 Z"
            fill="#5C4437"
            fillOpacity="0.8"
          />
          {/* Trees / texture shapes */}
          <ellipse cx="200" cy="170" rx="20" ry="60" fill="#4A3728" fillOpacity="0.4" />
          <ellipse cx="240" cy="175" rx="15" ry="50" fill="#4A3728" fillOpacity="0.3" />
          <ellipse cx="800" cy="160" rx="18" ry="55" fill="#4A3728" fillOpacity="0.4" />
          <ellipse cx="1200" cy="170" rx="22" ry="65" fill="#4A3728" fillOpacity="0.35" />
          <ellipse cx="1230" cy="175" rx="14" ry="45" fill="#4A3728" fillOpacity="0.25" />
        </svg>
      </motion.div>

      {/* Ground cover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[60px] z-[6]"
        style={{
          background: "linear-gradient(180deg, #3D2E24 0%, #2A1F18 100%)",
        }}
      />

      {/* Text Content */}
      <motion.div
        className="relative z-[10] flex flex-col items-center justify-center h-full text-center px-4 max-w-3xl mx-auto"
        style={{ y: textY, opacity: textOpacity, scale: textScale }}
      >
        <ScrollReveal variant="fade-down" duration={0.8} delay={0.2}>
          <span className="font-label-caps text-label-caps text-white/90 mb-6 block tracking-[0.3em] drop-shadow-lg">
            ESTABLISHED 2024
          </span>
        </ScrollReveal>

        <h1 className="font-headline-lg text-headline-lg text-white mb-8 leading-tight drop-shadow-xl">
          <TextReveal text={title} delay={0.4} staggerDelay={0.06} />
        </h1>

        <ScrollReveal variant="fade-up" duration={0.8} delay={0.9}>
          <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-xl mx-auto drop-shadow-md">
            {subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="scale-up" duration={0.6} delay={1.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ctaLink}
              className="bg-stone-900/80 backdrop-blur-sm text-white px-10 py-4 font-semibold hover:bg-primary-container hover:text-stone-900 transition-all duration-300 rounded-lg inline-block border border-white/10"
            >
              {ctaLabel}
            </a>
            <button className="border border-white/60 text-white px-10 py-4 font-semibold hover:bg-white/15 backdrop-blur-sm transition-all duration-300 rounded-lg">
              {secondaryLabel}
            </button>
          </div>
        </ScrollReveal>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
