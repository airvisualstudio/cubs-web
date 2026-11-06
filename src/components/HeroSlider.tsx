import * as React from "react";
import { ChevronLeft, ChevronRight, ShoppingBag, MessageCircle, ArrowRight } from "lucide-react";

interface JumbotronSlide {
  id: number;
  badge: string;
  badgeBg: string;
  badgeText: string;
  title: string;
  highlightText: string;
  highlightColor: string;
  description: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  primaryBtnBg: string;
  secondaryBtnText: string;
  secondaryBtnHref: string;
  image: string;
  imageAlt: string;
  productLabel: string;
  tags: { icon: string; label: string }[];
  bgColor: string;
  borderColor: string;
}

const SLIDES: JumbotronSlide[] = [
  {
    id: 1,
    badge: "Koleksi Kaos Ceria • Usia 3-8 Tahun",
    badgeBg: "bg-emerald-200/90",
    badgeText: "text-emerald-950",
    title: "Kaos Katun Combed Adem & Nyaman untuk",
    highlightText: "Petualangan Aktif Si Kecil",
    highlightColor: "text-emerald-800",
    description: "100% Katun Combed 24s berpori adem, sablon ramah anak yang tidak mudah retak dicuci mesin cuci, serta leher tagless bebas gatal.",
    primaryBtnText: "Lihat Koleksi Kaos",
    primaryBtnHref: "/products?category=atasan",
    primaryBtnBg: "bg-stone-900 hover:bg-stone-800 text-white",
    secondaryBtnText: "Konsultasi Size Chart",
    secondaryBtnHref: "https://wa.me/6281234567890?text=Halo%20CUBS,%20saya%20mau%20tanya%20size%20chart%20kaos%20anak%203-8%20tahun",
    image: "/images/hero/hero-kaos.jpg",
    imageAlt: "Anak ceria memakai kaos katun adem CUBS Kids",
    productLabel: "Kaos Katun Dino Adventure",
    tags: [
      { icon: "🦖", label: "Sablon Dino Awet" },
      { icon: "🌬️", label: "Katun Combed 24s" },
      { icon: "🏷️", label: "Tagless Bebas Gatal" },
    ],
    bgColor: "bg-[#EBF7EE]", // Pastel Mint (Solid)
    borderColor: "border-[#C7EBD0]",
  },
  {
    id: 2,
    badge: "Best Seller Tidur • Katun Bambu Organik",
    badgeBg: "bg-amber-200/90",
    badgeText: "text-amber-950",
    title: "Tidur Pulas & Nyenyak Sepanjang Malam",
    highlightText: "Bebas Keringat & Gerah",
    highlightColor: "text-amber-800",
    description: "Piyama katun bambu yang sejuk alami di iklim tropis, menyerap keringat 3x lebih cepat, dengan celana berpinggang elastis lembut tanpa bekas di perut.",
    primaryBtnText: "Lihat Setelan Piyama",
    primaryBtnHref: "/products?category=setelan",
    primaryBtnBg: "bg-stone-900 hover:bg-stone-800 text-white",
    secondaryBtnText: "Pesan via WhatsApp",
    secondaryBtnHref: "https://wa.me/6281234567890?text=Halo%20CUBS,%20saya%20tertarik%20dengan%20piyama%20katun%20bambu%20anak",
    image: "/images/hero/hero-piyama.jpg",
    imageAlt: "Anak tidur nyenyak memakai piyama katun bambu CUBS Kids",
    productLabel: "Setelan Piyama Bambu Cubby Star",
    tags: [
      { icon: "⭐", label: "Katun Bambu Sejuk" },
      { icon: "🌿", label: "Bebas Iritasi Kulit" },
      { icon: "😴", label: "Tidur Pulas Nyenyak" },
    ],
    bgColor: "bg-[#FFF9E6]", // Pastel Butter Yellow (Solid)
    borderColor: "border-[#FDE68A]",
  },
  {
    id: 3,
    badge: "Dress Manis • Cantik & Anggun",
    badgeBg: "bg-rose-200/90",
    badgeText: "text-rose-950",
    title: "Dress Katun Manis yang Bikin Putri Kecil",
    highlightText: "Makin Ceria Saat Berputar",
    highlightColor: "text-rose-800",
    description: "Potongan rok A-line mekar mengembang saat berputar, bahan katun rayon twill premium yang jatuh lembut dan tidak gerah dipakai bermain seharian.",
    primaryBtnText: "Lihat Koleksi Dress",
    primaryBtnHref: "/products?category=dress",
    primaryBtnBg: "bg-stone-900 hover:bg-stone-800 text-white",
    secondaryBtnText: "Cek Stok Ukuran",
    secondaryBtnHref: "https://wa.me/6281234567890?text=Halo%20CUBS,%20saya%20mau%20tanya%20koleksi%20dress%20anak",
    image: "/images/hero/hero-dress.jpg",
    imageAlt: "Anak perempuan memakai dress katun ceria CUBS Kids",
    productLabel: "Dress Katun Summer Floral Breeze",
    tags: [
      { icon: "👗", label: "Mekar Saat Berputar" },
      { icon: "🌸", label: "Motif Pastel Ceria" },
      { icon: "✨", label: "Jatuh Halus & Ringan" },
    ],
    bgColor: "bg-[#FDF0F4]", // Pastel Blossom Pink (Solid)
    borderColor: "border-[#FBCFE8]",
  },
  {
    id: 4,
    badge: "Sporty & Outdoor • Liburan & Cuaca Dingin",
    badgeBg: "bg-sky-200/90",
    badgeText: "text-sky-950",
    title: "Jaket Hoodie Zipper & Jogger Stretch untuk",
    highlightText: "Aktivitas Seru Si Kecil",
    highlightColor: "text-sky-800",
    description: "Baby terry cotton lembut berpori yang melindungi dari angin dingin tanpa membuat sumuk. Ritsleting halus dengan pelindung dagu aman untuk si kecil.",
    primaryBtnText: "Lihat Jaket & Celana",
    primaryBtnHref: "/products?category=bawahan-outer",
    primaryBtnBg: "bg-stone-900 hover:bg-stone-800 text-white",
    secondaryBtnText: "Tanya Customer Service",
    secondaryBtnHref: "https://wa.me/6281234567890?text=Halo%20CUBS,%20saya%20mau%20tanya%20jaket%20hoodie%20anak",
    image: "/images/hero/hero-jaket.jpg",
    imageAlt: "Anak memakai jaket hoodie sporty CUBS Kids",
    productLabel: "Jaket Hoodie Zipper Cubs Active",
    tags: [
      { icon: "🧥", label: "Baby Terry Halus" },
      { icon: "⚡", label: "Lentur 4-Way Stretch" },
      { icon: "🛡️", label: "Pelindung Ritsleting" },
    ],
    bgColor: "bg-[#EBF5FB]", // Pastel Baby Sky Blue (Solid)
    borderColor: "border-[#BAE6FD]",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);

  const total = SLIDES.length;

  const nextSlide = React.useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = React.useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-advance slide every 6 seconds unless hovered
  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Handle Touch Swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setTouchStart(null);
  };

  const slide = SLIDES[current];

  return (
    <section
      className={`relative w-full ${slide.bgColor} border-b border-stone-200/70 transition-colors duration-700 overflow-hidden select-none`}
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
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-stone-200/80 px-3.5 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-bold text-stone-800">
              <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${slide.badgeBg}`}></span>
              <span>{slide.badge}</span>
            </div>

            {/* Responsive Huge Jumbotron Typography */}
            <h1 className="text-2xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl font-black text-stone-900 tracking-tight leading-[1.12]">
              {slide.title}{" "}
              <span className={`${slide.highlightColor} block sm:inline`}>
                {slide.highlightText}
              </span>
            </h1>

            {/* Description Caption */}
            <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-stone-700 max-w-2xl mx-auto md:mx-0 leading-relaxed font-normal">
              {slide.description}
            </p>

            {/* Jumbotron CTA Buttons: Solid Green for WhatsApp */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
              <a
                href={slide.primaryBtnHref}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full ${slide.primaryBtnBg} font-bold text-xs sm:text-sm md:text-base px-6 sm:px-8 py-3 sm:py-4 active:scale-98 transition-all`}
              >
                <ShoppingBag className="size-4 sm:size-4.5" />
                <span>{slide.primaryBtnText}</span>
                <ArrowRight className="size-3.5 sm:size-4" />
              </a>

              {/* Consultation Button: Solid Green (No Gradient) */}
              <a
                href={slide.secondaryBtnHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm md:text-base px-6 sm:px-7 py-3 sm:py-4 active:scale-98 transition-all"
              >
                <MessageCircle className="size-4 sm:size-4.5" />
                <span>{slide.secondaryBtnText}</span>
              </a>
            </div>

            {/* Feature Pills */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2">
              {slide.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/95 border border-stone-200 px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-stone-700"
                >
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: GAMBAR BESAR JUMBOTRON HERO IMAGE (Fully Responsive) */}
          <div className="md:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-none h-[240px] sm:h-[320px] md:h-[380px] lg:h-[460px] xl:h-[500px] rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden border-4 sm:border-6 lg:border-8 border-white bg-white group">
              {/* Large Hero Image */}
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                loading="eager"
              />

              {/* Floating Badge Top Left: Solid Pastel */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-white/95 backdrop-blur-xs px-2.5 sm:px-3.5 py-1 sm:py-1.5 border border-stone-200/80 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500"></span>
                <span className="text-[10px] sm:text-xs font-bold text-stone-800">Size 4 • 6 • 8 (3-8 Thn)</span>
              </div>

              {/* Floating Badge Bottom: Product Card Snippet */}
              <div className="absolute bottom-2.5 inset-x-2.5 sm:bottom-4 sm:inset-x-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-xs p-2.5 sm:p-3.5 border border-stone-200/80 flex items-center justify-between gap-2 sm:gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-[11px] font-semibold text-stone-500 uppercase tracking-wide">Koleksi Pilihan</p>
                  <p className="text-xs sm:text-sm font-bold text-stone-900 truncate">{slide.productLabel}</p>
                </div>
                <div className="shrink-0 flex items-center gap-1 bg-amber-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-amber-200">
                  <span className="text-amber-500 text-xs">⭐</span>
                  <span className="text-[11px] sm:text-xs font-bold text-amber-900">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls: Clean Solid White Circles at Left & Right Edges */}
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
          0{current + 1} / 0{total}
        </span>
        <div className="flex items-center gap-1.5 sm:gap-2">
          {SLIDES.map((s, idx) => {
            const active = idx === current;
            return (
              <button
                key={s.id}
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
    </section>
  );
}
