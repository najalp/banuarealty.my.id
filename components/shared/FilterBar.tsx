'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, SlidersHorizontal } from 'lucide-react';

const propertyTypes = ['Semua', 'Jual', 'Sewa', 'Kost'];
const cities = ['Semua', 'Banjarmasin', 'Banjarbaru', 'Martapura', 'Pelaihari', 'Barito Kuala'];

interface FilterBarProps {
  onFilter: (type: string, city: string) => void;
  defaultType?: string;
  defaultCity?: string;
}

export default function FilterBar({ onFilter, defaultType = 'Semua', defaultCity = 'Semua' }: FilterBarProps) {
  const [type, setType] = useState(defaultType);
  const [city, setCity] = useState(defaultCity);

  const handleSearch = () => {
    onFilter(type, city);
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-xl border p-4 md:p-5"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="flex items-center gap-2 mb-4 md:hidden">
        <SlidersHorizontal className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
        <span className="text-sm font-semibold" style={{ color: 'var(--color-text-main)' }}>
          Filter Properti
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-3 md:gap-4">
        {/* Tipe Properti */}
        <div className="flex-1">
          <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
            Tipe Properti
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-3 text-base rounded-xl border outline-none transition-all focus:ring-2 focus:ring-emerald-500 bg-white"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text-main)',
            }}
          >
            {propertyTypes.map((t) => (
              <option key={t} value={t}>{t === 'Semua' ? 'Semua Tipe' : t}</option>
            ))}
          </select>
        </div>

        {/* Lokasi */}
        <div className="flex-1">
          <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>
            Lokasi / Kota
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-3 text-base rounded-xl border outline-none transition-all focus:ring-2 focus:ring-emerald-500 bg-white"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text-main)',
            }}
          >
            {cities.map((c) => (
              <option key={c} value={c}>{c === 'Semua' ? 'Semua Kota' : c}</option>
            ))}
          </select>
        </div>

        {/* Tombol Cari */}
        <div className="flex items-end">
          <button
            onClick={handleSearch}
            className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 text-base font-semibold text-white rounded-xl transition-all hover:opacity-90 active:scale-95"
            style={{ backgroundColor: 'var(--color-primary)', minHeight: '48px' }}
          >
            <Search className="w-5 h-5" />
            Cari Properti
          </button>
        </div>
      </div>
    </div>
  );
}
