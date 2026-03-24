/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Page principale — Site officiel Vano Baby
 * @created 2026-03-24
 * 🌐 ceo.nexuspartners.xyz
 */

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { BioSection } from "@/components/sections/BioSection";
import { ParcourSection } from "@/components/sections/ParcourSection";
import { MusiqueSection } from "@/components/sections/MusiqueSection";
import { ConcertsSection } from "@/components/sections/ConcertsSection";
import { GalerieSection } from "@/components/sections/GalerieSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BioSection />
      <ParcourSection />
      <MusiqueSection />
      <ConcertsSection />
      <GalerieSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
