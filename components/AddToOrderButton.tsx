"use client";
import Link from "next/link";
import { Product } from "@/lib/types";
import { useOrderStore } from "./OrderStore";

export default function AddToOrderButton({ product }: { product: Product }) {
  const { add, has } = useOrderStore();
  const added = has(product.code);
  return (
    <div className="detailActions">
      <button className="primaryButton" disabled={added} onClick={() => add(product)}>
        {added ? "Added to Order List" : "Add to Order List"}
      </button>
      {added && <Link className="outlineButton" href="/order-list">View Order List</Link>}
    </div>
  );
}
