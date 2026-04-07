'use client';

import { useState, useEffect } from 'react';
import PropertyCard from '@/components/shared/PropertyCard';
import FilterBar from '@/components/shared/FilterBar';
import { Building2, Home, Key, Coffee } from 'lucide-react';
import { getPropertiesFromDB } from '@/lib/supabase-data';
import { Property } from '@/types/property';

export default function HomePage() {
  const [allProperties, setAllProperties] = useState<Property[]>([]);
  const [filtered, setFiltered] = useState<Property[]>([]);
  const [activeType, setActiveType] = useState('Semua');
  const [activeCity, setActiveCity] = useState('Semua');
  const [loading, setLoading] = useState(true);

  // Load data dari Supabase saat mount
  useEffect(() => {
    getPropertiesFromDB().then((data) => {
      setAllProperties(data);
      setFiltered(data);
      setLoading(false);
    });
  }, []);

  const handleFilter = (type: string, city: string) => {
    setActiveType(type);
    setActiveCity(city);
    const result = allProperties.filter((p) => {
      const typeMatch = type === 'Semua' || p.type === type;
      const cityMatch = city === 'Semua' || p.city === city;
      return typeMatch && cityMatch && p.status === 'Tersedia';
    });
    setFiltered(result);
  };

  const stats = [
    { icon: Home, label: 'Properti Dijual', value: allProperties.filter(p => p.type === 'Jual').length + '+' },
    { icon: Key, label: 'Properti Disewa', value: allProperties.filter(p => p.type === 'Sewa').length + '+' },
    { icon: Coffee, label: 'Kost Tersedia', value: allProperties.filter(p => p.type === 'Kost').length + '+' },
    { icon: Building2, label: 'Kota Terlayani', value: '5' },
  ];

  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative container mx-auto px-4 max-w-7xl py-16 md:py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-6 fade-in-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-sm font-medium">Agen Properti Terpercaya Kalimantan Selatan</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl fade-in-up animate-delay-100">
            Temukan Hunian Ideal Anda di{' '}
            <span className="text-emerald-400">Kalimantan Selatan</span>
          </h1>

          <p className="text-lg text-slate-300 mb-10 max-w-xl fade-in-up animate-delay-200">
            Katalog properti terverifikasi yang dikelola langsung oleh agen profesional — survei didampingi, legalitas terjamin.
          </p>

          {/* Filter Bar */}
          <div className="fade-in-up animate-delay-300">
            <FilterBar onFilter={handleFilter} />
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10"
              >
                <stat.icon className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PROPERTY GRID ====== */}
      <section className="container mx-auto px-4 max-w-7xl py-12">
        {/* Section header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-main)' }}>
              {activeType === 'Semua' && activeCity === 'Semua'
                ? 'Semua Properti Tersedia'
                : `Properti ${activeType !== 'Semua' ? activeType : ''} ${activeCity !== 'Semua' ? 'di ' + activeCity : ''}`}
            </h2>
            <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>
              {loading ? 'Memuat...' : `${filtered.length} properti ditemukan`}
            </p>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-2xl bg-slate-100 animate-pulse h-80" />
            ))}
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Building2 className="w-12 h-12 mx-auto mb-4 text-slate-300" />
            <h3 className="text-lg font-semibold text-slate-500">Tidak ada properti ditemukan</h3>
            <p className="text-sm text-slate-400 mt-1">Coba ubah filter pencarian Anda</p>
          </div>
        )}
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 py-12 mt-6">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Tidak menemukan properti yang sesuai?
          </h2>
          <p className="text-emerald-100 text-base mb-6 max-w-xl mx-auto">
            Hubungi agen kami langsung. Kami memiliki database properti lebih banyak yang belum dipublikasikan.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Banua%20Realty,%20saya%20mencari%20properti%20tertentu%20namun%20belum%20menemukan%20yang%20sesuai."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-3.5 rounded-xl text-base transition-all hover:bg-emerald-50 active:scale-95"
          >
            💬 Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
