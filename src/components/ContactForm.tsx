import * as React from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactFormProps {
  whatsappNumber?: string;
}

export function ContactForm({ whatsappNumber }: ContactFormProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    ageGroup: "3 - 4 Tahun (Size 4)",
    topic: "Konsultasi Size Chart Baju",
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
      `Pesan: ${formData.message || 'Mohon rekomendasi ukuran baju yang tepat untuk anak saya.'}`
    );

    const waTarget = (whatsappNumber || "6281234567890").replace(/[^0-9]/g, "");

    // Open WhatsApp
    window.open(`https://wa.me/${waTarget}?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="rounded-3xl bg-white p-6 sm:p-8 border border-stone-200/80 shadow-lg shadow-stone-900/5">
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
            <CheckCircle2 className="size-8" />
          </div>
          <h3 className="text-xl font-bold text-stone-900">
            Terima Kasih, Bunda / Ayah {formData.name}!
          </h3>
          <p className="text-sm text-stone-600 max-w-sm mx-auto">
            Pesan Anda telah diarahkan ke WhatsApp Customer Service CUBS Kids. Kami akan merespons dalam hitungan menit untuk membantu pemilihan ukuran baju yang paling pas.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold px-4 py-2 transition-colors cursor-pointer"
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
              className="w-full rounded-2xl bg-stone-50 border border-stone-200 px-4 py-2.5 text-sm text-stone-800 focus:outline-hidden focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200/40 focus:bg-white transition-all"
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
                className="w-full rounded-2xl bg-stone-50 border border-stone-200 px-4 py-2.5 text-sm text-stone-800 focus:outline-hidden focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200/40 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wide">
                Usia Si Kecil (3-8 Thn)
              </label>
              <Select
                value={formData.ageGroup}
                onValueChange={(val) => setFormData({ ...formData, ageGroup: val })}
              >
                <SelectTrigger className="w-full rounded-2xl bg-stone-50 border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-800 h-10.5 focus-visible:border-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-200/40 transition-all">
                  <SelectValue placeholder="Pilih Usia Anak" />
                </SelectTrigger>
                <SelectContent position="popper" className="rounded-2xl border border-stone-200 bg-white shadow-xl">
                  <SelectItem value="3 - 4 Tahun (Size 4)">3 - 4 Tahun (Size 4)</SelectItem>
                  <SelectItem value="5 - 6 Tahun (Size 6)">5 - 6 Tahun (Size 6)</SelectItem>
                  <SelectItem value="7 - 8 Tahun (Size 8)">7 - 8 Tahun (Size 8)</SelectItem>
                  <SelectItem value="Butuh Rekomendasi Ukuran">Butuh Rekomendasi Ukuran</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wide">
              Topik Keperluan
            </label>
            <Select
              value={formData.topic}
              onValueChange={(val) => setFormData({ ...formData, topic: val })}
            >
              <SelectTrigger className="w-full rounded-2xl bg-stone-50 border border-stone-200 px-4 py-2.5 text-sm font-medium text-stone-800 h-10.5 focus-visible:border-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-200/40 transition-all">
                <SelectValue placeholder="Pilih Topik Keperluan" />
              </SelectTrigger>
              <SelectContent position="popper" className="rounded-2xl border border-stone-200 bg-white shadow-xl">
                <SelectItem value="Konsultasi Size Chart Baju">Konsultasi Size Chart & Panduan Berat Badan</SelectItem>
                <SelectItem value="Pemesanan Baju & Cek Stok">Pemesanan Baju & Cek Ketersediaan Warna</SelectItem>
                <SelectItem value="Garansi Tukar Size">Garansi Tukar Size Baju</SelectItem>
                <SelectItem value="Paket Kado Ulang Tahun Anak">Paket Kado Ulang Tahun Anak (Hampers)</SelectItem>
                <SelectItem value="Pembelian Jumlah Banyak / Reseller">Pembelian Banyak / Reseller</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1.5 uppercase tracking-wide">
              Pesan / Keterangan Baju
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Sebutkan tinggi/berat badan anak atau model baju yang diminati..."
              className="w-full rounded-2xl bg-stone-50 border border-stone-200 px-4 py-2.5 text-sm text-stone-800 focus:outline-hidden focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200/40 focus:bg-white transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm py-3 px-6 shadow-sm active:scale-98 transition-all cursor-pointer"
          >
            <MessageCircle className="size-4" />
            <span>Kirim Pesan via WhatsApp CS</span>
          </button>
        </form>
      )}
    </div>
  );
}
