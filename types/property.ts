export type PropertyType = 'Jual' | 'Sewa' | 'Kost';
export type PropertyStatus = 'Tersedia' | 'Terjual' | 'Disewa';
export type PricePeriod = 'Total' | 'Per Bulan' | 'Per Tahun';
export type City = 'Banjarmasin' | 'Banjarbaru' | 'Martapura';

export interface PropertyImage {
  id: string;
  property_id: string;
  image_url: string;
  is_primary: boolean;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  price_period?: PricePeriod;
  description: string;
  land_area: number;
  building_area: number;
  bedrooms: number;
  bathrooms: number;
  youtube_url?: string;
  city: City;
  district: string;
  created_at: string;
  images?: PropertyImage[];
  primary_image?: string;
}

export interface FilterState {
  type: string;
  city: string;
}
