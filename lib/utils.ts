import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format angka ke format Rupiah Indonesia
 */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format Rupiah singkat (misal: Rp 1,2 M atau Rp 850 Jt)
 */
export function formatRupiahShort(amount: number): string {
  if (amount >= 1_000_000_000) {
    const val = amount / 1_000_000_000;
    return `Rp ${val % 1 === 0 ? val : val.toFixed(1)} M`;
  }
  if (amount >= 1_000_000) {
    const val = amount / 1_000_000;
    return `Rp ${val % 1 === 0 ? val : val.toFixed(0)} Jt`;
  }
  return formatRupiah(amount);
}

/**
 * Generate WhatsApp URL untuk menghubungi agen
 */
export function generateWhatsAppUrl(
  phone: string,
  propertyTitle: string,
  propertySlug: string
): string {
  const message = encodeURIComponent(
    `Halo Banua Realty, saya tertarik dengan properti ${propertyTitle} - ${propertySlug}. Apakah masih tersedia?`
  );
  return `https://wa.me/${phone}?text=${message}`;
}

/**
 * Truncate text ke N kata
 */
export function truncateWords(text: string, wordCount: number): string {
  const words = text.split(' ');
  if (words.length <= wordCount) return text;
  return words.slice(0, wordCount).join(' ') + '...';
}
