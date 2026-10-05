"use client";

import { useMemo, useState } from "react";
import { formatPeso, products } from "@/lib/catalog";
import { useOrderStore } from "@/components/OrderStore";

export default function OrderListPage() {
  const { items, remove, setNote, clear } = useOrderStore();
  const [copied, setCopied] = useState(false);
  const messenger = process.env.NEXT_PUBLIC_MESSENGER_URL || "#";
  const resolved = items.map((item) => ({ item, product: products.find((p) => p.code === item.code) })).filter((x) => x.product);
  const total = resolved.reduce((sum, x) => sum + (x.product?.price || 0), 0);
  const message = useMemo(() => {
    const lines = resolved.map(({ item, product }) => `${product!.code}  ${formatPeso(product!.price)}${item.note.trim() ? `\nNotes: ${item.note.trim()}` : ""}`);
    return `I would like to buy:\n\n${lines.join("\n")}\n\nTotal: ${formatPeso(total)}`;
  }, [resolved, total]);

  async function sendToMessenger() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {}
    window.open(messenger, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="contentWrap pageTop orderPage">
      <p className="eyebrow">YOUR SELECTION</p>
      <h1>Order List</h1>
      {resolved.length === 0 ? (
        <div className="emptyState"><p>Your Order List is empty.</p><a className="primaryButton linkButton" href="/available-items">Browse available items</a></div>
      ) : (
        <>
          <div className="orderItems">
            {resolved.map(({ item, product }) => (
              <article className="orderItem" key={product!.code}>
                <div className="orderThumb productImagePlaceholder"><span>{product!.category}</span></div>
                <div className="orderBody">
                  <div className="orderTopLine"><div><strong>{product!.category}</strong><span>{product!.code}</span></div><strong>{formatPeso(product!.price)}</strong></div>
                  <label>Notes<textarea value={item.note} onChange={(e) => setNote(product!.code, e.target.value)} placeholder="Optional note for our staff" /></label>
                  <button className="textButton" onClick={() => remove(product!.code)}>Remove</button>
                </div>
              </article>
            ))}
          </div>
          <div className="orderSummary">
            <div><span>Total</span><strong>{formatPeso(total)}</strong></div>
            <button className="primaryButton messengerButton" onClick={sendToMessenger}>Send Order via Messenger</button>
            <p className="finePrint">{copied ? "Order text copied. Paste it into Messenger." : "We’ll copy your order text and open Messenger. Our staff will confirm stock and send payment information."}</p>
            <button className="textButton" onClick={clear}>Clear Order List</button>
          </div>
        </>
      )}
    </main>
  );
}
