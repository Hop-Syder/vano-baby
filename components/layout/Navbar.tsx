/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Navbar — Navigation Responsive Optimisée (Fix Mobile Menu Visibility)
 * @created 2026-03-24
 * @updated 2026-03-24 Fix Z-Index Mobile Menu & Visibility on Scroll
 */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ARTIST, SOCIALS } from "@/lib/data";

// Custom SVG Icons
const IgIcon = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x2="22" y2="22" x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
const FbIcon = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
const YtIcon = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
  </svg>
);

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Musique", href: "/musique" },
  { name: "Galerie", href: "/galerie" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled || isOpen ? "py-4 bg-bg-primary/95 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
        }`}
        aria-label="Navigation principale"
      >
        <div className="container-custom flex items-center justify-between">
          
          {/* Logo Identity */}
          <Link href="/" className="group flex items-center gap-3 outline-none" aria-label="Retour à l'accueil">
            <div className={`w-10 h-10 ${isOpen ? 'bg-white' : 'bg-red-600'} flex items-center justify-center rounded-sm rotate-45 group-hover:rotate-0 transition-all duration-500`}>
               <span className={`font-righteous text-2xl ${isOpen ? 'text-red-600' : 'text-white'} -rotate-45 group-hover:rotate-0 transition-all`}>V</span>
            </div>
            <div>
              <span className="block font-bebas text-xl md:text-2xl text-white tracking-widest leading-none">
                {ARTIST.stageName.split(' ')[0]} <span className="text-red-600">{ARTIST.stageName.split(' ')[1]}</span>
              </span>
              <span className="block text-[8px] uppercase tracking-[0.4em] text-white/30 font-bold">Official Site</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-3 text-[11px] font-bold uppercase tracking-[0.4em] transition-all duration-300 hover:text-red-500 rounded-sm focus-visible:bg-white/5 ${
                  pathname === link.href ? "text-red-500" : "text-white/70"
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                     layoutId="nav-underline"
                     className="absolute bottom-0 left-4 right-4 h-[1px] bg-red-600"
                  />
                )}
              </Link>
            ))}
            
            <Link 
               href="/contact" 
               className="ml-6 px-8 py-3 bg-red-600 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-red-500 transition-all shadow-lg min-h-[44px] flex items-center"
            >
               BOOKING
            </Link>
          </div>

          {/* Mobile Toggle — Z-Index higher than overlay to allow closing */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white flex items-center justify-center w-12 h-12 hover:bg-white/5 rounded-sm transition-colors focus-visible:outline-red-500 z-[110]"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen — Fixed to viewport and High Z-Index */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[90] bg-bg-primary flex flex-col items-center justify-center p-12"
            role="dialog"
            aria-modal="true"
          >
             {/* Background Decoration */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
                <span className="font-bebas text-[15rem] md:text-[25rem] text-white rotate-[-90deg] whitespace-nowrap">GANGBOY</span>
             </div>

             <nav className="relative z-10 flex flex-col items-center gap-8 md:gap-12">
                {navLinks.map((link, i) => (
                  <motion.div
                     key={link.name}
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: i * 0.1 + 0.2 }}
                  >
                     <Link
                        href={link.href}
                        className={`font-bebas text-5xl md:text-8xl transition-all duration-300 block py-2 ${
                          pathname === link.href ? "text-red-600" : "text-white hover:text-red-600/60"
                        }`}
                        aria-label={`Naviguer vers ${link.name}`}
                     >
                        {link.name}
                     </Link>
                  </motion.div>
                ))}
             </nav>

             {/* Social Footer */}
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="relative z-10 mt-20 flex gap-8 md:gap-14 pt-10 border-t border-white/5"
             >
                <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-red-500 transition-colors p-3" aria-label="Instagram"><IgIcon size={28} /></a>
                <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-red-500 transition-colors p-3" aria-label="Facebook"><FbIcon size={28} /></a>
                <a href={SOCIALS.youtube} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-red-500 transition-colors p-3" aria-label="YouTube"><YtIcon size={28} /></a>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
