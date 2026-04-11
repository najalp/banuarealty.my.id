import { Property } from '@/types/property';

export const WHATSAPP_NUMBER = '6281234567890'; // Ganti dengan nomor WA agen
export const AGENCY_NAME = 'Banua Realty';
export const AGENCY_EMAIL = 'banuaralty@gmail.com ';

export const DUMMY_PROPERTIES: Property[] = [
  {
    id: '1',
    slug: 'rumah-minimalis-type-45-banjarbaru',
    title: 'Rumah Minimalis Type 45 Lokasi Strategis Banjarbaru',
    type: 'Jual',
    status: 'Tersedia',
    price: 485_000_000,
    price_period: 'Total',
    description: `Rumah minimalis modern dengan desain elegan di kawasan strategis Banjarbaru. Dekat pusat perbelanjaan, sekolah internasional, dan fasilitas kesehatan terbaik.

Rumah ini dibangun dengan material berkualitas tinggi dan finishing rapi. Cocok untuk keluarga muda yang menginginkan hunian nyaman dengan akses mudah ke berbagai fasilitas kota.

Lingkungan perumahan yang aman dengan sistem keamanan 24 jam. Sudah tersedia jaringan PLN 1300VA, PDAM, dan akses internet fiber optik.`,
    land_area: 120,
    building_area: 75,
    bedrooms: 3,
    bathrooms: 2,
    youtube_url: undefined,
    city: 'Banjarbaru',
    district: 'Landasan Ulin',
    created_at: '2024-01-15T00:00:00Z',
    primary_image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    images: [
      { id: '1a', property_id: '1', image_url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80', is_primary: true },
      { id: '1b', property_id: '1', image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', is_primary: false },
      { id: '1c', property_id: '1', image_url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80', is_primary: false },
      { id: '1d', property_id: '1', image_url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', is_primary: false },
    ],
  },
  {
    id: '2',
    slug: 'rumah-hook-2-lantai-banjarmasin-selatan',
    title: 'Rumah Hook 2 Lantai Premium di Banjarmasin Selatan',
    type: 'Jual',
    status: 'Tersedia',
    price: 1_250_000_000,
    price_period: 'Total',
    description: `Rumah hook 2 lantai dengan posisi strategis di sudut jalan utama Banjarmasin Selatan. Lahan luas dengan potensi investasi tinggi.

Desain modern kontemporer dengan ruang tamu yang lapang, dapur semi-terbuka, dan taman depan yang asri. Semua kamar dilengkapi dengan lemari tanam built-in.

Sertifikat Hak Milik (SHM) sudah pecah dan atas nama. Siap proses KPR di semua bank rekanan.`,
    land_area: 240,
    building_area: 180,
    bedrooms: 4,
    bathrooms: 3,
    youtube_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    city: 'Banjarmasin',
    district: 'Banjarmasin Selatan',
    created_at: '2024-01-20T00:00:00Z',
    primary_image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    images: [
      { id: '2a', property_id: '2', image_url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', is_primary: true },
      { id: '2b', property_id: '2', image_url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', is_primary: false },
      { id: '2c', property_id: '2', image_url: 'https://images.unsplash.com/photo-1560440021-33f9b867899d?w=800&q=80', is_primary: false },
      { id: '2d', property_id: '2', image_url: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80', is_primary: false },
    ],
  },
  {
    id: '3',
    slug: 'kost-eksklusif-putri-banjarbaru',
    title: 'Kost Eksklusif Putri AC Full Furnished Banjarbaru',
    type: 'Kost',
    status: 'Tersedia',
    price: 1_500_000,
    price_period: 'Per Bulan',
    description: `Kost eksklusif khusus putri dengan fasilitas lengkap di lokasi premium Banjarbaru. Dekat kampus, rumah sakit, dan pusat perbelanjaan.

Setiap kamar dilengkapi AC, kasur spring bed, lemari, meja belajar, dan akses wifi berkecepatan tinggi. Dapur bersama modern dengan peralatan lengkap.

Tersedia parkir motor gratis, laundry kiloan di area kost, dan keamanan dengan CCTV 24 jam.`,
    land_area: 0,
    building_area: 20,
    bedrooms: 1,
    bathrooms: 1,
    youtube_url: undefined,
    city: 'Banjarbaru',
    district: 'Guntung Payung',
    created_at: '2024-02-01T00:00:00Z',
    primary_image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    images: [
      { id: '3a', property_id: '3', image_url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80', is_primary: true },
      { id: '3b', property_id: '3', image_url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', is_primary: false },
      { id: '3c', property_id: '3', image_url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', is_primary: false },
    ],
  },
  {
    id: '4',
    slug: 'ruko-strategis-martapura-kota',
    title: 'Ruko 2 Lantai Strategis Pusat Kota Martapura',
    type: 'Jual',
    status: 'Tersedia',
    price: 890_000_000,
    price_period: 'Total',
    description: `Ruko 2 lantai di lokasi prime pusat kota Martapura, cocok untuk usaha retail, kuliner, atau kantor profesional. Akses mudah dari jalan utama.

Kondisi bangunan sangat terawat, listrik 5500VA, air PDAM, dan sudah ada koneksi internet fiber. Lantai bawah sudah digunakan sebagai toko pakaian dan siap alih fungsi.

Posisi di area komersial dengan traffic kendaraan tinggi setiap hari. Potensi bisnis sangat besar.`,
    land_area: 80,
    building_area: 160,
    bedrooms: 0,
    bathrooms: 2,
    youtube_url: undefined,
    city: 'Martapura',
    district: 'Martapura Kota',
    created_at: '2024-02-10T00:00:00Z',
    primary_image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    images: [
      { id: '4a', property_id: '4', image_url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80', is_primary: true },
      { id: '4b', property_id: '4', image_url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', is_primary: false },
      { id: '4c', property_id: '4', image_url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', is_primary: false },
    ],
  },
  {
    id: '5',
    slug: 'rumah-sewa-full-furnished-banjarmasin-tengah',
    title: 'Rumah Sewa Full Furnished Nyaman Banjarmasin Tengah',
    type: 'Sewa',
    status: 'Tersedia',
    price: 3_500_000,
    price_period: 'Per Bulan',
    description: `Rumah sewa full furnished siap huni di pusat kota Banjarmasin. Semua perabot sudah tersedia, tinggal bawa baju dan masuk.

Dilengkapi dengan sofa, lemari pakaian, meja makan, peralatan dapur, dan mesin cuci. Internet fiber optik sudah terpasang.

Cocok untuk pasangan muda, keluarga kecil, atau profesional yang ditugaskan di Banjarmasin. Dekat kantor pemerintahan dan pusat bisnis.`,
    land_area: 100,
    building_area: 80,
    bedrooms: 3,
    bathrooms: 2,
    youtube_url: undefined,
    city: 'Banjarmasin',
    district: 'Banjarmasin Tengah',
    created_at: '2024-02-15T00:00:00Z',
    primary_image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    images: [
      { id: '5a', property_id: '5', image_url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80', is_primary: true },
      { id: '5b', property_id: '5', image_url: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80', is_primary: false },
      { id: '5c', property_id: '5', image_url: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&q=80', is_primary: false },
    ],
  },
  {
    id: '6',
    slug: 'tanah-kavling-perumahan-pelaihari',
    title: 'Tanah Kavling Siap Bangun Perumahan Premium Pelaihari',
    type: 'Jual',
    status: 'Tersedia',
    price: 320_000_000,
    price_period: 'Total',
    description: `Kavling tanah siap bangun di perumahan premium Pelaihari dengan akses jalan aspal lebar. Cocok untuk investasi atau dibangun rumah idaman.

Lokasi strategis, dekat dengan fasilitas umum. Sudah ada pagar batas kavling, akses listrik PLN, dan air bersih PDAM sampai lokasi.

SHM atas nama developer, bisa langsung balik nama. Cicilan KPR tanah tersedia di bank rekanan kami.`,
    land_area: 200,
    building_area: 0,
    bedrooms: 0,
    bathrooms: 0,
    youtube_url: undefined,
    city: 'Martapura',
    district: 'Sekumpul',
    created_at: '2024-03-01T00:00:00Z',
    primary_image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    images: [
      { id: '6a', property_id: '6', image_url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80', is_primary: true },
      { id: '6b', property_id: '6', image_url: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80', is_primary: false },
    ],
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return DUMMY_PROPERTIES.find((p) => p.slug === slug);
}

export function getFilteredProperties(type?: string, city?: string): Property[] {
  return DUMMY_PROPERTIES.filter((p) => {
    const typeMatch = !type || type === 'Semua' || p.type === type;
    const cityMatch = !city || city === 'Semua' || p.city === city;
    return typeMatch && cityMatch && p.status === 'Tersedia';
  });
}
