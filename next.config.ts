import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    unoptimized: true, // Untuk development - hapus saat deploy ke Vercel
  },
  allowedDevOrigins: ['nonempathically-unchaperoned-jackeline.ngrok-free.dev', 'localhost:3000'],
};

export default nextConfig;
