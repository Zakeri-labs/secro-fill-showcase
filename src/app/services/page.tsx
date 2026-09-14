import type { Metadata } from "next";

import { ServicesPage } from "@/components/pages/ServicesPage";
import { createOpenGraph } from "@/lib/site";

const description =
  "Explore the SECROMED filler range: DEEP 10ml, DEEP 3x3.2ml and BODY FILLER, plus training and supply services for professional partners.";

export const metadata: Metadata = {
  title: "Services & Products — SECROMED Dermal Fillers",
  description,
  alternates: { canonical: "/services" },
  openGraph: createOpenGraph({
    title: "Services & Products — SECROMED",
    description: "The SECROMED dermal filler range and professional partner services.",
    path: "/services",
  }),
};

export default function Page() {
  return <ServicesPage />;
}
