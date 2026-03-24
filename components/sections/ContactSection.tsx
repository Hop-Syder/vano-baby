/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description ContactSection — Booking & Contact Vano Baby
 * @created 2026-03-24
 */
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, MessageCircle } from "lucide-react";
// Icônes sociales SVG inline (Instagram, Facebook, YouTube non disponibles dans lucide-react)
const IgIcon = ({ size = 18, color = 'white' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" fill="none" stroke={color} strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1" fill={color}/>
  </svg>
);
const FbIcon = ({ size = 18, color = 'white' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

// SVG YouTube inline
const YtIcon = ({ size = 18, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M23.5 6.7a2.99 2.99 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.6A2.99 2.99 0 0 0 .5 6.7 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.3 2.99 2.99 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.6a2.99 2.99 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.3z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0f0f0f"/>
  </svg>
);

const socials = [
  {
    icon: IgIcon,
    label: "Instagram",
    handle: "@vanobaby_officiel",
    href: "https://www.instagram.com/vanobaby_officiel",
    color: "#E1306C",
  },
  {
    icon: FbIcon,
    label: "Facebook",
    handle: "Vano Baby",
    href: "https://www.facebook.com/vanobaby",
    color: "#1877F2",
  },
  {
    icon: YtIcon,
    label: "YouTube",
    handle: "@vanobaby",
    href: "https://www.youtube.com/@vanobaby",
    color: "#FF0000",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "", type: "booking" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler l'envoi — à connecter à un backend Node.js
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(139,0,0,0.1) 0%, transparent 60%)",
        }}
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
            Booking &amp; Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tra<span style={{ color: "var(--red-neon)" }}>vaillons</span> Ensemble
          </h2>
          <p className="text-white/40 max-w-md mx-auto">
            Pour des bookings, collaborations ou partenariats — contactez-nous directement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Type selector */}
              <div className="flex gap-3">
                {["booking", "collaboration", "autre"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormState((prev) => ({ ...prev, type }))}
                    className={`flex-1 py-2 text-xs tracking-wider uppercase rounded-sm transition-all duration-200 cursor-pointer ${
                      formState.type === type
                        ? "bg-red-600 text-white"
                        : "glass-card text-white/40 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div>
                <label htmlFor="name" className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                  Nom complet *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 text-white text-sm placeholder-white/20 rounded-sm outline-none transition-all duration-200 focus:glow-border"
                  placeholder="Votre nom"
                  style={{
                    background: "rgba(20,20,20,0.8)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                  Email professionnel *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 text-white text-sm placeholder-white/20 rounded-sm outline-none transition-all duration-200"
                  placeholder="votre@email.com"
                  style={{
                    background: "rgba(20,20,20,0.8)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 text-white text-sm placeholder-white/20 rounded-sm outline-none transition-all duration-200 resize-none"
                  placeholder="Décrivez votre projet, date, lieu, budget..."
                  style={{
                    background: "rgba(20,20,20,0.8)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
              </div>

              <button
                type="submit"
                className={`btn-neon w-full flex items-center justify-center gap-2 cursor-pointer ${
                  sent ? "opacity-70" : ""
                }`}
                disabled={sent}
              >
                {sent ? (
                  "Message envoyé ✓"
                ) : (
                  <>
                    <Send size={16} />
                    Envoyer le Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right side — infos */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* WhatsApp CTA */}
            <div className="glass-card p-6 cursor-pointer" style={{ border: "1px solid rgba(37,211,102,0.2)" }}>
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <MessageCircle size={18} color="#25D366" />
                Contact Rapide — WhatsApp
              </h3>
              <p className="text-xs text-white/40 mb-4">
                Pour les demandes urgentes ou questions rapides, écrivez directement.
              </p>
              <a
                href="https://wa.me/22900000000?text=Bonjour%2C+je+souhaite+booker+Vano+Baby"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 flex items-center justify-center gap-2 rounded-sm text-sm font-semibold cursor-pointer transition-all duration-300 hover:opacity-90"
                style={{ background: "#25D366", color: "white" }}
                aria-label="Contacter Vano Baby sur WhatsApp"
              >
                <MessageCircle size={16} />
                WhatsApp Manager
              </a>
            </div>

            {/* Gang section */}
            <div className="glass-card p-6" style={{ border: "1px solid rgba(255,26,26,0.2)" }}>
              <h3 className="font-bebas text-2xl text-white mb-2">
                REJOINS <span style={{ color: "var(--red-neon)" }}>LE GANG</span>
              </h3>
              <p className="text-xs text-white/40 mb-4">
                Fais partie de la communauté officielle de Vano Baby — les fans les plus proches de l&apos;artiste.
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, handle, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col items-center gap-2 py-3 rounded-sm cursor-pointer transition-all duration-200 hover:opacity-80"
                    style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                    aria-label={`${label} de Vano Baby`}
                  >
                    <Icon size={18} color={color} />
                    <span className="text-[10px] text-white/40">{handle}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Manager info */}
            <div className="text-sm text-white/30 space-y-1">
              <p className="text-xs uppercase tracking-wider text-white/20 mb-2">Manager / Booking</p>
              <p>📧 booking@vanobaby.bj</p>
              <p>📞 +229 00 00 00 00</p>
              <p>📍 Cotonou, Bénin</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
