/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description RootLayout — SEO, A11y & Brand Identity
 * @created 2026-03-24
 * @updated 2026-03-24 Meta Tags, OG, Favicon placeholder & Schema.org
 */
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ARTIST, CONTACT, SOCIALS } from "@/lib/data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vanobaby.com"), // Définition de l'URL de base pour le SEO
  title: {
    default: `${ARTIST.stageName} — Official Portfolio | Azéto Gbèdè`,
    template: `%s | ${ARTIST.stageName}`,
  },
  description: `${ARTIST.stageName} (Azéto Gbèdè) — Artiste urbain béninois, 3× Artiste de l'Année. Découvrez sa discographie, ses concerts et ses clips officiels.`,
  keywords: ["Vano Baby", "Musique Bénin", "Rap Béninois", "Diyo", "Cotonou", "Azeto Gbede", "Booking Vano Baby"],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://vanobaby.com", // Fictif, mais propre pour le SEO
    title: `${ARTIST.stageName} — Portfolio Officiel`,
    description: `L'univers visuel et musical du Sorcier Vivant. Hits, Clips et Booking officiel.`,
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: `${ARTIST.stageName} Live`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${ARTIST.stageName} — Direct du Gang`,
    description: `Suivez l'actualité de Vano Baby.`,
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": ARTIST.stageName,
    "alternateName": "Azéto Gbèdè",
    "url": "https://vanobaby.com",
    "logo": "https://vanobaby.com/images/hero.png",
    "genre": ARTIST.genres,
    "sameAs": [
      SOCIALS.facebook,
      SOCIALS.instagram,
      SOCIALS.youtube
    ]
  };

  return (
    <html lang="fr" className="bg-bg-primary">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Anti-mismatch safety: suppress browser extension attribute injections */}
      </head>
      <body
        className={`${poppins.variable} antialiased`}
        suppressHydrationWarning // Protège contre les injections sur body (SaveFrom, etc.)
      >
        {/* Selective Noise Overlay */}
        <div className="noise-overlay" />
        
        <Navbar />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
