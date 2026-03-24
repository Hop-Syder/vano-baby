/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Source de vérité — toutes les données statiques du site Vano Baby
 * Mettre à jour CE FICHIER uniquement pour maintenir le contenu à jour.
 * @created 2026-03-24
 * @updated 2026-03-24
 */

// ─── Identité ────────────────────────────────────────────────────────────────
export const ARTIST = {
  stageName: "Vano Baby",
  realName: "Aurel Sylvanus Adjivon",
  birthDate: "9 mai 1994",
  origin: "Grand-Popo, Bénin",
  city: "Cotonou",
  genres: ["Rap", "Hip-hop", "Afropop"],
  nicknames: ["Azéto Gbèdè", "Sorcier Vivant"],
  fanbase: "Le Gang",
  bio: `Vano Baby, de son vrai nom Aurel Sylvanus Adjivon, est un artiste béninois né à Cotonou et originaire de Grand-Popo. Passionné de musique dès son jeune âge, il fait ses premiers pas dans le rap avant de s'imposer comme l'une des figures majeures de la scène urbaine béninoise.

Révélé au grand public en 2013 avec le titre Drague Azonto, il connaît une ascension rapide après avoir remporté le concours MTN Découverte Talents en 2014. Son style, à la fois provocateur et authentique, lui permet de se démarquer et de captiver un large public.

Au fil des années, Vano Baby enchaîne les succès et évolue musicalement, passant de titres controversés à des morceaux plus profonds comme Diyo, qui marque un tournant dans sa carrière. Aujourd'hui, il est considéré comme l'un des artistes les plus influents et respectés du Bénin.`,
  stats: [
    { num: "10+", label: "Ans de carrière" },
    { num: "3×", label: "Artiste de l'Année" },
    { num: "2M+", label: "Fans & Followers" },
  ],
} as const;

// ─── Réseaux sociaux ──────────────────────────────────────────────────────────
export const SOCIALS = {
  instagram: "https://www.instagram.com/vanobaby_officiel",
  facebook: "https://www.facebook.com/vanobaby",
  youtube: "https://www.youtube.com/@vanobaby",
  tiktok: "https://www.tiktok.com/@vanobaby",
  // Mettre à jour avec le numéro WhatsApp réel du manager
  whatsapp: "https://wa.me/22997000000?text=Bonjour%2C+je+souhaite+booker+Vano+Baby",
} as const;

// ─── Contact Manager ──────────────────────────────────────────────────────────
export const CONTACT = {
  email: "booking@vanobaby.bj",        // TODO: confirmer avec le management
  phone: "+229 97 00 00 00",           // TODO: confirmer avec le management
  address: "Cotonou, Bénin",
  // Endpoint Formspree — créer un compte sur formspree.io et remplacer l'ID
  formspreeEndpoint: "https://formspree.io/f/VOTRE_ID_FORMSPREE",
} as const;

// ─── Timeline carrière ────────────────────────────────────────────────────────
export const TIMELINE = [
  {
    year: "2013",
    icon: "mic",
    title: "Drague Azonto",
    description: "Premier single viral, révélation sur la scène urbaine béninoise.",
    highlight: false,
  },
  {
    year: "2014",
    icon: "trophy",
    title: "MTN Découverte Talents",
    description: "Victoire au concours national — 5 millions FCFA de prix.",
    highlight: true,
  },
  {
    year: "2016",
    icon: "flame",
    title: "Adigoue Gboun Gboun",
    description: "Explosion nationale avec ce titre provoquant et audacieux.",
    highlight: false,
  },
  {
    year: "2018–2019",
    icon: "star",
    title: "Madame & Bella",
    description: "Deux mega-hits qui confirment son statut de star incontournable.",
    highlight: false,
  },
  {
    year: "2022",
    icon: "trophy",
    title: "Diyo — Succès Phénoménal",
    description: "Tournant artistique majeur, Diyo dépasse les frontières du Bénin.",
    highlight: true,
  },
  {
    year: "2023",
    icon: "globe",
    title: "Tournée Européenne",
    description: "Suisse, Italie — Vano Baby conquiert l'Europe avec Eusèbe Dossou.",
    highlight: false,
  },
  {
    year: "2024",
    icon: "trophy",
    title: "3× Artiste de l'Année",
    description: "Triplé historique aux Bénin Top 10 Awards. Record absolu.",
    highlight: true,
  },
  {
    year: "2025",
    icon: "star",
    title: "10 Ans de Carrière",
    description: "Une décennie de musique, de succès et de fidélité à son art.",
    highlight: false,
  },
] as const;

