import type { Metadata } from "next";

import { HomePage } from "@/components/home/HomePage";
import { COMPANY_ADDRESS, COMPANY_NAME, WHATSAPP_NUMBER } from "@/lib/company";

export const metadata: Metadata = {
  title: "SECRO-FILL — German Premium Dermal Fillers for Clinics",
  description: `${COMPANY_NAME} — SECRO-FILL is a German medical aesthetics brand producing premium dermal fillers for clinics, physicians and distributors in ${COMPANY_ADDRESS}.`,
  alternates: { canonical: "/" },
  openGraph: {
    title: "SECRO-FILL — German Premium Dermal Fillers",
    description:
      "Premium German dermal fillers for facial contouring and body volumisation. Partnership opportunities for clinics, doctors and distributors.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  alternateName: "SECRO-FILL",
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
