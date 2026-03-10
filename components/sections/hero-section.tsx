import Image from "next/image";
import { GlitchText } from "@/components/glitch-text";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex h-[100dvh] min-h-[100dvh] items-center justify-center overflow-hidden grain-overlay md:min-h-screen md:h-auto">
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

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 py-8 text-center md:px-6 md:py-20">
        <div className="mb-6 inline-block rounded-full border border-neon-green/40 bg-black/60 px-3 py-1.5 backdrop-blur-md md:mb-6 md:px-5 md:py-2.5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neon-green md:text-sm">
            Disponible pour booking
          </span>
        </div>

        <GlitchText className="mb-4 text-5xl font-black uppercase leading-[0.9] tracking-tighter text-white max-md:[text-shadow:0_0_20px_rgba(0,255,159,0.35)] md:mb-4 md:text-8xl md:text-shadow-neon lg:text-9xl">
          MADA
        </GlitchText>

        <p className="mb-8 text-lg font-bold uppercase tracking-wide text-neon-purple md:mb-8 md:text-2xl md:tracking-widest">
          Shatta • Live • Showcase
        </p>

        <div className="mb-10 flex w-full max-w-xs flex-col items-center gap-3 md:max-w-none md:flex-row md:justify-center md:gap-4">
          <Button variant="neon" size="lg" asChild className="w-full md:w-auto">
            <a href="#contact">Contact Pro</a>
          </Button>
        </div>

        <div className="w-full max-w-xl md:mx-auto">
          <SocialLinks />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
      <ScrollIndicator />
    </section>
  );
}
