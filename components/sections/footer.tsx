import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-2xl font-black uppercase text-neon-green">
              MADA
            </h3>
            <p className="text-sm text-white/60">
              Rap • Shatta • Live • Showcase
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://www.instagram.com/mada4bang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://www.youtube.com/@mada4bang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://open.spotify.com/artist/6X3sUrTNuZ8mezY546Mrkx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Music2 className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>&copy; 2026 MADA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
