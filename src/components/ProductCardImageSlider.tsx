import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCardImageSliderProps {
  images: string[];
  alt: string;
  slug: string;
  badge?: string | null;
  discountPercent?: number | null;
}

export function ProductCardImageSlider({
  images,
  alt,
  slug,
  badge,
  discountPercent,
}: ProductCardImageSliderProps) {
  const [index, setIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);

  const validImages = images.filter(Boolean);
  const total = validImages.length;
  const currentImage = total > 0 ? validImages[index % total] : "/images/products/kaos-dino.svg";

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % total);
  };

  const handleDotClick = (e: React.MouseEvent, i: number) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex(i);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null || total <= 1) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 40) {
      setIndex((prev) => (prev + 1) % total);
    } else if (diff < -40) {
      setIndex((prev) => (prev - 1 + total) % total);
    }
    setTouchStart(null);
  };

  return (
    <a
      href={`/products/${slug}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="group/img relative aspect-square w-full overflow-hidden bg-[#FAF8F5] block select-none"
      aria-label={`Lihat detail produk ${alt}`}
    >
      {/* Active Product Image */}
      <img
        src={currentImage}
        alt={`${alt} - Foto ${index + 1}`}
        className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-104"
        loading="lazy"
      />

      {/* Badge Promo Top Left */}
      {badge && (
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 text-white font-semibold text-xs px-3 py-1 shadow-2xs">
            {badge}
          </span>
        </div>
      )}

      {/* Discount Tag Top Right */}
      {discountPercent && (
        <div className="absolute top-3 right-3 z-20 pointer-events-none">
          <span className="inline-flex items-center rounded-full bg-rose-500 text-white font-bold text-xs px-2.5 py-0.5 shadow-2xs">
            -{discountPercent}%
          </span>
        </div>
      )}

      {/* Multi-Image Navigation Controls (Only if > 1 image) */}
      {total > 1 && (
        <>
          {/* Prev Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Foto Sebelumnya"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 text-stone-800 shadow-md border border-stone-200/80 flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover/img:opacity-100 transition-all hover:bg-white hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="size-4" />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Foto Berikutnya"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 text-stone-800 shadow-md border border-stone-200/80 flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover/img:opacity-100 transition-all hover:bg-white hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="size-4" />
          </button>

          {/* Mini Pagination Dots & Counter */}
          <div className="absolute bottom-2.5 inset-x-0 z-20 flex items-center justify-center gap-1.5 pointer-events-auto">
            <div className="flex items-center gap-1 bg-stone-900/40 backdrop-blur-xs px-2 py-0.5 rounded-full">
              {validImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => handleDotClick(e, i)}
                  aria-label={`Lihat foto ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === index
                      ? "w-3.5 bg-white"
                      : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </a>
  );
}

