import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // 0 = no parallax, 0.5 = subtle, 1 = strong
  scale?: number; // image overscale for parallax headroom (1.2 default)
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
}

export default function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.3,
  scale = 1.25,
  overlay = false,
  overlayOpacity = 0.2,
  children,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange = 100 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [yRange, -yRange]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [scale, 1, scale]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform"
        style={{ y, scale: imgScale }}
      />
      {overlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: `rgba(28, 25, 23, ${overlayOpacity})` }}
        />
      )}
      {children && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}

/* ── Parallax Section (full-section parallax with content overlay) ── */
interface ParallaxSectionProps {
  src: string;
  alt: string;
  height?: string;
  speed?: number;
  children?: React.ReactNode;
  className?: string;
}

export function ParallaxSection({
  src,
  alt,
  height = "600px",
  speed = 0.4,
  children,
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRange = 150 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [-yRange, yRange]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      <motion.div
        className="absolute inset-0 -top-[15%] -bottom-[15%]"
        style={{ y }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
      {children && (
        <div className="relative z-10 flex items-center justify-center h-full">
          {children}
        </div>
      )}
    </div>
  );
}
