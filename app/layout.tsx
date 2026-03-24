/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Root Layout — Vano Baby Website
 * @created 2026-03-24
 * 🌐 ceo.nexuspartners.xyz
 */

import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Vano Baby — Azéto Gbèdè | Artiste Béninois Officiel",
  description:
    "Site officiel de Vano Baby, artiste béninois de Rap & Afropop, 3× Artiste de l'Année. Découvrez ses derniers sons, concerts et actualités.",
  keywords: ["Vano Baby", "artiste bénin", "rap bénin", "Diyo", "Azéto Gbèdè", "musique africaine", "afropop"],
  openGraph: {
    title: "Vano Baby — Azéto Gbèdè",
    description: "Artiste béninois de Rap & Afropop, 3× Artiste de l'Année au Bénin",
    url: "https://vanobaby.bj",
    siteName: "Vano Baby",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">
        {/* Grain/noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
