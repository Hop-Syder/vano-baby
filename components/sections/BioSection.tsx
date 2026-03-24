/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description BioSection — Vano Baby Website
 * @created 2026-03-24
 */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function BioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="bio"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Red glow accent */}
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,0,0,0.15) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Photo placeholder with frame */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div
              className="relative aspect-[3/4] rounded-sm overflow-hidden glow-border"
              style={{ maxWidth: "420px" }}
            >
              {/* Gradient placeholder */}
              <div
                className="w-full h-full"
                style={{
                  background: "linear-gradient(135deg, #0f0f0f 0%, #1a0000 40%, #0f0f0f 100%)",
                }}
              />
              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-bebas text-8xl opacity-10"
                  style={{ color: "var(--red-neon)" }}
                >
                  VB
                </span>
              </div>
              {/* Red corner accent */}
              <div
                className="absolute top-0 right-0 w-12 h-12"
                style={{
                  background: "linear-gradient(135deg, transparent 50%, var(--red-neon) 50%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-12 h-12"
                style={{
                  background: "linear-gradient(315deg, transparent 50%, var(--red-bordeaux) 50%)",
                }}
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 glass-card p-5"
              style={{ border: "1px solid rgba(255, 26, 26, 0.25)" }}
            >
              <div
                className="font-bebas text-3xl"
                style={{ color: "var(--red-neon)" }}
              >
                2013
              </div>
              <div className="text-xs text-white/50 uppercase tracking-wider">
                Début de carrière
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            <div className="section-line" />
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-red-500 mb-4 block">
              Biographie
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              L&apos;Artiste Qui<br />
              <span style={{ color: "var(--red-neon)" }}>Redéfinit</span> La Scène
            </h2>

            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                Vano Baby, de son vrai nom <strong className="text-white/80">Aurel Sylvanus Adjivon</strong>, est
                un artiste béninois né à Cotonou et originaire de Grand-Popo. Passionné de musique
                dès son jeune âge, il fait ses premiers pas dans le rap avant de s&apos;imposer
                comme l&apos;une des figures majeures de la scène urbaine béninoise.
              </p>
              <p>
                Révélé au grand public en 2013 avec le titre <em className="text-white">Drague Azonto</em>,
                il connaît une ascension rapide après avoir remporté le concours{" "}
                <strong className="text-white/80">MTN Découverte Talents</strong> en 2014.
              </p>
              <p>
                Son style, à la fois provocateur et authentique, lui permet de se démarquer et de
                captiver un large public. Aujourd&apos;hui, il est considéré comme l&apos;un des artistes
                les plus influents et respectés du Bénin — trois fois consacré{" "}
                <strong style={{ color: "var(--red-neon)" }}>Artiste de l&apos;Année</strong>.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["Rap / Hip-hop", "Afropop", "Azéto Gbèdè", "Sorcier Vivant", "Le Gang"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs tracking-wider uppercase px-4 py-2 rounded-sm"
                    style={{
                      background: "rgba(255,26,26,0.08)",
                      border: "1px solid rgba(255,26,26,0.2)",
                      color: "#ff6666",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
