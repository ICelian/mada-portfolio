import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const shows = [
  {
    date: "2026-02-19",
    eventName: "Carnaval de Montpellier",
    city: "Montpellier",
    venue: "",
    ticketUrl: "",
  },
  {
    date: "2026-02-20",
    eventName: "Carnaval de Montpellier",
    city: "Montpellier",
    venue: "",
    ticketUrl: "",
  },
  {
    date: "2026-02-21",
    eventName: "Carnaval de Montpellier",
    city: "Montpellier",
    venue: "",
    ticketUrl: "",
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const months = [
    "Jan",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Août",
    "Sep",
    "Oct",
    "Nov",
    "Déc",
  ];
  return {
    day: date.getDate(),
    month: months[date.getMonth()],
  };
}

export function ShowcasesSection() {
  return (
    <section className="relative bg-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <AnimatedSection>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
              Showcases
            </h2>
            <div className="mx-auto h-1 w-24 bg-gradient-to-r from-neon-green to-neon-purple" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mx-auto max-w-3xl space-y-4">
            {shows.length > 0 ? (
              shows.map((show, index) => {
                const { day, month } = formatDate(show.date);
                return (
                  <Card
                    key={index}
                    className="border-neon-green/20 transition-all hover:border-neon-green/40"
                  >
                    <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-16 w-16 flex-col items-center justify-center rounded-lg border-2 border-neon-green bg-neon-green/10">
                          <span className="text-xs font-bold uppercase text-neon-green">
                            {month}
                          </span>
                          <span className="text-2xl font-black text-neon-green">
                            {day}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {show.eventName}
                          </h3>
                          <div className="mt-1 flex items-center gap-2 text-white/60">
                            <MapPin className="h-4 w-4" />
                            <span>
                              {show.city}
                              {show.venue && ` • ${show.venue}`}
                            </span>
                          </div>
                        </div>
                      </div>
                      {show.ticketUrl && (
                        <Button variant="neon" size="sm" asChild>
                          <a
                            href={show.ticketUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Billets
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              <Card className="border-white/10">
                <CardContent className="p-12 text-center">
                  <Calendar className="mx-auto mb-4 h-12 w-12 text-white/40" />
                  <p className="text-lg text-white/60">
                    Prochaines dates à venir...
                  </p>
                  <p className="mt-2 text-sm text-white/40">
                    Contacte-moi pour booking
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
