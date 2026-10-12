import type { Metadata } from "next";
import HomeGroup from "@/components/HomeGroup";
import { getVisibleProducts, WEB_GROUPS } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Japan Surplus Philippines & Laguna | Furniture & Wholesale",
  description:
    "Shop Japan surplus in the Philippines from JAPAN FINDS in Biñan, Laguna. Browse Japanese surplus furniture, baby items, household goods and wholesale items for resellers and personal use.",
  alternates: { canonical: "/" },
};

export default async function Home() {
  const visible = await getVisibleProducts();

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where can I buy Japan surplus in Laguna?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "JAPAN FINDS WHOLESALE operates a Japan surplus warehouse in Biñan, Laguna, with furniture, baby items, household goods and wholesale items sourced from Japan.",
        },
      },
      {
        "@type": "Question",
        name: "Do you sell Japan surplus furniture in the Philippines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. JAPAN FINDS offers Japan surplus furniture in the Philippines, including tables, cabinets, chairs, beds and other furniture depending on current inventory.",
        },
      },
      {
        "@type": "Question",
        name: "Can resellers buy wholesale Japan surplus items?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. JAPAN FINDS serves resellers and personal-use customers. Current available items can be viewed online and orders can be sent through Messenger.",
        },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />

      <section className="hero">
        <img src="/images/warehouse.jpg" alt="Japan surplus warehouse in Biñan, Laguna, Philippines" className="heroImage" />
        <div className="heroShade" />
        <div className="heroText">
          <span>Direct Supply of</span>
          <h1>JAPAN<br />SURPLUS</h1>
        </div>
      </section>

      <section className="contentWrap seoIntro">
        <p className="eyebrow">JAPAN SURPLUS PHILIPPINES</p>
        <h2>Japan Surplus Furniture & Wholesale Items in Laguna</h2>
        <p>
          JAPAN FINDS WHOLESALE is a Japan surplus warehouse in Biñan, Laguna, Philippines.
          We offer Japanese surplus furniture, baby items, household goods and wholesale items
          for resellers and personal-use customers. Browse current inventory online, add items
          to your Order List, and send your order through Messenger for stock confirmation.
        </p>
        <div className="seoLinks">
          <a href="/japan-surplus-philippines">Japan Surplus Philippines</a>
          <a href="/japan-surplus-laguna">Japan Surplus Laguna</a>
          <a href="/japan-surplus-furniture">Japan Surplus Furniture</a>
          <a href="/location">Visit our Biñan, Laguna warehouse</a>
        </div>
      </section>

      <section className="contentWrap currentSection" id="available">
        <div className="introRow">
          <div><p className="eyebrow">ONLINE CATALOG</p><h2>Current Available Items</h2></div>
          <a className="outlineButton" href="/available-items">View all items</a>
        </div>
        {WEB_GROUPS.map((group) => (
          <HomeGroup
            key={group.slug}
            title={group.label}
            slug={group.slug}
            products={visible.filter((p) => group.areas.includes(p.area))}
          />
        ))}
      </section>

      <section className="contentWrap seoContent">
        <p className="eyebrow">FOR RESELLERS & HOME BUYERS</p>
        <h2>Looking for Japanese Surplus in the Philippines?</h2>
        <p>
          Our inventory changes regularly as new Japan surplus containers arrive. Furniture
          availability may include cabinets, tables, chairs, beds and storage pieces, while
          other categories include baby items and household goods. Check the online catalog
          for currently available products before visiting or messaging our team.
        </p>
        <p>
          We are located in Biñan, Laguna, making JAPAN FINDS accessible to customers and
          resellers in Laguna and nearby areas of South Luzon and Metro Manila.
        </p>
      </section>
    </main>
  );
}
