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
  title: "Mada4Bang - Artiste Shatta | Booking & Showcase",
  description:
    "Mada4Bang - Artiste shatta, booking, showcase, collaborations, contact officiel. Découvre l'univers Mada4Bang.",
  keywords: [
    "Mada4Bang",
    "shatta",
    "artiste",
    "booking",
    "showcase",
    "collaboration",
    "musique urbaine",
    "contact",
  ],
  authors: [{ name: "Mada4Bang" }],
  openGraph: {
    title: "Mada4Bang - Artiste Shatta | Booking & Showcase",
    description:
      "Artiste shatta, booking, showcase, collaborations, contact officiel",
    type: "website",
    siteName: "Mada4Bang",
    locale: "fr_FR",
    url: "https://mada4bang.com",
    images: [
      {
        url: "https://mada4bang.com/mada-portrait-neon.webp",
        width: 1200,
        height: 630,
        alt: "Mada4Bang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mada4Bang - Artiste Shatta | Booking & Showcase",
    description:
      "Artiste shatta, booking, showcase, collaborations, contact officiel",
    images: ["https://mada4bang.com/mada-portrait-neon.webp"],
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
