import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Music2, Play } from "lucide-react";

const platformLinks = [
  {
    name: "Spotify",
    icon: Music2,
    url: "https://open.spotify.com/artist/6X3sUrTNuZ8mezY546Mrkx",
  },
  {
    name: "YouTube",
    icon: Play,
    url: "https://www.youtube.com/@mada4bang",
  },
  {
    name: "Apple Music",
    icon: Music2,
    url: "https://music.apple.com/fr/artist/mada4bang/1566027587",
  },
];

export function LatestDropSection() {
  return (
    <section className="relative bg-black py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-4">
        <AnimatedSection>
          <div className="mb-10 flex flex-col items-center text-center md:mb-16">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
              Dernier clip
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-neon-green to-neon-purple" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="-mx-4 w-full overflow-hidden rounded-none border-0 md:mx-auto md:max-w-3xl md:rounded-xl md:border md:border-neon-green/20">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/j7Pv7OSNhTU"
                title="MADA - Latest Track"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <CardContent className="p-4 md:p-8">
              <h3 className="mb-4 text-xl font-bold text-white md:mb-2 md:text-2xl">
                Montpel Carnival Anthem 2
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start md:gap-3">
                {platformLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Button
                      key={link.name}
                      variant="ghost"
                      size="icon"
                      asChild
                      className="h-10 w-10 md:hidden"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    </Button>
                  );
                })}
                <Button variant="neon" size="sm" asChild className="hidden md:inline-flex">
                  <a
                    href="https://open.spotify.com/artist/6X3sUrTNuZ8mezY546Mrkx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Music2 className="h-4 w-4" />
                    Spotify
                  </a>
                </Button>
                <Button variant="purple" size="sm" asChild className="hidden md:inline-flex">
                  <a
                    href="https://www.youtube.com/@mada4bang"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Play className="h-4 w-4" />
                    YouTube
                  </a>
                </Button>
                <Button variant="neon" size="sm" asChild className="hidden md:inline-flex">
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
