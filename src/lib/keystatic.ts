import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export const reader = createReader(process.cwd(), keystaticConfig);

export interface ProductItem {
  slug: string;
  entry: {
    name: string;
    price: number;
    originalPrice?: number | null;
    category: 'pakaian' | 'mainan' | 'perlengkapan' | 'aksesoris';
    ageGroup: '0-12m' | '1-3y' | '4-7y' | 'all';
    badge?: string | null;
    featured?: boolean | null;
    stockStatus: 'ready' | 'preorder' | 'limited';
    rating?: string | null;
    soldCount?: number | null;
    image?: string | null;
    material?: string | null;
    summary?: string | null;
    description?: string | null;
  };
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

export function formatRupiah(amount?: number | null): string {
  if (amount == null) return 'Rp 0';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export const CATEGORY_LABELS: Record<string, string> = {
  pakaian: 'Pakaian & Setelan',
  mainan: 'Mainan & Edukasi',
  perlengkapan: 'Perlengkapan Bayi',
  aksesoris: 'Sepatu & Aksesoris',
};

export const AGE_LABELS: Record<string, string> = {
  '0-12m': '0 - 12 Bulan (Bayi)',
  '1-3y': '1 - 3 Tahun (Toddler)',
  '4-7y': '4 - 7 Tahun (Kids)',
  all: 'Semua Usia',
};

