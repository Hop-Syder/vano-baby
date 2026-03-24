/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description CustomCursor — Curseur interactif premium
 * @created 2026-03-24
 * @updated 2026-03-24 Optimisation performance & Accessibilité (fix leaks + a11y fallback)
 */
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Position brute du curseur
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs pour un mouvement fluide (follower effect)
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Désactiver sur mobile/tactile
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Respect du prefers-reduced-motion
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleReduce = () => setIsReducedMotion(reduceMq.matches);
    handleReduce();
    reduceMq.addEventListener("change", handleReduce);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Gestion propre des hovers sur éléments interactifs
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Vérifier si l'élément ou un de ses parents est cliquable
      const isInteractive = target.closest("a, button, input, textarea, [role='button']");
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      reduceMq.removeEventListener("change", handleReduce);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile || isReducedMotion) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Le point central (Position exacte) */}
          <motion.div
            className="fixed top-0 left-0 w-1.5 h-1.5 bg-red-500 rounded-full z-[9999] pointer-events-none"
            style={{
              x: mouseX,
              y: mouseY,
              translateX: "-50%",
              translateY: "-50%",
            }}
          />

          {/* Le cercle suiveur (Follower fluide) */}
          <motion.div
            ref={cursorRef}
            className="fixed top-0 left-0 rounded-full border border-red-500/30 z-[9998] pointer-events-none flex items-center justify-center overflow-hidden"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%",
              translateY: "-50%",
              width: isHovered ? 60 : 32,
              height: isHovered ? 60 : 32,
              background: isHovered ? "rgba(255, 26, 26, 0.05)" : "transparent",
              boxShadow: isHovered ? "0 0 20px rgba(255, 26, 26, 0.2)" : "none",
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 250,
              mass: 0.5,
            }}
          >
            {/* Effet interne lors du hover */}
            <motion.div
               animate={{ scale: isHovered ? 1 : 0 }}
               className="w-1 h-1 bg-red-500 rounded-full glow-red"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
