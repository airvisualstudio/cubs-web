import * as React from "react";
import { Search, Star, ShoppingBag, ShoppingCart, ArrowRight, RefreshCw } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Product {
  slug: string;
  entry: {
    name: string;
    price: number;
    originalPrice?: number | null;
    category: string;
    ageGroup: string;
    badge?: string | null;
    featured?: boolean | null;
    stockStatus: string;
    rating?: string | null;
    soldCount?: number | null;
    image?: string | null;
    material?: string | null;
    summary?: string | null;
    description?: string | null;
  };
}

interface ProductCatalogProps {
  initialProducts: Product[];
  initialCategory?: string;
}

const CATEGORIES = [
  { id: "all", label: "Semua Baju", icon: "👕" },
  { id: "atasan", label: "Kaos & Atasan", icon: "🦖" },
  { id: "setelan", label: "Setelan & Piyama", icon: "⭐" },
  { id: "dress", label: "Dress & Terusan", icon: "👗" },
  { id: "bawahan-outer", label: "Jaket & Celana", icon: "🧥" },
];

const AGE_GROUPS = [
  { id: "all", label: "Semua Usia (3 - 8 Tahun)" },
  { id: "3-4y", label: "3 - 4 Tahun (Size 4)" },
  { id: "5-6y", label: "5 - 6 Tahun (Size 6)" },
  { id: "7-8y", label: "7 - 8 Tahun (Size 8)" },
];

const CATEGORY_NAMES: Record<string, string> = {
  atasan: "Kaos & Atasan",
  setelan: "Setelan & Piyama",
  dress: "Dress & Terusan",
  "bawahan-outer": "Jaket & Celana",
};

const AGE_NAMES: Record<string, string> = {
  "3-4y": "3-4 Tahun",
  "5-6y": "5-6 Tahun",
  "7-8y": "7-8 Tahun",
  "3-8y": "3-8 Tahun",
};

