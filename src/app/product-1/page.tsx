import type { Metadata } from "next";

import { Deep32ProductPage } from "@/components/products/Deep32ProductPage";
import { createOpenGraph } from "@/lib/site";

const title = "SECRO-FILL DEEP 3×3.2ml";
const description =
  "Monophasic cross-linked hyaluronic acid filler in 3 × 3.2ml pre-filled syringes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product-1" },
  openGraph: createOpenGraph({ title, description, path: "/product-1" }),
};

export default function Page() {
  return <Deep32ProductPage />;
}
