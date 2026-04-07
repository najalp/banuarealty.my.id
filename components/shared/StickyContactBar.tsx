'use client';

import { MessageCircle } from 'lucide-react';
import { formatRupiahShort } from '@/lib/utils';

interface StickyContactBarProps {
  price: number;
  pricePeriod?: string;
  propertyTitle: string;
  propertySlug: string;
  waNumber: string;
}

export default function StickyContactBar({
  price,
  pricePeriod,
  propertyTitle,
  propertySlug,
  waNumber,
}: StickyContactBarProps) {
  const message = encodeURIComponent(
    `Halo Banua Realty, saya tertarik dengan properti: ${propertyTitle} (${propertySlug}). Apakah masih tersedia?`
  );
  const waUrl = `https://wa.me/${waNumber}?text=${message}`;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-white border-t shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4">
      <div className="flex items-center justify-between gap-3">
        {/* Price */}
        <div>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Harga</p>
          <p className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>
            {formatRupiahShort(price)}
            {pricePeriod && pricePeriod !== 'Total' && (
              <span className="text-sm font-medium">
                /{pricePeriod === 'Per Bulan' ? 'bln' : 'thn'}
              </span>
            )}
          </p>
        </div>

        {/* CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 text-sm font-bold text-white rounded-xl transition-all hover:opacity-90 active:scale-95 shrink-0"
          style={{ backgroundColor: '#25D366', minHeight: '48px' }}
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          Chat Agen (WA)
        </a>
      </div>
    </div>
  );
}
