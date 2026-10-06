import type { Metadata } from "next";

import { ProductDetailPage, product6 } from "@/components/products/ProductDetailPage";
import { createOpenGraph } from "@/lib/site";

const title = "SECRO-LIPS";
const description =
  "Monophasic cross-linked hyaluronic acid lip filler, 20mg/ml, 1 × 10ml with lidocaine.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product-6" },
  openGraph: createOpenGraph({ title, description, path: "/product-6" }),
};

export default function Page() {
  return <ProductDetailPage product={product6} />;
}
