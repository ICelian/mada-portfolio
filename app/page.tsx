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
