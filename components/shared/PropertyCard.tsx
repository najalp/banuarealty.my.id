import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath, Maximize2 } from 'lucide-react';
import { Property } from '@/types/property';
import { formatRupiahShort } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
}

const statusConfig = {
  Tersedia: { label: 'Tersedia', bg: '#059669', text: '#fff' },
  Terjual: { label: 'Terjual', bg: '#dc2626', text: '#fff' },
  Disewa: { label: 'Disewa', bg: '#d97706', text: '#fff' },
};

const typeConfig = {
  Jual: { label: 'Dijual', bg: 'rgba(5,150,105,0.9)', text: '#fff' },
  Sewa: { label: 'Disewa', bg: 'rgba(217,119,6,0.9)', text: '#fff' },
  Kost: { label: 'Kost', bg: 'rgba(99,102,241,0.9)', text: '#fff' },
};

export default function PropertyCard({ property }: PropertyCardProps) {
  const status = statusConfig[property.status];
  const type = typeConfig[property.type];
  const imageUrl = property.primary_image || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80';

  return (
    <article
      className="group bg-white rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
      style={{ borderColor: 'var(--color-border)' }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={imageUrl}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
        {/* Type badge */}
        <span
          className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-lg"
          style={{ backgroundColor: type.bg, color: type.text }}
        >
          {type.label}
        </span>
        {/* Status badge */}
        <span
          className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-lg"
          style={{ backgroundColor: status.bg, color: status.text }}
        >
          {status.label}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Price FIRST - adults look at price first */}
        <div className="mb-2">
          <span
            className="text-2xl font-bold"
            style={{ color: 'var(--color-primary)' }}
          >
            {formatRupiahShort(property.price)}
          </span>
          {property.price_period && property.price_period !== 'Total' && (
            <span
              className="text-sm font-medium ml-1"
              style={{ color: 'var(--color-text-muted)' }}
            >
              /{property.price_period === 'Per Bulan' ? 'bln' : 'thn'}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-base font-semibold leading-snug line-clamp-2 mb-2 flex-1"
          style={{ color: 'var(--color-text-main)' }}
        >
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 mb-3">
          <MapPin
            className="w-4 h-4 shrink-0"
            style={{ color: 'var(--color-primary)' }}
          />
          <span
            className="text-sm truncate"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {property.district}, {property.city}
          </span>
        </div>

        {/* Divider */}
        <hr style={{ borderColor: 'var(--color-border)' }} className="mb-3" />

        {/* Specs */}
        <div className="flex items-center gap-4 mb-4">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4" style={{ color: 'var(--color-text-muted)' }} />
              <span
                className="text-sm font-medium"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {property.bedrooms}
              </span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4" style={{ color: 'var(--color-text-muted)' }} />
              <span
                className="text-sm font-medium"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {property.bathrooms}
              </span>
            </div>
          )}
          {property.land_area > 0 && (
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-4 h-4" style={{ color: 'var(--color-text-muted)' }} />
              <span
                className="text-sm font-medium"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {property.land_area} m²
              </span>
            </div>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/properti/${property.slug}`}
          className="block w-full text-center py-2.5 text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90 active:scale-95"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}
