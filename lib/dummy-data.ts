import { Property } from '@/types/property';

export const WHATSAPP_NUMBER = '6283844094664'; // Ganti dengan nomor WA agen
export const AGENCY_NAME = 'Banua Realty';
export const AGENCY_EMAIL = 'banuarealty26@gmail.com';

export const DUMMY_PROPERTIES: Property[] = [];

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
