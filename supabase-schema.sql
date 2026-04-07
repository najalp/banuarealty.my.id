-- ============================================================
-- Banua Realty - Supabase Schema
-- Jalankan di: Supabase Dashboard > SQL Editor
-- ============================================================

-- Tabel utama properti
CREATE TABLE IF NOT EXISTS properties (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug        TEXT UNIQUE NOT NULL,
  title       TEXT NOT NULL,
  type        TEXT CHECK (type IN ('Jual', 'Sewa', 'Kost')) NOT NULL,
  status      TEXT CHECK (status IN ('Tersedia', 'Terjual', 'Disewa')) NOT NULL DEFAULT 'Tersedia',
  price       BIGINT NOT NULL,
  price_period TEXT CHECK (price_period IN ('Total', 'Per Bulan', 'Per Tahun')) DEFAULT 'Total',
  description TEXT,
  land_area   INT DEFAULT 0,
  building_area INT DEFAULT 0,
  bedrooms    INT DEFAULT 0,
  bathrooms   INT DEFAULT 0,
  youtube_url TEXT,
  city        TEXT NOT NULL,
  district    TEXT,
  primary_image TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Tabel gambar properti
CREATE TABLE IF NOT EXISTS property_images (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  image_url   TEXT NOT NULL,
  is_primary  BOOLEAN DEFAULT FALSE,
  sort_order  INT DEFAULT 0
);

-- Index untuk performa
CREATE INDEX IF NOT EXISTS idx_properties_slug ON properties(slug);
CREATE INDEX IF NOT EXISTS idx_properties_type ON properties(type);
CREATE INDEX IF NOT EXISTS idx_properties_city ON properties(city);
CREATE INDEX IF NOT EXISTS idx_properties_status ON properties(status);
CREATE INDEX IF NOT EXISTS idx_property_images_property_id ON property_images(property_id);

-- Enable Row Level Security (baca publik, tulis hanya admin)
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE property_images ENABLE ROW LEVEL SECURITY;

-- Policy: semua orang bisa baca
CREATE POLICY "Public read properties" ON properties
  FOR SELECT USING (true);

CREATE POLICY "Public read images" ON property_images
  FOR SELECT USING (true);
