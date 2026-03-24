/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description ParcourSection — Timeline interactive animée
 * @created 2026-03-24
 */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Mic, Globe, Star, Flame } from "lucide-react";

const timeline = [
  {
    year: "2013",
    icon: Mic,
    title: "Drague Azonto",
    description: "Premier single viral, révélation sur la scène urbaine béninoise.",
  },
  {
    year: "2014",
    icon: Trophy,
    title: "MTN Découverte Talents",
    description: "Victoire au concours national — 5 millions FCFA de prix.",
    highlight: true,
  },
  {
    year: "2016",
    icon: Flame,
    title: "Adigoue Gboun Gboun",
    description: "Explosion nationale avec ce titre provoquant et audacieux.",
  },
  {
    year: "2018–2019",
    icon: Star,
    title: "Madame & Bella",
    description: "Deux mega-hits qui confirment son statut de star incontournable.",
  },
  {
    year: "2022",
    icon: Trophy,
    title: "Diyo — Succès Phénoménal",
    description: "Tournant artistique majeur, Diyo dépasse les frontières du Bénin.",
    highlight: true,
  },
  {
    year: "2023",
    icon: Globe,
    title: "Tournée Européenne",
    description: "Suisse, Italie — Vano Baby conquiert l&apos;Europe.",
  },
  {
    year: "2024",
    icon: Trophy,
    title: "3× Artiste de l'Année",
    description: "Triplé historique aux Bénin Top 10 Awards. Record absolu.",
    highlight: true,
  },
  {
    year: "2025",
    icon: Star,
    title: "10 Ans de Carrière",
    description: "Une décennie de musique, de succès et de fidélité à son art.",
  },
];

export function ParcourSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="parcours"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Right glow */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,26,26,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="section-line mx-auto" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-red-500 mb-4 block">
            La Route du Succès
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Parcours &amp; <span style={{ color: "var(--red-neon)" }}>Carrière</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical axis */}
          <div className="hidden md:block timeline-line" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
                  className={`relative flex items-center gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`flex-1 glass-card p-6 cursor-pointer hover:glow-box-red transition-all duration-300 group ${
                      item.highlight
                        ? "border-red-600/30"
                        : ""
                    } md:${isLeft ? "mr-10 text-right" : "ml-10 text-left"}`}
                    style={item.highlight ? { borderColor: "rgba(255,26,26,0.3)" } : {}}
                  >
                    <div
                      className={`flex items-center gap-3 mb-2 ${
                        isLeft ? "md:flex-row-reverse" : "flex-row"
                      }`}
                    >
                      <span
                        className="font-bebas text-xl"
                        style={{ color: "var(--red-neon)" }}
                      >
                        {item.year}
                      </span>
                      {item.highlight && (
                        <span
                          className="text-xs px-2 py-0.5 rounded"
                          style={{
                            background: "rgba(255,26,26,0.15)",
                            color: "var(--red-neon)",
                          }}
                        >
                          💡 Milestone
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h3>
                    <p
                      className="text-sm text-white/50"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0"
                    style={{ background: "#0f0f0f", border: "2px solid var(--red-neon)" }}
                  >
                    <Icon size={18} color="var(--red-neon)" />
                  </div>

                  {/* Empty spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
