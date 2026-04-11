// Script untuk seed data dummy ke Supabase
// Jalankan: node scripts/seed-supabase.mjs

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://psawllijefwsczbipyfe.supabase.co';
const SUPABASE_KEY = 'sb_publishable_gq_zr9T5RcMOvy-PMDhQCw_tCjkiQUo';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const properties = [
  {
    slug: 'rumah-minimalis-type-45-banjarbaru',
    title: 'Rumah Minimalis Type 45 Lokasi Strategis Banjarbaru',
    type: 'Jual',
    status: 'Tersedia',
    price: 485000000,
    price_period: 'Total',
    description: `Rumah minimalis modern dengan desain elegan di kawasan strategis Banjarbaru. Dekat pusat perbelanjaan, sekolah internasional, dan fasilitas kesehatan terbaik.\n\nRumah ini dibangun dengan material berkualitas tinggi dan finishing rapi. Cocok untuk keluarga muda yang menginginkan hunian nyaman dengan akses mudah ke berbagai fasilitas kota.\n\nLingkungan perumahan yang aman dengan sistem keamanan 24 jam. Sudah tersedia jaringan PLN 1300VA, PDAM, dan akses internet fiber optik.`,
    land_area: 120,
    building_area: 75,
    bedrooms: 3,
    bathrooms: 2,
    youtube_url: null,
    city: 'Banjarbaru',
    district: 'Landasan Ulin',
    primary_image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    images: [
      { image_url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80', is_primary: true, sort_order: 0 },
      { image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', is_primary: false, sort_order: 1 },
      { image_url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80', is_primary: false, sort_order: 2 },
      { image_url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', is_primary: false, sort_order: 3 },
    ],
  },
  {
    slug: 'rumah-hook-2-lantai-banjarmasin-selatan',
    title: 'Rumah Hook 2 Lantai Premium di Banjarmasin Selatan',
    type: 'Jual',
    status: 'Tersedia',
    price: 1250000000,
    price_period: 'Total',
    description: `Rumah hook 2 lantai dengan posisi strategis di sudut jalan utama Banjarmasin Selatan. Lahan luas dengan potensi investasi tinggi.\n\nDesain modern kontemporer dengan ruang tamu yang lapang, dapur semi-terbuka, dan taman depan yang asri. Semua kamar dilengkapi dengan lemari tanam built-in.\n\nSertifikat Hak Milik (SHM) sudah pecah dan atas nama. Siap proses KPR di semua bank rekanan.`,
    land_area: 240,
    building_area: 180,
    bedrooms: 4,
    bathrooms: 3,
    youtube_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    city: 'Banjarmasin',
    district: 'Banjarmasin Selatan',
    primary_image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    images: [
      { image_url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', is_primary: true, sort_order: 0 },
      { image_url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', is_primary: false, sort_order: 1 },
      { image_url: 'https://images.unsplash.com/photo-1560440021-33f9b867899d?w=800&q=80', is_primary: false, sort_order: 2 },
      { image_url: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80', is_primary: false, sort_order: 3 },
    ],
  },
  {
    slug: 'kost-eksklusif-putri-banjarbaru',
    title: 'Kost Eksklusif Putri AC Full Furnished Banjarbaru',
    type: 'Kost',
    status: 'Tersedia',
    price: 1500000,
    price_period: 'Per Bulan',
    description: `Kost eksklusif khusus putri dengan fasilitas lengkap di lokasi premium Banjarbaru. Dekat kampus, rumah sakit, dan pusat perbelanjaan.\n\nSetiap kamar dilengkapi AC, kasur spring bed, lemari, meja belajar, dan akses wifi berkecepatan tinggi. Dapur bersama modern dengan peralatan lengkap.\n\nTersedia parkir motor gratis, laundry kiloan di area kost, dan keamanan dengan CCTV 24 jam.`,
    land_area: 0,
    building_area: 20,
    bedrooms: 1,
    bathrooms: 1,
    youtube_url: null,
    city: 'Banjarbaru',
    district: 'Guntung Payung',
    primary_image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    images: [
      { image_url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80', is_primary: true, sort_order: 0 },
      { image_url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', is_primary: false, sort_order: 1 },
      { image_url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80', is_primary: false, sort_order: 2 },
    ],
  },
  {
    slug: 'ruko-strategis-martapura-kota',
    title: 'Ruko 2 Lantai Strategis Pusat Kota Martapura',
    type: 'Jual',
    status: 'Tersedia',
    price: 890000000,
    price_period: 'Total',
    description: `Ruko 2 lantai di lokasi prime pusat kota Martapura, cocok untuk usaha retail, kuliner, atau kantor profesional. Akses mudah dari jalan utama.\n\nKondisi bangunan sangat terawat, listrik 5500VA, air PDAM, dan sudah ada koneksi internet fiber. Lantai bawah sudah digunakan sebagai toko pakaian dan siap alih fungsi.\n\nPosisi di area komersial dengan traffic kendaraan tinggi setiap hari. Potensi bisnis sangat besar.`,
    land_area: 80,
    building_area: 160,
    bedrooms: 0,
    bathrooms: 2,
    youtube_url: null,
    city: 'Martapura',
    district: 'Martapura Kota',
    primary_image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    images: [
      { image_url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80', is_primary: true, sort_order: 0 },
      { image_url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', is_primary: false, sort_order: 1 },
      { image_url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', is_primary: false, sort_order: 2 },
    ],
  },
  {
    slug: 'rumah-sewa-full-furnished-banjarmasin-tengah',
    title: 'Rumah Sewa Full Furnished Nyaman Banjarmasin Tengah',
    type: 'Sewa',
    status: 'Tersedia',
    price: 3500000,
    price_period: 'Per Bulan',
    description: `Rumah sewa full furnished siap huni di pusat kota Banjarmasin. Semua perabot sudah tersedia, tinggal bawa baju dan masuk.\n\nDilengkapi dengan sofa, lemari pakaian, meja makan, peralatan dapur, dan mesin cuci. Internet fiber optik sudah terpasang.\n\nCocok untuk pasangan muda, keluarga kecil, atau profesional yang ditugaskan di Banjarmasin. Dekat kantor pemerintahan dan pusat bisnis.`,
    land_area: 100,
    building_area: 80,
    bedrooms: 3,
    bathrooms: 2,
    youtube_url: null,
    city: 'Banjarmasin',
    district: 'Banjarmasin Tengah',
    primary_image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    images: [
      { image_url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80', is_primary: true, sort_order: 0 },
      { image_url: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80', is_primary: false, sort_order: 1 },
      { image_url: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&q=80', is_primary: false, sort_order: 2 },
    ],
  },
  {
    slug: 'tanah-kavling-perumahan-pelaihari',
    title: 'Tanah Kavling Siap Bangun Perumahan Premium Pelaihari',
    type: 'Jual',
    status: 'Tersedia',
    price: 320000000,
    price_period: 'Total',
    description: `Kavling tanah siap bangun di perumahan premium Pelaihari dengan akses jalan aspal lebar. Cocok untuk investasi atau dibangun rumah idaman.\n\nLokasi strategis, dekat dengan fasilitas umum. Sudah ada pagar batas kavling, akses listrik PLN, dan air bersih PDAM sampai lokasi.\n\nSHM atas nama developer, bisa langsung balik nama. Cicilan KPR tanah tersedia di bank rekanan kami.`,
    land_area: 200,
    building_area: 0,
    bedrooms: 0,
    bathrooms: 0,
    youtube_url: null,
    city: 'Martapura',
    district: 'Sekumpul',
    primary_image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    images: [
      { image_url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80', is_primary: true, sort_order: 0 },
      { image_url: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80', is_primary: false, sort_order: 1 },
    ],
  },
];

async function seed() {
  console.log('🚀 Mulai seed data ke Supabase...\n');

  for (const prop of properties) {
    const { images, ...propertyData } = prop;

    // Insert properti
    const { data: inserted, error: propError } = await supabase
      .from('properties')
      .insert(propertyData)
      .select('id')
      .single();

    if (propError) {
      console.error(`❌ Gagal insert "${prop.title}":`, propError.message);
      continue;
    }

    console.log(`✅ Properti berhasil: "${prop.title}" [${inserted.id}]`);

    // Insert gambar
    const imageRows = images.map((img) => ({
      ...img,
      property_id: inserted.id,
    }));

    const { error: imgError } = await supabase
      .from('property_images')
      .insert(imageRows);

    if (imgError) {
      console.error(`   ⚠️  Gagal insert gambar:`, imgError.message);
    } else {
      console.log(`   📷 ${images.length} gambar berhasil ditambahkan`);
    }
  }

  console.log('\n🎉 Selesai! Semua data sudah ada di Supabase.');
}

seed();
