import type { Metadata } from "next";

import { HomePage } from "@/components/home/HomePage";
import { COMPANY_ADDRESS, WHATSAPP_NUMBER } from "@/lib/company";
import { createOpenGraph } from "@/lib/site";

const description = `SECROMED is a German medical aesthetics brand producing premium dermal fillers for clinics, physicians and distributors in ${COMPANY_ADDRESS}.`;

export const metadata: Metadata = {
  title: "SECROMED — German Premium Dermal Fillers for Clinics",
  description,
  alternates: { canonical: "/" },
  openGraph: createOpenGraph({
    title: "SECROMED — German Premium Dermal Fillers",
    description:
      "Premium German dermal fillers for facial contouring and body volumisation. Partnership opportunities for clinics, doctors and distributors.",
    path: "/",
  }),
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SECROMED",
  description:
    "German medical aesthetics brand producing premium dermal fillers for professional use.",
  address: { "@type": "PostalAddress", addressLocality: "Hamburg", addressCountry: "DE" },
  telephone: WHATSAPP_NUMBER,
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HomePage />
    </>
  );
}
