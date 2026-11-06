import * as React from "react";
import { Accordion } from "radix-ui";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionProps {
  badge?: string | null;
  title?: string | null;
  description?: string | null;
  items?: readonly FaqItem[] | FaqItem[] | null;
}

const DEFAULT_FAQS: FaqItem[] = [
  {
    question: "Bagaimana cara memilih ukuran baju yang tepat untuk anak usia 3-8 tahun?",
    answer: "Kami menggunakan standar ukuran: Size 4 (untuk usia 3-4 tahun, berat badan 13-17 kg), Size 6 (untuk usia 5-6 tahun, berat badan 18-22 kg), dan Size 8 (untuk usia 7-8 tahun, berat badan 23-28 kg). Jika buah hati Anda memiliki tubuh lebih berisi atau tinggi, kami menyarankan memilih 1 tingkat ukuran di atasnya agar lebih leluasa dipakai.",
  },
  {
    question: "Apakah bahannya adem dan tidak memicu gatal saat anak berkeringat?",
    answer: "Sangat adem! Kami menggunakan 100% Katun Combed 24s gramasi pas dan Katun Bambu Organik yang secara alami menyerap keringat 3x lebih cepat dibandingkan katun biasa. Selain itu, seluruh baju CUBS 'tagless' (tanpa label kain di leher) sehingga tidak ada bagian yang menusuk atau membuat leher gatal.",
  },
  {
    question: "Bagaimana jika baju yang dibeli kekecilan atau kebesaran di badan anak?",
    answer: "Tenang saja Bunda & Ayah! CUBS memberikan Garansi Tukar Ukuran 7 Hari setelah paket diterima. Cukup pastikan baju belum dicuci dan label belum dilepas, tim customer service kami akan dengan senang hati membantu penukaran size.",
  },
  {
    question: "Apakah sablon grafisnya tahan lama dan aman dicuci mesin cuci?",
    answer: "Ya, kami menggunakan tinta sablon berbahan dasar air (water-based ink) berstandar internasional yang elastis dan menyatu dengan serat kain. Sablon tidak mudah pecah, retak, atau lengket saat disetrika dari sisi dalam.",
  },
  {
    question: "Berapa lama estimasi pengiriman dan bagaimana cara memesan?",
    answer: "Pesanan yang terkonfirmasi sebelum jam 15.00 WIB akan dikirim pada hari yang sama dari Jakarta. Estimasi sampai 1-2 hari untuk Jabodetabek dan 2-4 hari kerja untuk kota lainnya. Bunda/Ayah cukup klik tombol 'Pesan' di produk yang diinginkan untuk terhubung langsung ke WhatsApp kami.",
  },
];

export function FaqSection({
  badge,
  title,
  description,
  items,
}: FaqSectionProps = {}) {
  const displayBadge = badge || "Tanya Jawab Seputar Baju Anak";
  const displayTitle = title || "Kerap Ditanyakan Bunda & Ayah";
  const displayDesc =
    description ||
    "Informasi seputar size chart, ketahanan bahan katun, dan kemudahan garansi tukar ukuran.";
  const displayItems = items && items.length > 0 ? items : DEFAULT_FAQS;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold">
          <HelpCircle className="size-3.5" />
          <span>{displayBadge}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
          {displayTitle}
        </h2>
        <p className="text-sm text-stone-600">
          {displayDesc}
        </p>
      </div>

      <Accordion.Root type="single" collapsible className="space-y-3">
        {displayItems.map((faq, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="rounded-2xl border border-stone-200/80 bg-white shadow-xs overflow-hidden transition-all data-[state=open]:border-emerald-300 data-[state=open]:shadow-md"
          >
            <Accordion.Header className="flex">
              <Accordion.Trigger className="group flex flex-1 items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-stone-800 hover:text-emerald-700 transition-colors cursor-pointer">
                <span>{faq.question}</span>
                <ChevronDown className="size-4 shrink-0 text-emerald-600 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden text-stone-600 text-sm leading-relaxed px-5 pb-5 pt-0 animate-in fade-in duration-200">
              <div className="pt-2 border-t border-stone-100 whitespace-pre-line">
                {faq.answer}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
