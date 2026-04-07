import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Banua Realty | Properti Terpercaya di Kalimantan Selatan',
  description:
    'Temukan rumah, ruko, kost, dan tanah kavling terbaik di Banjarmasin, Banjarbaru, Martapura, dan sekitarnya. Katalog properti terverifikasi oleh agen profesional Banua Realty.',
  keywords: 'properti Kalimantan Selatan, rumah Banjarmasin, rumah Banjarbaru, jual beli rumah Kalsel, Banua Realty',
  openGraph: {
    title: 'Banua Realty | Properti Terpercaya di Kalimantan Selatan',
    description: 'Temukan properti impian Anda bersama agen profesional Banua Realty.',
    siteName: 'Banua Realty',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="bg-background font-sans antialiased">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
