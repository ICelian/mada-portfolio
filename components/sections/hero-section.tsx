import Image from "next/image";
import { GlitchText } from "@/components/glitch-text";
import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden grain-overlay">
      <div className="absolute inset-0 z-0">
        <Image
          src="/mada-hero-showcase.webp"
          alt="MADA - Hero Showcase"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center">
        <div className="mb-6 inline-block rounded-full border border-neon-green/30 bg-black/50 px-4 py-2 backdrop-blur-sm">
          <span className="text-sm font-bold uppercase tracking-wider text-neon-green">
            Disponible pour booking
          </span>
        </div>

        <GlitchText className="mb-4 text-6xl font-black uppercase leading-none tracking-tight text-white md:text-8xl lg:text-9xl text-shadow-neon">
          MADA
        </GlitchText>

        <p className="mb-8 text-xl font-bold uppercase tracking-widest text-neon-purple md:text-2xl">
          Shatta • Live • Showcase
        </p>

        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="neon" size="lg" asChild>
            <a href="#contact">Contact Pro</a>
          </Button>
        </div>

        <SocialLinks />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
