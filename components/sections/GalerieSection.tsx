/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description GalerieSection — Galerie Vano Baby
 * @created 2026-03-24
 */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

// SVG YouTube inline
const YtIcon = ({ size = 24, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M23.5 6.7a2.99 2.99 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.6A2.99 2.99 0 0 0 .5 6.7 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.3 2.99 2.99 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.6a2.99 2.99 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.3z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0f0f0f"/>
  </svg>
);

// Gallery items avec l'image hero générée + placeholders
const galleryItems = [
  { type: "image", src: "/images/hero.png", label: "Concert Live", size: "large" },
  { type: "video", youtubeId: "DtIqJ3m6R30", label: "Diyo — Official", size: "medium" },
  { type: "placeholder", label: "Backstage 2024", size: "small" },
  { type: "placeholder", label: "Tournée Europe 2023", size: "small" },
  { type: "video", youtubeId: "C3JMhV5i_9Q", label: "Bella — Live", size: "medium" },
  { type: "placeholder", label: "Awards Ceremony", size: "small" },
];

export function GalerieSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="galerie"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-line mx-auto" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-red-500 mb-4 block">
            Photos &amp; Vidéos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Gal<span style={{ color: "var(--red-neon)" }}>erie</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Hero Image — Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="col-span-2 row-span-2 music-card group cursor-pointer rounded-sm overflow-hidden"
            style={{ aspectRatio: "16/10" }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/hero.png"
                alt="Vano Baby en concert live"
                fill
                className="object-cover"
                style={{ transition: "transform 0.6s ease" }}
              />
              <div className="music-card-overlay">
                <div className="text-center">
                  <div className="text-sm font-semibold text-white tracking-wider">Concert Live</div>
                  <div className="text-xs text-white/50">Cotonou, Bénin</div>
                </div>
              </div>
              {/* Red corner */}
              <div
                className="absolute top-3 left-3 text-xs px-2 py-1 rounded"
                style={{ background: "rgba(255,26,26,0.8)" }}
              >
                LIVE
              </div>
            </div>
          </motion.div>

          {/* YouTube embed cards */}
          {[
            { id: "DtIqJ3m6R30", label: "Diyo" },
            { id: "C3JMhV5i_9Q", label: "Madame" },
          ].map((vid, i) => (
            <motion.a
              key={vid.id}
              href={`https://www.youtube.com/watch?v=${vid.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="glass-card relative flex flex-col items-center justify-center cursor-pointer group hover:glow-box-red transition-all duration-300"
              style={{ aspectRatio: "16/10" }}
              aria-label={`Regarder ${vid.label} sur YouTube`}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                style={{ background: "#FF0000" }}
              >
                <YtIcon size={24} color="white" />
              </div>
              <span className="text-sm font-semibold text-white">{vid.label}</span>
              <span className="text-xs text-white/40 mt-1">Voir sur YouTube</span>
            </motion.a>
          ))}

          {/* Placeholder cards */}
          {["Backstage 2024", "Awards 2024", "Tournée Europe"].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="glass-card flex items-center justify-center cursor-pointer group hover:glow-box-red transition-all duration-300"
              style={{ aspectRatio: "16/10" }}
            >
              <div className="text-center">
                <div
                  className="font-bebas text-4xl mb-2 opacity-15"
                  style={{ color: "var(--red-neon)" }}
                >
                  VB
                </div>
                <span className="text-xs text-white/30 uppercase tracking-wider">{label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA YouTube */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.youtube.com/@vanobaby"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center gap-2 cursor-pointer"
            aria-label="Voir toutes les vidéos de Vano Baby sur YouTube"
          >
            <YtIcon size={18} />
            Voir toutes les vidéos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
