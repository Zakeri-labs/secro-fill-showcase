import type { Metadata } from "next";

import { ContactPage } from "@/components/pages/ContactPage";
import { createOpenGraph } from "@/lib/site";

const description =
  "Contact the SECROMED partnership team for pricing, product documentation and territory availability for clinics, physicians and distributors.";

export const metadata: Metadata = {
  title: "Contact SECROMED — Partnership & Distribution",
  description,
  alternates: { canonical: "/contact" },
  openGraph: createOpenGraph({
    title: "Contact SECROMED",
    description: "Speak with the SECROMED partnership team about distribution and clinic supply.",
    path: "/contact",
  }),
};

export default function Page() {
  return <ContactPage />;
}
