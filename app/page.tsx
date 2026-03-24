/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Accueil — Vano Baby Portfolio
 * @created 2026-03-24
 * @updated 2026-03-24 SSR enabled + Rhythm polish
 */
import { HeroSection } from "@/components/sections/HeroSection";
import { BioSection } from "@/components/sections/BioSection";
import { ParcourSection } from "@/components/sections/ParcourSection";
import { GalerieSection } from "@/components/sections/GalerieSection";

export default function Home() {
  return (
    <main className="relative bg-bg-primary overflow-x-hidden min-h-screen">
      <HeroSection />
      <BioSection />
      
      {/* Rhythm variation — Parcour uses full width but centered content */}
      <div className="bg-bg-primary">
        <ParcourSection />
      </div>

      {/* Galerie is now SSR friendly and visually rhythmic */}
      <GalerieSection />
    </main>
  );
}
