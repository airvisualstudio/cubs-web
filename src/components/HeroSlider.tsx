import * as React from "react";
import { ChevronLeft, ChevronRight, ShoppingBag, MessageCircle, ArrowRight } from "lucide-react";
import type { JumbotronSlideItem } from "../lib/keystatic";

interface HeroSliderProps {
  initialSlides?: JumbotronSlideItem[];
  whatsappNumber?: string;
}

const THEME_STYLES: Record<string, {
  bgColor: string;
  borderColor: string;
  highlightColor: string;
  badgeDot: string;
}> = {
  mint: {
    bgColor: "bg-[#EBF7EE]",
    borderColor: "border-[#C7EBD0]",
    highlightColor: "text-emerald-800",
    badgeDot: "bg-emerald-500",
  },
  butter: {
    bgColor: "bg-[#FFF9E6]",
    borderColor: "border-[#FDE68A]",
    highlightColor: "text-amber-800",
    badgeDot: "bg-amber-500",
  },
  pink: {
    bgColor: "bg-[#FDF0F4]",
    borderColor: "border-[#FBCFE8]",
    highlightColor: "text-rose-800",
    badgeDot: "bg-rose-500",
  },
  sky: {
    bgColor: "bg-[#EBF5FB]",
    borderColor: "border-[#BAE6FD]",
    highlightColor: "text-sky-800",
    badgeDot: "bg-sky-500",
  },
  lavender: {
    bgColor: "bg-[#F5F3FF]",
    borderColor: "border-[#DDD6FE]",
    highlightColor: "text-purple-800",
    badgeDot: "bg-purple-500",
  },
  peach: {
    bgColor: "bg-[#FFF7ED]",
    borderColor: "border-[#FED7AA]",
    highlightColor: "text-orange-800",
    badgeDot: "bg-orange-500",
  },
};

const DEFAULT_SLIDES: JumbotronSlideItem[] = [
  {
    badge: "Koleksi Kaos Ceria • Usia 3-8 Tahun",
    themeColor: "mint",
    title: "Kaos Katun Combed Adem & Nyaman untuk",
    highlightText: "Petualangan Aktif Si Kecil",
    description: "100% Katun Combed 24s berpori adem, sablon ramah anak yang tidak mudah retak dicuci mesin cuci, serta leher tagless bebas gatal.",
    primaryBtnText: "Lihat Koleksi Kaos",
    primaryBtnHref: "/products?category=atasan",
    secondaryBtnText: "Konsultasi Size Chart",
    secondaryBtnHref: "https://wa.me/6281234567890?text=Halo%20CUBS,%20saya%20mau%20tanya%20size%20chart%20kaos%20anak%203-8%20tahun",
    image: "/images/hero/hero-kaos.jpg",
    imageAlt: "Anak ceria memakai kaos katun adem CUBS Kids",
    sizeBadgeText: "Size 4 • 6 • 8 (3-8 Thn)",
    productLabel: "Kaos Katun Dino Adventure",
    ratingText: "4.9/5",
    tags: [
      { icon: "🦖", label: "Sablon Dino Awet" },
      { icon: "🌬️", label: "Katun Combed 24s" },
      { icon: "🏷️", label: "Tagless Bebas Gatal" },
    ],
  },
  {
    badge: "Best Seller Tidur • Katun Bambu Organik",
    themeColor: "butter",
    title: "Tidur Pulas & Nyenyak Sepanjang Malam",
    highlightText: "Bebas Keringat & Gerah",
    description: "Piyama katun bambu yang sejuk alami di iklim tropis, menyerap keringat 3x lebih cepat, dengan celana berpinggang elastis lembut tanpa bekas di perut.",
    primaryBtnText: "Lihat Setelan Piyama",
    primaryBtnHref: "/products?category=setelan",
    secondaryBtnText: "Pesan via WhatsApp",
    secondaryBtnHref: "https://wa.me/6281234567890?text=Halo%20CUBS,%20saya%20tertarik%20dengan%20piyama%20katun%20bambu%20anak",
    image: "/images/hero/hero-piyama.jpg",
    imageAlt: "Anak tidur nyenyak memakai piyama katun bambu CUBS Kids",
    sizeBadgeText: "Size 4 • 6 • 8 (3-8 Thn)",
    productLabel: "Setelan Piyama Bambu Cubby Star",
    ratingText: "4.9/5",
    tags: [
      { icon: "⭐", label: "Katun Bambu Sejuk" },
      { icon: "🌿", label: "Bebas Iritasi Kulit" },
      { icon: "😴", label: "Tidur Pulas Nyenyak" },
    ],
  },
  {
    badge: "Dress Manis • Cantik & Anggun",
    themeColor: "pink",
    title: "Dress Katun Manis yang Bikin Putri Kecil",
    highlightText: "Makin Ceria Saat Berputar",
    description: "Potongan rok A-line mekar mengembang saat berputar, bahan katun rayon twill premium yang jatuh lembut dan tidak gerah dipakai bermain seharian.",
    primaryBtnText: "Lihat Koleksi Dress",
    primaryBtnHref: "/products?category=dress",
    secondaryBtnText: "Cek Stok Ukuran",
    secondaryBtnHref: "https://wa.me/6281234567890?text=Halo%20CUBS,%20saya%20mau%20tanya%20koleksi%20dress%20anak",
    image: "/images/hero/hero-dress.jpg",
    imageAlt: "Anak perempuan memakai dress katun ceria CUBS Kids",
    sizeBadgeText: "Size 4 • 6 • 8 (3-8 Thn)",
    productLabel: "Dress Katun Summer Floral Breeze",
    ratingText: "4.9/5",
    tags: [
      { icon: "👗", label: "Mekar Saat Berputar" },
      { icon: "🌸", label: "Motif Pastel Ceria" },
      { icon: "✨", label: "Jatuh Halus & Ringan" },
    ],
  },
  {
    badge: "Sporty & Outdoor • Liburan & Cuaca Dingin",
    themeColor: "sky",
    title: "Jaket Hoodie Zipper & Jogger Stretch untuk",
    highlightText: "Aktivitas Seru Si Kecil",
    description: "Baby terry cotton lembut berpori yang melindungi dari angin dingin tanpa membuat sumuk. Ritsleting halus dengan pelindung dagu aman untuk si kecil.",
    primaryBtnText: "Lihat Jaket & Celana",
    primaryBtnHref: "/products?category=bawahan-outer",
    secondaryBtnText: "Tanya Customer Service",
    secondaryBtnHref: "https://wa.me/6281234567890?text=Halo%20CUBS,%20saya%20mau%20tanya%20jaket%20hoodie%20anak",
    image: "/images/hero/hero-jaket.jpg",
    imageAlt: "Anak memakai jaket hoodie sporty CUBS Kids",
    sizeBadgeText: "Size 4 • 6 • 8 (3-8 Thn)",
    productLabel: "Jaket Hoodie Zipper Cubs Active",
    ratingText: "4.9/5",
    tags: [
      { icon: "🧥", label: "Baby Terry Halus" },
      { icon: "⚡", label: "Lentur 4-Way Stretch" },
      { icon: "🛡️", label: "Pelindung Ritsleting" },
    ],
  },
];

