import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Japan Surplus Warehouse in Biñan, Laguna | Location",
  description:
    "Visit JAPAN FINDS WHOLESALE in Biñan, Laguna for Japan surplus furniture, baby items and household goods. View current stock online before visiting.",
  alternates: { canonical: "/location" },
};

export default function Page() {
  return (
    <main className="contentWrap pageTop prosePage">
      <p className="eyebrow">BIÑAN, LAGUNA</p>
      <h1>Japan Surplus Warehouse in Laguna</h1>
      <p>
        JAPAN FINDS WHOLESALE is located at Limaco Compound, Manila South Road, Platero,
        Biñan, Laguna, Philippines.
      </p>
      <h2>Shop Japan Surplus Furniture in Biñan</h2>
      <p>
        Customers can visit our warehouse to browse Japan surplus furniture, baby items,
        household goods and other available products. Because inventory changes regularly,
        we recommend checking the online catalog before traveling.
      </p>
      <h2>Before You Visit</h2>
      <p>
        New arrivals and current stock are updated through our website and social channels.
        For specific items, add products to your Order List and contact us through Messenger
        for confirmation.
      </p>
      <div className="seoLinks">
        <a href="/available-items">View Available Items</a>
        <a href="/japan-surplus-laguna">Japan Surplus in Laguna</a>
        <a href="/japan-surplus-furniture">Japan Surplus Furniture</a>
      </div>
    </main>
  );
}
