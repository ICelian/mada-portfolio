import { AnimatedSection } from "@/components/animated-section";
import { BookingForm } from "@/components/booking-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Youtube } from "lucide-react";

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
                              <Instagram className="h-4 w-4" />
                              Instagram
                            </a>
                          </Button>
                          <Button variant="purple" size="sm" asChild>
                            <a
                              href="https://www.youtube.com/@mada4bang"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Youtube className="h-4 w-4" />
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
