import type { Metadata } from "next";

import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "SECRO-FILL — German Premium Dermal Fillers for Clinics",
  description:
    "SECRO-FILL is a German medical aesthetics brand producing premium dermal fillers for clinics, physicians and distributors. Facial contouring and body volumisation.",
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
  name: "SECRO-FILL",
  description:
    "German medical aesthetics brand producing premium dermal fillers for professional use.",
  address: { "@type": "PostalAddress", addressCountry: "DE" },
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
