'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Bed, Bath, Maximize2, Star, ChevronLeft, ChevronRight, Flame } from 'lucide-react';

interface FeaturedProperty {
  id: string;
  slug: string;
  title: string;
  type: 'Jual' | 'Sewa' | 'Kost';
  price: string;
  price_period?: string;
  city: string;
  district: string;
  bedrooms: number;
  bathrooms: number;
  land_area: number;
  image: string;
  badge: string;
  badgeColor: string;
}

const dummyFeatured: FeaturedProperty[] = [];

const typeConfig = {
  Jual: { label: 'Dijual', bg: '#059669' },
  Sewa: { label: 'Disewa', bg: '#d97706' },
  Kost: { label: 'Kost', bg: '#6366f1' },
};

export default function FeaturedSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <section className="py-8 md:py-10" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div
              className="flex items-center justify-center w-9 h-9 rounded-xl"
              style={{ backgroundColor: '#fef3c7' }}
            >
              <Flame className="w-5 h-5" style={{ color: '#f59e0b' }} />
            </div>
            <div>
              <h2 className="text-xl font-bold" style={{ color: 'var(--color-text-main)' }}>
                Properti Rekomendasi
              </h2>
              <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                Pilihan terbaik dari agen kami
              </p>
            </div>
          </div>

          {/* Nav arrows — desktop */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="flex items-center justify-center w-9 h-9 rounded-full border transition-all"
              style={{
                borderColor: canScrollLeft ? 'var(--color-primary)' : 'var(--color-border)',
                color: canScrollLeft ? 'var(--color-primary)' : '#cbd5e1',
              }}
              aria-label="Scroll kiri"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="flex items-center justify-center w-9 h-9 rounded-full border transition-all"
              style={{
                borderColor: canScrollRight ? 'var(--color-primary)' : 'var(--color-border)',
                color: canScrollRight ? 'var(--color-primary)' : '#cbd5e1',
              }}
              aria-label="Scroll kanan"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider wrapper */}
        <div className="relative">
          {/* Left fade */}
          {canScrollLeft && (
            <div
              className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none hidden md:block"
              style={{
                background: 'linear-gradient(to right, var(--color-background), transparent)',
              }}
            />
          )}

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {dummyFeatured.map((property, idx) => (
              <FeaturedCard key={property.id} property={property} index={idx} />
            ))}
          </div>

          {/* Right fade */}
          {canScrollRight && (
            <div
              className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to left, var(--color-background), transparent)',
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ property, index }: { property: FeaturedProperty; index: number }) {
  const type = typeConfig[property.type];

  return (
    <Link
      href={`/properti/${property.slug}`}
      className="group flex-shrink-0 w-[280px] md:w-[300px] rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col bg-white"
      style={{
        borderColor: 'var(--color-border)',
        scrollSnapAlign: 'start',
        animationDelay: `${index * 60}ms`,
      }}
    >
      {/* Image */}
      <div className="relative h-[168px] bg-slate-100 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="300px"
          unoptimized
        />

        {/* Type badge */}
        <span
          className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-lg text-white"
          style={{ backgroundColor: type.bg }}
        >
          {type.label}
        </span>

        {/* Featured badge */}
        <span
          className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-lg text-white"
          style={{ backgroundColor: property.badgeColor }}
        >
          {property.badge}
        </span>

        {/* Star rating overlay */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-2 py-0.5">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-white text-xs font-semibold">4.9</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3.5 flex flex-col flex-1">
        {/* Price */}
        <div className="mb-1 flex items-baseline gap-1">
          <span className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>
            {property.price}
          </span>
          {property.price_period && (
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
              {property.price_period}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-sm font-semibold leading-snug line-clamp-2 mb-2 flex-1"
          style={{ color: 'var(--color-text-main)' }}
        >
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 mb-3">
          <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
          <span className="text-xs truncate" style={{ color: 'var(--color-text-muted)' }}>
            {property.district}, {property.city}
          </span>
        </div>

        {/* Specs */}
        <div
          className="flex items-center gap-3 pt-3 border-t"
          style={{ borderColor: 'var(--color-border)' }}
        >
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1">
              <Bed className="w-3.5 h-3.5" style={{ color: 'var(--color-text-muted)' }} />
              <span className="text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>
                {property.bedrooms} KT
              </span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1">
              <Bath className="w-3.5 h-3.5" style={{ color: 'var(--color-text-muted)' }} />
              <span className="text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>
                {property.bathrooms} KM
              </span>
            </div>
          )}
          {property.land_area > 0 && (
            <div className="flex items-center gap-1">
              <Maximize2 className="w-3.5 h-3.5" style={{ color: 'var(--color-text-muted)' }} />
              <span className="text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>
                {property.land_area} m²
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
