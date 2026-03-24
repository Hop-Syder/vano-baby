/**
 * @description Audio de fond — lecture du fichier local public/audio/vano-fite.mp3 à ~30% de volume.
 * Remarque : l'autoplay audio peut être bloqué par certains navigateurs tant qu'il n'y a pas d'interaction utilisateur.
 */
"use client";

import { useEffect, useRef, useState } from "react";

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [needsInteraction, setNeedsInteraction] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    audio.volume = 0.3;

    const tryPlay = async () => {
      try {
        await audio.play();
        setNeedsInteraction(false);
      } catch (e) {
        setNeedsInteraction(true);
        const onFirstInteraction = async () => {
          try {
            await audio.play();
            setNeedsInteraction(false);
          } catch (err) {
            // ignore
          }
          window.removeEventListener("click", onFirstInteraction);
          window.removeEventListener("touchstart", onFirstInteraction);
        };
        window.addEventListener("click", onFirstInteraction);
        window.addEventListener("touchstart", onFirstInteraction);
      }
    };

    tryPlay();

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/audio/vano-fite.mp3" preload="auto" className="hidden" />
      {needsInteraction && (
        <button
          type="button"
          onClick={() => {
            const audio = audioRef.current;
            if (!audio) return;
            audio.play().then(() => setNeedsInteraction(false)).catch(() => {});
          }}
          className="fixed bottom-6 right-6 z-[200] px-4 py-2 bg-red-600 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm shadow-lg hover:bg-red-500 transition-colors"
        >
          Activer le son
        </button>
      )}
    </>
  );
}
