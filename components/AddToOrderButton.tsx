"use client";
import Link from "next/link";
import { useOrderStore } from "./OrderStore";

export default function AddToOrderButton({ code }: { code: string }) {
  const { add, has } = useOrderStore();
  const added = has(code);
  return (
    <div className="detailActions">
      <button className="primaryButton" disabled={added} onClick={() => add(code)}>{added ? "Added to Order List" : "Add to Order List"}</button>
      {added && <Link className="outlineButton" href="/order-list">View Order List</Link>}
    </div>
  );
}
