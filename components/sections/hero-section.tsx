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
          className="object-cover object-[center_20%] md:object-center"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 text-center md:py-20">
        <div className="mb-8 inline-block rounded-full border border-neon-green/40 bg-black/60 px-5 py-2.5 backdrop-blur-md md:mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-neon-green md:text-sm">
            Disponible pour booking
          </span>
        </div>

        <GlitchText className="mb-6 text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white md:mb-4 md:text-8xl lg:text-9xl text-shadow-neon">
          MADA
        </GlitchText>

        <p className="mb-10 text-lg font-bold uppercase tracking-wide text-neon-purple md:mb-8 md:text-2xl md:tracking-widest">
          Shatta • Live • Showcase
        </p>

        <div className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button variant="neon" size="lg" asChild className="w-full sm:w-auto">
            <a href="#contact">Contact Pro</a>
          </Button>
        </div>

        <div className="mx-auto max-w-xl">
          <SocialLinks />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
