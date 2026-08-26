import type { Metadata } from "next";

import { ServicesPage } from "@/components/pages/ServicesPage";
import { createOpenGraph } from "@/lib/site";

const description =
  "Explore the SECRO-FILL filler range: DEEP 10ml, DEEP 3x3.2ml and BODY FILLER, plus training and supply services for professional partners.";

export const metadata: Metadata = {
  title: "Services & Products — SECRO-FILL Dermal Fillers",
  description,
  alternates: { canonical: "/services" },
  openGraph: createOpenGraph({
    title: "Services & Products — SECRO-FILL",
    description: "The SECRO-FILL dermal filler range and professional partner services.",
    path: "/services",
  }),
};

export default function Page() {
  return <ServicesPage />;
}
