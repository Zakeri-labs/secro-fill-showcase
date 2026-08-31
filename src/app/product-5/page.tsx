import type { Metadata } from "next";

import { ProductDetailPage, product5 } from "@/components/products/ProductDetailPage";
import { createOpenGraph } from "@/lib/site";

const title = "HYAC-LIFT (16% CHAC)";
const description = "Multi-molecular hyaluronic acid injectable booster with CHAC technology.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product-5" },
  openGraph: createOpenGraph({ title, description, path: "/product-5" }),
};

export default function Page() {
  return <ProductDetailPage product={product5} />;
}
