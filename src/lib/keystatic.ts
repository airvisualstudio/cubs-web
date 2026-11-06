import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export const reader = createReader(process.cwd(), keystaticConfig);

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
