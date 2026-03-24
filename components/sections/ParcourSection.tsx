/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description ParcourSection — Timeline Rhythm (Fixed imports)
 * @created 2026-03-24
 * @updated 2026-03-24 Fixed TIMELINE import & field names
 */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TIMELINE } from "@/lib/data";

export function ParcourSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="parcours" ref={ref} className="relative section-padding overflow-hidden bg-bg-primary">
      {/* Decorative center line for the timeline */}
      <div className="absolute left-1/2 top-[20%] bottom-[10%] w-[1px] bg-red-600/10 hidden md:block" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={inView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle">Les Grandes Étapes</span>
            <h2 className="section-title text-white">
               L'Héritage du <span className="text-red-700">Gang</span>
            </h2>
          </motion.div>
        </div>

        <div className="space-y-16 md:space-y-32">
          {TIMELINE.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 ${isEven ? 'md:text-right' : 'md:flex-row-reverse md:text-left'}`}
              >
                {/* Year Badge Column */}
                <div className="flex-1 w-full order-1 md:order-none">
                  <div className="space-y-4">
                     <span className="font-bebas text-6xl md:text-9xl text-white/5 group-hover:text-red-600/20 transition-colors pointer-events-none select-none drop-shadow-[0_0_20px_rgba(255,26,26,0.1)]">
                        {item.year}
                     </span>
                     <h3 className="font-bebas text-3xl md:text-5xl text-white tracking-widest leading-none">
                        {item.title}
                     </h3>
                  </div>
                </div>

                {/* Vertical Marker (Mobile and Desktop) */}
                <div className="relative flex-none hidden md:flex items-center justify-center">
                   <div className="w-4 h-4 rounded-full bg-bg-primary border-4 border-red-600 z-10 shadow-[0_0_15px_rgba(255,26,26,0.5)]" />
                   {/* Connection line horizontal */}
                   <div className={`absolute top-1/2 w-12 h-[1px] bg-red-600/30 ${isEven ? 'left-4' : 'right-4'}`} />
                </div>

                {/* Content Story column */}
                <div className="flex-1 w-full space-y-4 order-2 md:order-none bg-white/[0.01] p-8 md:p-0 border border-white/5 md:border-none">
                   <p className="text-text-secondary text-base md:text-lg font-light leading-relaxed">
                      {item.description}
                   </p>
                   {/* Specific details from data.ts if available */}
                   <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="text-[10px] font-bold text-red-500 bg-red-600/10 px-3 py-1 uppercase tracking-widest border border-red-600/20">
                         Azéto Gbèdè
                      </span>
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Floating background graphic to fill the void */}
        <div className="absolute left-[10%] bottom-0 opacity-[0.03] select-none pointer-events-none">
           <span className="font-bebas text-[10rem] text-white rotate-[-90deg] inline-block">HISTORY</span>
        </div>
      </div>
    </section>
  );
}
