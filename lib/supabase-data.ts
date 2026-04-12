import { supabase } from './supabase';
import { Property, PropertyImage } from '@/types/property';
import { DUMMY_PROPERTIES, getFilteredProperties, getPropertyBySlug } from './dummy-data';

// Tipe raw dari Supabase (property_images sebagai nested array)
interface RawProperty {
  id: string;
  slug: string;
  title: string;
  type: string;
  status: string;
  price: number;
  price_period: string | null;
  description: string;
  land_area: number;
  building_area: number;
  bedrooms: number;
  bathrooms: number;
  youtube_url: string | null;
  city: string;
  district: string;
  primary_image: string | null;
  created_at: string;
  property_images: { id: string; image_url: string; is_primary: boolean }[];
}

function mapToProperty(raw: RawProperty): Property {
  const images: PropertyImage[] = (raw.property_images || []).map((img) => ({
    id: img.id,
    property_id: raw.id,
    image_url: img.image_url,
    is_primary: img.is_primary,
  }));

  return {
    id: raw.id,
    slug: raw.slug,
    title: raw.title,
    type: raw.type as Property['type'],
    status: raw.status as Property['status'],
    price: raw.price,
    price_period: (raw.price_period ?? 'Total') as Property['price_period'],
    description: raw.description,
    land_area: raw.land_area,
    building_area: raw.building_area,
    bedrooms: raw.bedrooms,
    bathrooms: raw.bathrooms,
    youtube_url: raw.youtube_url ?? undefined,
    city: raw.city as Property['city'],
    district: raw.district,
    primary_image: raw.primary_image ?? undefined,
    created_at: raw.created_at,
    images,
  };
}

// Ambil semua properti (dengan filter opsional)
export async function getPropertiesFromDB(
  type?: string,
  city?: string
): Promise<Property[]> {
  let query = supabase
    .from('properties')
    .select('*, property_images(id, image_url, is_primary)')
    .eq('status', 'Tersedia')
    .order('created_at', { ascending: false });

  if (type && type !== 'Semua') {
    query = query.eq('type', type);
  }
  if (city && city !== 'Semua') {
    query = query.eq('city', city);
  }

  const { data, error } = await query;

  if (error || !data || data.length === 0) {
    if (error) console.error('Error fetching properties, using dummy data:', error.message);
    return getFilteredProperties(type, city);
  }

  return (data as RawProperty[]).map(mapToProperty);
}

// Ambil satu properti berdasarkan slug
export async function getPropertyBySlugFromDB(
  slug: string
): Promise<Property | null> {
  const { data, error } = await supabase
    .from('properties')
    .select('*, property_images(id, image_url, is_primary)')
    .eq('slug', slug)
    .single();

  if (error || !data) {
    if (error) console.error('Error fetching property by slug, using dummy data:', error.message);
    return getPropertyBySlug(slug) || null;
  }

  return mapToProperty(data as RawProperty);
}

// Ambil semua slug untuk generateStaticParams
export async function getAllSlugsFromDB(): Promise<{ slug: string }[]> {
  const { data, error } = await supabase
    .from('properties')
    .select('slug');

  if (error || !data || data.length === 0) {
    return DUMMY_PROPERTIES.map(p => ({ slug: p.slug }));
  }
  return data as { slug: string }[];
}
