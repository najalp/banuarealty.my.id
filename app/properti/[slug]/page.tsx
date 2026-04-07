import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin, Maximize2, Building2, Bed, Bath,
  ArrowLeft, MessageCircle
} from 'lucide-react';

import { WHATSAPP_NUMBER } from '@/lib/dummy-data';
import { getPropertyBySlugFromDB } from '@/lib/supabase-data';
import { formatRupiah, formatRupiahShort, generateWhatsAppUrl, truncateWords } from '@/lib/utils';
import ImageGallery from '@/components/shared/ImageGallery';
import VideoEmbed from '@/components/shared/VideoEmbed';
import TrustSection from '@/components/shared/TrustSection';
import StickyContactBar from '@/components/shared/StickyContactBar';
import ShareButton from '@/components/shared/ShareButton';

// Fully dynamic — fetch dari Supabase setiap request
export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

// ============================================================
// SEO - generateMetadata untuk Open Graph (WhatsApp/FB share)
// ============================================================
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlugFromDB(slug);

  if (!property) {
    return { title: 'Properti Tidak Ditemukan | Banua Realty' };
  }

  const description = truncateWords(property.description, 30);
  const imageUrl = property.primary_image || '';

  return {
    title: `${property.title} | Banua Realty`,
    description,
    openGraph: {
      title: `${property.title} - ${formatRupiahShort(property.price)}`,
      description,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: property.title }] : [],
      type: 'website',
      locale: 'id_ID',
    },
    twitter: {
      card: 'summary_large_image',
      title: property.title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}



