/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description HeroSection — Vano Baby Website
 * @created 2026-03-24
 */
"use client";

import { motion } from "framer-motion";
import { Play, Calendar } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Vano Baby en concert"
          fill
          priority
          className="object-cover object-center opacity-30"
          style={{ filter: "saturate(0.8) brightness(0.7)" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, rgba(8,8,8,0.95) 40%, rgba(8,8,8,0.4) 100%)"
        }} />
        {/* Red glow bottom */}
        <div className="absolute bottom-0 inset-x-0 h-1/3" style={{
          background: "linear-gradient(to top, rgba(139,0,0,0.25), transparent)"
        }} />
      </div>

      {/* Smoke/radial effects */}
      <div className="smoke-bg z-0" />

      {/* Animated red line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
        className="absolute left-0 right-0 bottom-0 h-[1px] origin-left z-10"
        style={{ background: "linear-gradient(90deg, var(--red-neon), transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm tracking-[0.3em] uppercase font-medium text-red-400">
              Artiste Officiel · Bénin
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="font-bebas leading-none mb-2"
            style={{ fontSize: "clamp(5rem, 14vw, 11rem)", letterSpacing: "0.04em" }}
          >
            <span className="glow-red text-white">VANO</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8, ease: "easeOut" }}
            className="font-bebas leading-none mb-6"
            style={{ fontSize: "clamp(5rem, 14vw, 11rem)", letterSpacing: "0.04em", color: "var(--red-neon)" }}
          >
            BABY
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="text-base md:text-lg font-medium mb-3 text-white/70 tracking-widest uppercase"
          >
            Azéto Gbèdè · Sorcier Vivant
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="text-sm text-white/40 tracking-wider mb-10"
          >
            3× Artiste de l&apos;Année au Bénin · 10 ans de carrière
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://www.youtube.com/@vanobaby"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon flex items-center gap-2 cursor-pointer"
              aria-label="Écouter Vano Baby sur YouTube"
            >
              <Play size={16} fill="white" />
              Écouter Maintenant
            </a>
            <a
              href="#contact"
              className="btn-outline flex items-center gap-2 cursor-pointer"
              aria-label="Réserver Vano Baby pour un concert"
            >
              <Calendar size={16} />
              Réserver un Concert
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex items-center gap-6 mt-12"
          >
            {[
              { num: "10+", label: "Ans de carrière" },
              { num: "3×", label: "Artiste de l'Année" },
              { num: "2M+", label: "Fans & Followers" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-bebas text-2xl"
                  style={{ color: "var(--red-neon)" }}
                >
                  {stat.num}
                </div>
                <div className="text-xs text-white/40 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-white/30 tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-8"
          style={{ background: "linear-gradient(to bottom, var(--red-neon), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
