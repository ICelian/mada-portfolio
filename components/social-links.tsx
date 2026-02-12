"use client";

import { Button } from "@/components/ui/button";
import {
  Music2,
  Youtube,
  Instagram,
  Music,
  Play,
  Disc3,
} from "lucide-react";

const socialLinks = [
  {
    name: "Spotify",
    icon: Music2,
    url: "https://open.spotify.com/artist/YOUR_ARTIST_ID",
    color: "neon",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@YOUR_CHANNEL",
    color: "purple",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/YOUR_HANDLE",
    color: "purple",
  },
  {
    name: "Apple Music",
    icon: Music,
    url: "https://music.apple.com/artist/YOUR_ARTIST_ID",
    color: "neon",
  },
  {
    name: "Deezer",
    icon: Disc3,
    url: "https://deezer.com/artist/YOUR_ARTIST_ID",
    color: "purple",
  },
];

export function SocialLinks() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Button
            key={link.name}
            variant={link.color as "neon" | "purple"}
            size="lg"
            asChild
            className="w-full lg:w-auto"
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
  );
}
