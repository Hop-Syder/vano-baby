/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Footer — Brand Identity & Social Reality
 * @created 2026-03-24
 * @updated 2026-03-24 Socials synchronization & Contrast Refinement
 */
"use client";

import Link from "next/link";
import { ARTIST, SOCIALS, CONTACT } from "@/lib/data";

// Social Icons SVGs
const IgIcon = ({ size = 20, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill={color} stroke="none" />
  </svg>
);
const FbIcon = ({ size = 20, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const YtIcon = ({ size = 20, color = "white" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M23.5 6.7a2.99 2.99 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.6A2.99 2.99 0 0 0 .5 6.7 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.3 2.99 2.99 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.6a2.99 2.99 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.3z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0f0f0f" />
  </svg>
);

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Musique", href: "/musique" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

const socialData = [
  { Icon: IgIcon, href: SOCIALS.instagram, label: "Instagram" },
  { Icon: FbIcon, href: SOCIALS.facebook, label: "Facebook" },
  { Icon: YtIcon, href: SOCIALS.youtube, label: "YouTube" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-20 bg-bg-primary border-t border-white/5 overflow-hidden">
      {/* Decorative Brand Watermark */}
      <div className="absolute -bottom-10 right-0 opacity-[0.02] select-none pointer-events-none">
         <span className="font-bebas text-[10rem] text-white tracking-widest uppercase">AZÉTO GBÈDÈ</span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Identity */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block group">
               <span className="font-bebas text-4xl text-white tracking-widest group-hover:text-red-600 transition-colors">
                  {ARTIST.stageName.split(' ')[0]} <span className="text-red-600 group-hover:text-white transition-colors">{ARTIST.stageName.split(' ')[1]}</span>
               </span>
            </Link>
            <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
              Le Sorcier Vivant. L'icône du rap urbain béninois. 
              Une authenticité qui dérange, une plume qui transcende.
            </p>
            <div className="flex gap-4">
              {socialData.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/60">Navigation</h4>
            <nav className="flex flex-col gap-4">
               {navLinks.map(link => (
                 <Link key={link.href} href={link.href} className="text-sm text-text-secondary hover:text-red-500 transition-colors uppercase tracking-widest font-medium">
                    {link.label}
                 </Link>
               ))}
            </nav>
          </div>

          {/* Contact / Management */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/60">Management</h4>
            <div className="space-y-3">
               <p className="text-sm font-bold text-white uppercase tracking-widest">Booking Office</p>
               <a href={`mailto:${CONTACT.email}`} className="block text-sm text-text-secondary hover:text-white transition-colors">{CONTACT.email}</a>
               <p className="text-sm text-text-secondary">{CONTACT.phone}</p>
               <p className="text-xs text-white/60 mt-4 leading-relaxed">{CONTACT.address}</p>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold">
              © {year} {ARTIST.stageName}. All Rights Reserved.
           </p>
           <div className="flex gap-8">
              <Link href="#" className="text-[10px] uppercase tracking-widest text-white/60 hover:text-white transition-colors">Politique de Confidentialité</Link>
              <a href="https://ceo.nexuspartners.xyz" target="_blank" className="text-[10px] uppercase tracking-widest text-white/60 hover:text-red-500 transition-colors font-bold">
                 Nexus Partners Excellence
              </a>
           </div>
        </div>
      </div>
    </footer>
  );
}
