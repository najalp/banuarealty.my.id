'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { PropertyImage } from '@/types/property';

interface ImageGalleryProps {
  images: PropertyImage[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const primary = images.find((i) => i.is_primary) || images[0];
  const sortedImages = [
    ...images.filter((i) => i.is_primary),
    ...images.filter((i) => !i.is_primary),
  ];

  const prev = () => setActiveIndex((i) => (i - 1 + sortedImages.length) % sortedImages.length);
  const next = () => setActiveIndex((i) => (i + 1) % sortedImages.length);

  if (!images.length) return null;

  return (
    <>
      {/* Main Gallery */}
      <div className="space-y-3">
        {/* Primary Image */}
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-slate-100 cursor-zoom-in group"
          style={{ maxHeight: '480px', aspectRatio: '16/9' }}
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={sortedImages[activeIndex]?.image_url || primary.image_url}
            alt={`${title} - foto ${activeIndex + 1}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 70vw"
            priority
            unoptimized
          />
          {/* Overlay hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
            <div className="bg-black/50 rounded-full p-2">
              <ZoomIn className="w-6 h-6 text-white" />
            </div>
          </div>
          {/* Nav arrows if multiple images */}
          {sortedImages.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md transition-all hover:bg-white hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 text-slate-700" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md transition-all hover:bg-white hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 text-slate-700" />
              </button>
              {/* Counter */}
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-medium px-2.5 py-1 rounded-lg">
                {activeIndex + 1} / {sortedImages.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {sortedImages.length > 1 && (
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {sortedImages.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                  activeIndex === idx ? 'border-emerald-500 opacity-100 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={img.image_url}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                  unoptimized
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <div
            className="relative w-full max-w-4xl"
            style={{ aspectRatio: '16/9' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={sortedImages[activeIndex]?.image_url || primary.image_url}
              alt={title}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          {sortedImages.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
