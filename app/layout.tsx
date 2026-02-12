import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MADA - Rappeur | Shatta • Live • Showcase",
  description:
    "MADA - Artiste rap, shatta, live performances. Booking, collaborations, nouveaux sons. Découvre l'univers MADA.",
  keywords: [
    "MADA",
    "rap",
    "shatta",
    "rappeur",
    "artiste",
    "booking",
    "live",
    "showcase",
    "collaboration",
    "musique urbaine",
  ],
  authors: [{ name: "MADA" }],
  openGraph: {
    title: "MADA - Rappeur | Shatta • Live • Showcase",
    description:
      "Artiste rap, shatta, live performances. Booking et collaborations.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "MADA - Rappeur | Shatta • Live • Showcase",
    description:
      "Artiste rap, shatta, live performances. Booking et collaborations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${barlowCondensed.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
