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
  { title: "Diyo", year: "2022", tag: "Mega-Hit", youtubeUrl: "https://www.youtube.com/@vanobaby" },
  { title: "Bella", year: "2019", tag: "Classique", youtubeUrl: "https://www.youtube.com/@vanobaby" },
  { title: "Madame", year: "2018", tag: "Banger", youtubeUrl: "https://www.youtube.com/@vanobaby" },
  { title: "Adigoue Gboun Gboun", year: "2016", tag: "Iconic", youtubeUrl: "https://www.youtube.com/@vanobaby" },
  { title: "Drague Azonto", year: "2013", tag: "1er Hit", youtubeUrl: "https://www.youtube.com/@vanobaby" },
  { title: "Nou towé lè", year: "2021", tag: "Street", youtubeUrl: "https://www.youtube.com/@vanobaby" },
  { title: "Je s'en fou", year: "2020", tag: "Anthem", youtubeUrl: "https://www.youtube.com/@vanobaby" },
  { title: "Tonssimè chap", year: "2020", tag: "Banger", youtubeUrl: "https://www.youtube.com/@vanobaby" },
] as const;

export const TRACKS_RECENT = [
  { title: "Fité", year: "2024", feat: "", youtubeUrl: "https://www.youtube.com/@vanobaby" },
  { title: "Russie", year: "2024", feat: "feat. HIMRA", youtubeUrl: "https://www.youtube.com/@vanobaby" },
  { title: "Mahu Si", year: "2023", feat: "", youtubeUrl: "https://www.youtube.com/@vanobaby" },
  { title: "C'est toi", year: "2023", feat: "", youtubeUrl: "https://www.youtube.com/@vanobaby" },
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
