import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

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
              Clips
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-neon-purple to-neon-green" />
          </div>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <Card className="group overflow-hidden border-neon-purple/20 transition-all hover:border-neon-purple/50 hover:shadow-[0_0_30px_rgba(138,43,226,0.2)]">
                <div className="relative aspect-video">
                  <Image
                    src="/mada-portrait-neon.webp"
                    alt={`Clip ${index}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[1px] transition-all group-hover:bg-black/30">
                    <div className="rounded-full bg-neon-purple/20 p-4 backdrop-blur-sm transition-all group-hover:bg-neon-purple/30 group-hover:scale-110">
                      <Play className="h-10 w-10 fill-neon-purple text-neon-purple" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-bold text-white">
                    [Titre Clip {index}]
                  </h3>
                  <p className="text-sm text-white/60">
                    [Nombre] vues • Il y a [temps]
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
