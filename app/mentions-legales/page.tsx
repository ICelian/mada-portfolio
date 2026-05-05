import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales - Mada4Bang",
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-300">
      <Link
        href="/"
        className="mb-10 inline-block text-sm text-neutral-500 hover:text-white transition-colors"
      >
        ← Retour
      </Link>

      <h1 className="mb-8 text-3xl font-bold text-white">Mentions légales</h1>

      <section className="space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">Éditeur du site</h2>
          <p>
            Le site <strong>mada4bang.com</strong> est édité par{" "}
            <strong>Adam Fadeau</strong>, personne physique.
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Directeur de la publication : Adam Fadeau</li>
            <li>Contact : contact@mada4bang.com</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">Hébergement</h2>
          <p>
            Ce site est hébergé par <strong>Vercel Inc.</strong>, 440 N Baxter
            St, Covina, CA 91723, États-Unis —{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              vercel.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">
            Propriété intellectuelle
          </h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, vidéos, logos,
            musiques) est protégé par le droit d'auteur. Toute reproduction,
            même partielle, est interdite sans autorisation préalable.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">
            Données personnelles
          </h2>
          <p>
            Pour en savoir plus sur la collecte et le traitement de vos données,
            consultez notre{" "}
            <Link
              href="/politique-de-confidentialite"
              className="underline hover:text-white"
            >
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
