# MADA - Portfolio Artiste Rap

Site vitrine premium pour rappeur avec vibe club néon (vert/violet). Mobile-first, performant, impactant.

## 🎨 Design & Vibe

- **Style**: Sombre + néons (vert `#00ff9f` / violet `#8a2be2`)
- **Ambiance**: Club, showcase, shatta
- **Animations**: Reveals au scroll, glitch léger, transitions fluides
- **Grain & effects**: Overlay grain, neon glow, text-shadow
- **Responsive**: Mobile-first, optimisé tablette/desktop

## 🚀 Stack Technique

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Carousel**: Embla Carousel
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Images**: next/image (WebP optimisé)
- **Fonts**: Barlow Condensed (Google Fonts)

## 📦 Installation

```bash
pnpm install
```

## 🛠️ Développement

```bash
pnpm dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

## 🏗️ Build Production

```bash
pnpm build
pnpm start
```

## 📁 Structure

```
/app
  ├── layout.tsx        → Layout principal + metadata SEO
  ├── page.tsx          → Page home (one-page)
  └── globals.css       → Styles globaux + thème néon

/components
  ├── ui/               → Composants base (button, input, card...)
  ├── whatsapp-cta.tsx  → Bouton flottant WhatsApp
  ├── social-links.tsx  → Liens plateformes musicales
  ├── photo-carousel.tsx → Carousel photos Embla
  ├── booking-form.tsx  → Formulaire contact validé
  ├── animated-section.tsx → Wrapper animations scroll
  ├── glitch-text.tsx   → Titre avec effet glitch
  └── copy-button.tsx   → Bouton copier numéro

/public
  ├── mada-hero-showcase.webp
  ├── mada-live-performance.webp
  ├── mada-portrait-neon.webp
  └── mada-live-stage.webp

/lib
  └── utils.ts          → Fonction cn (tailwind-merge)
```

## 🎯 Sections Page Home

1. **Hero** → Photo plein écran + titre glitch + liens plateformes + CTA booking
2. **Latest Drop** → Dernier son avec boutons plateformes
3. **Clips** → Grid 3 vidéos YouTube (placeholders)
4. **Showcases** → Liste dates/lieux événements
5. **Photos** → Carousel 4 images
6. **Contact/Booking** → WhatsApp + formulaire validé
7. **Footer** → Liens sociaux + copyright

## ⚙️ Personnalisation

### 1. Images

Toutes les images sont dans `/public/` :
- `mada-hero-showcase.webp` → Hero principal
- `mada-live-performance.webp` → Latest Drop
- `mada-portrait-neon.webp` → Clips thumbnails
- `mada-live-stage.webp` → Background ambiance

**Remplace-les** par tes propres photos WebP optimisées.

### 2. Liens Plateformes

Édite `components/social-links.tsx` :

```typescript
const socialLinks = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/TON_ID",
    ...
  },
  // ...
];
```

### 3. WhatsApp

Édite `components/whatsapp-cta.tsx` :

```typescript
const phoneNumber = "33612345678"; // Ton numéro (format international)
const message = encodeURIComponent("Ton message pré-rempli");
```

Aussi dans `app/page.tsx` (section Contact).

### 4. Formulaire Contact

Backend placeholder dans `components/booking-form.tsx` :

```typescript
const onSubmit = async (data: FormData) => {
  // TODO: Intégration backend
  // Exemple: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
  console.log("Form data:", data);
};
```

Options d'intégration :
- API Route Next.js + Resend/SendGrid
- Formspree / Form backend
- Webhook Discord/Slack
- Email direct

### 5. Metadata SEO

Édite `app/layout.tsx` :

```typescript
export const metadata: Metadata = {
  title: "TON NOM - Rappeur | ...",
  description: "Ta description...",
  // ...
};
```

### 6. Couleurs Néon

Édite `app/globals.css` :

```css
@theme inline {
  --color-neon-green: #00ff9f;
  --color-neon-purple: #8a2be2;
  ...
}
```

## 🎥 Clips YouTube

Édite la section "Clips" dans `app/page.tsx`.

Pour intégrer de vrais embeds YouTube, remplace les Cards par des iframes :

```tsx
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  className="aspect-video w-full rounded-xl"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

## 📅 Showcases/Dates

Édite la section "Showcases" dans `app/page.tsx`.

Crée un array de dates :

```typescript
const shows = [
  { date: "2025-03-15", city: "Paris", venue: "Le Trianon" },
  // ...
];
```

Puis map dessus pour afficher dynamiquement.

## 🚀 Déploiement

### Vercel (recommandé)

```bash
vercel
```

ou connecte ton repo GitHub sur [vercel.com](https://vercel.com)

### Autres plateformes

- **Netlify**: `pnpm build` → Deploy `/out` (static export)
- **Railway**: Deploy direct depuis GitHub
- **Cloudflare Pages**: Build command `pnpm build`

## 🎨 Personnalisation Avancée

### Smooth Scroll (Lenis)

Non inclus par défaut mais facile à ajouter :

```bash
pnpm add lenis
```

Crée un provider dans `components/smooth-scroll.tsx` et wrap le layout.

### Animations Supplémentaires

Utilise `framer-motion` variants pour des animations complexes :

```tsx
<motion.div
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }}
  initial="hidden"
  animate="visible"
/>
```

### Audio Player

Intègre un player audio pour preview de sons :

```bash
pnpm add react-h5-audio-player
```

## 📱 Mobile-First

Le site est optimisé mobile d'abord :
- Breakpoints Tailwind : `sm:` (640px), `md:` (768px), `lg:` (1024px)
- WhatsApp CTA flottant visible sur toutes tailles
- Images responsive avec `next/image` sizes
- Touch-friendly (boutons min 44x44px)

## 🔥 Performances

- Images WebP optimisées < 500kb
- Lazy loading (next/image auto)
- Animations CSS quand possible
- Minimal JS hydration
- Static generation (pas de SSR inutile)

## 📊 Analytics (optionnel)

Ajoute Google Analytics dans `app/layout.tsx` :

```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<Script id="google-analytics">
  {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');`}
</Script>
```

## 🐛 Debug

### Build échoue

```bash
rm -rf .next node_modules
pnpm install
pnpm build
```

### Images ne chargent pas

Vérifie que les fichiers WebP sont bien dans `/public/`.

### Animations saccadées

Désactive `will-change` ou réduis les `motion` effects sur mobile.

## 📝 TODO avant mise en ligne

- [ ] Remplacer toutes les images placeholder
- [ ] Mettre à jour tous les liens (Spotify, YouTube, Insta...)
- [ ] Configurer le vrai numéro WhatsApp
- [ ] Intégrer backend formulaire (API/webhook)
- [ ] Ajouter les vrais embeds YouTube clips
- [ ] Mettre à jour metadata SEO (title, description, OG image)
- [ ] Ajouter les vraies dates showcases
- [ ] Tester sur mobile réel
- [ ] Vérifier performances Lighthouse (> 90)
- [ ] Configurer domaine custom

## 🎤 Crédits

Site créé pour MADA - Artiste Rap.

Stack: Next.js, TailwindCSS, Framer Motion, shadcn/ui.

---

**🔥 Pour toute question ou personnalisation, check la doc ou contacte-moi.**
