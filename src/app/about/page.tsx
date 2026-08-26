import type { Metadata } from "next";

import { AboutPage } from "@/components/pages/AboutPage";
import { createOpenGraph } from "@/lib/site";

const description =
  "SECRO-FILL combines German laboratory science and advanced manufacturing to deliver premium dermal fillers to clinics and distributors worldwide.";

export const metadata: Metadata = {
  title: "About SECRO-FILL — German Dermal Filler Manufacturer",
  description,
  alternates: { canonical: "/about" },
  openGraph: createOpenGraph({
    title: "About SECRO-FILL",
    description:
      "German scientific innovation and advanced manufacturing behind SECRO-FILL fillers.",
    path: "/about",
  }),
};

export default function Page() {
  return <AboutPage />;
}
