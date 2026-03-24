/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description MusiqueSection — Discographie Vano Baby
 * @created 2026-03-24
 */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, ExternalLink } from "lucide-react";

const hits = [
  { title: "Diyo", year: "2022", tag: "Mega-Hit", color: "#8B0000" },
  { title: "Bella", year: "2019", tag: "Classique", color: "#5c0000" },
  { title: "Madame", year: "2018", tag: "Banger", color: "#3d0000" },
  { title: "Adigoue Gboun Gboun", year: "2016", tag: "Iconic", color: "#6e0000" },
  { title: "Drague Azonto", year: "2013", tag: "1er Hit", color: "#4a0000" },
  { title: "Nou towé lè", year: "2021", tag: "Street", color: "#7a0000" },
  { title: "Je s'en fou", year: "2020", tag: "Anthem", color: "#5e0000" },
  { title: "Tonssimè chap", year: "2020", tag: "Banger", color: "#480000" },
];

const recent = [
  { title: "Fité", year: "2024", feat: "" },
  { title: "Russie", year: "2024", feat: "feat. HIMRA" },
  { title: "Mahu Si", year: "2023", feat: "" },
  { title: "C'est toi", year: "2023", feat: "" },
];

export function MusiqueSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="musique"
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
            Sons &amp; Projets
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Dis<span style={{ color: "var(--red-neon)" }}>cographie</span>
          </h2>
        </motion.div>

        {/* Hits Grid */}
        <div className="mb-16">
          <h3 className="text-sm tracking-[0.3em] uppercase text-white/40 mb-6">
            🔥 Les Hits
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hits.map((track, i) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="music-card glass-card group cursor-pointer"
                style={{ aspectRatio: "1", cursor: "pointer" }}
              >
                {/* Cover gradient */}
                <div
                  className="w-full h-full flex flex-col items-center justify-center p-4 relative"
                  style={{
                    background: `linear-gradient(135deg, ${track.color} 0%, #0f0f0f 100%)`,
                  }}
                >
                  <span
                    className="font-bebas text-5xl mb-1 opacity-20 absolute top-2 right-3"
                    style={{ color: "#FF1A1A" }}
                  >
                    VB
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded mb-3"
                    style={{
                      background: "rgba(255,26,26,0.2)",
                      color: "#ff6666",
                    }}
                  >
                    {track.tag}
                  </span>
                  <h4 className="font-semibold text-white text-center text-sm leading-tight">
                    {track.title}
                  </h4>
                  <span className="text-xs text-white/40 mt-1">{track.year}</span>

                  {/* Hover overlay */}
                  <div className="music-card-overlay">
                    <div className="flex flex-col items-center gap-3">
                      <a
                        href={`https://www.youtube.com/results?search_query=vano+baby+${encodeURIComponent(track.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
                        style={{ background: "var(--red-neon)" }}
                        aria-label={`Écouter ${track.title} sur YouTube`}
                      >
                        <Play size={18} fill="white" color="white" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Releases */}
        <div>
          <h3 className="text-sm tracking-[0.3em] uppercase text-white/40 mb-6">
            📀 Dernières Sorties
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {recent.map((track, i) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                className="glass-card flex items-center justify-between p-5 group cursor-pointer hover:glow-box-red transition-all duration-300"
                style={{ cursor: "pointer" }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,26,26,0.12)" }}
                  >
                    <span className="font-bebas text-sm" style={{ color: "var(--red-neon)" }}>
                      VB
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-red-400 transition-colors">
                      {track.title}{" "}
                      {track.feat && (
                        <span className="text-xs text-white/40 font-normal">{track.feat}</span>
                      )}
                    </h4>
                    <span className="text-xs text-white/40">{track.year}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://www.youtube.com/results?search_query=vano+baby+${encodeURIComponent(track.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200"
                    style={{ background: "rgba(255,26,26,0.15)" }}
                    aria-label={`Écouter ${track.title}`}
                  >
                    <Play size={12} color="var(--red-neon)" fill="var(--red-neon)" />
                  </a>
                  <ExternalLink size={14} className="text-white/30 group-hover:text-white/60 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Streaming CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="https://www.youtube.com/@vanobaby"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline cursor-pointer inline-block"
          >
            Voir tous les sons →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
