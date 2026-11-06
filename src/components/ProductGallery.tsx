import * as React from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
  badge?: string | null;
  discountPercent?: number | null;
}

export function ProductGallery({
  images,
  productName,
  badge,
  discountPercent,
}: ProductGalleryProps) {
  const validImages = images.filter(Boolean);
  const fallback = ["/images/products/kaos-dino.svg"];
  const list = validImages.length > 0 ? validImages : fallback;

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);

  const total = list.length;
  const current = list[activeIndex % total];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null || total <= 1) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <div className="space-y-4 select-none">
      {/* Main Large Showcase Image */}
      <div
        className="relative aspect-square w-full rounded-3xl sm:rounded-4xl bg-[#FAF8F5] border border-stone-200/80 p-6 sm:p-10 shadow-sm flex items-center justify-center overflow-hidden group"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={current}
          alt={`${productName} - Tampilan ${activeIndex + 1}`}
          className="w-full h-full object-contain drop-shadow-md transition-all duration-300 group-hover:scale-104"
          loading="eager"
        />

        {/* Badge Promo Top-Left */}
        {badge && (
          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 text-white font-bold text-xs sm:text-sm px-3.5 py-1.5 shadow-sm">
              <Sparkles className="size-3.5" />
              <span>{badge}</span>
            </span>
          </div>
        )}

        {/* Discount Badge Top-Right */}
        {discountPercent && (
          <div className="absolute top-4 right-4 z-20 pointer-events-none">
            <span className="inline-flex items-center rounded-full bg-rose-500 text-white font-extrabold text-xs sm:text-sm px-3.5 py-1 shadow-sm">
              Hemat {discountPercent}%
            </span>
          </div>
        )}

        {/* Navigation Arrows (if > 1 image) */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Foto Sebelumnya"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 text-stone-800 shadow-md border border-stone-200 flex items-center justify-center transition-all hover:bg-white hover:scale-108 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="size-5 sm:size-6" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Foto Berikutnya"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 text-stone-800 shadow-md border border-stone-200 flex items-center justify-center transition-all hover:bg-white hover:scale-108 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="size-5 sm:size-6" />
            </button>

            {/* Photo Counter Pill Bottom Right */}
            <div className="absolute bottom-4 right-4 z-20 rounded-full bg-stone-900/60 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1">
              {activeIndex + 1} / {total}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails Row (Upload up to 12 images) */}
      {total > 1 && (
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-thin">
          {list.map((img, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Pilih foto ${idx + 1}`}
                className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white transition-all cursor-pointer ${
                  isSelected
                    ? "border-2 border-emerald-500 shadow-sm scale-102 ring-2 ring-emerald-200/50"
                    : "border border-stone-200/80 opacity-60 hover:opacity-100 hover:border-stone-300"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

