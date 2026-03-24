/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description BioSection — Split Layout Rhythm Responsive
 * @created 2026-03-24
 * @updated 2026-03-24 Clamp Typography, Section-Padding & Cross-device optimization
 */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ARTIST } from "@/lib/data";

export function BioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="bio" ref={ref} className="relative section-padding bg-bg-primary overflow-hidden">
      <div className="container-custom relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* Left Side — Aesthetic Portrait with varied Rhythm */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group w-full"
        >
          <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm border border-white/10 shadow-2xl">
            <Image
              src="/images/vano-baby.png"
              alt="Portrait de Vano Baby (Sorcier Vivant)"
              fill
              className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Red accent glow */}
            <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay group-hover:bg-transparent transition-all" />
          </div>
          {/* Floating metadata for rhythm */}
          <div className="absolute -bottom-8 -right-4 md:-right-12 bg-bg-primary border border-white/5 p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-[200px] md:max-w-xs">
            <span className="block text-[10px] font-bold text-red-500 tracking-[0.4em] uppercase mb-4">L'Origine</span>
            <h3 className="text-white mb-2 leading-none">{ARTIST.origin}</h3>
            <p className="text-[10px] md:text-xs text-text-secondary italic">"On ne nait pas Sorcier Vivant, on le devient par le feu."</p>
          </div>
        </motion.div>

        {/* Right Side — High-contrast Text Layer */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="space-y-10 lg:space-y-14"
        >
          <div>
            <span className="section-subtitle">L'Histoire</span>
            <h2 className="section-title text-white mb-8">
              Au-delà de <br />
              <span className="text-red-700">la légende</span>
            </h2>
          </div>

          <div className="space-y-6 md:space-y-10">
            <p className="text-lg sm:text-2xl font-light text-white leading-relaxed border-l-2 border-red-600 pl-8 drop-shadow-sm">
              Révélé par le bitume de <span className="font-bold">{ARTIST.city}</span>,
              Vano Baby transcende le simple statut de rappeur pour devenir
              la <span className="text-red-600 font-bold uppercase italic tracking-widest">Voix du Gang</span>.
            </p>
            <div className="text-sm sm:text-lg text-text-secondary leading-loose space-y-6 font-poppins">
              {ARTIST.bio.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-16 pt-10 border-t border-white/5">
            {ARTIST.stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <span className="block font-bebas text-5xl md:text-6xl text-white tracking-widest">{stat.num}</span>
                <span className="block text-[9px] md:text-[10px] uppercase font-bold text-red-600 tracking-[0.4em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background typographic noise for rhythm */}
      <div className="absolute right-[-5%] top-[10%] opacity-[0.03] select-none pointer-events-none hidden xl:block">
        <span className="font-bebas text-[20rem] text-white leading-none whitespace-nowrap rotate-12">AZÉTO GBÈDÈ</span>
      </div>
    </section>
  );
}
