import type { Metadata } from "next";

import { ProductDetailPage, product7 } from "@/components/products/ProductDetailPage";
import { createOpenGraph } from "@/lib/site";

const title = "SECRO THREADS";
const description =
  "Absorbable PDO and PCL threads for lifting, contouring and collagen stimulation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product-7" },
  openGraph: createOpenGraph({ title, description, path: "/product-7" }),
};

export default function Page() {
  return <ProductDetailPage product={product7} />;
}
