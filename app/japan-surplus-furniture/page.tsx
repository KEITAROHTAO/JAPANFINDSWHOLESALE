import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Japan Surplus Furniture Philippines | Cabinets, Tables & More",
  description:
    "Shop Japan surplus furniture in the Philippines from JAPAN FINDS in Biñan, Laguna. Browse current Japanese cabinets, tables, chairs, beds and storage furniture online.",
  alternates: { canonical: "/japan-surplus-furniture" },
};

export default function Page() {
  return (
    <main className="contentWrap pageTop prosePage">
      <p className="eyebrow">JAPAN SURPLUS FURNITURE</p>
      <h1>Japan Surplus Furniture in the Philippines</h1>
      <p>
        JAPAN FINDS WHOLESALE offers Japanese surplus furniture from our warehouse in Biñan,
        Laguna. Current stock can include cabinets, tables, chairs, beds, shelves, storage
        furniture and other pieces depending on each container.
      </p>
      <h2>Furniture for Resellers and Home Buyers</h2>
      <p>
        Our furniture inventory is suitable for resellers looking for Japan surplus stock as
        well as customers furnishing homes, rentals and small businesses. Because inventory
        changes frequently, the online catalog is the best place to check current availability.
      </p>
      <h2>How to Order Japan Surplus Furniture</h2>
      <p>
        Browse the available furniture section, add the items you want to your Order List, and
        send the order through Messenger. Our staff will confirm whether the items are still
        available before finalizing the purchase.
      </p>
      <div className="seoLinks">
        <a href="/available-items?group=furniture-items">Browse Available Furniture</a>
        <a href="/japan-surplus-laguna">Japan Surplus Laguna</a>
        <a href="/location">Visit Our Biñan Warehouse</a>
      </div>
    </main>
  );
}
