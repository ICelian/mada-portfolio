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
              Dernier clip
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-neon-green to-neon-purple" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="mx-auto max-w-3xl overflow-hidden border-neon-green/20">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/hHoA2Cz0fwk"
                title="MADA - Latest Track"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <CardContent className="p-8">
              <h3 className="mb-2 text-2xl font-bold text-white">
                Mada4Bang - La Recette
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="neon" size="sm" asChild>
                  <a
                    href="https://open.spotify.com/artist/6X3sUrTNuZ8mezY546Mrkx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Music2 className="h-4 w-4" />
                    Spotify
                  </a>
                </Button>
                <Button variant="purple" size="sm" asChild>
                  <a
                    href="https://www.youtube.com/@mada4bang"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="h-4 w-4" />
                    YouTube
                  </a>
                </Button>
                <Button variant="neon" size="sm" asChild>
                  <a
                    href="https://music.apple.com/fr/artist/mada4bang/1566027587"
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
