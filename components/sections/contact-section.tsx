import { AnimatedSection } from "@/components/animated-section";
import { BookingForm } from "@/components/booking-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-4 w-4"} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className || "h-4 w-4"} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-black to-black/95 py-20 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
              Booking • Contact
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-neon-green to-neon-purple" />
          </div>
        </AnimatedSection>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <AnimatedSection delay={0.2}>
            <Card className="h-full border-neon-green/20">
              <CardContent className="flex h-full flex-col justify-between p-8">
                  <div>
                    <h3 className="mb-6 text-2xl font-bold text-white">
                      Contacte-moi direct
                    </h3>

                    <div className="space-y-4">
                      <div className="space-y-3">
                        <p className="text-sm font-bold uppercase tracking-wider text-white/60">
                          Réseaux sociaux
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <Button variant="purple" size="sm" asChild>
                            <a
                              href="https://www.instagram.com/mada4bang"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <InstagramIcon />
                              Instagram
                            </a>
                          </Button>
                          <Button variant="purple" size="sm" asChild>
                            <a
                              href="https://www.youtube.com/@mada4bang"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <YouTubeIcon />
                              YouTube
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <Card className="border-neon-purple/20">
              <CardContent className="p-8">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Formulaire Pro
                </h3>
                <BookingForm />
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
