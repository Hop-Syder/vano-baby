/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Page Musique — Discographie + Concerts
 * @created 2026-03-24
 */

import type { Metadata } from "next";
import { MusiqueSection } from "@/components/sections/MusiqueSection";
import { ConcertsSection } from "@/components/sections/ConcertsSection";

export const metadata: Metadata = {
  title: "Musique & Concerts — Vano Baby",
  description: "Découvrez la discographie et les concerts de Vano Baby — hits, dernières sorties et événements à venir.",
};

export default function MusiquePage() {
  return (
    <main className="pt-20">
      <MusiqueSection isPageTitle={true} />
      <ConcertsSection />
    </main>
  );
}
