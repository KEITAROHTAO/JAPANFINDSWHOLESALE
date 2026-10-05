"use client";

import { useMemo, useState } from "react";
import { formatPeso } from "@/lib/format";
import { useOrderStore } from "@/components/OrderStore";

export default function OrderListPage() {
  const { items, remove, setNote, clear } = useOrderStore();
  const [copied, setCopied] = useState(false);
  const messenger = process.env.NEXT_PUBLIC_MESSENGER_URL || "#";
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const message = useMemo(() => {
    const lines = items.map((item) =>
      `${item.code}  ${formatPeso(item.price)}${item.note.trim() ? `\nNotes: ${item.note.trim()}` : ""}`
    );
    return `I would like to buy:\n\n${lines.join("\n")}\n\nTotal: ${formatPeso(total)}`;
  }, [items, total]);

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
      {items.length === 0 ? (
        <div className="emptyState">
          <p>Your Order List is empty.</p>
          <a className="primaryButton linkButton" href="/available-items">Browse available items</a>
        </div>
      ) : (
        <>
          <div className="orderItems">
            {items.map((item) => (
              <article className="orderItem" key={item.code}>
                {item.image ? (
                  <img className="orderThumb productImage" src={item.image} alt={`${item.code} ${item.category}`} />
                ) : (
                  <div className="orderThumb productImagePlaceholder"><span>{item.category}</span></div>
                )}
                <div className="orderBody">
                  <div className="orderTopLine">
                    <div><strong>{item.category}</strong><span>{item.code}</span></div>
                    <strong>{formatPeso(item.price)}</strong>
                  </div>
                  <label>
                    Notes
                    <textarea value={item.note} onChange={(e) => setNote(item.code, e.target.value)} placeholder="Optional note for our staff" />
                  </label>
                  <button className="textButton" onClick={() => remove(item.code)}>Remove</button>
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
