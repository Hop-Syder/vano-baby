/**
 * @description Splash écran initial — logo + heartbeat progress. Disparaît après 5s.
 */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9998] bg-bg-primary text-white flex flex-col items-center justify-center gap-10 px-6">
      <div className="flex flex-col items-center gap-4">
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
          Synchronisation du Gang...
        </p>
      </div>
    </div>
  );
}
