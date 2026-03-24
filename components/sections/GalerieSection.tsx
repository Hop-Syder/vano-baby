/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description GalerieSection — Varied Grid Rhythm Responsive (Updated with Top Viewed Videos)
 * @created 2026-03-24
 * @updated 2026-03-24 Integration of Official IDs (Do Bandit Min - ppiPCJrTO2I) & Cleanup
 */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Play, ExternalLink, Camera } from "lucide-react";

// Top Viewed Official YouTube Videos (Clean & Synchronized)
const videos = [
   { id: "lcmT2sUppFA", label: "Fitè (Clip Officiel)", type: "13M+ Vues", featured: true },
   { id: "Y5BzevHKj70", label: "Russie (feat. HIMRA)", type: "8.4M+ Vues", featured: false },
   { id: "KXmn-LWazy8", label: "DIYO", type: "6M+ Vues", featured: false },
   { id: "ppiPCJrTO2I", label: "Do Bandit Min (Clip Officiel)", type: "4.1M+ Vues", featured: true },
   { id: "L6B4MsYQ8Fk", label: "Tu mérites tout (Clip Officiel)", type: "4.2M+ Vues", featured: false },
   { id: "FIO_LoEDW8g", label: "C'est Toi", type: "4.7M+ Vues", featured: false },
   { id: "Y5BzevHKj70", label: "Week End Mood", type: "4.6M+ Vues", featured: false },
   { id: "DfzVN2aAfg0", label: "Enfant de Dieu (Clip Officiel)", type: "1.8M+ Vues", featured: false },
   { id: "QbstAWxoU24", label: "Bô Ébi", type: "2.7M+ Vues", featured: false },
];

const YtIcon = ({ size = 20 }: { size?: number }) => (
   <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.7a2.99 2.99 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.6A2.99 2.99 0 0 0 .5 6.7 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.3 2.99 2.99 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.6a2.99 2.99 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.3z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0f0f0f" />
   </svg>
);

interface GalerieSectionProps {
   isPageTitle?: boolean;
}

export function GalerieSection({ isPageTitle = false }: GalerieSectionProps) {
   const ref = useRef(null);
   const inView = useInView(ref, { once: true, margin: "-100px" });
   const HeadingTag = isPageTitle ? "h1" : "h2";

   return (
      <section id="galerie" ref={ref} className="relative section-padding overflow-hidden bg-bg-primary">
         <div className="absolute top-1/4 right-[-5%] opacity-[0.02] select-none pointer-events-none hidden xl:block">
            <span className="font-bebas text-[20rem] leading-none text-white tracking-[0.2em] whitespace-nowrap rotate-[-90deg]">VISUALS</span>
         </div>

         <div className="container-custom relative z-10">
            <div className="flex flex-col md:flex-row items-end justify-between gap-12 lg:gap-20 mb-20 lg:mb-32">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl"
               >
                  <span className="section-subtitle">Visual Hall of Fame</span>
                  <HeadingTag className="section-title text-white mb-6">
                     Top <br />
                     <span className="text-red-700 italic">Vidéos</span>
                  </HeadingTag>
                  <p className="text-base sm:text-xl text-text-secondary leading-relaxed border-l border-red-600/30 pl-8">
                     Découvrez les clips les plus visionnés de <span className="text-white font-bold">Vano Baby</span>.
                     Des millions de vues qui témoignent de l'impact du <span className="text-red-600 uppercase font-bold px-1 italic">Gang</span> sur la culture urbaine.
                  </p>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="hidden lg:block relative p-4 border border-white/10 bg-white/[0.02] backdrop-blur-3xl rounded-sm"
               >
                  <div className="flex items-center gap-4 mb-3">
                     <Camera size={18} className="text-red-600" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Exclusive Archive</span>
                  </div>
                  <div className="relative w-56 aspect-[4/3] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 cursor-help">
                     <Image
                        src="/images/gallery_backstage.png"
                        alt="Archive Session"
                        fill
                        className="object-cover brightness-50 contrast-125"
                        sizes="250px"
                     />
                     <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
                  </div>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
               {videos.map((vid, i) => {
                  const isFeatured = vid.featured;
                  const gridClass = isFeatured ? "lg:col-span-8 lg:row-span-2" : "lg:col-span-4 lg:row-span-1";

                  return (
                     <motion.a
                        key={vid.id + i}
                        href={`https://www.youtube.com/watch?v=${vid.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className={`${gridClass} glass-card relative flex flex-col items-center justify-center cursor-pointer group overflow-hidden min-h-[300px] border border-white/5 rounded-sm outline-none`}
                        aria-label={`Regarder le Clip ${vid.label} sur YouTube`}
                        suppressHydrationWarning
                     >
                        <div className="absolute inset-0 z-0 bg-bg-secondary">
                           <Image
                              src={`https://img.youtube.com/vi/${vid.id}/maxresdefault.jpg`}
                              alt={vid.label}
                              fill
                              className="object-cover grayscale brightness-[0.25] group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-1000"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                           />
                        </div>
                        <div className="relative z-10 flex flex-col items-center gap-6 text-center px-8 group-hover:translate-y-[-5px] transition-transform duration-500">
                           <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md group-hover:bg-red-600 group-hover:glow-box-red transition-all duration-500">
                              <Play size={24} className="text-white fill-current translate-x-0.5" />
                           </div>
                           <div className="space-y-3">
                              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-red-500 bg-red-600/10 px-4 py-1.5 border border-red-600/20 inline-block font-poppins">{vid.type}</span>
                              <h3 className={`font-bebas text-white group-hover:text-red-500 transition-colors tracking-widest leading-none ${isFeatured ? 'text-4xl md:text-7xl lg:text-8xl' : 'text-2xl md:text-4xl'}`}>
                                 {vid.label}
                              </h3>
                           </div>
                        </div>
                        <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 hidden md:block">
                           <div className="bg-red-600 p-2.5 rounded-sm shadow-2xl"><ExternalLink size={16} color="white" /></div>
                        </div>
                     </motion.a>
                  );
               })}
            </div>

            <div className="mt-32 pt-20 border-t border-white/5 flex flex-col items-center">
               <motion.a
                  href="https://www.youtube.com/@VANOBABY"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-8 group cursor-pointer outline-none p-4"
                  aria-label="S'abonner à la chaîne YouTube officielle de Vano Baby"
               >
                  <div className="relative w-28 h-28 flex items-center justify-center bg-white/[0.03] border border-white/10 rounded-full transition-all duration-700 group-hover:border-red-600/50 group-hover:glow-box-red group-hover:bg-red-600/5">
                     <YtIcon size={48} />
                     <div className="absolute inset-[-10px] rounded-full border border-red-600/10 animate-ping opacity-0 group-hover:opacity-100" />
                  </div>
                  <div className="text-center space-y-2">
                     <span className="block text-lg font-bebas text-white tracking-[0.4em] uppercase">Vano Baby Official</span>
                     <span className="block text-[10px] font-bold text-white/30 uppercase tracking-[0.6em] group-hover:text-red-600 transition-colors">Digital Dominance</span>
                  </div>
               </motion.a>
            </div>
         </div>
      </section>
   );
}
