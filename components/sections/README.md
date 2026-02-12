# Sections Components

Composants modulaires pour chaque section du site MADA.

## Structure

```
/components/sections/
├── index.ts                    # Exports centralisés
├── hero-section.tsx           # Section hero plein écran
├── latest-drop-section.tsx    # Dernier son / single
├── clips-section.tsx          # Grid de clips YouTube
├── showcases-section.tsx      # Dates de concerts/showcases
├── photos-section.tsx         # Carousel photos
├── contact-section.tsx        # Formulaire + WhatsApp
└── footer.tsx                 # Footer avec liens sociaux
```

## Utilisation

```tsx
import {
  HeroSection,
  LatestDropSection,
  ClipsSection,
  ShowcasesSection,
  PhotosSection,
  ContactSection,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LatestDropSection />
      <ClipsSection />
      <ShowcasesSection />
      <PhotosSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
```

## Personnalisation

### Hero Section
- Titre principal : ligne 35 (`MADA`)
- Tagline : ligne 39 (`Shatta • Live • Showcase`)
- Description : lignes 43-45
- WhatsApp : ligne 51

### Latest Drop Section
- Titre du son : ligne 42
- Image : ligne 27 (`/mada-live-performance.webp`)
- Liens plateformes : lignes 49-73

### Clips Section
- Nombre de clips : ligne 28 (`[1, 2, 3].map`)
- Pour ajouter un clip : ajouter un item dans l'array

### Showcases Section
- Date exemple : lignes 20-52
- Pour ajouter des dates : créer un array et mapper

### Contact Section
- WhatsApp : lignes 35 et 43
- Liens sociaux : lignes 55-76

### Footer
- Liens sociaux : lignes 17-42

## Animations

Toutes les sections utilisent `<AnimatedSection>` :
- Reveal au scroll (Intersection Observer)
- Délais personnalisables via prop `delay`
- Animation fade-in + slide-up

## Images

Images utilisées par section :
- **Hero** : `mada-hero-showcase.webp`
- **Latest Drop** : `mada-live-performance.webp`
- **Clips** : `mada-portrait-neon.webp`
- **Clips Background** : `mada-live-stage.webp`

Toutes optimisées avec `next/image` (WebP, sizes, lazy loading).
