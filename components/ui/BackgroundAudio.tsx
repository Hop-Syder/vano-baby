/**
 * @description Audio de fond : choisit aléatoirement une vidéo YouTube (qualité basse) et lance l'audio à ~30% via l'API YouTube.
 * Note : certains navigateurs bloquent l'autoplay audio sans interaction utilisateur.
 */
"use client";

import { useEffect, useRef } from "react";
import { GALLERY_VIDEOS } from "@/lib/galleryVideos";

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export function BackgroundAudio() {
  const playerRef = useRef<any>(null);
  const iframeId = "vano-audio-player";

  useEffect(() => {
    // Choix aléatoire d'un ID
    const pick = GALLERY_VIDEOS[Math.floor(Math.random() * GALLERY_VIDEOS.length)]?.id;
    if (!pick) return;

    const loadPlayer = () => {
      if (!window.YT || !window.YT.Player) return;
      if (playerRef.current) return;

      playerRef.current = new window.YT.Player(iframeId, {
        height: "1",
        width: "1",
        videoId: pick,
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 0,
          rel: 0,
          loop: 1,
          playlist: pick,
          modestbranding: 1,
          iv_load_policy: 3,
          playsinline: 1,
          vq: "small",
        },
        events: {
          onReady: (event: any) => {
            try {
              event.target.setVolume(30);
              event.target.playVideo();
            } catch (e) {
              // ignore
            }
          },
        },
      });
    };

    // Charger l'API YouTube si absent
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = loadPlayer;
    } else {
      loadPlayer();
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
      playerRef.current = null;
    };
  }, []);

  return (
    <div style={{ position: "fixed", width: 1, height: 1, left: "-9999px", top: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
      <div id={iframeId} />
    </div>
  );
}