function formatRupiah(amount?: number | null) {
  if (amount == null) return "Rp 0";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function ProductCatalog({ initialProducts, initialCategory }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>(initialCategory || "all");
  const [selectedAge, setSelectedAge] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [sortBy, setSortBy] = React.useState<string>("popular");

  // Read URL query params on mount
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category");
      if (cat) setSelectedCategory(cat);
    }
  }, []);

  const filteredProducts = React.useMemo(() => {
    return initialProducts.filter((p) => {
      // Category filter
      if (selectedCategory !== "all" && p.entry.category !== selectedCategory) {
        return false;
      }

      // Age filter
      if (selectedAge !== "all" && p.entry.ageGroup !== selectedAge && p.entry.ageGroup !== "3-8y") {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const name = (p.entry.name || "").replace(/-/g, " ").toLowerCase();
        const summary = (p.entry.summary || "").toLowerCase();
        const material = (p.entry.material || "").toLowerCase();
        const category = (p.entry.category || "").toLowerCase();
        if (!name.includes(q) && !summary.includes(q) && !material.includes(q) && !category.includes(q)) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.entry.price - b.entry.price;
      if (sortBy === "price-desc") return b.entry.price - a.entry.price;
      if (sortBy === "rating") return parseFloat(b.entry.rating || "0") - parseFloat(a.entry.rating || "0");
      // Default: popular (sold count)
      return (b.entry.soldCount || 0) - (a.entry.soldCount || 0);
    });
  }, [initialProducts, selectedCategory, selectedAge, searchQuery, sortBy]);

  const handleReset = () => {
    setSelectedCategory("all");
    setSelectedAge("all");
    setSearchQuery("");
    setSortBy("popular");
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Toolbar */}
      <div className="rounded-3xl bg-white p-4 sm:p-6 border border-stone-200/80 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kaos dino, piyama bambu, dress floral, jogger pants..."
              className="w-full rounded-full bg-stone-50 border border-stone-200 pl-11 pr-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-hidden focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200/40 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 bg-stone-200/60 rounded-full px-2 py-0.5"
              >
                Hapus
              </button>
            )}
          </div>

          {/* Age & Sort Controls Using shadcn UI Select */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 md:pb-0">
            {/* shadcn Select for Age Filter */}
            <Select value={selectedAge} onValueChange={(val) => setSelectedAge(val)}>
              <SelectTrigger className="w-[180px] sm:w-[210px] rounded-full bg-stone-50 border border-stone-200 text-xs sm:text-sm font-medium text-stone-700 h-10 px-4 focus:ring-2 focus:ring-emerald-200/40 focus:border-emerald-400 transition-colors">
                <SelectValue placeholder="Pilih Usia" />
              </SelectTrigger>
              <SelectContent position="popper" className="rounded-2xl border border-stone-200 bg-white shadow-xl">
                {AGE_GROUPS.map((a) => (
                  <SelectItem key={a.id} value={a.id} className="cursor-pointer text-xs sm:text-sm font-medium py-2">
                    {a.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* shadcn Select for Sort Dropdown */}
            <Select value={sortBy} onValueChange={(val) => setSortBy(val)}>
              <SelectTrigger className="w-[170px] sm:w-[195px] rounded-full bg-stone-50 border border-stone-200 text-xs sm:text-sm font-medium text-stone-700 h-10 px-4 focus:ring-2 focus:ring-emerald-200/40 focus:border-emerald-400 transition-colors">
                <SelectValue placeholder="Urutkan" />
              </SelectTrigger>
              <SelectContent position="popper" className="rounded-2xl border border-stone-200 bg-white shadow-xl">
                <SelectItem value="popular" className="cursor-pointer text-xs sm:text-sm font-medium py-2">
                  Paling Laris (Populer)
                </SelectItem>
                <SelectItem value="price-asc" className="cursor-pointer text-xs sm:text-sm font-medium py-2">
                  Harga: Rendah ke Tinggi
                </SelectItem>
                <SelectItem value="price-desc" className="cursor-pointer text-xs sm:text-sm font-medium py-2">
                  Harga: Tinggi ke Rendah
                </SelectItem>
                <SelectItem value="rating" className="cursor-pointer text-xs sm:text-sm font-medium py-2">
                  Rating Tertinggi
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  active
                    ? "bg-emerald-600 text-white shadow-sm scale-102"
                    : "bg-stone-100 hover:bg-stone-200/80 text-stone-700"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-stone-600 px-2">
        <span>
          Menemukan <strong>{filteredProducts.length}</strong> baju anak usia 3-8 tahun
        </span>

        {(selectedCategory !== "all" || selectedAge !== "all" || searchQuery !== "") && (
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold hover:underline cursor-pointer"
          >
            <RefreshCw className="size-3.5" />
            <span>Reset Filter</span>
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p) => {
            const entry = p.entry;
            const discountPercent =
              entry.originalPrice && entry.originalPrice > entry.price
                ? Math.round(((entry.originalPrice - entry.price) / entry.originalPrice) * 100)
                : null;

            const displayName = entry.name.replace(/-/g, " ");
            const categoryLabel = CATEGORY_NAMES[entry.category] || entry.category;
            const ageLabel = AGE_NAMES[entry.ageGroup] || entry.ageGroup;

            const waMsg = encodeURIComponent(
              `Halo CUBS Kids, saya tertarik untuk memesan baju "${displayName}" seharga ${formatRupiah(entry.price)}. Untuk usia ${ageLabel}, apakah size masih tersedia?`
            );
            const waUrl = `https://wa.me/6281234567890?text=${waMsg}`;

            return (
              <div
                key={p.slug}
                className="group relative flex flex-col rounded-3xl bg-white border border-stone-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Product Image */}
                <a
                  href={`/products/${p.slug}`}
                  className="relative aspect-square w-full overflow-hidden bg-[#FAF8F5] block"
                >
                  {entry.image ? (
                    <img
                      src={entry.image}
                      alt={displayName}
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-5xl">
                      👕
                    </div>
                  )}

                  {/* Badge */}
                  {entry.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 text-white font-semibold text-xs px-3 py-1 shadow-2xs">
                        {entry.badge}
                      </span>
                    </div>
                  )}

                  {/* Discount Tag */}
                  {discountPercent && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center rounded-full bg-rose-500 text-white font-bold text-xs px-2.5 py-0.5 shadow-2xs">
                        -{discountPercent}%
                      </span>
                    </div>
                  )}
                </a>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {categoryLabel}
                    </span>
                    <span className="text-xs text-stone-500 font-medium">
                      Usia {ageLabel}
                    </span>
                  </div>

                  <h3 className="font-bold text-stone-900 text-base leading-snug line-clamp-2 hover:text-emerald-700 transition-colors">
                    <a href={`/products/${p.slug}`}>{displayName}</a>
                  </h3>

                  {entry.material && (
                    <p className="text-xs text-stone-500 mt-1 line-clamp-1">
                      ✨ {entry.material}
                    </p>
                  )}

                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-2.5">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="size-3.5 fill-amber-400 stroke-amber-400" />
                      <span className="text-xs font-bold text-stone-800">{entry.rating || "4.9"}</span>
                    </div>
                    <span className="text-stone-300">•</span>
                    <span className="text-xs text-stone-500">{entry.soldCount || 150}+ terjual</span>
                  </div>

                  {/* Pricing */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-baseline gap-2">
                    <span className="text-lg font-extrabold text-stone-900">
                      {formatRupiah(entry.price)}
                    </span>
                    {entry.originalPrice && (
                      <span className="text-xs text-stone-400 line-through">
                        {formatRupiah(entry.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <a
                      href={`/products/${p.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-stone-100 hover:bg-emerald-50 text-stone-700 hover:text-emerald-900 text-xs font-semibold py-2.5 px-3 transition-colors text-center"
                    >
                      <span>Detail</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold py-2.5 px-3 shadow-xs hover:shadow-sm transition-all text-center"
                    >
                      <ShoppingCart className="size-3.5" />
                      <span>Pesan</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-3xl bg-white border border-stone-200/80 shadow-xs max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 text-3xl">
            👕
          </div>
          <h3 className="font-bold text-lg text-stone-900 mb-2">Baju Tidak Ditemukan</h3>
          <p className="text-sm text-stone-500 mb-6">
            Tidak ada koleksi baju anak yang cocok dengan kata kunci &quot;{searchQuery}&quot; atau filter usia yang dipilih. Silakan coba kata kunci lain.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 shadow-xs transition-all"
          >
            <RefreshCw className="size-4" />
            <span>Lihat Semua Baju</span>
          </button>
        </div>
      )}
    </div>
  );
}
