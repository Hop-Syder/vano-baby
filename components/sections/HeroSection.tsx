/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description HeroSection — Landing Ultra-Rhythmic & Responsive
 * @created 2026-03-24
 * @updated 2026-03-24 Optimization Clamp Typography, Responsive Spacing & A11y
 */
"use client";

import { motion } from "framer-motion";
import { Play, TrendingUp, Mic2, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ARTIST, SOCIALS } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Vano Baby Official Background"
          fill
          className="object-cover grayscale brightness-[0.25] contrast-125 animate-ken-burns"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40" />
      </div>

      <div className="relative z-10 container-custom flex flex-col items-center text-center">
        {/* Top Feature Tagline */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12"
        >
          <Star size={12} className="text-red-500 fill-red-500" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.5em] text-white/80">
             AZÉTO GBÈDÈ • L'OFFICIEL DU GHETTO
          </span>
        </motion.div>

        {/* Impact Title with Clamp */}
        <div className="relative mb-16">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="font-bebas-hero text-white"
          >
            <span className="block drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]">VANO</span>
            <span className="block text-red-600 drop-shadow-[0_0_40px_rgba(255,26,26,0.3)] mt-[-0.15em]">BABY</span>
          </motion.h1>
          
          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 1 }}
             className="text-xs sm:text-lg md:text-2xl font-medium tracking-[0.6em] text-white/40 uppercase mt-4 italic"
          >
             Sorcier Vivant · Survivant
          </motion.p>
        </div>

        {/* Primary/Secondary CTA Rhythm */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link
             href="/contact"
             className="btn-primary group w-full sm:w-auto"
             aria-label="Réserver Vano Baby pour un événement — Booking"
          >
            <Mic2 size={18} className="mr-3 transition-transform group-hover:rotate-12" />
            BOOKING MANAGER
          </Link>

          <a
            href={SOCIALS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group w-full sm:w-auto"
            aria-label="Regarder les clips officiels de Vano Baby sur YouTube"
          >
            <Play size={18} className="mr-3 text-red-600 fill-red-600" />
            DERNIERS CLIPS
          </a>
        </motion.div>

        {/* Footer Metrics for Rhythm */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 2, delay: 1.5 }}
           className="hidden md:flex gap-20 mt-24 pt-10 border-t border-white/5 opacity-40 hover:opacity-100 transition-opacity"
        >
           <div className="flex items-center gap-4 text-left">
              <TrendingUp size={24} className="text-red-700" />
              <div className="leading-tight">
                <span className="block text-2xl font-bebas text-white">#1</span>
                <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Charts Bénin</span>
              </div>
           </div>
           <div className="flex items-center gap-4 text-left">
              <TrendingUp size={24} className="text-red-700" />
              <div className="leading-tight">
                <span className="block text-2xl font-bebas text-white">45M+</span>
                <span className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Impact YouTube</span>
              </div>
           </div>
        </motion.div>
      </div>

      {/* Aesthetic Floating Watermark — Background noise */}
      <div className="absolute left-[3%] top-[30%] opacity-[0.03] rotate-[-90deg] select-none pointer-events-none hidden lg:block">
         <span className="font-bebas text-[15rem] text-white leading-none whitespace-nowrap">SURVIVANT</span>
      </div>
    </section>
  );
}
