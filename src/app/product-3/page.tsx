import type { Metadata } from "next";

import { ProductDetailPage, product3 } from "@/components/products/ProductDetailPage";
import { createOpenGraph } from "@/lib/site";

const title = "SECRO-FILL BODY FILLER";
const description =
  "Biphasic cross-linked hyaluronic acid body filler in two 50ml pre-filled syringes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product-3" },
  openGraph: createOpenGraph({ title, description, path: "/product-3" }),
};

export default function Page() {
  return <ProductDetailPage product={product3} />;
}
