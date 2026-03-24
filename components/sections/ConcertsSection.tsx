/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description ConcertsSection — Tour Dates Rhythm & Responsive Tables
 * @created 2026-03-24
 * @updated 2026-03-24 Responsive Table Stacking, Touch targets 48px, Clamp Typography
 */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowUpRight, History, Ticket } from "lucide-react";
import { CONCERTS_UPCOMING, CONCERTS_PAST, CONTACT, ARTIST, SOCIALS } from "@/lib/data";

export function ConcertsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="concerts" ref={ref} className="relative section-padding overflow-hidden bg-bg-primary">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/concert_crowd.png"
          alt="Public Concert Vano Baby — Énergie pure"
          fill
          className="object-cover grayscale opacity-[0.2] brightness-75 animate-ken-burns"
          sizes="100vw"
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">
          
          {/* Main Content Column (70%) */}
          <div className="flex-[2] w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="section-subtitle">Sur Scène</span>
              <h2 className="section-title text-white mb-6">Prochaines <br />
                <span className="text-red-700">Explosions</span>
              </h2>
              <p className="text-lg sm:text-2xl text-text-secondary leading-relaxed mb-16 max-w-2xl font-light italic border-l border-red-600/30 pl-8">
                 Vibrez avec <span className="text-white font-bold">{ARTIST.stageName}</span> à travers le monde. 
                 Des performances électriques et une communion totale avec le Gang.
              </p>
            </motion.div>

            {/* Tour Dates List — Stacks on Mobile, Table on Desktop */}
            <div className="space-y-4">
               {CONCERTS_UPCOMING.map((concert, i) => (
                 <motion.div
                    key={concert.city + concert.date}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.15, duration: 0.8 }}
                    className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] backdrop-blur-md transition-all duration-300 rounded-sm"
                 >
                    {/* Date Column */}
                    <div className="flex items-center gap-6">
                       <span className="font-bebas text-4xl sm:text-5xl text-white group-hover:text-red-600 transition-colors uppercase tracking-widest leading-none">
                          {concert.date}
                       </span>
                       <div className="h-10 w-[1px] bg-red-600/20 hidden sm:block" />
                       <div className="space-y-1">
                          <span className="block text-xl font-bebas text-white tracking-widest uppercase leading-none">{concert.city} <span className="text-[10px] text-white/30 font-poppins">{concert.country}</span></span>
                          <span className="block text-[10px] text-white/40 uppercase tracking-widest font-bold font-poppins">{concert.venue}</span>
                       </div>
                    </div>

                    {/* Meta & CTA Column — Mobile accessible 48px min height targets */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-10">
                       <div className="hidden md:flex flex-col items-end">
                          <span className="text-[9px] font-bold text-red-600 uppercase tracking-widest mb-1">{concert.type}</span>
                          <span className={`text-[10px] font-bold uppercase tracking-widest ${concert.confirmed ? 'text-green-500/60' : 'text-white/20'}`}>
                             {concert.confirmed ? '• Confirmé' : '• Optionné'}
                          </span>
                       </div>
                       
                       <a
                          href={concert.ticketUrl || SOCIALS.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-3 bg-red-600 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-red-500 transition-all flex items-center justify-center gap-3 w-full sm:w-auto min-h-[48px]"
                          aria-label={`Réserver vos billets pour le concert à ${concert.city}`}
                       >
                          BILLETTERIE <Ticket size={14} />
                       </a>
                    </div>
                    {/* Decorative accent for rhythm */}
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-red-600 opacity-0 group-hover:opacity-100 transition-all" />
                 </motion.div>
               ))}
            </div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={inView ? { opacity: 1 } : {}}
               transition={{ delay: 1, duration: 1 }}
               className="mt-16 flex items-center justify-center lg:justify-start"
            >
               <Link href="/contact" className="inline-flex items-center gap-4 group cursor-pointer p-4 hover:bg-white/5 rounded-sm transition-colors decoration-slice outline-none">
                  <span className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-red-500 transition-colors">Voir l'historique complet</span>
                  <History size={16} className="text-white/20 group-hover:text-red-500 group-hover:rotate-12 transition-all" />
               </Link>
            </motion.div>
          </div>

          {/* Sidebar Info (30%) — Rhythm Breaker */}
          <div className="flex-1 w-full lg:sticky lg:top-32 h-fit">
             <motion.div
               initial={{ opacity: 0, x: 40 }}
               animate={inView ? { opacity: 1, x: 0 } : {}}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="p-10 border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-sm"
             >
                <div className="flex items-center gap-3 mb-10">
                   <div className="w-12 h-12 bg-red-600/10 border border-red-600/30 flex items-center justify-center rounded-sm">
                      <MapPin size={24} className="text-red-600" />
                   </div>
                   <h3 className="font-bebas text-3xl text-white tracking-widest">Booking</h3>
                </div>
                
                <div className="space-y-8">
                   <div className="space-y-2">
                      <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.4em]">Management Officiel</span>
                      <p className="text-lg text-white font-medium break-all">{CONTACT.email}</p>
                   </div>
                   <div className="space-y-4">
                      <p className="text-sm text-text-secondary leading-relaxed font-light">
                         Réunions, Festivals, Showcases — Nous répondons sous 48h. 
                         Toute demande hors management officiel ne sera pas traitée.
                      </p>
                      <Link 
                        href="/contact" 
                        className="btn-neon w-full flex items-center justify-center gap-2 group min-h-[48px]"
                        aria-label="Contacter le management de Vano Baby"
                      >
                         CONTACT DIRECT <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                   </div>
                </div>

                <div className="pt-10 mt-10 border-t border-white/5 space-y-4">
                   <span className="block text-[9px] font-bold text-white/20 uppercase tracking-widest">Flashback — Hits Live</span>
                   <div className="flex flex-col gap-3">
                      {CONCERTS_PAST.slice(0, 2).map(past => (
                        <div key={past.event} className="flex items-center justify-between text-xs">
                           <span className="text-white/40">{past.year} — {past.city}</span>
                           <span className="text-white font-bebas tracking-widest">{past.event.split(' ')[0]}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </motion.div>

             <div className="absolute -z-10 -bottom-10 right-[-10%] opacity-[0.03] select-none pointer-events-none hidden lg:block">
                <span className="font-bebas text-[15rem] text-white rotate-12">ON STAGE</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
