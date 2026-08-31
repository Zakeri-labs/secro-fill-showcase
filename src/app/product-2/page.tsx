import type { Metadata } from "next";

import { ProductDetailPage, product2 } from "@/components/products/ProductDetailPage";
import { createOpenGraph } from "@/lib/site";

const title = "SECRO-FILL DEEP 10ml";
const description = "Monophasic cross-linked hyaluronic acid filler in a 10ml pre-filled syringe.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product-2" },
  openGraph: createOpenGraph({ title, description, path: "/product-2" }),
};

export default function Page() {
  return <ProductDetailPage product={product2} />;
}
