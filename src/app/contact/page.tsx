import type { Metadata } from "next";

import { ContactPage } from "@/components/pages/ContactPage";
import { createOpenGraph } from "@/lib/site";

const description =
  "Contact the SECRO-FILL partnership team for pricing, product documentation and territory availability for clinics, physicians and distributors.";

export const metadata: Metadata = {
  title: "Contact SECRO-FILL — Partnership & Distribution",
  description,
  alternates: { canonical: "/contact" },
  openGraph: createOpenGraph({
    title: "Contact SECRO-FILL",
    description: "Speak with the SECRO-FILL partnership team about distribution and clinic supply.",
    path: "/contact",
  }),
};

export default function Page() {
  return <ContactPage />;
}
