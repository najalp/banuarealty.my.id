import { CheckCircle2 } from 'lucide-react';

const trustPoints = [
  {
    title: 'Survei Didampingi Agen',
    desc: 'Agen profesional kami akan mendampingi Anda dalam setiap proses survei properti tanpa biaya tambahan.',
  },
  {
    title: 'Legalitas Terverifikasi',
    desc: 'Setiap properti yang kami listingkan telah melalui verifikasi dokumen dan sertifikat oleh tim legal kami.',
  },
  {
    title: 'Negosiasi Transparan',
    desc: 'Kami memfasilitasi negosiasi yang jujur dan transparan antara penjual dan pembeli untuk hasil terbaik.',
  },
];

export default function TrustSection() {
  return (
    <section
      className="rounded-2xl p-6 mt-8"
      style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}
    >
      <h2
        className="text-xl font-bold mb-5"
        style={{ color: 'var(--color-text-main)' }}
      >
        🏆 Mengapa Memilih Banua Realty?
      </h2>
      <div className="space-y-4">
        {trustPoints.map((point) => (
          <div key={point.title} className="flex items-start gap-3">
            <CheckCircle2
              className="w-5 h-5 mt-0.5 shrink-0"
              style={{ color: 'var(--color-primary)' }}
            />
            <div>
              <h3
                className="text-base font-semibold"
                style={{ color: 'var(--color-text-main)' }}
              >
                {point.title}
              </h3>
              <p
                className="text-sm leading-relaxed mt-0.5"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {point.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
