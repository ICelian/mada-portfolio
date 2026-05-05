import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Mada4Bang",
  robots: { index: false, follow: false },
};

export default function PolitiqueDeConfidentialite() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-300">
      <Link
        href="/"
        className="mb-10 inline-block text-sm text-neutral-500 hover:text-white transition-colors"
      >
        ← Retour
      </Link>

      <h1 className="mb-8 text-3xl font-bold text-white">
        Politique de confidentialité
      </h1>

      <section className="space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">
            Responsable du traitement
          </h2>
          <p>
            <strong>Adam Fadeau</strong> — contact@mada4bang.com
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">
            Données collectées
          </h2>
          <p>
            Ce site ne collecte aucune donnée personnelle directement. Si vous
            nous contactez via le formulaire ou par e-mail, seules les
            informations que vous fournissez volontairement (nom, adresse
            e-mail, message) sont traitées dans le but de répondre à votre
            demande.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">Cookies</h2>
          <p>
            Ce site n'utilise aucun cookie publicitaire ni tracker tiers. Seuls
            des cookies strictement nécessaires au fonctionnement technique
            peuvent être déposés par l'hébergeur (Vercel).
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">
            Base légale et durée de conservation
          </h2>
          <p>
            Le traitement repose sur votre consentement (envoi volontaire d'un
            message). Les données de contact sont conservées pendant 12 mois
            après le dernier échange, puis supprimées.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de
            rectification, de suppression et de portabilité de vos données. Vous
            pouvez exercer ces droits en écrivant à{" "}
            <a
              href="mailto:contact@mada4bang.com"
              className="underline hover:text-white"
            >
              contact@mada4bang.com
            </a>
            .
          </p>
          <p className="mt-2">
            En cas de litige, vous pouvez introduire une réclamation auprès de
            la{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              CNIL
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-lg font-semibold text-white">
            Hébergement
          </h2>
          <p>
            Vercel Inc., 440 N Baxter St, Covina, CA 91723, États-Unis. Les
            données peuvent être transférées hors UE dans le cadre des clauses
            contractuelles types.
          </p>
        </div>
      </section>
    </main>
  );
}
