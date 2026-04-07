import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: '#d1fae5' }}
        >
          <Home className="w-10 h-10" style={{ color: 'var(--color-primary)' }} />
        </div>
        <h1 className="text-6xl font-bold mb-3" style={{ color: 'var(--color-text-main)' }}>404</h1>
        <h2 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-text-main)' }}>
          Properti Tidak Ditemukan
        </h2>
        <p className="text-base mb-8 max-w-sm mx-auto" style={{ color: 'var(--color-text-muted)' }}>
          Properti yang Anda cari mungkin sudah terjual atau tidak tersedia. Lihat properti lain yang tersedia.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white rounded-xl transition-all hover:opacity-90"
          style={{ backgroundColor: 'var(--color-primary)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Katalog
        </Link>
      </div>
    </div>
  );
}
