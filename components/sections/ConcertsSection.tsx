/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description ConcertsSection — Événements Vano Baby
 * @created 2026-03-24
 */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Ticket } from "lucide-react";

const upcomingShows = [
  {
    date: "Juin 2025",
    city: "Cotonou",
    country: "Bénin",
    venue: "Stade de l'Amitié",
    type: "Concert Anniversaire",
    status: "upcoming",
  },
  {
    date: "Août 2025",
    city: "Lagos",
    country: "Nigeria",
    venue: "Eko Hotel, Lagos",
    type: "Festival Afropop",
    status: "upcoming",
  },
  {
    date: "Oct. 2025",
    city: "Paris",
    country: "France",
    venue: "La Cigale",
    type: "Tournée Europe",
    status: "tba",
  },
];

const pastShows = [
  { year: "2024", event: "Bénin Top 10 Awards — Artiste de l'Année", city: "Cotonou" },
  { year: "2023", event: "Tournée Suisse + Italie (avec Eusèbe Dossou)", city: "Europe" },
  { year: "2022", event: "Live Diyo — Palais des Congrès", city: "Cotonou" },
  { year: "2021", event: "1er Grand Concert Solo", city: "Cotonou" },
];

export function ConcertsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="concerts"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Glow center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,0,0,0.07) 0%, transparent 70%)" }}
      />

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
            Live &amp; Événements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Con<span style={{ color: "var(--red-neon)" }}>certs</span>
          </h2>
        </motion.div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-sm tracking-[0.3em] uppercase text-white/40 mb-6">
            Prochains Événements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingShows.map((show, i) => (
              <motion.div
                key={`${show.date}-${show.city}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass-card p-6 cursor-pointer hover:glow-box-red transition-all duration-300 group"
              >
                {/* Status badge */}
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`text-xs px-2 py-1 rounded tracking-wider uppercase ${
                      show.status === "upcoming"
                        ? "bg-red-600/20 text-red-400"
                        : "bg-white/5 text-white/30"
                    }`}
                  >
                    {show.status === "upcoming" ? "Confirmed" : "TBA"}
                  </span>
                  <Ticket size={16} className="text-white/20 group-hover:text-red-400 transition-colors" />
                </div>

                <div className="flex items-center gap-2 mb-1 text-white/50 text-sm">
                  <Calendar size={12} />
                  <span>{show.date}</span>
                </div>
                <h4 className="font-bold text-white text-xl mb-1 group-hover:text-red-400 transition-colors">
                  {show.city}
                </h4>
                <div className="flex items-center gap-1 text-xs text-white/40 mb-3">
                  <MapPin size={10} />
                  <span>{show.venue} · {show.country}</span>
                </div>
                <p className="text-xs text-white/30 uppercase tracking-wider">
                  {show.type}
                </p>

                {show.status === "upcoming" && (
                  <a
                    href="#contact"
                    className="mt-4 block btn-neon text-center text-xs py-2 cursor-pointer"
                    aria-label={`Réserver des billets pour ${show.city}`}
                  >
                    Réserver
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past shows */}
        <div>
          <h3 className="text-sm tracking-[0.3em] uppercase text-white/40 mb-6">
            Historique
          </h3>
          <div className="space-y-3">
            {pastShows.map((show, i) => (
              <motion.div
                key={show.event}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="flex items-center justify-between py-4 border-b cursor-pointer group"
                style={{ borderColor: "rgba(255,255,255,0.05)" }}
              >
                <div className="flex items-center gap-6">
                  <span
                    className="font-bebas text-lg w-12 flex-shrink-0"
                    style={{ color: "var(--red-neon)" }}
                  >
                    {show.year}
                  </span>
                  <span className="text-white/60 group-hover:text-white transition-colors text-sm">
                    {show.event}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-white/30 text-xs">
                  <MapPin size={10} />
                  <span>{show.city}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
