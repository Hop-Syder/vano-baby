/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Next.js config — Site Vano Baby (Fixed Image Hosts & Metadata)
 * @created 2026-03-24
 * @updated 2026-03-24 Remote Patterns, MetadataBase & Turbopack config
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Config de Turbopack pour optimiser le dev local */
  turbopack: {
    root: __dirname,
  },
  
  /* Configuration des images externes pour next/image */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
    ],
  },

  /* Options de build & dev */
  reactStrictMode: true,
};

export default nextConfig;
