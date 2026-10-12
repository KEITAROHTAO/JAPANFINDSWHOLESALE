import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About JAPAN FINDS | Japan Surplus Supplier Philippines",
  description:
    "Learn about JAPAN FINDS WHOLESALE, a Japan surplus warehouse in Biñan, Laguna serving resellers and personal-use customers in the Philippines.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <main className="contentWrap pageTop prosePage">
      <p className="eyebrow">ABOUT JAPAN FINDS</p>
      <h1>Japan Surplus Supply in the Philippines</h1>
      <p>
        JAPAN FINDS WHOLESALE is based in Biñan, Laguna, Philippines and sells Japan surplus
        items sourced from Japan. Our customers include resellers as well as people buying
        furniture and household goods for personal use.
      </p>
      <h2>What We Sell</h2>
      <p>
        Our inventory changes with each container and can include Japanese surplus furniture,
        baby items, household goods, display items and wholesale small items. Current available
        products are published in our online catalog.
      </p>
      <h2>For Resellers</h2>
      <p>
        We aim to make it easier for resellers to see available Japan surplus stock before
        traveling to the warehouse. Customers can build an Order List on this website and
        contact our team through Messenger for final stock confirmation.
      </p>
      <p><a className="outlineButton" href="/available-items">Browse Available Items</a></p>
    </main>
  );
}
