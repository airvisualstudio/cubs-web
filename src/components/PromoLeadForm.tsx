import * as React from "react";
import { MessageCircle, Sparkles, CheckCircle2, ShieldCheck, Gift, ArrowRight } from "lucide-react";

const PACKAGES = [
  {
    id: "paket-3kaos",
    name: "Paket 3 Kaos Petualang (Rp 149.000)",
    desc: "3 Kaos Katun Combed 24s • Hemat Rp 58.000 • Free Stiker Ceria",
    badge: "Paling Populer",
  },
  {
    id: "paket-tidur-main",
    name: "Paket Ceria Tidur & Main (Rp 179.000)",
    desc: "1 Setelan Piyama Bambu + 2 Kaos Katun • Hemat Rp 69.000 • Free Pouch",
    badge: "Best Seller",
  },
  {
    id: "paket-sultan-junior",
    name: "Paket Sultan Junior All-in-One (Rp 249.000)",
    desc: "1 Hoodie Zipper + 1 Jogger Pants + 2 Kaos • Hemat Rp 127.000 • Subsidi Ongkir",
    badge: "Hemat Maksimal",
  },
];

export function PromoLeadForm() {
  const [parentName, setParentName] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [childAge, setChildAge] = React.useState("5-6y");
  const [selectedPackage, setSelectedPackage] = React.useState("paket-3kaos");
  const [city, setCity] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [utmParams, setUtmParams] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const utm: Record<string, string> = {};
      ["utm_source", "utm_medium", "utm_campaign", "utm_content", "fbclid"].forEach((k) => {
        const val = params.get(k);
        if (val) utm[k] = val;
      });
      setUtmParams(utm);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!parentName.trim() || !whatsapp.trim()) {
      alert("Mohon isi Nama Bunda dan Nomor WhatsApp ya!");
      return;
    }

    const ageLabelMap: Record<string, string> = {
      "3-4y": "3 - 4 Tahun (Size 4)",
      "5-6y": "5 - 6 Tahun (Size 6)",
      "7-8y": "7 - 8 Tahun (Size 8)",
    };

    const chosenPkg = PACKAGES.find((p) => p.id === selectedPackage)?.name || selectedPackage;
    const ageText = ageLabelMap[childAge] || childAge;

    // Track Meta Pixel Lead event if fbq is installed
    if (typeof window !== "undefined" && (window as any).fbq) {
      try {
        (window as any).fbq("track", "Lead", {
          content_name: chosenPkg,
          content_category: "Promo Meta Ads",
          value: 149000,
          currency: "IDR",
        });
      } catch (err) {
        console.warn("Meta Pixel track error:", err);
      }
    }

    const utmSource = utmParams.utm_source ? `\n- Ref Campaign: ${utmParams.utm_source}` : "\n- Ref: Iklan Meta Promo";

    const waText = encodeURIComponent(
      `Halo CUBS Kids, saya mau KLAIM VOUCHER PROMO BUNDLING!\n\n` +
      `- Nama Bunda/Ayah: ${parentName.trim()}\n` +
      `- No. WhatsApp: ${whatsapp.trim()}\n` +
      `- Usia Buah Hati: ${ageText}\n` +
      `- Pilihan Paket: ${chosenPkg}\n` +
      (city.trim() ? `- Kota Pengiriman: ${city.trim()}\n` : "") +
      `${utmSource}\n\n` +
      `Mohon info ketersediaan motif & nomor rekening untuk pembayaran ya. Terima kasih!`
    );

    const waUrl = `https://wa.me/6281234567890?text=${waText}`;

    setIsSubmitted(true);

    // Open WhatsApp in a new tab/window after a short delay
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 600);
  };

  return (
    <div id="form-klaim" className="w-full max-w-xl mx-auto rounded-3xl bg-white border-2 border-emerald-500/80 shadow-xl p-6 sm:p-8 relative overflow-hidden">
      {/* Top Banner Tag */}
      <div className="bg-emerald-600 text-white font-black text-xs uppercase tracking-wider py-1.5 px-4 rounded-full inline-flex items-center gap-1.5 mb-4 shadow-xs">
        <Sparkles className="size-3.5 fill-amber-300 stroke-amber-300" />
        <span>Klaim Promo Spesial Bunda Baru</span>
      </div>

      <div className="space-y-2 mb-6">
        <h3 className="text-xl sm:text-2xl font-black text-stone-900 leading-tight">
          Dapatkan Diskon Bundling 40% & Free Konsultasi Size
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          Isi form singkat ini untuk mengunci kuota promo diskon hari ini. Tim customer service CUBS akan langsung mengirimkan pilihan motif baju yang cocok untuk buah hati Anda.
        </p>
      </div>

      {isSubmitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
            🎉
          </div>
          <div className="space-y-1">
            <h4 className="text-lg sm:text-xl font-bold text-stone-900">
              Kuota Promo Berhasil Dikunci!
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto">
              Terima kasih <strong>{parentName}</strong>. Jika WhatsApp tidak otomatis terbuka, silakan klik tombol hijau di bawah untuk melanjutkan ke CS CUBS.
            </p>
          </div>

          <a
            href={`https://wa.me/6281234567890`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm py-3.5 px-8 shadow-md active:scale-98 transition-all"
          >
            <MessageCircle className="size-5" />
            <span>Lanjut Chat ke WhatsApp CUBS</span>
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Nama Bunda */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-stone-700">
              Nama Bunda / Ayah <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              placeholder="Contoh: Bunda Rina"
              className="w-full rounded-2xl bg-stone-50 border border-stone-200 px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-hidden focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200/50 transition-all"
            />
          </div>

          {/* Input Nomor WhatsApp */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-stone-700">
              Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="Contoh: 081234567890"
              className="w-full rounded-2xl bg-stone-50 border border-stone-200 px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-hidden focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200/50 transition-all"
            />
            <p className="text-[11px] text-stone-400">
              🔒 Nomor hanya digunakan untuk mengirimkan katalog motif dan konfirmasi ukuran baju.
            </p>
          </div>

          {/* Usia Buah Hati */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-stone-700">
              Usia Buah Hati <span className="text-rose-500">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "3-4y", label: "3 - 4 Thn", size: "Size 4" },
                { id: "5-6y", label: "5 - 6 Thn", size: "Size 6" },
                { id: "7-8y", label: "7 - 8 Thn", size: "Size 8" },
              ].map((age) => (
                <button
                  key={age.id}
                  type="button"
                  onClick={() => setChildAge(age.id)}
                  className={`rounded-2xl p-2.5 text-center border transition-all cursor-pointer ${
                    childAge === age.id
                      ? "bg-emerald-50 border-emerald-500 text-emerald-950 font-bold shadow-2xs"
                      : "bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100"
                  }`}
                >
                  <p className="text-xs font-bold">{age.label}</p>
                  <p className="text-[10px] text-stone-400 font-medium">{age.size}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Pilihan Paket Promo */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-stone-700">
              Pilihan Paket Promo <span className="text-rose-500">*</span>
            </label>
            <div className="space-y-2">
              {PACKAGES.map((pkg) => (
                <label
                  key={pkg.id}
                  className={`block rounded-2xl p-3 border transition-all cursor-pointer ${
                    selectedPackage === pkg.id
                      ? "bg-emerald-50 border-emerald-500 shadow-2xs"
                      : "bg-stone-50 border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="radio"
                      name="package"
                      value={pkg.id}
                      checked={selectedPackage === pkg.id}
                      onChange={() => setSelectedPackage(pkg.id)}
                      className="mt-1 text-emerald-600 focus:ring-emerald-500 size-4"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-bold text-stone-900">{pkg.name}</p>
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">
                          {pkg.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">{pkg.desc}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Kota / Domisili (Opsional) */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-stone-700">
              Kota / Kecamatan Pengiriman <span className="text-stone-400 font-normal">(Opsional)</span>
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Contoh: Jakarta Selatan, Surabaya Barat, dll"
              className="w-full rounded-2xl bg-stone-50 border border-stone-200 px-4 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-hidden focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200/50 transition-all"
            />
          </div>

          {/* Tombol Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base py-4 px-6 shadow-md hover:shadow-lg active:scale-98 transition-all cursor-pointer"
            >
              <Gift className="size-5" />
              <span>Klaim Diskon Promo via WhatsApp Sekarang</span>
              <ArrowRight className="size-4" />
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-stone-500 font-medium">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="size-3.5 text-emerald-600" />
              <span>Garansi Tukar Size</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="size-3.5 text-emerald-600" />
              <span>Bisa Bayar COD</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="size-3.5 text-emerald-600" />
              <span>100% Katun Asli</span>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}

