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
