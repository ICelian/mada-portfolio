import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { SpotifyTrack } from "@/components/spotify-track";

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
              <SpotifyTrack trackId={trackId} delay={index * 300} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
