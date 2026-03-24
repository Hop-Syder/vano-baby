"use client";

import dynamic from "next/dynamic";

const GalerieSection = dynamic(
  () => import("./GalerieSection").then((m) => m.GalerieSection),
  {
    ssr: false,
    loading: () => (
      <section id="galerie" className="relative section-padding bg-bg-primary" aria-label="Chargement de la galerie">
        <div className="container-custom flex items-center justify-center py-16">
          <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
        </div>
      </section>
    ),
  }
);

export function GalerieClient(props: { isPageTitle?: boolean }) {
  return <GalerieSection {...props} />;
}
