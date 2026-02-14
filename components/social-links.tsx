"use client";

import { Button } from "@/components/ui/button";
import {
  Music2,
  Youtube,
  Instagram,
  Music,
  Disc3,
} from "lucide-react";

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const musicPlatforms = [
  {
    name: "Spotify",
    icon: Music2,
    url: "https://open.spotify.com/artist/6X3sUrTNuZ8mezY546Mrkx",
  },
  {
    name: "Apple Music",
    icon: Music,
    url: "https://music.apple.com/fr/artist/mada4bang/1566027587",
  },
  {
    name: "Deezer",
    icon: Disc3,
    url: "https://www.deezer.com/fr/artist/131937682",
  },
];

const socialMedia = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/mada4bang",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    url: "https://www.tiktok.com/@mada4bang",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@mada4bang",
  },
];

export function SocialLinks() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-white/60">
          Écoute mes sons
        </h3>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          {musicPlatforms.map((link) => {
            const Icon = link.icon;
            return (
              <Button
                key={link.name}
                variant="purple"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Icon className="h-5 w-5" />
                  <span>{link.name}</span>
                </a>
              </Button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-white/60">
          Suis-moi
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {socialMedia.map((link) => {
            const Icon = link.icon;
            return (
              <Button
                key={link.name}
                variant="neon"
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Icon className="h-5 w-5" />
                  <span>{link.name}</span>
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
