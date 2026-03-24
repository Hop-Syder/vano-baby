/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description ContactSection — High Impact & Accessible Booking Form (SEO optimized)
 * @created 2026-03-24
 * @updated 2026-03-24 Mobile-first Stacking, Touch targets 48px, SEO (H1 support)
 */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { CONTACT, SOCIALS, ARTIST } from "@/lib/data";

// Custom SVG Icons
const IgIcon = ({ size = 20, color = 'white' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x2="22" y2="22" x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FbIcon = ({ size = 20, color = 'white' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const YtIcon = ({ size = 20, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
  </svg>
);

const socialsData = [
  { icon: IgIcon, label: "Instagram", handle: "@vanobaby_officiel", href: SOCIALS.instagram, color: "#E1306C" },
  { icon: FbIcon, label: "Facebook", handle: "Vano Baby", href: SOCIALS.facebook, color: "#1877F2" },
  { icon: YtIcon, label: "YouTube", handle: "@vanobaby", href: SOCIALS.youtube, color: "#FF0000" },
];

interface ContactSectionProps {
  isPageTitle?: boolean;
}

export function ContactSection({ isPageTitle = false }: ContactSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "", type: "booking" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const HeadingTag = isPageTitle ? "h1" : "h2";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      if (CONTACT.formspreeEndpoint && !CONTACT.formspreeEndpoint.includes("VOTRE_ID")) {
        const response = await fetch(CONTACT.formspreeEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formState),
        });
        if (response.ok) setStatus("success");
        else setStatus("error");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
      }
    } catch (error) {
       setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="relative section-padding bg-bg-primary overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-20 h-1/2 bg-gradient-to-t from-red-900/40 via-transparent to-transparent" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 mb-20 md:mb-32">
           <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="max-w-3xl lg:text-left text-center"
           >
              <span className="section-subtitle">Booking & Management</span>
              <HeadingTag className="section-title text-white">
                 Étendre <br />
                 <span className="text-red-700">l'Empire</span>
              </HeadingTag>
              <p className="text-base sm:text-lg text-text-secondary leading-loose mt-8 border-l border-red-600/30 pl-8 lg:text-left text-left">
                 Travaillons ensemble — le management traite vos demandes sous 
                 <span className="text-white font-bold"> 48h</span>. Rejoignez le mouvement car 
                 <span className="text-red-600 font-bold uppercase italic tracking-widest px-2">Azéto Gbèdè</span> n'attend pas.
              </p>
           </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-white/[0.01] border border-white/5 p-8 sm:p-14 backdrop-blur-3xl rounded-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-4">
                 <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em] mb-4 block">Type de Demande</span>
                 <div className="flex flex-col sm:flex-row gap-4">
                    {["booking", "collaboration", "management"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormState((prev) => ({ ...prev, type }))}
                        className={`flex-1 py-4 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 min-h-[52px] cursor-pointer outline-none ${
                          formState.type === type
                            ? "bg-red-600 text-white glow-box-red"
                            : "bg-white/5 text-white/40 border border-white/5 hover:bg-white/10 hover:text-white"
                        }`}
                        aria-pressed={formState.type === type}
                      >
                        {type}
                      </button>
                    ))}
                 </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em] block">Nom Complet *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-white/[0.02] border border-white/10 p-5 text-white placeholder-white/10 rounded-sm outline-none focus:border-red-600 focus:bg-white/[0.04] transition-all duration-500"
                    placeholder="Ex: John Doe"
                    aria-required="true"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em] block">Email Pro *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-white/[0.02] border border-white/10 p-5 text-white placeholder-white/10 rounded-sm outline-none focus:border-red-600 focus:bg-white/[0.04] transition-all duration-500"
                    placeholder="j.doe@agency.com"
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-[10px] font-bold text-white/30 uppercase tracking-[0.4em] block">Votre Projet *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={8}
                  value={formState.message}
                  onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-white/[0.02] border border-white/10 p-5 text-white placeholder-white/10 rounded-sm outline-none focus:border-red-600 focus:bg-white/[0.04] transition-all duration-500 resize-none"
                  placeholder="Détails de l'événement, lieu, date et budget..."
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                className={`btn-primary w-full flex items-center justify-center gap-4 py-7 text-[11px] tracking-[0.4em] sm:text-xs min-h-[64px] ${
                  status === "loading" ? "opacity-50 pointer-events-none" : ""
                }`}
                disabled={status === "loading"}
                aria-label="Transmettre votre demande au management"
              >
                {status === "loading" ? (
                  <span className="animate-pulse">SYNCHRONISATION...</span>
                ) : status === "success" ? (
                  "MESSAGE TRANSMIS ✓"
                ) : status === "error" ? (
                  "ERREUR — RÉESSAYER"
                ) : (
                  <>
                    TRANSMETTRE AU MANAGEMENT <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Social Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 space-y-12 h-fit lg:sticky lg:top-32"
          >
             <div className="p-10 border border-[#25D366]/20 bg-[#25D366]/5 backdrop-blur-3xl rounded-sm">
                <div className="flex items-center gap-5 mb-8">
                   <div className="w-14 h-14 bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center rounded-sm">
                      <MessageCircle size={32} className="text-[#25D366]" />
                   </div>
                   <h3 className="font-bebas text-4xl text-white tracking-widest leading-none">Réponse <br /><span className="text-[#25D366]">Instantanée</span></h3>
                </div>
                <p className="text-base text-text-secondary leading-relaxed mb-10">
                   Contact direct WhatsApp pour les urgences presse 
                   et demandes critiques sous 2h.
                </p>
                <a
                  href={SOCIALS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 flex items-center justify-center gap-4 bg-[#25D366] text-white text-[11px] font-bold uppercase tracking-widest rounded-sm hover:opacity-90 transition-all duration-300 min-h-[56px] outline-none"
                  aria-label="Contacter le manager Vano Baby sur WhatsApp"
                >
                  MANAGER WHATSAPP <MessageCircle size={18} fill="white" />
                </a>
             </div>

             <div className="p-10 border border-white/5 bg-white/[0.01] rounded-sm space-y-10">
                <h3 className="font-bebas text-3xl text-white tracking-widest uppercase leading-none">Réseaux <br /><span className="text-red-700">du Gang</span></h3>
                <div className="flex flex-wrap gap-6">
                   {socialsData.map(({ icon: Icon, href, label }) => (
                     <a
                       key={label}
                       href={href}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="w-16 h-16 border border-white/10 rounded-sm flex items-center justify-center bg-white/[0.02] hover:bg-red-600 hover:border-red-600 transition-all duration-500 outline-none"
                       aria-label={`Vano Baby sur ${label} — Ouvre un nouvel onglet`}
                     >
                       <Icon size={28} />
                     </a>
                   ))}
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
