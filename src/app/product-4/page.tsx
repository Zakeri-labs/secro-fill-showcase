import type { Metadata } from "next";

import { ProductDetailPage, product4 } from "@/components/products/ProductDetailPage";
import { createOpenGraph } from "@/lib/site";

const title = "SECRO-MARVEL";
const description =
  "Advanced skin revitalizing injectable complex with HA, PN, PDRN, collagen and glutathione.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product-4" },
  openGraph: createOpenGraph({ title, description, path: "/product-4" }),
};

export default function Page() {
  return <ProductDetailPage product={product4} />;
}
