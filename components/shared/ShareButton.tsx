'use client';

import { Share2, Copy, CheckCheck } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonProps {
  title: string;
}

export default function ShareButton({ title }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // User cancelled share
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-xl border transition-all hover:bg-slate-50"
      style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}
    >
      {copied ? (
        <>
          <CheckCheck className="w-4 h-4 text-emerald-500" />
          <span className="text-emerald-600">Link disalin!</span>
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          Bagikan Properti
        </>
      )}
    </button>
  );
}
