import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";

const trackIds = [
  "4Kg9zNqSS2zvxGuXLhI096",
  "523dW86UxitB2d8JnMxw8P",
  "6sYAEJjWimWCcpcNCuqJPe",
];

export function ClipsSection() {
  return (
    <section className="relative bg-gradient-to-b from-black via-black/95 to-black py-20 md:py-32">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/mada-live-stage.webp"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
              Derniers Sons
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-neon-purple to-neon-green" />
          </div>
        </AnimatedSection>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trackIds.map((trackId, index) => (
            <AnimatedSection key={trackId} delay={0.1 * index}>
              <div className="overflow-hidden rounded-xl border border-neon-purple/20 bg-black/40 backdrop-blur-sm transition-all hover:border-neon-purple/50 hover:shadow-[0_0_30px_rgba(138,43,226,0.2)]">
                <iframe
                  src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg border-0"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
