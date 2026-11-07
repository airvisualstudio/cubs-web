import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export const reader = createReader(process.cwd(), keystaticConfig);

export interface MarketplaceButton {
  platform: 'shopee' | 'tokopedia' | 'tiktok' | 'lazada' | 'blibli' | 'custom';
  label: string;
  url: string;
}

export interface ProductItem {
  slug: string;
  entry: {
    name: string;
    price: number;
    originalPrice?: number | null;
    category: 'atasan' | 'setelan' | 'dress' | 'bawahan-outer';
    ageGroup: '3-4y' | '5-6y' | '7-8y' | '3-8y';
    badge?: string | null;
    featured?: boolean | null;
    stockStatus: 'ready' | 'preorder' | 'limited';
    rating?: string | null;
    soldCount?: number | null;
    image?: string | null;
    images?: readonly (string | null)[] | (string | null)[] | null;
    material?: string | null;
    summary?: string | null;
    description?: string | null;
    showWhatsappButton?: boolean | null;
    whatsappButtonText?: string | null;
    whatsappLink?: string | null;
    marketplaceButtons?: readonly MarketplaceButton[] | MarketplaceButton[] | null;
  };
}

export function getProductImages(entry: {
  image?: string | null;
  images?: readonly (string | null)[] | (string | null)[] | null;
}): string[] {
  const result: string[] = [];
  if (entry.image) {
    result.push(entry.image);
  }
  if (entry.images && Array.isArray(entry.images)) {
    for (const img of entry.images) {
      if (img && !result.includes(img)) {
        result.push(img);
      }
    }
  }
  return result.length > 0 ? result : ['/images/products/kaos-dino.svg'];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  badge?: string | null;
  title?: string | null;
  description?: string | null;
  items?: readonly FaqItem[] | FaqItem[] | null;
}

export interface JumbotronTag {
  icon: string;
  label: string;
}

export interface JumbotronSlideItem {
  badge: string;
  themeColor?: 'mint' | 'butter' | 'pink' | 'sky' | 'lavender' | 'peach' | string;
  title: string;
  highlightText: string;
  description: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  secondaryBtnText: string;
  secondaryBtnHref: string;
  image?: string | null;
  imageAlt?: string | null;
  sizeBadgeText?: string | null;
  productLabel?: string | null;
  ratingText?: string | null;
  tags?: readonly JumbotronTag[] | JumbotronTag[] | null;
}

export interface JumbotronData {
  slides?: readonly JumbotronSlideItem[] | JumbotronSlideItem[] | null;
}

export async function getProducts(): Promise<ProductItem[]> {
  try {
    const items = await reader.collections.products.all();
    return items as ProductItem[];
  } catch (err) {
    console.error('Error fetching products from Keystatic:', err);
    return [];
  }
}

export async function getProduct(slug: string): Promise<ProductItem | null> {
  try {
    const entry = await reader.collections.products.read(slug);
    if (!entry) return null;
    return { slug, entry } as ProductItem;
  } catch (err) {
    console.error(`Error fetching product [${slug}]:`, err);
    return null;
  }
}

export async function getFaq(): Promise<FaqData> {
  try {
    const data = await reader.singletons.faq.read();
    if (!data) {
      return {
        badge: "Tanya Jawab Seputar Baju Anak",
        title: "Kerap Ditanyakan Bunda & Ayah",
        description: "Informasi seputar size chart, ketahanan bahan katun, dan kemudahan garansi tukar ukuran.",
        items: [],
      };
    }
    return data as FaqData;
  } catch (err) {
    console.error('Error fetching FAQ from Keystatic:', err);
    return {
      badge: "Tanya Jawab Seputar Baju Anak",
      title: "Kerap Ditanyakan Bunda & Ayah",
      description: "Informasi seputar size chart, ketahanan bahan katun, dan kemudahan garansi tukar ukuran.",
      items: [],
    };
  }
}

export async function getJumbotron(): Promise<JumbotronSlideItem[]> {
  try {
    const data = await reader.singletons.jumbotron.read();
    if (data?.slides && Array.isArray(data.slides) && data.slides.length > 0) {
      return data.slides as JumbotronSlideItem[];
    }
  } catch (err) {
    console.error('Error fetching Jumbotron from Keystatic:', err);
  }
  return [];
}

export interface WhyCubsItem {
  icon: string;
  iconColor?: 'amber' | 'rose' | 'sky' | 'emerald' | 'purple' | string;
  title: string;
  description: string;
}

export interface WhyCubsData {
  badge?: string | null;
  title?: string | null;
  description?: string | null;
  items?: readonly WhyCubsItem[] | WhyCubsItem[] | null;
}

