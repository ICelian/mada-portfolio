"use client";

import { useState } from "react";

interface SpotifyTrackProps {
  trackId: string;
}

export function SpotifyTrack({ trackId }: SpotifyTrackProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative overflow-hidden rounded-xl border border-neon-purple/20 bg-black/40 backdrop-blur-sm transition-all hover:border-neon-purple/50 hover:shadow-[0_0_30px_rgba(138,43,226,0.2)]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="space-y-3 w-full p-4">
            <div className="h-4 w-3/4 bg-white/10 rounded animate-pulse" />
            <div className="h-3 w-1/2 bg-white/10 rounded animate-pulse" />
            <div className="h-10 bg-white/10 rounded animate-pulse mt-4" />
          </div>
        </div>
      )}
      <iframe
        src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="rounded-lg border-0"
        onLoad={() => setIsLoading(false)}
        style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.3s ease-in-out" }}
      />
    </div>
  );
}
