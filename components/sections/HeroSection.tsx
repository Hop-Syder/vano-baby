/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description HeroSection — Landing Ultra-Rhythmic & Responsive
 * @created 2026-03-24
 * @updated 2026-03-24 Optimization Clamp Typography, Responsive Spacing & A11y
 */
"use client";

import { motion } from "framer-motion";
import { Play, TrendingUp, Mic2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SOCIALS } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">

      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heros.png"
          alt="Vano Baby Official Background"
          fill
          className="object-cover grayscale brightness-[0.25] contrast-125 animate-ken-burns"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/20" />
      </div>


      <div className="relative z-10 container-custom flex min-h-[100dvh] sm:min-h-0 w-full flex-col items-center justify-center text-center py-10 sm:py-12">
        {/* Titre — plus compact sur mobile, centré */}
        <div className="relative mt-20 sm:mt-24 md:mt-32 lg:mt-24 xl:mt-20 mb-12 md:mb-16 lg:mb-6 xl:mb-5 w-full max-w-full flex flex-col items-center text-center px-1">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="font-bebas text-white leading-[0.82] tracking-[-0.02em] text-[clamp(3.35rem,14vw,4.6rem)] md:text-[clamp(4.75rem,19vw,12rem)] lg:text-[clamp(5.25rem,22vw,12.5rem)]"
          >
            <span className="block drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]">VANO</span>
            <span className="block text-red-600 drop-shadow-[0_0_40px_rgba(255,26,26,0.3)] mt-[-0.15em]">BABY</span>
          </motion.h1>

        </div>

        <div className="flex w-full max-w-full flex-col items-center gap-8 py-[15px] lg:flex-row lg:flex-nowrap lg:items-center lg:justify-center lg:gap-12 xl:gap-16">
          {/* Primary/Secondary CTA Rhythm */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex w-full flex-col items-stretch gap-6 sm:flex-row sm:items-center sm:justify-center lg:w-auto"
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
            transition={{ duration: 2, delay: 1.3 }}
            className="flex w-full flex-row flex-wrap justify-center gap-10 border-t border-white/5 pt-8 opacity-40 transition-opacity hover:opacity-100 sm:gap-16 md:gap-20 lg:mt-0 lg:w-auto lg:flex-nowrap lg:justify-start lg:border-t-0 lg:border-l lg:border-white/5 lg:pt-0 lg:pl-10 xl:pl-12"
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
      </div>

      {/* Aesthetic Floating Watermark — Background noise */}
      <div className="absolute left-[3%] top-[30%] opacity-[0.03] rotate-[-90deg] select-none pointer-events-none hidden lg:block">
        <span className="font-bebas text-[15rem] text-white leading-none whitespace-nowrap">SURVIVANT</span>
      </div>
    </section>
  );
}
