/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description MusiqueSection — Spotlight Rhythm & Interactive Tracks
 * @created 2026-03-24
 * @updated 2026-03-24 Integrated real YouTube links from lib/data.ts
 */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Play, ExternalLink } from "lucide-react";
import { TRACKS_HITS, TRACKS_RECENT, SOCIALS, ARTIST } from "@/lib/data";

interface MusiqueSectionProps {
   isPageTitle?: boolean;
}

export function MusiqueSection({ isPageTitle = false }: MusiqueSectionProps) {
   const ref = useRef(null);
   const inView = useInView(ref, { once: true, margin: "-100px" });
   const HeadingTag = isPageTitle ? "h1" : "h2";

   return (
      <section id="musique" ref={ref} className="relative section-padding bg-bg-secondary overflow-hidden">
         <div className="absolute top-0 left-0 opacity-[0.03] select-none pointer-events-none px-4 lg:px-20">
            <span className="font-bebas text-[15rem] lg:text-[25rem] leading-none text-white tracking-[0.2em] whitespace-nowrap">DISCO</span>
         </div>

         <div className="container-custom relative z-10">
            <div className="flex flex-col lg:flex-row items-end justify-between gap-12 lg:gap-20 mb-20 lg:mb-32">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="flex-1 max-w-3xl"
               >
                  <span className="section-subtitle">Discographie</span>
                  <HeadingTag className="section-title text-white">
                     Le Son <br />
                     <span className="text-red-700">du Ghetto</span>
                  </HeadingTag>
                  <p className="text-base sm:text-xl text-text-secondary mt-8 leading-relaxed border-l border-red-600/30 pl-8">
                     Parcourez les hits légendaires et les dernières sorties du <span className="text-white font-bold">Gang</span>.
                     Cliquez sur un titre pour ouvrir le clip officiel.
                  </p>
               </motion.div>

               <motion.a
                  href={SOCIALS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center gap-6 px-10 py-5 bg-red-600/5 border border-red-600/20 text-white hover:bg-red-600 hover:glow-box-red transition-all duration-300 min-h-[56px] outline-none"
                  aria-label="Chaîne YouTube Officielle"
               >
                  <span className="text-xs font-bold uppercase tracking-[0.4em]">YouTube Official</span>
                  <Play size={16} className="fill-current" />
               </motion.a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
               {/* Spotlight DIYØ */}
               <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:col-span-12 xl:col-span-5 space-y-8"
               >
                  <h3 className="section-subtitle !text-white/50">Spotlight</h3>
                  <a
                     href="https://www.youtube.com/watch?v=DtIqJ3m6R30"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group relative block aspect-square md:aspect-[4/3] xl:aspect-square overflow-hidden rounded-sm border border-white/5 shadow-2xl bg-black outline-none"
                  >
                     <Image
                        src="/images/music_cover.png"
                        alt="Album Cover — DIYØ Vano Baby"
                        fill
                        className="object-cover group-hover:scale-105 transition-all duration-1000 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                     />
                     <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-black via-black/50 to-transparent">
                        <div className="flex items-center justify-between gap-4">
                           <div>
                              <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-2 block">Culte / 2022</span>
                              <h4 className="font-bebas text-4xl md:text-6xl text-white tracking-widest leading-none mb-4 uppercase">DIYØ</h4>
                           </div>
                           <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-red-600 glow-box-red group-hover:scale-110 transition-transform duration-500">
                              <Play size={24} className="text-white fill-current translate-x-1" />
                           </div>
                        </div>
                     </div>
                  </a>
                  <p className="text-sm md:text-lg text-text-secondary leading-relaxed font-light italic border-l border-white/5 pl-8 uppercase tracking-widest font-bold">
                     "Diyo est plus qu'un son, c'est une transition spirituelle."
                  </p>
               </motion.div>

               {/* Grid of tracks */}
               <div className="lg:col-span-12 xl:col-span-7 space-y-12">
                  <h3 className="section-subtitle !text-white/50">Histoires de Rue — Top Hits</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                     {TRACKS_HITS.slice(0, 6).map((track, i) => (
                        <motion.a
                           key={track.title}
                           href={track.youtubeUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           initial={{ opacity: 0, x: 20 }}
                           animate={inView ? { opacity: 1, x: 0 } : {}}
                           transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                           className="glass-card group flex items-center justify-between p-7 md:p-10 cursor-pointer rounded-sm outline-none"
                           aria-label={`Écouter ${track.title} sur YouTube`}
                        >
                           <div className="space-y-1">
                              <span className="text-[8px] font-bold text-red-500 bg-red-600/10 px-2 py-0.5 rounded-sm uppercase tracking-widest border border-red-600/10">{track.tag}</span>
                              <h4 className="font-bebas text-2xl md:text-3xl text-white group-hover:text-red-500 transition-colors uppercase tracking-widest leading-none mt-3">{track.title}</h4>
                              <span className="block text-[10px] text-white/70 font-bold tracking-widest mt-1 uppercase">{track.year} • {ARTIST.stageName}</span>
                           </div>
                           <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all opacity-20 group-hover:opacity-100 duration-500">
                              <Play size={16} className="text-white fill-current group-hover:fill-white translate-x-0.5" />
                           </div>
                        </motion.a>
                     ))}
                  </div>

                  {/* Recent drops */}
                  <div className="pt-16 border-t border-white/5 space-y-10">
                     <span className="block text-[10px] uppercase font-bold text-white/60 tracking-[0.4em]">Sorties Récentes du Ghetto</span>
                     <div className="flex flex-col gap-6">
                        {TRACKS_RECENT.map((track, i) => (
                           <a
                              key={track.title}
                              href={track.youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between group cursor-pointer border-b border-white/[0.04] pb-6 hover:border-red-600/50 transition-all duration-300 outline-none"
                           >
                              <div className="flex items-center gap-8 md:gap-12">
                                 <span className="text-sm font-bebas text-white/60">0{i + 1}</span>
                                 <h4 className="font-bebas text-2xl md:text-3xl text-white group-hover:text-red-500 transition-colors tracking-widest uppercase">
                                    {track.title} {track.feat && <span className="text-[10px] text-white/70 font-poppins lowercase tracking-normal pl-2">{track.feat}</span>}
                                 </h4>
                              </div>
                              <div className="flex items-center gap-6">
                                 <span className="text-[10px] text-white/60 group-hover:text-white transition-colors uppercase tracking-widest font-bold font-poppins">{track.year}</span>
                                 <ExternalLink size={14} className="text-white/10 group-hover:text-red-600 transition-colors" />
                              </div>
                           </a>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