// ============================================================
// HALAMAN DETAIL
// ============================================================
export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = await getPropertyBySlugFromDB(slug);

  if (!property) notFound();

  const waUrl = generateWhatsAppUrl(WHATSAPP_NUMBER, property.title, property.slug);

  const statusConfig = {
    Tersedia: { label: 'Tersedia', bg: '#dcfce7', text: '#16a34a', border: '#bbf7d0' },
    Terjual: { label: 'Terjual', bg: '#fee2e2', text: '#dc2626', border: '#fecaca' },
    Disewa: { label: 'Disewa', bg: '#fef3c7', text: '#d97706', border: '#fde68a' },
  };
  const status = statusConfig[property.status];

  const specs = [
    property.land_area > 0 && { icon: Maximize2, label: 'Luas Tanah', value: `${property.land_area} m²` },
    property.building_area > 0 && { icon: Building2, label: 'Luas Bangunan', value: `${property.building_area} m²` },
    property.bedrooms > 0 && { icon: Bed, label: 'Kamar Tidur', value: `${property.bedrooms} Kamar` },
    property.bathrooms > 0 && { icon: Bath, label: 'Kamar Mandi', value: `${property.bathrooms} Kamar` },
    { icon: Building2, label: 'Sertifikat', value: 'SHM' },
    { icon: MapPin, label: 'Kota', value: property.city },
  ].filter(Boolean) as { icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>, label: string, value: string }[];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-4 max-w-7xl py-6 pb-32 md:pb-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-5" style={{ color: 'var(--color-text-muted)' }}>
          <Link href="/" className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Link>
          <span>/</span>
          <span>Properti</span>
          <span>/</span>
          <span className="truncate max-w-[200px]" style={{ color: 'var(--color-text-main)' }}>
            {property.title}
          </span>
        </nav>

        {/* Two-column layout on desktop */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ===== LEFT COLUMN (70%) ===== */}
          <div className="flex-1 min-w-0">
            {/* Gallery */}
            <ImageGallery
              images={property.images || []}
              title={property.title}
            />

            {/* Property Header (mobile) - under gallery */}
            <div className="mt-5 lg:hidden">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full border"
                  style={{ backgroundColor: status.bg, color: status.text, borderColor: status.border }}
                >
                  ● {status.label}
                </span>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}
                >
                  {property.type === 'Jual' ? 'Dijual' : property.type === 'Sewa' ? 'Disewa' : 'Kost'}
                </span>
              </div>
              <h1 className="text-2xl font-bold leading-tight" style={{ color: 'var(--color-text-main)' }}>
                {property.title}
              </h1>
              <p className="text-3xl font-bold mt-2" style={{ color: 'var(--color-primary)' }}>
                {formatRupiahShort(property.price)}
                {property.price_period && property.price_period !== 'Total' && (
                  <span className="text-lg font-medium text-slate-500">
                    /{property.price_period === 'Per Bulan' ? 'bulan' : 'tahun'}
                  </span>
                )}
              </p>
              <div className="flex items-center gap-1.5 mt-2">
                <MapPin className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  {property.district}, {property.city}, Kalimantan Selatan
                </span>
              </div>
            </div>

            {/* Specs Grid */}
            <div className="mt-6">
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text-main)' }}>
                Spesifikasi Properti
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center gap-3 rounded-xl p-4"
                    style={{ backgroundColor: '#f8fafc', border: '1px solid var(--color-border)' }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: '#d1fae5' }}
                    >
                      <spec.icon className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{spec.label}</p>
                      <p className="text-sm font-semibold" style={{ color: 'var(--color-text-main)' }}>{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text-main)' }}>
                Deskripsi Properti
              </h2>
              <div
                className="text-base leading-relaxed space-y-4"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {property.description.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Video Embed (conditional) */}
            {property.youtube_url && (
              <VideoEmbed youtubeUrl={property.youtube_url} title={property.title} />
            )}

            {/* Trust Section */}
            <TrustSection />
          </div>

          {/* ===== RIGHT COLUMN (30%) — Sticky Card desktop ===== */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-24 space-y-4">
              {/* Price Card */}
              <div
                className="bg-white rounded-2xl p-6 border shadow-sm"
                style={{ borderColor: 'var(--color-border)' }}
              >
                {/* Status */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full border"
                    style={{ backgroundColor: status.bg, color: status.text, borderColor: status.border }}
                  >
                    ● {status.label}
                  </span>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}
                  >
                    {property.type === 'Jual' ? 'Dijual' : property.type === 'Sewa' ? 'Disewa' : 'Kost'}
                  </span>
                </div>

                <h1 className="text-lg font-bold leading-tight mb-3" style={{ color: 'var(--color-text-main)' }}>
                  {property.title}
                </h1>

                {/* Price */}
                <div className="py-4 border-y mb-4" style={{ borderColor: 'var(--color-border)' }}>
                  <p className="text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>Harga</p>
                  <p className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
                    {formatRupiahShort(property.price)}
                  </p>
                  {property.price_period && property.price_period !== 'Total' && (
                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                      per {property.price_period === 'Per Bulan' ? 'bulan' : 'tahun'}
                    </p>
                  )}
                  <p className="text-xs mt-2" style={{ color: 'var(--color-text-muted)' }}>
                    {formatRupiah(property.price)}
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-start gap-2 mb-5">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                  <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    {property.district}, {property.city}, Kalimantan Selatan
                  </span>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-base font-bold text-white rounded-xl transition-all hover:opacity-90 active:scale-95 mb-3"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  Chat Agen (WA)
                </a>

                {/* Share */}
                <ShareButton title={property.title} />
              </div>

              {/* Agent card */}
              <div
                className="bg-white rounded-2xl p-5 border"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: 'var(--color-text-muted)' }}>
                  Agen Anda
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold shrink-0"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    BR
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--color-text-main)' }}>Tim Agen Banua Realty</p>
                    <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Lead Real Estate Advisor</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <StickyContactBar
        price={property.price}
        pricePeriod={property.price_period}
        propertyTitle={property.title}
        propertySlug={property.slug}
        waNumber={WHATSAPP_NUMBER}
      />
    </div>
  );
}
