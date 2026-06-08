'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6283844094664?text=Halo%20Banua%20Realty,%20saya%20ingin%20bertanya%20mengenai%20properti."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 flex items-center gap-2 group"
      aria-label="Chat WhatsApp Banua Realty"
    >
      {/* Tooltip */}
      <span
        className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium text-white px-3 py-1.5 rounded-lg whitespace-nowrap"
        style={{ backgroundColor: 'var(--color-text-main)' }}
      >
        Chat Agen Sekarang
      </span>

      {/* Button */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
        style={{ backgroundColor: '#25D366' }}
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </div>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: '#25D366' }} />
    </a>
  );
}
