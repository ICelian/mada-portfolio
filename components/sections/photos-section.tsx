import { AnimatedSection } from "@/components/animated-section";
import { PhotoCarousel } from "@/components/photo-carousel";

export function PhotosSection() {
  return (
    <section className="relative bg-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
              Photos
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-neon-purple to-neon-green" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <PhotoCarousel />
        </AnimatedSection>
      </div>
    </section>
  );
}
