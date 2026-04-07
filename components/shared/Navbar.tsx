'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Building2, Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Properti Jual', href: '/?type=Jual' },
  { label: 'Properti Sewa', href: '/?type=Sewa' },
  { label: 'Kost', href: '/?type=Kost' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-white border-b"
      style={{ borderColor: 'var(--color-border)', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <span
                className="text-lg font-bold leading-none block"
                style={{ color: 'var(--color-text-main)' }}
              >
                Banua Realty
              </span>
              <span
                className="text-xs leading-none"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Properti Kalimantan Selatan
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-50"
                style={{ color: 'var(--color-text-main)' }}
              >
                Kategori
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  style={{ color: 'var(--color-text-muted)' }}
                />
              </button>
              {dropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border py-1 z-50"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm transition-colors hover:bg-emerald-50"
                      style={{ color: 'var(--color-text-main)' }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Semua Properti
            </Link>
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Banua%20Realty"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-semibold text-white rounded-lg transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              Hubungi Agen
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" style={{ color: 'var(--color-text-main)' }} />
            ) : (
              <Menu className="w-5 h-5" style={{ color: 'var(--color-text-main)' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t py-4 space-y-1" style={{ borderColor: 'var(--color-border)' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-emerald-50"
                style={{ color: 'var(--color-text-main)' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-gray-50"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Semua Properti
            </Link>
            <div className="pt-3 px-3">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Banua%20Realty"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Hubungi Agen
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
