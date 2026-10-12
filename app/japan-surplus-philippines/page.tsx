import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Japan Surplus Philippines | Furniture, Baby & Wholesale Items",
  description:
    "Browse Japan surplus in the Philippines from JAPAN FINDS in Biñan, Laguna. Japanese surplus furniture, baby items, household goods and wholesale stock for resellers.",
  alternates: { canonical: "/japan-surplus-philippines" },
};

export default function Page() {
  return (
    <main className="contentWrap pageTop prosePage">
      <p className="eyebrow">JAPAN SURPLUS PHILIPPINES</p>
      <h1>Japan Surplus in the Philippines</h1>
      <p>
        JAPAN FINDS WHOLESALE supplies Japan surplus items in the Philippines from our
        warehouse in Biñan, Laguna. Our inventory can include Japanese furniture, baby items,
        household goods, display items and wholesale small items.
      </p>
      <h2>Japan Surplus for Resellers and Personal Use</h2>
      <p>
        We serve both resellers looking for stock and customers buying for their own homes.
        Available inventory changes regularly, so our online catalog shows current items that
        can be added to an Order List and sent to our team through Messenger.
      </p>
      <h2>What Japan Surplus Items Are Available?</h2>
      <p>
        Depending on the current container, furniture may include cabinets, tables, chairs,
        beds and storage pieces. Other categories can include baby products and household
        goods. Check the catalog for live availability.
      </p>
      <div className="seoLinks">
        <a href="/available-items">Browse Available Items</a>
        <a href="/japan-surplus-furniture">Japan Surplus Furniture</a>
        <a href="/japan-surplus-laguna">Japan Surplus Laguna</a>
      </div>
    </main>
  );
}
