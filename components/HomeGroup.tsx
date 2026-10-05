import Link from "next/link";
import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

export default function HomeGroup({ title, slug, products }: { title: string; slug: string; products: Product[] }) {
  return (
    <section className="homeGroup">
      <div className="sectionHeadingRow">
        <h2>{title}</h2>
        <Link href={`/available-items?group=${slug}`}>View more →</Link>
      </div>
      <div className="horizontalProducts">
        {products.slice(0, 5).map((product) => <ProductCard key={product.code} product={product} />)}
      </div>
    </section>
  );
}
