"use client";

import Link from "next/link";
import { Product } from "@/lib/types";
import { formatPeso } from "@/lib/catalog";
import { useOrderStore } from "./OrderStore";

export default function ProductCard({ product }: { product: Product }) {
  const { add, has } = useOrderStore();
  const added = has(product.code);

  return (
    <article className="productCard">
      <Link href={`/products/${encodeURIComponent(product.code)}`} className="productImageLink">
        {product.image ? (
          <img className="productImage" src={product.image} alt={`${product.code} ${product.category}`} loading="lazy" />
        ) : (
          <div className="productImagePlaceholder"><span>{product.category}</span></div>
        )}
      </Link>
      <div className="productMeta">
        <strong>{formatPeso(product.price)}</strong>
        <span>{product.code}</span>
      </div>
      <button className={`smallButton ${added ? "added" : ""}`} disabled={added} onClick={() => add(product)}>
        {added ? "Added" : "+ Add to Order List"}
      </button>
    </article>
  );
}
