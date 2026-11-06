import * as React from "react";
import { Accordion } from "radix-ui";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Apakah bahan pakaian CUBS aman untuk bayi dengan kulit sensitif / eksim?",
    answer: "Sangat aman! Seluruh produk pakaian CUBS menggunakan 100% Bamboo Cotton bersertifikasi OEKO-TEX Standard 100 Class 1 (standar tertinggi untuk bayi). Bahannya bebas formalin, logam berat, dan pewarna karsinogenik sehingga hypoallergenic dan sejuk di kulit.",
  },
  {
    question: "Bagaimana jika ukuran baju atau sepatu yang dibeli kekecilan / kebesaran?",
    answer: "Kami menyediakan Garansi Tukar Ukuran dalam 7 hari setelah barang diterima, asalkan label belum dilepas dan barang belum dicuci. Bunda dan Ayah cukup menghubungi WhatsApp Customer Service kami untuk dibantu proses penukaran dengan mudah.",
  },
  {
    question: "Apakah mainan kayu dan perlengkapan makan sudah lolos uji aman (Food Grade & SNI)?",
    answer: "Ya! Mainan edukasi kayu kami telah memiliki sertifikasi SNI dan menggunakan cat berbahan dasar air (water-based non-toxic paint). Sedangkan peralatan makan terbuat dari 100% Platinum Food Grade Silicone yang bebas BPA, PVC, Phthalate, dan tahan disteril uap hingga 220°C.",
  },
  {
    question: "Berapa lama proses pengiriman barang ke alamat saya?",
    answer: "Pesanan yang terkonfirmasi sebelum pukul 15.00 WIB akan dikirim pada hari yang sama dari gudang kami di Jakarta. Estimasi tiba untuk area Jabodetabek adalah 1-2 hari kerja, dan luar kota berkisar antara 2-4 hari kerja.",
  },
  {
    question: "Bagaimana cara memesan produk di CUBS?",
    answer: "Bunda dan Ayah bisa langsung mengklik tombol 'Pesan' pada produk yang diinginkan untuk terhubung langsung ke WhatsApp admin kami, atau berkonsultasi mengenai rekomendasi usia dan kado si kecil terlebih dahulu.",
  },
];

export function FaqSection() {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold">
          <HelpCircle className="size-3.5" />
          <span>Pertanyaan Umum Orang Tua</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
          Kerap Ditanyakan Bunda & Ayah
        </h2>
        <p className="text-sm text-stone-600">
          Semua yang perlu diketahui seputar kenyamanan, keamanan produk, dan pengiriman.
        </p>
      </div>

      <Accordion.Root type="single" collapsible className="space-y-3">
        {FAQS.map((faq, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="rounded-2xl border border-amber-100 bg-white shadow-xs overflow-hidden transition-all data-[state=open]:border-amber-300 data-[state=open]:shadow-md"
          >
            <Accordion.Header className="flex">
              <Accordion.Trigger className="group flex flex-1 items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-stone-800 hover:text-amber-700 transition-colors cursor-pointer">
                <span>{faq.question}</span>
                <ChevronDown className="size-4 shrink-0 text-amber-600 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden text-stone-600 text-sm leading-relaxed px-5 pb-5 pt-0 animate-in fade-in duration-200">
              <div className="pt-2 border-t border-stone-100">
                {faq.answer}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}