// ─── Discographie ─────────────────────────────────────────────────────────────
// Mettre à jour les youtubeUrl avec les vraies URLs une fois confirmées
export const TRACKS_HITS = [
  { title: "Diyo", year: "2022", tag: "Mega-Hit", youtubeUrl: "https://www.youtube.com/watch?v=KXmn-LWazy8" },
  { title: "Bella", year: "2019", tag: "Classique", youtubeUrl: "https://www.youtube.com/watch?v=u4tJWhfM4wA" },
  { title: "Madame", year: "2018", tag: "Banger", youtubeUrl: "https://www.youtube.com/watch?v=C3JMhV5i_9Q" },
  { title: "Adigoue Gboun Gboun", year: "2016", tag: "Iconic", youtubeUrl: "https://www.youtube.com/watch?v=wLg6R6S90nU" },
  { title: "Drague Azonto", year: "2013", tag: "1er Hit", youtubeUrl: "https://www.youtube.com/watch?v=R9N2B-yN9-A" },
  { title: "Nou towé lè", year: "2021", tag: "Street", youtubeUrl: "https://www.youtube.com/watch?v=3fU7M9_X4Y8" },
  { title: "C'est Toi", year: "2024", tag: "Hit", youtubeUrl: "https://www.youtube.com/watch?v=FIO_LoEDW8g" },
  { title: "Je s'en fou", year: "2020", tag: "Anthem", youtubeUrl: "https://www.youtube.com/@vanobaby" },
  { title: "Tonssimè chap", year: "2020", tag: "Banger", youtubeUrl: "https://www.youtube.com/@vanobaby" },
] as const;

export const TRACKS_RECENT = [
  { title: "Qui peut nous gagner", year: "2026", feat: "", youtubeUrl: "https://www.youtube.com/watch?v=ZpD391R8b4A" },
  { title: "DO BANDIT MIN", year: "2025", feat: "", youtubeUrl: "https://www.youtube.com/watch?v=8XJtZ1e2j7c" },
  { title: "Bô Ébi", year: "2025", feat: "", youtubeUrl: "https://www.youtube.com/watch?v=QbstAWxoU24" },
  { title: "Russie", year: "2024", feat: "feat. HIMRA", youtubeUrl: "https://www.youtube.com/watch?v=Y5BzevHKj70" },
  { title: "Fité", year: "2024", feat: "", youtubeUrl: "https://www.youtube.com/watch?v=lcmT2sUppFA" },
] as const;

// ─── Concerts ─────────────────────────────────────────────────────────────────
// IMPORTANT: Mettre à jour régulièrement avec les vraies dates/lieux
export const CONCERTS_UPCOMING = [
  {
    date: "Juin 2025",
    city: "Cotonou",
    country: "Bénin",
    venue: "Stade de l'Amitié",
    type: "Concert Anniversaire",
    confirmed: true,
    ticketUrl: null as string | null, // URL billetterie quand disponible
  },
  {
    date: "Août 2025",
    city: "Lagos",
    country: "Nigeria",
    venue: "Eko Hotel, Lagos",
    type: "Festival Afropop",
    confirmed: true,
    ticketUrl: null as string | null,
  },
  {
    date: "Oct. 2025",
    city: "Paris",
    country: "France",
    venue: "La Cigale",
    type: "Tournée Europe",
    confirmed: false,
    ticketUrl: null as string | null,
  },
] as const;

export const CONCERTS_PAST = [
  { year: "2024", event: "Bénin Top 10 Awards — Artiste de l'Année", city: "Cotonou" },
  { year: "2023", event: "Tournée Suisse + Italie (avec Eusèbe Dossou)", city: "Europe" },
  { year: "2022", event: "Live Diyo — Palais des Congrès", city: "Cotonou" },
  { year: "2021", event: "1er Grand Concert Solo", city: "Cotonou" },
] as const;

// ─── Récompenses ──────────────────────────────────────────────────────────────
export const AWARDS = [
  { year: 2021, title: "Artiste de l'Année", event: "Bénin Top 10 Awards" },
  { year: 2022, title: "Artiste de l'Année", event: "Bénin Top 10 Awards" },
  { year: 2024, title: "Artiste de l'Année", event: "Bénin Top 10 Awards" },
] as const;

// ─── Galerie vidéos ──────────────────────────────────────────────────────────
export const GALLERY_VIDEOS = [
  { id: "lcmT2sUppFA", label: "Fitè (Clip Officiel)", type: "13M+ Vues", featured: true },
  { id: "8dfMBHVV9HA", label: "Russie (feat. HIMRA)", type: "8.4M+ Vues", featured: false },
  { id: "KXmn-LWazy8", label: "DIYO", type: "6M+ Vues", featured: false },
  { id: "ppiPCJrTO2I", label: "Do Bandit Min (Clip Officiel)", type: "4.1M+ Vues", featured: true },
  { id: "L6B4MsYQ8Fk", label: "Tu mérites tout (Clip Officiel)", type: "4.2M+ Vues", featured: false },
  { id: "FIO_LoEDW8g", label: "C'est Toi", type: "4.7M+ Vues", featured: false },
  { id: "Y5BzevHKj70", label: "Week End Mood", type: "4.6M+ Vues", featured: false },
  { id: "gydrSdjIpOc", label: "Coup Monté", type: "2.4M+ Vues", featured: false },
  { id: "QbstAWxoU24", label: "Bô Ébi", type: "2.7M+ Vues", featured: false },
] as const;
