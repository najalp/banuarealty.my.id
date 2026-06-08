import { ImageResponse } from 'next/og';

export const alt = 'Promo 10 Orang Tercepat - Banua Realty';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #f8fafc, #d1fae5)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              backgroundColor: '#1A9C68',
              borderRadius: '16px',
              marginRight: '20px',
              color: 'white',
              fontSize: '40px',
              fontWeight: 'bold',
            }}
          >
            BR
          </div>
          <span style={{ fontSize: '48px', fontWeight: '900', color: '#0C2340', letterSpacing: '0.1em' }}>
            BANUA REALTY
          </span>
        </div>

        <h1
          style={{
            fontSize: '72px',
            fontWeight: '900',
            color: '#0C2340',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}
        >
          KHUSUS 10 ORANG<br />TERCEPAT!
        </h1>

        <p
          style={{
            fontSize: '36px',
            color: '#1f2937',
            textAlign: 'center',
            marginBottom: '40px',
            fontWeight: '500',
          }}
        >
          Properti Anda Masih Sepi Peminat?<br />
          Buat Tampilannya Premium!
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1A9C68',
            color: 'white',
            padding: '20px 60px',
            borderRadius: '100px',
            fontSize: '48px',
            fontWeight: '900',
            boxShadow: '0 20px 25px -5px rgba(26, 156, 104, 0.4)',
          }}
        >
          HANYA Rp200.000!
        </div>
        
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '60px',
            backgroundColor: '#E6B94A',
            color: 'white',
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            fontWeight: '900',
            border: '8px solid white',
            boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
          }}
        >
          <span style={{ fontSize: '24px' }}>SISA</span>
          <span style={{ fontSize: '56px', lineHeight: 1 }}>3</span>
          <span style={{ fontSize: '24px' }}>SLOT!</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
