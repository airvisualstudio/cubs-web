import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    products: collection({
      label: 'Katalog Baju Anak (Usia 3-8 Tahun)',
      slugField: 'name',
      path: 'src/content/products/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Nama Baju Anak' } }),
        price: fields.integer({
          label: 'Harga (Rp)',
          validation: { min: 0 },
          defaultValue: 79000,
        }),
        originalPrice: fields.integer({
          label: 'Harga Sebelum Diskon (Rp, Opsional)',
        }),
        category: fields.select({
          label: 'Kategori Pakaian Anak',
          options: [
            { label: 'Kaos & Atasan', value: 'atasan' },
            { label: 'Setelan & Piyama', value: 'setelan' },
            { label: 'Dress & Terusan', value: 'dress' },
            { label: 'Jaket & Celana', value: 'bawahan-outer' },
          ],
          defaultValue: 'atasan',
        }),
        ageGroup: fields.select({
          label: 'Rekomendasi Usia',
          options: [
            { label: '3 - 4 Tahun (Size 4)', value: '3-4y' },
            { label: '5 - 6 Tahun (Size 6)', value: '5-6y' },
            { label: '7 - 8 Tahun (Size 8)', value: '7-8y' },
            { label: 'Semua Ukuran (3-8 Tahun)', value: '3-8y' },
          ],
          defaultValue: '3-4y',
        }),
        badge: fields.text({
          label: 'Badge / Promo (misal: Best Seller, New Arrival, Diskon 25%)',
          defaultValue: 'Best Seller',
        }),
        featured: fields.checkbox({
          label: 'Tampilkan di Halaman Utama (Featured)',
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
          label: 'Jumlah Terjual',
          defaultValue: 180,
        }),
        image: fields.image({
          label: 'Foto Utama Baju (Cover)',
          directory: 'public/images/products',
          publicPath: '/images/products/',
        }),
        images: fields.array(
          fields.image({
            label: 'Foto Produk',
            directory: 'public/images/products',
            publicPath: '/images/products/',
          }),
          {
            label: 'Galeri Foto Produk (Upload hingga 12 Foto)',
            itemLabel: (props) => (props.value ? `Foto: ${props.value}` : 'Upload Foto Baru'),
            validation: { length: { max: 12 } },
          }
        ),
        material: fields.text({
          label: 'Bahan Kain (misal: 100% Katun Combed 24s / Katun Bambu)',
          defaultValue: '100% Katun Combed 24s Lembut & Adem',
        }),
        summary: fields.text({
          label: 'Ringkasan Singkat Baju',
          multiline: true,
          defaultValue: 'Bahan katun sejuk, menyerap keringat maksimal saat anak lari-larian dan bermain aktif.',
        }),
        description: fields.text({
          label: 'Deskripsi Lengkap & Panduan Ukuran',
          multiline: true,
          defaultValue: 'Didesain khusus untuk anak usia 3-8 tahun yang sedang dalam masa aktif bergerak. Menggunakan jahitan rantai ekstra kuat, sablon ramah lingkungan bebas racun, dan tanpa label leher gatal (tagless).',
        }),
      },
    }),
  },
  singletons: {
    faq: singleton({
      label: 'FAQ (Tanya Jawab Baju Anak)',
      path: 'src/content/faq',
      format: { data: 'json' },
      schema: {
        badge: fields.text({
          label: 'Badge Header',
          defaultValue: 'Tanya Jawab Seputar Baju Anak',
        }),
        title: fields.text({
          label: 'Judul Utama FAQ',
          defaultValue: 'Kerap Ditanyakan Bunda & Ayah',
        }),
        description: fields.text({
          label: 'Deskripsi Singkat FAQ',
          multiline: true,
          defaultValue:
            'Informasi seputar size chart, ketahanan bahan katun, dan kemudahan garansi tukar ukuran.',
        }),
        items: fields.array(
          fields.object({
            question: fields.text({
              label: 'Pertanyaan',
            }),
            answer: fields.text({
              label: 'Jawaban',
              multiline: true,
            }),
          }),
          {
            label: 'Daftar Pertanyaan & Jawaban',
            itemLabel: (props) => props.fields.question.value || 'Pertanyaan Baru',
          }
        ),
      },
    }),
  },
});
