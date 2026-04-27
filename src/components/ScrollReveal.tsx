import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, type Variant } from "motion/react";

type RevealVariant =
  | "fade-up"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "blur-in"
  | "fade-down";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  as?: keyof JSX.IntrinsicElements;
}

const hiddenVariants: Record<RevealVariant, Variant> = {
  "fade-up": { opacity: 0, y: 60 },
  "fade-down": { opacity: 0, y: -40 },
  "fade-in": { opacity: 0 },
  "slide-left": { opacity: 0, x: -80 },
  "slide-right": { opacity: 0, x: 80 },
  "scale-up": { opacity: 0, scale: 0.85 },
  "blur-in": { opacity: 0, filter: "blur(12px)" },
};

const visibleVariants: Record<RevealVariant, Variant> = {
  "fade-up": { opacity: 1, y: 0 },
  "fade-down": { opacity: 1, y: 0 },
  "fade-in": { opacity: 1 },
  "slide-left": { opacity: 1, x: 0 },
  "slide-right": { opacity: 1, x: 0 },
  "scale-up": { opacity: 1, scale: 1 },
  "blur-in": { opacity: 1, filter: "blur(0px)" },
};

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  amount = 0.2,
  as = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: Math.min(amount, 0.1) });
  const [fallbackVisible, setFallbackVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFallbackVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const shouldShow = isInView || fallbackVisible;

  const MotionComponent = motion.create(as as any);

  return (
    <MotionComponent
      ref={ref}
      initial={hiddenVariants[variant]}
      animate={shouldShow ? visibleVariants[variant] : hiddenVariants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

/* ── Stagger Container ── */
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  amount?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.12,
  once = true,
  amount = 0.15,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: Math.min(amount, 0.1) });
  const [fallbackVisible, setFallbackVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFallbackVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const shouldShow = isInView || fallbackVisible;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={shouldShow ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger Item (child of StaggerContainer) ── */
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  duration?: number;
}

export function StaggerItem({
  children,
  className = "",
  variant = "fade-up",
  duration = 0.6,
}: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: hiddenVariants[variant],
        visible: {
          ...visibleVariants[variant],
          transition: {
            duration,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── Text Reveal (word-by-word or line-by-line) ── */
interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  once?: boolean;
  amount?: number;
  delay?: number;
  staggerDelay?: number;
}

export function TextReveal({
  text,
  className = "",
  wordClassName = "",
  once = true,
  amount = 0.3,
  delay = 0,
  staggerDelay = 0.04,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: Math.min(amount, 0.1) });
  const [fallbackVisible, setFallbackVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFallbackVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const shouldShow = isInView || fallbackVisible;
  const words = text.split(" ");

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      initial="hidden"
      animate={shouldShow ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className={`inline-block mr-[0.3em] ${wordClassName}`}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
