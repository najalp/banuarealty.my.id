import { Check, Phone } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Promo 10 Orang Tercepat - Banua Realty',
  description: 'Properti Anda Masih Sepi Peminat? Buat Tampilannya Premium! Khusus 10 orang tercepat.',
};

export default function Promo10OrangPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center py-12 px-5 font-sans relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-emerald-100 rounded-full blur-[100px] opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[100px] opacity-40"></div>
      </div>

      <div className="max-w-md w-full mx-auto flex flex-col items-center z-10">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center justify-center">
            <Image 
              src="/logo.png" 
              alt="Banua Realty Logo" 
              width={80} 
              height={80} 
              className="w-20 h-20 object-contain"
            />
          </div>
          <h1 className="text-[#0C2340] font-black text-xl tracking-[0.15em] mt-2">BANUA REALTY</h1>
        </div>

        {/* Hero Title */}
        <h2 className="text-[#0C2340] font-black text-4xl md:text-5xl text-center leading-[1.1] mb-5 drop-shadow-sm">
          KHUSUS 10 ORANG<br />TERCEPAT!
        </h2>
        
        {/* Subtitle */}
        <p className="text-gray-800 text-center text-[1.1rem] md:text-xl font-medium mb-10 max-w-[95%]">
          Properti Anda Masih Sepi Peminat?<br/>Buat Tampilannya Premium!
        </p>

        {/* Pricing Badges */}
        <div className="relative flex flex-col items-center mb-12 w-full">
          <div className="bg-[#1A9C68] text-white rounded-[2.5rem] px-8 py-6 flex flex-col items-center shadow-2xl shadow-emerald-900/20 w-[85%] max-w-[340px] relative z-10 border-4 border-white">
            <span className="text-3xl font-extrabold tracking-wider mb-0.5">HANYA</span>
            <span className="text-4xl md:text-5xl font-black">Rp200.000!</span>
          </div>
          
          <div className="mt-4 text-center z-10 text-[#1A9C68] font-bold text-lg flex items-center justify-center gap-1.5">
            <span className="text-xl">*</span>
            <span>(Tarif Normal <span className="line-through text-red-500 decoration-[3px] decoration-red-500/80 mx-1">Rp350.000</span>)</span>
          </div>

          {/* Golden Badge */}
          <div className="absolute -right-4 top-10 z-20 bg-gradient-to-br from-[#E6B94A] to-[#C08A24] text-white rounded-full w-[115px] h-[115px] flex flex-col items-center justify-center text-center font-black leading-[1.1] transform rotate-[15deg] shadow-xl border-[5px] border-white animate-[pulse_3s_ease-in-out_infinite]">
            <span className="text-xl tracking-wide drop-shadow-md">SISA</span>
            <span className="text-[2.5rem] drop-shadow-md">3</span>
            <span className="text-xl tracking-wide drop-shadow-md">SLOT!</span>
          </div>
        </div>

        {/* Features List */}
        <div className="w-full mb-12 px-2">
          <ul className="space-y-4">
            {[
              "Video Pemasaran Sinematik (Tanpa Watermark)",
              "Foto Properti Beresolusi Tinggi (Terang & Rapi)",
              "Brosur Digital Eksklusif (Siap Sebar ke WhatsApp)",
              "Dikerjakan oleh Tim Profesional",
              "Proses Cepat: Syuting Maksimal 2 Jam, Editing Selesai 2 Hari!"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3.5">
                <div className="mt-1 bg-[#1A9C68] rounded-full p-1.5 shrink-0 shadow-sm">
                  <Check className="w-4 h-4 text-white" strokeWidth={3.5} />
                </div>
                <span className="text-gray-800 font-semibold text-[1.1rem] leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="w-full flex flex-col items-center gap-5 mb-16 px-2">
          <a
            href="https://wa.me/6283844094664?text=Halo%20Banua%20Realty,%20saya%20tertarik%20dengan%20Promo%2010%20Orang%20Tercepat%20untuk%20menampilkan%20properti%20premium."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#1A9C68] hover:bg-[#158055] text-white rounded-full py-4 px-6 flex items-center justify-center gap-3 shadow-[0_8px_25px_-5px_rgba(26,156,104,0.5)] transition-all hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] active:translate-y-0"
          >
            <div className="bg-white/25 p-1.5 rounded-full backdrop-blur-sm">
              <Phone className="w-6 h-6 fill-white" />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-wide">Jadwalkan Survei / Hubungi Agen</span>
          </a>
          
          <div className="flex items-center gap-2.5 text-gray-900 font-extrabold text-lg bg-white/50 backdrop-blur-sm py-2 px-6 rounded-full border border-gray-200">
            <Phone className="w-5 h-5 fill-gray-900" />
            <span>Hubungi WhatsApp: 083844094664</span>
          </div>
        </div>


      </div>
    </div>
  );
}
