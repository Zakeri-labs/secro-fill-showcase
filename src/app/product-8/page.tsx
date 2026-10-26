import type { Metadata } from "next";

import { ProductDetailPage, product8 } from "@/components/products/ProductDetailPage";
import { createOpenGraph } from "@/lib/site";

const title = "SECRO-CAHA";
const description =
  "Cross-linked calcium hydroxyapatite hyaluronic acid gel with lidocaine for contouring and biostimulation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product-8" },
  openGraph: createOpenGraph({ title, description, path: "/product-8" }),
};

export default function Page() {
  return <ProductDetailPage product={product8} />;
}
