import type { Metadata } from "next";

import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact SECRO-FILL — Partnership & Distribution",
  description:
    "Contact the SECRO-FILL partnership team for pricing, product documentation and territory availability for clinics, physicians and distributors.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact SECRO-FILL",
    description: "Speak with the SECRO-FILL partnership team about distribution and clinic supply.",
  },
};

export default function Page() {
  return <ContactPage />;
}
