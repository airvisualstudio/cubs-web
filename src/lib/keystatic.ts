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

export interface BioLinkItem {
  title: string;
  subtitle?: string | null;
  url: string;
  icon?: string | null;
  badge?: string | null;
  isHighlighted?: boolean | null;
  buttonColor?: 'white' | 'emerald' | 'butter' | 'sky' | 'pink' | 'dark' | string | null;
  openInNewTab?: boolean | null;
  isActive?: boolean | null;
}

export interface SocialLinksData {
  whatsapp?: string | null;
  instagram?: string | null;
  tiktok?: string | null;
  shopee?: string | null;
  tokopedia?: string | null;
  youtube?: string | null;
}

export interface BioLinksData {
  profileTitle?: string | null;
  profileTagline?: string | null;
  verifiedBadge?: boolean | null;
  avatarImage?: string | null;
  bentoBackgroundImage?: string | null;
  bentoOverlay?: 'light' | 'mint' | 'butter' | 'dark' | string | null;
  themeStyle?: 'cream' | 'mint' | 'butter' | 'sky' | 'pink' | string | null;
  socialLinks?: SocialLinksData | null;
  items?: readonly BioLinkItem[] | BioLinkItem[] | null;
  footerNote?: string | null;
}

export async function getBioLinks(): Promise<BioLinksData> {
  try {
    const data = await reader.singletons.links.read();
    if (data) {
      return data as BioLinksData;
    }
  } catch (err) {
    console.error('Error fetching BioLinks from Keystatic:', err);
  }
  return {
    profileTitle: 'CUBS Kids Official',
    profileTagline: 'Bright Wear for Little Adventurers 🐻 • Pakaian Anak Usia 3-8 Tahun Adem, Lembut & Bebas Label Gatal',
    verifiedBadge: true,
    themeStyle: 'cream',
    socialLinks: {
      whatsapp: '',
      instagram: 'https://instagram.com/cubskids',
      tiktok: 'https://tiktok.com/@cubskids',
      shopee: 'https://shopee.co.id',
      tokopedia: 'https://tokopedia.com',
      youtube: '',
    },
    items: [
      {
        title: 'Klaim Promo Bundling Diskon 40%',
        subtitle: 'Paket hemat 3 kaos katun & setelan + Garansi tukar size 7 hari',
        url: '/promo',
        icon: '🎁',
        badge: 'PROMO SPESIAL',
        isHighlighted: true,
        buttonColor: 'emerald',
        openInNewTab: false,
        isActive: true,
      },
      {
        title: 'Katalog Lengkap Baju Anak (Size 4, 6, 8)',
        subtitle: 'Kaos katun combed 24s, setelan piyama bambu, dress & jaket',
        url: '/products',
        icon: '🦖',
        badge: 'READY STOCK',
        isHighlighted: false,
        buttonColor: 'white',
        openInNewTab: false,
        isActive: true,
      },
      {
        title: 'Konsultasi Size & Chat CS via WhatsApp',
        subtitle: 'Bantuan pilih ukuran buah hati & tanya ketersediaan motif',
        url: 'whatsapp',
        icon: '💬',
        badge: 'FAST RESPONSE',
        isHighlighted: false,
        buttonColor: 'butter',
        openInNewTab: true,
        isActive: true,
      },
      {
        title: 'Belanja di Official Store Shopee',
        subtitle: 'Gratis ongkir Xtra & voucher cashback koin Shopee',
        url: 'https://shopee.co.id',
        icon: '🧡',
        badge: 'SHOPEE MALL',
        isHighlighted: false,
        buttonColor: 'white',
        openInNewTab: true,
        isActive: true,
      },
      {
        title: 'Belanja di Official Store Tokopedia',
        subtitle: 'Bebas ongkir ke seluruh Indonesia & promo bundling Tokopedia',
        url: 'https://tokopedia.com',
        icon: '💚',
        badge: 'OFFICIAL STORE',
        isHighlighted: false,
        buttonColor: 'white',
        openInNewTab: true,
        isActive: true,
      },
      {
        title: 'Kenapa Baju CUBS Paling Pas untuk Si Kecil?',
        subtitle: 'Kualitas katun teruji, sablon awet tahan cuci & leher tanpa label gatal',
        url: '/#why-cubs',
        icon: '✨',
        badge: '',
        isHighlighted: false,
        buttonColor: 'white',
        openInNewTab: false,
        isActive: true,
      },
      {
        title: 'Kunjungi Website Utama CUBS Kids',
        subtitle: 'cubskids.co.id',
        url: '/',
        icon: '🌐',
        badge: '',
        isHighlighted: false,
        buttonColor: 'white',
        openInNewTab: false,
        isActive: true,
      },
    ],
    footerNote: 'CUBS Kids - Bright Wear for Little Adventurers',
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
