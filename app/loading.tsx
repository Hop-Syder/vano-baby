/**
 * @description Écran de chargement global — logo centré + ligne de battement/ progression
 */

import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-bg-primary text-white flex flex-col items-center justify-center gap-12 px-6">
      <div className="flex flex-col items-center gap-5">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-[-10%] rounded-full bg-red-600/10 blur-xl" />
          <div className="absolute inset-0 rounded-full border border-red-600/40 pulse-ring" />
          <div className="w-20 h-20 rounded-full bg-white/5 border border-red-600/50 flex items-center justify-center pulse-glow">
            <Image
              src="/images/logo.svg"
              alt="Logo Vano Baby"
              width={72}
              height={72}
              className="w-12 h-12 object-contain"
              priority
            />
          </div>
        </div>
        <p className="text-xs uppercase tracking-[0.4em] text-white/70 text-center">
          Prépare le show...
        </p>
      </div>
    </div>
  );
}
