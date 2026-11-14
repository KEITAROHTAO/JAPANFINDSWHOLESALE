import type { Metadata } from "next";
import { STORE } from "@/lib/store";

export const metadata: Metadata = {
  title: "How to Order Japan Surplus Online",
  description:
    "Order Japan surplus from JAPAN FINDS in Biñan, Laguna. Browse available items, build your Order List, and paste your order into Messenger for stock and payment confirmation.",
  alternates: { canonical: "/how-to-order" },
};

export default function Page() {
  const messenger = process.env.NEXT_PUBLIC_MESSENGER_URL || "https://m.me/61576532876437";

  return (
    <main className="contentWrap pageTop prosePage">
      <p className="eyebrow">JAPAN FINDS WHOLESALE</p>
      <h1>How to Order</h1>
      <p>
        Resellers and personal-use customers can browse our Japan surplus inventory online
        and send an order to our team through Messenger. You can also visit our Biñan warehouse.
      </p>

      <h2>Order Online in 4 Steps</h2>
      <ol className="orderGuideSteps">
        <li>
          <h3>Browse Available Items</h3>
          <p>
            Open <a href="/available-items">Available Items</a> and browse by group or category.
            Select a product photo to see its item code, price and size when available.
          </p>
        </li>
        <li>
          <h3>Add Products to Your Order List</h3>
          <p>
            Select “+ Add to Order List” on the items you want. Open your
            <a href="/order-list"> Order List</a> to review your selection, add notes or remove items.
          </p>
        </li>
        <li>
          <h3>Paste and Send Your Order in Messenger</h3>
          <p>
            Select “Send Order via Messenger”. The website tries to copy your order text
            and opens Messenger. Paste the text into the conversation and send it to us.
            The website does not send the message automatically.
          </p>
          <p>
            If the text is not copied, use “Copy Order Text”, or select and copy the text
            manually from the Order Text box. If Messenger does not open, use the
            <a href={messenger} target="_blank" rel="noopener noreferrer"> Messenger link</a> and paste your order there.
          </p>
        </li>
        <li>
          <h3>Wait for Our Staff to Confirm</h3>
          <p>
            Our staff will confirm stock and send payment information. Ask our team about
            collection arrangements before finalizing your purchase.
          </p>
        </li>
      </ol>

      <h2>Prices and Availability</h2>
      <p>
        Displayed product prices include the 5% service charge. Availability is subject to
        final confirmation by our staff. Adding an item to your Order List does not reserve
        it or complete a purchase.
      </p>

      <h2>Prefer to Visit or Need Help?</h2>
      <p>
        Our warehouse is open {STORE.hours}. {STORE.closed}. See our
        <a href="/location"> location, directions and contact details</a> before visiting.
      </p>
      <div className="seoLinks">
        <a href="/available-items">Browse Available Items</a>
        <a href="/order-list">Open Order List</a>
        <a href={messenger} target="_blank" rel="noopener noreferrer">Message Us</a>
      </div>
    </main>
  );
}
