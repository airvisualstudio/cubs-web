import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'content', 'products');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const products = [
  {
    slug: 'piyama-bambu-organik-cubby',
    data: {
      name: 'piyama-bambu-organik-cubby',
      price: 89000,
      originalPrice: 119000,
      category: 'pakaian',
      ageGroup: '1-3y',
      badge: 'Best Seller',
      featured: true,
      stockStatus: 'ready',
      rating: '4.9',
      soldCount: 480,
      image: '/images/products/piyama.svg',
      material: '100% Bamboo Cotton Bersertifikasi OEKO-TEX Standard 100',
      summary: 'Setelan piyama anak katun bambu yang ultra-lembut, sejuk di kulit sensitif, dan anti-bakteri alami.',
      description: 'Didesain khusus untuk memberikan kenyamanan tidur maksimal. Bahannya stretch, menyerap keringat dengan sangat cepat, dan bebas label kerah (tagless) agar leher si kecil tidak gatal.'
    }
  },
  {
    slug: 'jumper-bayi-newborn-pastel',
    data: {
      name: 'jumper-bayi-newborn-pastel',
      price: 65000,
      originalPrice: 85000,
      category: 'pakaian',
      ageGroup: '0-12m',
      badge: 'Favorit Bunda',
      featured: true,
      stockStatus: 'ready',
      rating: '4.9',
      soldCount: 620,
      image: '/images/products/jumper.svg',
      material: '100% Premium Combed Cotton 30s',
      summary: 'Bodysuit jumper bayi newborn dengan kancing snap anti karat bebas nikel yang memudahkan penggantian popok.',
      description: 'Pilihan tepat untuk bayi baru lahir. Kerah amplop (envelope neck) fleksibel memudahkan saat memakaikan baju tanpa menekan kepala bayi yang masih lunak.'
    }
  },
  {
    slug: 'balok-susun-kayu-montessori',
    data: {
      name: 'balok-susun-kayu-montessori',
      price: 135000,
      originalPrice: 179000,
      category: 'mainan',
      ageGroup: '1-3y',
      badge: 'Edukasi Juara',
      featured: true,
      stockStatus: 'ready',
      rating: '5.0',
      soldCount: 290,
      image: '/images/products/balok.svg',
      material: 'Kayu Pinus Alami Halus & Cat Air Non-Toxic (SNI)',
      summary: 'Mainan balok geometri kayu Montessori untuk melatih koordinasi tangan-mata, kreativitas, dan pengenalan bentuk.',
      description: 'Setiap sudut kayu telah diamplas halus tanpa serpihan tajam. Menggunakan pewarna berbahan dasar air yang aman jika tidak sengaja digigit si kecil.'
    }
  },
  {
    slug: 'boneka-beruang-cubby-plush',
    data: {
      name: 'boneka-beruang-cubby-plush',
      price: 99000,
      originalPrice: 139000,
      category: 'mainan',
      ageGroup: 'all',
      badge: 'Iconic Cubs',
      featured: true,
      stockStatus: 'ready',
      rating: '4.9',
      soldCount: 750,
      image: '/images/products/boneka.svg',
      material: 'Kain Velboa Lembut & Isian Silikon Hypoallergenic Grade A',
      summary: 'Boneka maskot Cubby yang ramah, empuk dipeluk, dan tidak memicu alergi debu.',
      description: 'Sahabat tidur dan teman cerita terbaik untuk si kecil. Jahitan ekstra kuat dan mata boneka dibordir rapi sehingga tidak ada manik-manik kecil yang membahayakan.'
    }
  },
  {
    slug: 'sippy-cup-silikon-anti-tumpah',
    data: {
      name: 'sippy-cup-silikon-anti-tumpah',
      price: 79000,
      originalPrice: 99000,
      category: 'perlengkapan',
      ageGroup: '0-12m',
      badge: 'BPA Free',
      featured: true,
      stockStatus: 'ready',
      rating: '4.8',
      soldCount: 510,
      image: '/images/products/sippycup.svg',
      material: '100% Platinum Food Grade Silicone (Tahan Panas s/d 220°C)',
      summary: 'Gelas minum latihan transisi dengan gagang ganda ergonomis dan sedotan lembut yang tidak melukai gusi.',
      description: 'Teknologi katup anti tumpah memastikan cairan hanya keluar saat disedot. Sangat tahan banting dan bisa disterilkan menggunakan uap atau microwave.'
    }
  },
  {
    slug: 'set-mangkok-suction-silikon-mpasi',
    data: {
      name: 'set-mangkok-suction-silikon-mpasi',
      price: 85000,
      originalPrice: 115000,
      category: 'perlengkapan',
      ageGroup: '0-12m',
      badge: 'MPASI Ready',
      featured: false,
      stockStatus: 'ready',
      rating: '4.9',
      soldCount: 390,
      image: '/images/products/mangkok.svg',
      material: 'Food Grade Silicone Bebas BPA, PVC, Phthalate & Lead',
      summary: 'Mangkok makan bayi dengan daya rekat suction kuat ke meja makan anak plus sendok silikon lembut.',
      description: 'Membantu si kecil belajar makan mandiri tanpa khawatir mangkok terbalik atau terlempar. Desain melengkung di sisi mangkok memudahkan menyendok makanan sampai habis.'
    }
  },
  {
    slug: 'sepatu-prewalker-soft-sole-cubs',
    data: {
      name: 'sepatu-prewalker-soft-sole-cubs',
      price: 110000,
      originalPrice: 149000,
      category: 'aksesoris',
      ageGroup: '0-12m',
      badge: 'New Arrival',
      featured: false,
      stockStatus: 'ready',
      rating: '4.9',
      soldCount: 220,
      image: '/images/products/sepatu.svg',
      material: 'Vegan Leather & Sol Karet Anti-Slip Super Fleksibel',
      summary: 'Sepatu langkah pertama yang dirancang ahli untuk mendukung perkembangan lengkung telapak kaki bayi.',
      description: 'Bahan ringan bernapas dengan strap perekat lembut yang tidak mudah lepas saat bayi aktif merangkak atau mulai menapak berdiri.'
    }
  },
  {
    slug: 'topi-bucket-anak-reversible-sunhat',
    data: {
      name: 'topi-bucket-anak-reversible-sunhat',
      price: 49000,
      originalPrice: 69000,
      category: 'aksesoris',
      ageGroup: '1-3y',
      badge: 'UV 50+ Protection',
      featured: false,
      stockStatus: 'ready',
      rating: '4.8',
      soldCount: 340,
      image: '/images/products/topi.svg',
      material: '100% Breathable Cotton Twill',
      summary: 'Topi bucket anak lucu dengan perlindungan sinar matahari UV 50+ dan tali dagu yang nyaman.',
      description: 'Bisa dipakai bolak-balik dengan 2 motif menggemaskan. Ringan dan mudah dilipat ke dalam tas diaper tanpa merusak bentuk topi.'
    }
  }
];

for (const p of products) {
  const filePath = path.join(dir, `${p.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(p.data, null, 2));
  console.log(`Seeded: ${p.slug}.json`);
}
console.log('Seeding completed successfully!');

