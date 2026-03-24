/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Navbar — Site Vano Baby
 * @created 2026-03-24
 */
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Bio", href: "#bio" },
  { label: "Parcours", href: "#parcours" },
  { label: "Musique", href: "#musique" },
  { label: "Concerts", href: "#concerts" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-4 left-4 right-4 z-50 rounded-sm transition-all duration-500 ${
          scrolled
            ? "glass-card py-3 px-6"
            : "bg-transparent py-5 px-6"
        }`}
        style={scrolled ? { backdropFilter: "blur(20px)", borderColor: "rgba(255,26,26,0.15)" } : {}}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="cursor-pointer">
            <span
              className="font-bebas text-2xl tracking-widest glow-red"
              style={{ color: "#FF1A1A" }}
            >
              VANO BABY
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium tracking-widest uppercase text-white/60 hover:text-white transition-all duration-200 cursor-pointer relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-red-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <a
            href="#contact"
            className="hidden md:block btn-neon text-sm cursor-pointer"
            aria-label="Réserver Vano Baby"
          >
            BOOK NOW
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden cursor-pointer text-white/80 hover:text-white transition-colors"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: "rgba(8,8,8,0.97)", backdropFilter: "blur(20px)" }}
          >
            <ul className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-bebas text-4xl tracking-widest text-white/80 hover:text-white cursor-pointer transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-neon cursor-pointer"
              >
                BOOK NOW
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
