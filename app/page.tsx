import { WhatsAppCTA } from "@/components/whatsapp-cta";
import {
  HeroSection,
  LatestDropSection,
  ClipsSection,
  ShowcasesSection,
  PhotosSection,
  ContactSection,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <WhatsAppCTA />
      <HeroSection />
      <LatestDropSection />
      <ClipsSection />
      <ShowcasesSection />
      <PhotosSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
