import type { Metadata } from "next";

import { ServicesPage } from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Services & Products — SECRO-FILL Dermal Fillers",
  description:
    "Explore the SECRO-FILL filler range: DEEP 10ml, DEEP 3x3.2ml and BODY FILLER, plus training and supply services for professional partners.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services & Products — SECRO-FILL",
    description: "The SECRO-FILL dermal filler range and professional partner services.",
  },
};

export default function Page() {
  return <ServicesPage />;
}
