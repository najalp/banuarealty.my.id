import Link from 'next/link';
import Image from 'next/image';
import { Building2, Phone, Mail, MapPin, AtSign, Share2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Banua Realty</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Agen properti terpercaya di Kalimantan Selatan. Kami membantu Anda menemukan
              hunian ideal dengan layanan profesional dan transparan.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://instagram.com/banuarealty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center transition-colors hover:bg-emerald-700"
                aria-label="Instagram Banua Realty"
              >
                <AtSign className="w-4 h-4 text-slate-300" />
              </a>
              <a
                href="https://facebook.com/banuarealty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center transition-colors hover:bg-emerald-700"
                aria-label="Facebook Banua Realty"
              >
                <Share2 className="w-4 h-4 text-slate-300" />
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Kategori Properti</h3>
            <ul className="space-y-2">
              {[
                { label: 'Rumah Dijual', href: '/?type=Jual' },
                { label: 'Rumah Disewa', href: '/?type=Sewa' },
                { label: 'Kost', href: '/?type=Kost' },
                { label: 'Semua Properti', href: '/' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm text-slate-400 leading-relaxed">
                  Jl. Brig Jend. Hasan Basri, Pangeran, Kec. Banjarmasin Utara, Kota Banjarmasin, Kalimantan Selatan 7012414
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" style={{ color: 'var(--color-primary)' }} />
                <a
                  href="https://wa.me/6283844094664"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  +62 838-4409-4664
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" style={{ color: 'var(--color-primary)' }} />
                <a
                  href="banuarealty@gmail.com"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  banuarealty@gmail.com
                </a>
              </li>
            </ul>

            {/* WA CTA */}
            <a
              href="https://wa.me/6283844094664?text=Halo%20Banua%20Realty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <Phone className="w-4 h-4" />
              Chat via WhatsApp
            </a>
          </div>
        </div>

        {/* Partnership / Academic Section */}
        <div className="border-t border-slate-800 mt-6 pt-6 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:flex-row gap-4 text-center md:text-left">
            <Image 
              src="/poliban-logo.png" 
              alt="Logo POLIBAN" 
              width={100}
              height={40}
              className="h-10 w-auto grayscale transition-all duration-300 hover:grayscale-0"
            />
            <div className="space-y-1">
              <p className="text-xs text-slate-400 font-medium">
                Project Developed as part of Entrepreneurship Course at Politeknik Negeri Banjarmasin
              </p>
              <p className="text-xs text-slate-500">
                Inkubasi Bisnis Politeknik Negeri Banjarmasin
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">
              Partnership & Academic
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-800 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {currentYear} Banua Realty. Semua hak dilindungi undang-undang.
          </p>
          <p className="text-xs text-slate-600">
            Properti Terpercaya di Kalimantan Selatan
          </p>
        </div>
      </div>
    </footer>
  );
}
