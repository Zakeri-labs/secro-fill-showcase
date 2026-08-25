import type { Metadata } from "next";

import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About SECRO-FILL — German Dermal Filler Manufacturer",
  description:
    "SECRO-FILL combines German laboratory science and advanced manufacturing to deliver premium dermal fillers to clinics and distributors worldwide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About SECRO-FILL",
    description:
      "German scientific innovation and advanced manufacturing behind SECRO-FILL fillers.",
  },
};

export default function Page() {
  return <AboutPage />;
}
