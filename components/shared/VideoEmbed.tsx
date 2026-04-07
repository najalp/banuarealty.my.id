interface VideoEmbedProps {
  youtubeUrl: string;
  title: string;
}

export default function VideoEmbed({ youtubeUrl, title }: VideoEmbedProps) {
  // Extract video ID from URL
  const getEmbedUrl = (url: string) => {
    if (url.includes('embed/')) return url;
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?\s]+)/);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
    return url;
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-main)' }}>
        Video Properti
      </h2>
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-slate-900"
        style={{ paddingBottom: '56.25%' }}
      >
        <iframe
          src={getEmbedUrl(youtubeUrl)}
          title={`Video: ${title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