export async function getWhyCubs(): Promise<WhyCubsData> {
  try {
    const data = await reader.singletons.whyCubs.read();
    if (data) {
      return data as WhyCubsData;
    }
  } catch (err) {
    console.error('Error fetching Why CUBS from Keystatic:', err);
  }
  return {
    badge: 'Kualitas Teruji untuk Anak Aktif',
    title: 'Kenapa Baju CUBS Paling Pas untuk Usia 3 - 8 Tahun?',
    description: 'Anak usia 3-8 tahun sangat aktif berlari, melompat, dan bereksplorasi. Bajunya harus nyaman dan kuat!',
    items: [
      {
        icon: '🌬️',
        iconColor: 'amber',
        title: 'Serat Katun Menyerap Keringat',
        description: 'Terbuat dari 100% Katun Combed 24s dan katun bambu berkualitas tinggi yang sejuk di badan anak, mencegah biang keringat meski bermain seharian di bawah terik matahari.',
      },
      {
        icon: '🏷️',
        iconColor: 'rose',
        title: 'Bebas Label Leher Gatal (Tagless)',
        description: 'Banyak anak menolak memakai baju karena label kain di belakang leher menusuk. Semua baju CUBS menggunakan sablon leher halus tanpa label fisik yang membuat gatal.',
      },
      {
        icon: '💪',
        iconColor: 'sky',
        title: 'Jahitan Rantai Kuat & Elastis',
        description: 'Jahitan ganda di bagian kerah, pundak, dan selangkangan celana menjamin baju tidak gampang sobek atau melar meski sering dicuci dan ditarik-tarik saat anak bermain aktif.',
      },
    ],
  };
}

export interface ContactData {
  address?: string | null;
  addressCity?: string | null;
  whatsapp?: string | null;
  whatsappUrl?: string | null;
  email?: string | null;
  operationalHours?: string | null;
  operationalHoursWeekend?: string | null;
  mapsUrl?: string | null;
  addressNotes?: string | null;
}

export async function getContact(): Promise<ContactData> {
  try {
    const data = await reader.singletons.contact.read();
    if (data) {
      return data as ContactData;
    }
  } catch (err) {
    console.error('Error fetching Contact from Keystatic:', err);
  }
  return {
    address: 'Jl. Flamboyan Ceria No. 12, Kebayoran Baru, Jakarta Selatan',
    addressCity: 'DKI Jakarta 12160',
    whatsapp: '+62 812-3456-7890',
    whatsappUrl: 'https://wa.me/6281234567890',
    email: 'halo@cubskids.co.id',
    operationalHours: 'Senin - Sabtu (08:00 - 20:00 WIB)',
    operationalHoursWeekend: 'Minggu & Hari Libur: 09:00 - 17:00 WIB',
    mapsUrl: 'https://maps.google.com',
    addressNotes: 'Kunjungan offline dengan perjanjian H-1 melalui WhatsApp CS',
  };
}

export interface TestimonialItem {
  name: string;
  role: string;
  city: string;
  avatar?: string | null;
  avatarImage?: string | null;
  rating: number;
  text: string;
}

export interface TestimonialsData {
  title?: string | null;
  subtitle?: string | null;
  items?: readonly TestimonialItem[] | TestimonialItem[] | null;
}

export async function getTestimonials(): Promise<TestimonialsData> {
  try {
    const data = await reader.singletons.testimonials.read();
    if (data) {
      return data as TestimonialsData;
    }
  } catch (err) {
    console.error('Error fetching Testimonials from Keystatic:', err);
  }
  return {
    title: 'Ulasan Bunda & Ayah Bersama CUBS',
    subtitle: 'Pengalaman nyata para orang tua dengan buah hati usia 3 - 8 tahun.',
    items: [
      {
        name: 'Bunda Rini',
        role: 'Ibu dari Kenzo (4 Tahun)',
        city: 'Jakarta Barat',
        avatar: '👩',
        rating: 5,
        text: 'Kaos dino-nya beneran favorit Kenzo! Sablonnya ga retak walau udah dicuci berkali-kali di mesin cuci. Bahannya adem banget dipakai lari-larian di playground.',
      },
      {
        name: 'Ayah Fajar',
        role: 'Ayah dari Aluna (6 Tahun)',
        city: 'Bandung',
        avatar: '👨',
        rating: 5,
        text: 'Dress twirl pelangi buat Aluna pas banget di badan. Bahannya jatuh dan jahitan kerahnya rapi, ga ada label gatal di leher jadi anaknya betah pakai seharian.',
      },
      {
        name: 'Bunda Melly',
        role: 'Ibu dari Zidan (7 Tahun)',
        city: 'Tangerang Selatan',
        avatar: '👩‍🦰',
        rating: 5,
        text: 'Celana jogger sama hoodie zipper-nya bahannya tebel tapi ga gerah. Anakku yang aktif manjat-manjat ga ngeluh sesak karena karet pinggangnya elastis empuk.',
      },
    ],
  };
}

export function getCleanWhatsappNumber(phone?: string | null): string {
  if (!phone) return '6281234567890';
  const digits = phone.replace(/[^0-9]/g, '');
  return digits.length > 0 ? digits : '6281234567890';
}

export function buildWhatsappUrl(phone?: string | null, text?: string): string {
  const number = getCleanWhatsappNumber(phone);
  if (!text) return `https://wa.me/${number}`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function formatRupiah(amount?: number | null): string {
  if (amount == null) return 'Rp 0';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export const CATEGORY_LABELS: Record<string, string> = {
  atasan: 'Kaos & Atasan',
  setelan: 'Setelan & Piyama',
  dress: 'Dress & Terusan',
  'bawahan-outer': 'Jaket & Celana',
};

export const AGE_LABELS: Record<string, string> = {
  '3-4y': '3 - 4 Tahun (Size 4)',
  '5-6y': '5 - 6 Tahun (Size 6)',
  '7-8y': '7 - 8 Tahun (Size 8)',
  '3-8y': 'Semua Ukuran (3-8 Thn)',
};
