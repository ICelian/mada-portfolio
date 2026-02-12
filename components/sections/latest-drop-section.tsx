import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Music2, Play } from "lucide-react";

export function LatestDropSection() {
  return (
    <section className="relative bg-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
              Latest Drop
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-neon-green to-neon-purple" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="mx-auto max-w-3xl overflow-hidden border-neon-green/20">
            <div className="relative aspect-video">
              <Image
                src="/mada-live-performance.webp"
                alt="MADA - Latest Track"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                <div className="rounded-full bg-neon-green/20 p-6 backdrop-blur-sm transition-all hover:bg-neon-green/30 hover:scale-110">
                  <Play className="h-12 w-12 fill-neon-green text-neon-green" />
                </div>
              </div>
            </div>

            <CardContent className="p-8">
              <h3 className="mb-2 text-2xl font-bold text-white">
                [Titre du dernier son]
              </h3>
              <p className="mb-6 text-white/60">
                Le dernier morceau disponible sur toutes les plateformes
              </p>

              <div className="flex flex-wrap gap-3">
                <Button variant="neon" size="sm" asChild>
                  <a
                    href="https://open.spotify.com/artist/YOUR_ARTIST_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Music2 className="h-4 w-4" />
                    Spotify
                  </a>
                </Button>
                <Button variant="purple" size="sm" asChild>
                  <a
                    href="https://youtube.com/@YOUR_CHANNEL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="h-4 w-4" />
                    YouTube
                  </a>
                </Button>
                <Button variant="neon" size="sm" asChild>
                  <a
                    href="https://music.apple.com/artist/YOUR_ARTIST_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Music2 className="h-4 w-4" />
                    Apple Music
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
