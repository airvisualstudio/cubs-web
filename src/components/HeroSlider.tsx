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
  tags: { icon: string; label: string }[];
  bgColor: string;
  borderColor: string;
}

const SLIDES: JumbotronSlide[] = [
  {
    id: 1,
    badge: "Koleksi Baru 2026 • Usia 3-8 Tahun",
    badgeBg: "bg-emerald-200/80",
    badgeText: "text-emerald-950",
    title: "Kaos Katun Adem & Nyaman untuk",
    highlightText: "Petualangan Si Kecil",
    highlightColor: "text-emerald-700",
    description: "100% Katun Combed 24s berpori adem, sablon ramah anak yang tidak mudah retak dicuci mesin, serta bebas label leher gatal (tagless).",
    primaryBtnText: "Lihat Koleksi Kaos",
    primaryBtnHref: "/products?category=atasan",
    primaryBtnBg: "bg-stone-900 hover:bg-stone-800 text-white",
    secondaryBtnText: "Konsultasi Size Chart",
    secondaryBtnHref: "https://wa.me/6281234567890?text=Halo%20CUBS,%20saya%20mau%20tanya%20size%20chart%20kaos%20anak%203-8%20tahun",
    image: "/images/products/kaos-dino.svg",
    imageAlt: "Kaos Katun Dino Adventure CUBS",
    tags: [
      { icon: "🦖", label: "Sablon Dino Awet" },
      { icon: "🌬️", label: "Katun Combed 24s" },
      { icon: "🏷️", label: "Tagless Bebas Gatal" },
    ],
    bgColor: "bg-[#EBF7EE]", // Pastel Mint
    borderColor: "border-[#C7EBD0]",
  },
  {
    id: 2,
    badge: "Best Seller • 100% Katun Bambu",
    badgeBg: "bg-amber-200/80",
    badgeText: "text-amber-950",
    title: "Tidur Pulas & Nyenyak Sepanjang Malam",
    highlightText: "Bebas Kegerahan",
    highlightColor: "text-amber-700",
    description: "Piyama katun bambu yang sejuk alami di iklim tropis, menyerap keringat 3x lebih cepat, serta karet pinggang elastis lembut tanpa bekas di perut.",
    primaryBtnText: "Lihat Setelan Piyama",
    primaryBtnHref: "/products?category=setelan",
    primaryBtnBg: "bg-stone-900 hover:bg-stone-800 text-white",
    secondaryBtnText: "Pesan via WhatsApp",
    secondaryBtnHref: "https://wa.me/6281234567890?text=Halo%20CUBS,%20saya%20tertarik%20dengan%20piyama%20katun%20bambu%20anak",
    image: "/images/products/piyama-star.svg",
    imageAlt: "Setelan Piyama Katun Bambu Cubby Star",
    tags: [
      { icon: "⭐", label: "Bambu Sejuk Alami" },
      { icon: "🌿", label: "OEKO-TEX Certified" },
      { icon: "😴", label: "Tidur Lebih Nyenyak" },
    ],
    bgColor: "bg-[#FFF9E6]", // Pastel Butter Yellow
    borderColor: "border-[#FDE68A]",
  },
  {
    id: 3,
    badge: "Gaun Cantik • Anggun & Bisa Berputar",
    badgeBg: "bg-rose-200/80",
    badgeText: "text-rose-950",
    title: "Dress Manis Ceria yang Bikin Si Kecil",
    highlightText: "Makin Percaya Diri",
    highlightColor: "text-rose-700",
    description: "Potongan rok A-line mekar saat berputar, bahan katun rayon twill premium yang jatuh lembut dan tidak gerah dipakai bermain seharian.",
    primaryBtnText: "Lihat Koleksi Dress",
    primaryBtnHref: "/products?category=dress",
    primaryBtnBg: "bg-stone-900 hover:bg-stone-800 text-white",
    secondaryBtnText: "Cek Stok Ukuran",
    secondaryBtnHref: "https://wa.me/6281234567890?text=Halo%20CUBS,%20saya%20mau%20tanya%20koleksi%20dress%20anak",
    image: "/images/products/dress-floral.svg",
    imageAlt: "Dress Katun Summer Floral Breeze",
    tags: [
      { icon: "👗", label: "Mekar Saat Berputar" },
      { icon: "🌸", label: "Motif Pastel Ceria" },
      { icon: "✨", label: "Jatuh Halus & Ringan" },
    ],
    bgColor: "bg-[#FDF0F4]", // Pastel Blossom Pink
    borderColor: "border-[#FBCFE8]",
  },
  {
    id: 4,
    badge: "Sporty & Hangat • Aktivitas Luar Ruangan",
    badgeBg: "bg-sky-200/80",
    badgeText: "text-sky-950",
    title: "Jaket Hoodie Zipper & Jogger Stretch untuk",
    highlightText: "Anak Aktif Bergerak",
    highlightColor: "text-sky-700",
    description: "Baby terry cotton berpori yang melindungi dari angin dingin tanpa membuat gerah. Ritsleting halus dengan pelindung dagu agar aman bagi anak.",
    primaryBtnText: "Lihat Jaket & Celana",
    primaryBtnHref: "/products?category=bawahan-outer",
    primaryBtnBg: "bg-stone-900 hover:bg-stone-800 text-white",
    secondaryBtnText: "Tanya Customer Service",
    secondaryBtnHref: "https://wa.me/6281234567890?text=Halo%20CUBS,%20saya%20mau%20tanya%20jaket%20hoodie%20anak",
    image: "/images/products/hoodie-zipper.svg",
    imageAlt: "Jaket Hoodie Zipper Cubs Active",
    tags: [
      { icon: "🧥", label: "Baby Terry Halus" },
      { icon: "⚡", label: "Lentur 4-Way Stretch" },
      { icon: "🛡️", label: "Pelindung Ritsleting" },
    ],
    bgColor: "bg-[#EBF5FB]", // Pastel Baby Sky Blue
    borderColor: "border-[#BAE6FD]",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

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

  const slide = SLIDES[current];

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Jumbotron Slide Baju Anak CUBS Kids"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Jumbotron Card Container: Solid Pastel Background & Crisp Flat Border (No Gradients) */}
        <div
          className={`relative rounded-3xl sm:rounded-4xl ${slide.bgColor} border ${slide.borderColor} p-6 sm:p-10 lg:p-14 min-h-[460px] sm:min-h-[500px] flex items-center transition-colors duration-500 overflow-hidden shadow-sm`}
        >
          {/* Slide Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full z-10">
            {/* Left Column: Jumbotron Caption & Buttons */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
              {/* Pastel Badge (Solid) */}
              <div className={`inline-flex items-center gap-2 rounded-full ${slide.badgeBg} ${slide.badgeText} px-3.5 py-1 text-xs font-bold tracking-wide`}>
                <span>🧸</span>
                <span>{slide.badge}</span>
              </div>

              {/* Jumbotron Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.18]">
                {slide.title}{" "}
                <span className={`${slide.highlightColor} block sm:inline`}>
                  {slide.highlightText}
                </span>
              </h1>

              {/* Description Caption */}
              <p className="text-sm sm:text-base text-stone-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {slide.description}
              </p>

              {/* Jumbotron CTA Buttons: Solid Green for WhatsApp Consultation */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href={slide.primaryBtnHref}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full ${slide.primaryBtnBg} font-bold text-sm sm:text-base px-7 py-3.5 shadow-sm active:scale-98 transition-all`}
                >
                  <ShoppingBag className="size-4.5" />
                  <span>{slide.primaryBtnText}</span>
                  <ArrowRight className="size-4" />
                </a>

                {/* Consultation Button: Solid Green (No Gradient) */}
                <a
                  href={slide.secondaryBtnHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base px-6 py-3.5 shadow-sm active:scale-98 transition-all"
                >
                  <MessageCircle className="size-4.5" />
                  <span>{slide.secondaryBtnText}</span>
                </a>
              </div>

              {/* Pastel Feature Pills */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {slide.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-stone-200/80 px-3 py-1 text-xs font-semibold text-stone-700"
                  >
                    <span>{t.icon}</span>
                    <span>{t.label}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Product Image */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-[300px] sm:max-w-[360px] rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-stone-100 flex flex-col items-center justify-center overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="w-full h-full object-contain drop-shadow-xs transition-transform duration-500 hover:scale-105"
                />

                {/* Top Badge: Solid Pastel */}
                <div className="absolute top-4 left-4 rounded-xl bg-emerald-100 text-emerald-900 text-[11px] font-bold px-3 py-1 border border-emerald-200">
                  Size 4 • 6 • 8
                </div>

                {/* Bottom Review Pill: Solid */}
                <div className="absolute bottom-4 right-4 rounded-xl bg-white px-3 py-1.5 shadow-xs border border-stone-200 flex items-center gap-1.5">
                  <span className="text-amber-500 font-bold text-xs">⭐ 4.9</span>
                  <span className="text-[10px] text-stone-600 font-medium">Ulasan Orang Tua</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls: Clean Solid White Circles */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Slide Jumbotron Sebelumnya"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-stone-800 shadow-md border border-stone-200/80 flex items-center justify-center transition-all hover:bg-stone-50 active:scale-95"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Slide Jumbotron Berikutnya"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-stone-800 shadow-md border border-stone-200/80 flex items-center justify-center transition-all hover:bg-stone-50 active:scale-95"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Pagination Indicators: Solid Pastel Dots */}
          <div className="absolute bottom-4 inset-x-0 mx-auto z-20 flex items-center justify-center gap-2">
            {SLIDES.map((s, idx) => {
              const active = idx === current;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setCurrent(idx)}
                  aria-label={`Buka slide jumbotron ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    active
                      ? "w-8 bg-emerald-600"
                      : "w-2.5 bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
