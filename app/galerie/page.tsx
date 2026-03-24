/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Page Galerie — Photos & Vidéos
 * @created 2026-03-24
 * @updated 2026-03-24 SSR enabled + Design rhythm
 */

import type { Metadata } from "next";
import { GalerieClient } from "@/components/sections/GalerieClient";

export const metadata: Metadata = {
  title: "Galerie — Vano Baby",
  description: "Plongez dans l'univers visuel du Gang. Clips officiels, lives et moments exclusifs de Vano Baby.",
};

export default function GaleriePage() {
  return (
    <main className="pt-20">
      <GalerieClient isPageTitle={true} />
    </main>
  );
}
