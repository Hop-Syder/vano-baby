# Vano Baby — Official Portfolio 🎤

> **Azéto Gbèdè | Sorcier Vivant**  
> Site officiel de l'artiste béninois Vano Baby, 3× Artiste de l'Année.

Ce projet est une vitrine premium, sombre et immersive conçue pour refléter l'énergie et l'identité visuelle unique de Vano Baby.

## 🚀 Stack Technique

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVGs
- **Typography**: Righteous (Headings), Poppins (Body)

## 📁 Architecture du Projet

```bash
vano-baby/
├── app/                  # Routes Next.js (Multipage)
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Sections métier (Hero, Bio, Discographie...)
│   └── ui/               # Composants UI atomiques (CustomCursor...)
├── lib/
│   └── data.ts           # SOURCE DE VÉRITÉ (Données, liens, contacts)
└── public/               # Assets statiques (Images)
```

## 🛠️ Maintenance & Mise à jour du contenu

Pour mettre à jour les informations du site (prochaines dates de concert, nouveaux singles, liens sociaux), modifiez uniquement le fichier :
👉 `lib/data.ts`

### Booking & Contact
Le formulaire utilise **Formspree** pour la réception des emails. Pour l'activer en production :
1. Créez un compte sur [Formspree.io](https://formspree.io/)
2. Récupérez votre ID de formulaire.
3. Collez-le dans `lib/data.ts` sur la variable `CONTACT.formspreeEndpoint`.

## 🎨 Design System

- **Primary Black**: `#080808`
- **Neon Red**: `#FF1A1A`
- **Bordeaux**: `#8B0000`
- **Typo Headings**: Bebas Neue / Righteous
- **Typo Body**: Poppins

## 📝 Auteur & Organisation

- **Auteur**: [@hopsyder](https://github.com/hopsyder)
- **Organisation**: Nexus Partners
- **Mission**: Excellence en développement & design
- **URL**: [ceo.nexuspartners.xyz](https://ceo.nexuspartners.xyz)

---
*© 2026 Nexus Partners pour Vano Baby.*
