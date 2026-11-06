import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    products: collection({
      label: 'Katalog Produk Anak',
      slugField: 'name',
      path: 'src/content/products/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Nama Produk' } }),
        price: fields.integer({
          label: 'Harga (Rp)',
          validation: { min: 0 },
          defaultValue: 99000,
        }),
        originalPrice: fields.integer({
          label: 'Harga Sebelum Diskon (Rp, Opsional)',
        }),
        category: fields.select({
          label: 'Kategori Produk',
          options: [
            { label: 'Pakaian & Setelan', value: 'pakaian' },
            { label: 'Mainan & Edukasi', value: 'mainan' },
            { label: 'Perlengkapan Bayi', value: 'perlengkapan' },
            { label: 'Sepatu & Aksesoris', value: 'aksesoris' },
          ],
          defaultValue: 'pakaian',
        }),
        ageGroup: fields.select({
          label: 'Kelompok Usia',
          options: [
            { label: '0 - 12 Bulan (Bayi/Newborn)', value: '0-12m' },
            { label: '1 - 3 Tahun (Balita/Toddler)', value: '1-3y' },
            { label: '4 - 7 Tahun (Anak-anak)', value: '4-7y' },
            { label: 'Semua Usia', value: 'all' },
          ],
          defaultValue: '1-3y',
        }),
        badge: fields.text({
          label: 'Badge / Label Promo (misal: Best Seller, New Arrival, Diskon 20%)',
          defaultValue: 'Best Seller',
        }),
        featured: fields.checkbox({
          label: 'Tampilkan di Halaman Utama (Featured Product)',
          defaultValue: true,
        }),
        stockStatus: fields.select({
          label: 'Status Ketersediaan',
          options: [
            { label: 'Ready Stock', value: 'ready' },
            { label: 'Pre-Order', value: 'preorder' },
            { label: 'Stok Terbatas', value: 'limited' },
          ],
          defaultValue: 'ready',
        }),
        rating: fields.text({
          label: 'Rating (misal: 4.9)',
          defaultValue: '4.9',
        }),
        soldCount: fields.integer({
          label: 'Jumlah Terjual (misal: 250)',
          defaultValue: 150,
        }),
        image: fields.image({
          label: 'Foto Produk',
          directory: 'public/images/products',
          publicPath: '/images/products/',
        }),
        material: fields.text({
          label: 'Material / Bahan Aman',
          defaultValue: '100% Katun Organik Bersertifikasi OEKO-TEX',
        }),
        summary: fields.text({
          label: 'Ringkasan Singkat (1-2 Kalimat)',
          multiline: true,
          defaultValue: 'Bahan lembut dan sejuk, sangat aman untuk kulit sensitif si kecil.',
        }),
        description: fields.text({
          label: 'Deskripsi Lengkap Produk',
          multiline: true,
          defaultValue: 'Didesain khusus untuk memberikan kenyamanan maksimal sepanjang hari saat si kecil aktif bermain maupun beristirahat. Menggunakan pewarna alami tanpa bahan kimia berbahaya.',
        }),
      },
    }),
  },
});

