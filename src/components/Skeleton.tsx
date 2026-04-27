import { motion } from "motion/react";

/* ── Base Skeleton Block ── */
interface SkeletonProps {
  className?: string;
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
}

function Skeleton({ className = "", rounded = "lg" }: SkeletonProps) {
  const r = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  }[rounded];

  return (
    <div className={`relative overflow-hidden bg-stone-200/60 ${r} ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
        }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ── Product Card Skeleton ── */
export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col">
      <Skeleton className="aspect-[4/5] mb-4" rounded="xl" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/3 mb-4" />
      <Skeleton className="h-12 w-full" />
    </div>
  );
}

/* ── Product Grid Skeleton (Collection page) ── */
export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

/* ── Arrival Card Skeleton (Home page) ── */
export function ArrivalCardSkeleton() {
  return (
    <div className="flex flex-col">
      <Skeleton className="aspect-[3/4] mb-4" rounded="xl" />
      <Skeleton className="h-5 w-2/3 mb-2" />
      <Skeleton className="h-4 w-1/4" />
    </div>
  );
}

/* ── Home Arrivals Skeleton ── */
export function HomeArrivalsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <ArrivalCardSkeleton key={i} />
      ))}
    </div>
  );
}

/* ── Product Detail Skeleton ── */
export function ProductDetailSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
      {/* Image gallery */}
      <div className="lg:col-span-7 grid grid-cols-2 gap-4">
        <Skeleton className="col-span-2 aspect-[4/5]" rounded="xl" />
        <Skeleton className="aspect-square" rounded="xl" />
        <Skeleton className="aspect-square" rounded="xl" />
      </div>
      {/* Info panel */}
      <div className="lg:col-span-5 flex flex-col gap-8">
        <div className="space-y-4">
          <div className="flex gap-3">
            <Skeleton className="h-6 w-24" rounded="full" />
            <Skeleton className="h-6 w-28" rounded="full" />
          </div>
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-8 w-24" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="pt-6 border-t border-stone-200/50 space-y-4">
          <Skeleton className="h-4 w-28" />
          <div className="flex gap-4">
            <Skeleton className="w-12 h-12" rounded="full" />
            <Skeleton className="w-12 h-12" rounded="full" />
            <Skeleton className="w-12 h-12" rounded="full" />
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-4">
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-full" />
        </div>
      </div>
    </div>
  );
}

/* ── Cart Item Skeleton ── */
export function CartItemSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-surface-container-lowest rounded-lg">
      <Skeleton className="w-full md:w-40 h-40" rounded="lg" />
      <div className="flex-1 flex flex-col justify-between py-1">
        <div className="flex justify-between items-start">
          <div className="space-y-2 flex-1">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/3" />
          </div>
          <Skeleton className="h-6 w-16" />
        </div>
        <div className="flex items-center justify-between mt-4">
          <Skeleton className="h-10 w-28" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>
    </div>
  );
}

/* ── Cart Page Skeleton ── */
export function CartPageSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 space-y-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <CartItemSkeleton key={i} />
        ))}
      </div>
      <div className="lg:col-span-4">
        <div className="bg-surface-container-low p-8 rounded-lg space-y-6">
          <Skeleton className="h-7 w-40" />
          <div className="space-y-4">
            <div className="flex justify-between"><Skeleton className="h-4 w-20" /><Skeleton className="h-4 w-16" /></div>
            <div className="flex justify-between"><Skeleton className="h-4 w-20" /><Skeleton className="h-4 w-12" /></div>
            <div className="flex justify-between"><Skeleton className="h-4 w-24" /><Skeleton className="h-4 w-14" /></div>
            <div className="border-t border-stone-200/30 pt-4 flex justify-between">
              <Skeleton className="h-6 w-16" /><Skeleton className="h-6 w-20" />
            </div>
          </div>
          <Skeleton className="h-14 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    </div>
  );
}

/* ── Collection Header Skeleton ── */
export function CollectionHeaderSkeleton() {
  return (
    <div className="mb-16 text-center space-y-4">
      <Skeleton className="h-3 w-32 mx-auto" />
      <Skeleton className="h-12 w-80 mx-auto" />
      <Skeleton className="h-5 w-full max-w-xl mx-auto" />
      <Skeleton className="h-5 w-3/4 max-w-md mx-auto" />
    </div>
  );
}

export default Skeleton;
