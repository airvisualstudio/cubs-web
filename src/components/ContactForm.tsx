import * as React from "react";
import { Send, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    ageGroup: "1-3y",
    topic: "konsultasi",
    message: "",
  });

  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build WhatsApp formatted message
    const text = encodeURIComponent(
      `Halo CUBS Kids! Saya ${formData.name} (${formData.phone}).\n` +
      `Usia Anak: ${formData.ageGroup}\n` +
      `Topik: ${formData.topic}\n` +
      `Pesan: ${formData.message || 'Mohon info rekomendasi produk yang cocok.'}`
    );

    // Open WhatsApp
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="rounded-3xl bg-white p-6 sm:p-8 border border-amber-100 shadow-xl shadow-amber-950/5">
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
            <CheckCircle2 className="size-8" />
          </div>
          <h3 className="text-xl font-bold text-stone-900">
            Terima Kasih, Bunda / Ayah {formData.name}!
          </h3>
          <p className="text-sm text-stone-600 max-w-sm mx-auto">
            Pesan Anda telah diarahkan ke WhatsApp Customer Service kami. Tim kami akan merespons dalam hitungan menit pada jam operasional.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold px-4 py-2 transition-colors"
          >
            Kirim Pesan Lain
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wide">
              Nama Lengkap Bunda / Ayah
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Contoh: Bunda Sarah"
              className="w-full rounded-2xl bg-stone-50 border border-stone-200 px-4 py-2.5 text-sm text-stone-800 focus:outline-hidden focus:border-amber-400 focus:bg-white transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wide">
                Nomor WhatsApp
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="0812-xxxx-xxxx"
                className="w-full rounded-2xl bg-stone-50 border border-stone-200 px-4 py-2.5 text-sm text-stone-800 focus:outline-hidden focus:border-amber-400 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wide">
                Usia Si Kecil
              </label>
              <select
                value={formData.ageGroup}
                onChange={(e) => setFormData({ ...formData, ageGroup: e.target.value })}
                className="w-full rounded-2xl bg-stone-50 border border-stone-200 px-4 py-2.5 text-sm text-stone-800 focus:outline-hidden focus:border-amber-400 focus:bg-white transition-all"
              >
                <option value="0 - 6 Bulan (Newborn)">0 - 6 Bulan (Newborn)</option>
                <option value="6 - 12 Bulan (Bayi)">6 - 12 Bulan (Bayi)</option>
                <option value="1 - 3 Tahun (Toddler)">1 - 3 Tahun (Toddler)</option>
                <option value="4 - 7 Tahun (Kids)">4 - 7 Tahun (Kids)</option>
                <option value="Belum Lahir / Kado Lahiran">Untuk Kado Lahiran</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wide">
              Topik Keperluan
            </label>
            <select
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              className="w-full rounded-2xl bg-stone-50 border border-stone-200 px-4 py-2.5 text-sm text-stone-800 focus:outline-hidden focus:border-amber-400 focus:bg-white transition-all"
            >
              <option value="Konsultasi Produk & Ukuran">Konsultasi Produk & Ukuran (Size Guide)</option>
              <option value="Pemesanan & Cek Stok">Pemesanan & Cek Stok</option>
              <option value="Paket Kado / Hampers Bayi">Paket Kado / Hampers Bayi Custom</option>
              <option value="Garansi Tukar Ukuran">Garansi Tukar Ukuran</option>
              <option value="Kerjasama & Reseller">Kerjasama & Reseller</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wide">
              Pesan / Pertanyaan
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Ceritakan apa yang bisa kami bantu untuk si kecil..."
              className="w-full rounded-2xl bg-stone-50 border border-stone-200 px-4 py-2.5 text-sm text-stone-800 focus:outline-hidden focus:border-amber-400 focus:bg-white transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm py-3 px-6 shadow-md shadow-orange-500/20 active:scale-98 transition-all cursor-pointer"
          >
            <MessageCircle className="size-4" />
            <span>Kirim Pesan via WhatsApp CS</span>
          </button>
        </form>
      )}
    </div>
  );
}

