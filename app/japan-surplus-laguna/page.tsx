import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Japan Surplus Laguna | Biñan Warehouse & Furniture",
  description:
    "Looking for Japan surplus in Laguna? Visit JAPAN FINDS in Biñan for Japanese surplus furniture, baby items and household goods with current stock online.",
  alternates: { canonical: "/japan-surplus-laguna" },
};

export default function Page() {
  return (
    <main className="contentWrap pageTop prosePage">
      <p className="eyebrow">JAPAN SURPLUS LAGUNA</p>
      <h1>Japan Surplus in Laguna</h1>
      <p>
        JAPAN FINDS WHOLESALE is a Japan surplus warehouse in Biñan, Laguna. Customers can
        browse Japanese surplus furniture, baby items, household goods and other current stock
        from our warehouse or check available products online before visiting.
      </p>
      <h2>Japan Surplus Furniture in Biñan, Laguna</h2>
      <p>
        Furniture inventory changes with each arrival and may include cabinets, tables, chairs,
        beds, shelves and storage pieces. The website displays current available items so
        customers and resellers can check stock from anywhere in Laguna.
      </p>
      <h2>Serving Laguna and Nearby Areas</h2>
      <p>
        Our Biñan location is convenient for customers in Laguna and nearby parts of South
        Luzon and Metro Manila. For a specific item, use the Order List and contact our team
        through Messenger for final availability confirmation.
      </p>
      <div className="seoLinks">
        <a href="/location">Warehouse Location</a>
        <a href="/available-items?group=furniture-items">Available Furniture</a>
        <a href="/japan-surplus-philippines">Japan Surplus Philippines</a>
      </div>
    </main>
  );
}
