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
        showWhatsappButton: fields.checkbox({
          label: 'Tampilkan Tombol WhatsApp',
          description: 'Centang untuk menampilkan tombol pesan WhatsApp di halaman produk',
          defaultValue: true,
        }),
        whatsappButtonText: fields.text({
          label: 'Teks Tombol WhatsApp',
          defaultValue: 'Pesan via WhatsApp Sekarang',
        }),
        whatsappLink: fields.text({
          label: 'Link / Nomor WhatsApp Custom (Opsional)',
          description: 'Kosongkan jika ingin memakai nomor CS default (+62 812-3456-7890) & pesan otomatis',
        }),
        marketplaceButtons: fields.array(
          fields.object({
            platform: fields.select({
              label: 'Pilihan Platform / Toko Online',
              options: [
                { label: 'Shopee', value: 'shopee' },
                { label: 'Tokopedia', value: 'tokopedia' },
                { label: 'TikTok Shop', value: 'tiktok' },
                { label: 'Lazada', value: 'lazada' },
                { label: 'Blibli', value: 'blibli' },
                { label: 'Website / Link Toko Lainnya', value: 'custom' },
              ],
              defaultValue: 'shopee',
            }),
            label: fields.text({
              label: 'Teks Tombol',
              description: 'Contoh: Beli di Shopee, Official Store Tokopedia, dll',
              defaultValue: 'Beli di Shopee',
            }),
            url: fields.text({
              label: 'Link / URL Produk di Online Shop',
              description: 'Masukkan link toko online produk (contoh: https://shopee.co.id/...)',
              defaultValue: 'https://',
            }),
          }),
          {
            label: 'Tombol Online Shop (Shopee, Tokopedia, TikTok, Lazada, dll)',
            itemLabel: (props) => {
              const platform = props.fields.platform.value || 'Toko';
              const label = props.fields.label.value || '';
              return `${platform.toUpperCase()}: ${label}`;
            },
          }
        ),
      },
    }),
  },
  singletons: {
    jumbotron: singleton({
      label: 'Jumbotron',
      path: 'src/content/jumbotron',
      format: { data: 'json' },
      schema: {
        slides: fields.array(
          fields.object({
            badge: fields.text({
              label: 'Badge Pill (Atas)',
              defaultValue: 'Koleksi Baju Ceria • Usia 3-8 Tahun',
            }),
            themeColor: fields.select({
              label: 'Warna Tema Pastel Background',
              options: [
                { label: 'Hijau Mint (Mint Pastel)', value: 'mint' },
                { label: 'Kuning Butter (Butter Pastel)', value: 'butter' },
                { label: 'Merah Muda (Blossom Pink)', value: 'pink' },
                { label: 'Biru Langit (Sky Blue)', value: 'sky' },
                { label: 'Ungu Lavender (Lavender Pastel)', value: 'lavender' },
                { label: 'Oranye Peach (Peach Pastel)', value: 'peach' },
              ],
              defaultValue: 'mint',
            }),
            title: fields.text({
              label: 'Judul Utama (Baris 1)',
              defaultValue: 'Kaos Katun Combed Adem & Nyaman untuk',
            }),
            highlightText: fields.text({
              label: 'Teks Sorotan Berwarna (Baris 2)',
              defaultValue: 'Petualangan Aktif Si Kecil',
            }),
            description: fields.text({
              label: 'Deskripsi Singkat Jumbotron',
              multiline: true,
              defaultValue:
                '100% Katun Combed 24s berpori adem, sablon ramah anak yang tidak mudah retak dicuci mesin cuci, serta leher tagless bebas gatal.',
            }),
            primaryBtnText: fields.text({
              label: 'Teks Tombol Utama',
              defaultValue: 'Lihat Koleksi Baju',
            }),
            primaryBtnHref: fields.text({
              label: 'Link Tombol Utama',
              defaultValue: '/products',
            }),
            secondaryBtnText: fields.text({
              label: 'Teks Tombol Konsultasi (WhatsApp)',
              defaultValue: 'Konsultasi Size Chart',
            }),
            secondaryBtnHref: fields.text({
              label: 'Link Tombol Konsultasi (WhatsApp)',
              defaultValue: 'https://wa.me/6281234567890?text=Halo%20CUBS,%20saya%20mau%20tanya%20size%20chart%20baju%20anak',
            }),
            image: fields.image({
              label: 'Foto Gambar Besar Jumbotron',
              directory: 'public/images/hero',
              publicPath: '/images/hero/',
            }),
            imageAlt: fields.text({
              label: 'Alt Text Foto',
              defaultValue: 'Anak ceria memakai baju CUBS Kids',
            }),
            sizeBadgeText: fields.text({
              label: 'Badge Ukuran (Pojok Kiri Atas Foto)',
              defaultValue: 'Size 4 • 6 • 8 (3-8 Thn)',
            }),
            productLabel: fields.text({
              label: 'Nama Koleksi / Produk (Pojok Bawah Foto)',
              defaultValue: 'Koleksi Baju Anak Ceria',
            }),
            ratingText: fields.text({
              label: 'Rating Produk',
              defaultValue: '4.9/5',
            }),
            tags: fields.array(
              fields.object({
                icon: fields.text({
                  label: 'Icon / Emoji (misal: 🦖, 🌬️, ⭐, 🏷️)',
                  defaultValue: '✨',
                }),
                label: fields.text({
                  label: 'Teks Fitur Keunggulan',
                  defaultValue: 'Bahan Adem',
                }),
              }),
              {
                label: 'Pills Fitur Keunggulan (Bawah Tombol)',
                itemLabel: (props) => `${props.fields.icon.value || '✨'} ${props.fields.label.value || 'Fitur'}`,
              }
            ),
          }),
          {
            label: 'Daftar Slide Jumbotron (Bisa Tambah, Ubah, & Hapus Slide)',
            itemLabel: (props) => props.fields.title.value || props.fields.highlightText.value || 'Slide Jumbotron Baru',
          }
        ),
      },
    }),
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
