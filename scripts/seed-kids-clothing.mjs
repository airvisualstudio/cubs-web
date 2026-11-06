import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'content', 'products');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
} else {
  // Clear old baby/infant product json files
  const existing = fs.readdirSync(dir);
  for (const f of existing) {
    if (f.endsWith('.json')) {
      fs.unlinkSync(path.join(dir, f));
    }
  }
}

const products = [
  {
    slug: 'kaos-katun-oversized-dino-adventure',
    data: {
      name: 'kaos-katun-oversized-dino-adventure',
      price: 69000,
      originalPrice: 89000,
      category: 'atasan',
      ageGroup: '3-4y',
      badge: 'Best Seller',
      featured: true,
      stockStatus: 'ready',
      rating: '4.9',
      soldCount: 520,
      image: '/images/products/kaos-dino.svg',
      material: '100% Combed Cotton 24s Breathable & Anti-Bakteri',
      summary: 'Kaos oversized santai anak usia 3-8 tahun dengan sablon dino ramah lingkungan yang tidak mudah retak dan super adem.',
      description: 'Potongan santai memberi kebebasan si kecil untuk aktif berlari dan bermain seharian. Kerah leher rib elastis tidak mudah melar dicuci berulang kali, serta bebas label leher gatal (tagless).'
    }
  },
  {
    slug: 'setelan-piyama-katun-bambu-cubby-star',
    data: {
      name: 'setelan-piyama-katun-bambu-cubby-star',
      price: 95000,
      originalPrice: 129000,
      category: 'setelan',
      ageGroup: '5-6y',
      badge: 'Tidur Pulas',
      featured: true,
      stockStatus: 'ready',
      rating: '5.0',
      soldCount: 680,
      image: '/images/products/piyama-star.svg',
      material: '100% Organic Bamboo Cotton (OEKO-TEX Standard 100)',
      summary: 'Setelan piyama anak katun bambu yang sejuk alami di malam hari, lembut di kulit sensitif, dan stretch.',
      description: 'Didesain khusus untuk anak usia 3-8 tahun dengan karet pinggang elastis lembut yang tidak meninggalkan bekas merah di perut. Kain bambu memiliki pori-pori mikro yang menyejukkan suhu tubuh saat tidur.'
    }
  },
  {
    slug: 'dress-katun-summer-floral-breeze',
    data: {
      name: 'dress-katun-summer-floral-breeze',
      price: 89000,
      originalPrice: 119000,
      category: 'dress',
      ageGroup: '3-4y',
      badge: 'New Arrival',
      featured: true,
      stockStatus: 'ready',
      rating: '4.9',
      soldCount: 340,
      image: '/images/products/dress-floral.svg',
      material: '100% Premium Cotton Rayon Twill Ultra Soft',
      summary: 'Gaun santai anak perempuan motif bunga pastel dengan aksen pita manis dan potongan mengembang ceria.',
      description: 'Sangat cocok untuk jalan-jalan santai, acara ulang tahun, maupun bepergian di akhir pekan. Bahannya jatuh anggun dan menyerap keringat anak yang ceria bergerak.'
    }
  },
  {
    slug: 'jaket-hoodie-zipper-cubs-active',
    data: {
      name: 'jaket-hoodie-zipper-cubs-active',
      price: 125000,
      originalPrice: 165000,
      category: 'bawahan-outer',
      ageGroup: '7-8y',
      badge: 'Paling Dicari',
      featured: true,
      stockStatus: 'ready',
      rating: '4.9',
      soldCount: 410,
      image: '/images/products/hoodie-zipper.svg',
      material: 'Baby Terry Cotton Premium (Hangat, Lembut & Tidak Berat)',
      summary: 'Jaket hoodie ritsleting anak dengan saku kanguru ganda dan tudung kepala untuk melindungi si kecil saat cuaca dingin.',
      description: 'Ritsleting YKK halus anti macet dengan pelindung kain di bagian dagu agar leher anak tidak terjepit. Bagian dalam lembut berpori yang tidak membuat gerah.'
    }
  },
  {
    slug: 'kaos-polo-shirt-anak-casual-stripes',
    data: {
      name: 'kaos-polo-shirt-anak-casual-stripes',
      price: 75000,
      originalPrice: 95000,
      category: 'atasan',
      ageGroup: '5-6y',
      badge: 'Gaya Rapi',
      featured: false,
      stockStatus: 'ready',
      rating: '4.8',
      soldCount: 290,
      image: '/images/products/polo-stripes.svg',
      material: 'Cotton Pique Soft Knit Breathable',
      summary: 'Baju polo berkerah rapi namun tetap santai, cocok untuk acara keluarga, les, maupun bepergian.',
      description: 'Kain rajut berpori menjaga sirkulasi udara optimal. Kancing depan yang kuat dan kerah tegak yang tetap rapi meski sudah sering dicuci.'
    }
  },
  {
    slug: 'setelan-baju-main-summer-waffle-set',
    data: {
      name: 'setelan-baju-main-summer-waffle-set',
      price: 85000,
      originalPrice: 110000,
      category: 'setelan',
      ageGroup: '3-4y',
      badge: 'Super Nyaman',
      featured: false,
      stockStatus: 'ready',
      rating: '4.9',
      soldCount: 450,
      image: '/images/products/setelan-waffle.svg',
      material: '100% Cotton Waffle Knit Texture',
      summary: 'Setelan atasan dan celana pendek bertekstur waffle unik yang trendi, sejuk, dan tidak perlu disetrika.',
      description: 'Pilihan favorit anak untuk bermain di rumah dan taman. Celana dilengkapi tali serut aktif dan saku fungsional untuk menyimpan mainan kecil si anak.'
    }
  },
  {
    slug: 'celana-jogger-anak-cozy-stretch',
    data: {
      name: 'celana-jogger-anak-cozy-stretch',
      price: 79000,
      originalPrice: 99000,
      category: 'bawahan-outer',
      ageGroup: '7-8y',
      badge: 'Tahan Banting',
      featured: false,
      stockStatus: 'ready',
      rating: '4.9',
      soldCount: 380,
      image: '/images/products/jogger-pants.svg',
      material: 'Cotton Twill Stretch 4-Way Elastis',
      summary: 'Celana panjang jogger anak dengan rib pergelangan kaki elastis, sangat lentur saat anak melompat dan memanjat.',
      description: 'Lutut dengan jahitan ganda agar tidak mudah robek saat bermain aktif. Pinggang full karet yang mudah dipakai mandiri oleh anak usia sekolah.'
    }
  },
  {
    slug: 'dress-katun-twirl-rainbow-cheerful',
    data: {
      name: 'dress-katun-twirl-rainbow-cheerful',
      price: 92000,
      originalPrice: 125000,
      category: 'dress',
      ageGroup: '5-6y',
      badge: 'Bisa Berputar',
      featured: false,
      stockStatus: 'ready',
      rating: '4.8',
      soldCount: 310,
      image: '/images/products/dress-rainbow.svg',
      material: '100% Katun Jepang Halus & Ringan',
      summary: 'Dress anak dengan rok A-line bertingkat warna pelangi yang mekar saat berputar, favorit anak perempuan.',
      description: 'Warna pelangi cerah menggunakan pewarna yang tidak luntur saat dicuci. Potongan longgar yang tidak membatasi ruang gerak anak yang aktif.'
    }
  }
];

for (const p of products) {
  const filePath = path.join(dir, `${p.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(p.data, null, 2));
  console.log(`Seeded: ${p.slug}.json`);
}
console.log('Kids clothing products seeded successfully!');

