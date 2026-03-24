/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Footer — Site Vano Baby
 * @created 2026-03-24
 */
"use client";

// Icônes sociales SVG inline
const IgIcon = ({ size = 16, color = 'white' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill={color} stroke="none"/>
  </svg>
);
const FbIcon = ({ size = 16, color = 'white' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const YtIcon = ({ size = 16, color = 'white' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M23.5 6.7a2.99 2.99 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.6A2.99 2.99 0 0 0 .5 6.7 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.3 2.99 2.99 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.6a2.99 2.99 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.3z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0f0f0f"/>
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-12 border-t"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "rgba(255, 26, 26, 0.1)",
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, var(--red-neon), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <span
              className="font-bebas text-3xl tracking-widest glow-red"
              style={{ color: "var(--red-neon)" }}
            >
              VANO BABY
            </span>
            <p className="text-xs text-white/30 mt-1 tracking-wider">
              Azéto Gbèdè · Sorcier Vivant
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["Bio", "Parcours", "Musique", "Concerts", "Galerie", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-widest text-white/30 hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/vanobaby_officiel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-sm flex items-center justify-center cursor-pointer transition-all duration-200 hover:glow-box-red"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              aria-label="Instagram Vano Baby"
            >
                          <IgIcon size={16} color="white" />
            </a>
            <a
              href="https://www.facebook.com/vanobaby"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-sm flex items-center justify-center cursor-pointer transition-all duration-200 hover:glow-box-red"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              aria-label="Facebook Vano Baby"
            >
                          <FbIcon size={16} color="white" />
            </a>
            <a
              href="https://www.youtube.com/@vanobaby"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-sm flex items-center justify-center cursor-pointer transition-all duration-200 hover:glow-box-red"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              aria-label="YouTube Vano Baby"
            >
                          <YtIcon size={16} color="white" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 mt-10 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs text-white/20">
            © {year} Vano Baby. Tous droits réservés.
          </p>
          <p className="text-xs text-white/15">
            Site by{" "}
            <a
              href="https://ceo.nexuspartners.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/40 transition-colors cursor-pointer"
            >
              Nexus Partners
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