export function HeroSlider({ initialSlides, whatsappNumber }: HeroSliderProps) {
  const slides = (initialSlides && initialSlides.length > 0) ? initialSlides : DEFAULT_SLIDES;
  const [current, setCurrent] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);

  const total = slides.length;

  const nextSlide = React.useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = React.useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-advance slide every 6 seconds unless hovered
  React.useEffect(() => {
    if (isPaused || total <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, total]);

  // Handle Touch Swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null || total <= 1) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStart(null);
  };

  const slide = slides[current] || slides[0] || DEFAULT_SLIDES[0];
  const theme = THEME_STYLES[slide.themeColor || "mint"] || THEME_STYLES.mint;
  const tags = Array.isArray(slide.tags) ? slide.tags : [];

  return (
    <section
      className={`relative w-full ${theme.bgColor} border-b border-stone-200/70 transition-colors duration-700 overflow-hidden select-none`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Jumbotron Slide Baju Anak CUBS Kids"
    >
      {/* 
        Full-Page Jumbotron:
        Top padding starts at pt-24 (mobile) up to pt-36 (desktop) so the pastel background 
        extends 100% to the top edge of the browser behind the floating navbar.
      */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-18 lg:pb-20 min-h-[580px] sm:min-h-[640px] md:min-h-[680px] lg:min-h-[720px] flex items-center relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-14 items-center w-full">
          {/* Left Column: Headline, Caption & Action Buttons */}
          <div className="md:col-span-7 space-y-3.5 sm:space-y-5 lg:space-y-6 text-center md:text-left">
            {/* Pastel Badge Pill (Solid) */}
            {slide.badge && (
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-stone-200/80 px-3.5 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-bold text-stone-800">
                <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${theme.badgeDot}`}></span>
                <span>{slide.badge}</span>
              </div>
            )}

            {/* Responsive Huge Jumbotron Typography */}
            <h1 className="text-2xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-black text-stone-900 tracking-tight leading-[1.12]">
              {slide.title}{" "}
              {slide.highlightText && (
                <span className={`${theme.highlightColor} block sm:inline`}>
                  {slide.highlightText}
                </span>
              )}
            </h1>

            {/* Description Caption */}
            {slide.description && (
              <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-stone-700 max-w-2xl mx-auto md:mx-0 leading-relaxed font-normal">
                {slide.description}
              </p>
            )}

            {/* Jumbotron CTA Buttons: Solid Green for WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
              {slide.primaryBtnText && (
                <a
                  href={slide.primaryBtnHref || "/products"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 sm:py-4 active:scale-98 transition-all"
                >
                  <ShoppingBag className="size-4 sm:size-4.5" />
                  <span>{slide.primaryBtnText}</span>
                  <ArrowRight className="size-3.5 sm:size-4" />
                </a>
              )}

              {/* Consultation Button: Solid Green (No Gradient) */}
              {slide.secondaryBtnText && (() => {
                let btnHref = slide.secondaryBtnHref || "https://wa.me/6281234567890";
                if (whatsappNumber) {
                  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, "");
                  if (cleanPhone && btnHref.includes("wa.me/")) {
                    btnHref = btnHref.replace(/wa\.me\/\d+/, `wa.me/${cleanPhone}`);
                  }
                }
                return (
                  <a
                    href={btnHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm md:text-base px-6 sm:px-7 py-3 sm:py-4 active:scale-98 transition-all"
                  >
                    <MessageCircle className="size-4 sm:size-4.5" />
                    <span>{slide.secondaryBtnText}</span>
                  </a>
                );
              })()}
            </div>

            {/* Feature Pills */}
            {tags.length > 0 && (
              <div className="pt-1 sm:pt-2 flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2">
                {tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/95 border border-stone-200 px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-stone-700"
                  >
                    <span>{t.icon}</span>
                    <span>{t.label}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: GAMBAR BESAR JUMBOTRON HERO IMAGE (Fully Responsive) */}
          <div className="md:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-none h-[240px] sm:h-[320px] md:h-[380px] lg:h-[460px] xl:h-[500px] rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden border-4 sm:border-6 lg:border-8 border-white bg-white group">
              {/* Large Hero Image */}
              <img
                src={slide.image || "/images/hero/hero-kaos.jpg"}
                alt={slide.imageAlt || slide.title || "CUBS Kids"}
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                loading="eager"
              />

              {/* Floating Badge Top Left: Solid Pastel */}
              {slide.sizeBadgeText && (
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-white/95 backdrop-blur-xs px-2.5 sm:px-3.5 py-1 sm:py-1.5 border border-stone-200/80 flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${theme.badgeDot}`}></span>
                  <span className="text-[10px] sm:text-xs font-bold text-stone-800">{slide.sizeBadgeText}</span>
                </div>
              )}

              {/* Floating Badge Bottom: Product Card Snippet */}
              {(slide.productLabel || slide.ratingText) && (
                <div className="absolute bottom-2.5 inset-x-2.5 sm:bottom-4 sm:inset-x-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-xs p-2.5 sm:p-3.5 border border-stone-200/80 flex items-center justify-between gap-2 sm:gap-3">
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-[11px] font-semibold text-stone-500 uppercase tracking-wide">Koleksi Pilihan</p>
                    <p className="text-xs sm:text-sm font-bold text-stone-900 truncate">{slide.productLabel || "Koleksi CUBS"}</p>
                  </div>
                  {slide.ratingText && (
                    <div className="shrink-0 flex items-center gap-1 bg-amber-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-amber-200">
                      <span className="text-amber-500 text-xs">⭐</span>
                      <span className="text-[11px] sm:text-xs font-bold text-amber-900">{slide.ratingText}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls: Clean Solid White Circles at Left & Right Edges (if > 1 slide) */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Slide Jumbotron Sebelumnya"
            className="absolute left-2 sm:left-4 lg:left-6 xl:left-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white text-stone-800 border border-stone-200/80 flex items-center justify-center transition-all hover:bg-stone-50 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="size-4 sm:size-5 lg:size-6" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Slide Jumbotron Berikutnya"
            className="absolute right-2 sm:right-4 lg:right-6 xl:right-8 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white text-stone-800 border border-stone-200/80 flex items-center justify-center transition-all hover:bg-stone-50 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="size-4 sm:size-5 lg:size-6" />
          </button>

          {/* Bottom Pagination & Slide Counter */}
          <div className="absolute bottom-4 sm:bottom-5 inset-x-0 mx-auto z-20 flex items-center justify-center gap-2.5 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-bold text-stone-600 tracking-wider">
              {current + 1 < 10 ? `0${current + 1}` : current + 1} / {total < 10 ? `0${total}` : total}
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              {slides.map((_, idx) => {
                const active = idx === current;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrent(idx)}
                    aria-label={`Buka slide jumbotron ${idx + 1}`}
                    className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      active
                        ? "w-6 sm:w-8 bg-emerald-600"
                        : "w-2 sm:w-2.5 bg-stone-300 hover:bg-stone-400"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
