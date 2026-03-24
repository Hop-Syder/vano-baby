/**
 * @description Audio de fond — lecture du fichier local public/audio/vano-fite.mp3 à ~30% de volume.
 * Remarque : l'autoplay audio peut être bloqué par certains navigateurs tant qu'il n'y a pas d'interaction utilisateur.
 */
"use client";

import { useEffect, useRef } from "react";

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = document.createElement("audio");
    audio.src = "/audio/vano-fite.mp3";
    audio.loop = true;
    audio.volume = 0.2;
    audioRef.current = audio;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (e) {
        // Autoplay bloqué : on attend une interaction utilisateur
        const onFirstInteraction = async () => {
          try {
            await audio.play();
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

    playAudio();

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  return null;
}
