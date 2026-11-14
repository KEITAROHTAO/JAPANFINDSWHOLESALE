import type { Metadata } from "next";
import { SHOP_FAQ } from "@/lib/shop-faq";
import HomeGroup from "@/components/HomeGroup";
import StoreDetails from "@/components/StoreDetails";
import { getVisibleProducts, WEB_GROUPS } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Japan Surplus Philippines & Laguna | Furniture & Wholesale",
  description:
    "Shop Japan surplus in the Philippines from JAPAN FINDS in Biñan, Laguna. Browse Japanese surplus furniture, baby items, household goods and wholesale items for resellers and personal use.",
  alternates: { canonical: "/shop" },
};

export default async function ShopHome() {
  const visible = await getVisibleProducts();
  const messenger = process.env.NEXT_PUBLIC_MESSENGER_URL || "https://m.me/61576532876437";

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SHOP_FAQ.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main lang="en">
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

      <section className="contentWrap seoIntro shopIntroGrid">
        <div className="shopIntroCopy">
          <p className="eyebrow">JAPAN SURPLUS PHILIPPINES</p>
          <h2>Japan Surplus Furniture & Wholesale Items in Laguna</h2>
          <p>
            JAPAN FINDS WHOLESALE is a Japan surplus warehouse in Biñan, Laguna, Philippines.
            We offer Japanese surplus furniture, baby items, household goods and wholesale items
            for resellers and personal-use customers. Browse current inventory online, add items
            to your Order List, and send your order through Messenger for stock confirmation.
          </p>
          <div className="shopActions">
            <a className="primaryButton" href="/available-items">Available Items</a>
            <a className="outlineButton" href="/location">Visit Us</a>
            <a className="outlineButton" href={messenger} target="_blank" rel="noopener noreferrer">Message Us</a>
          </div>
          <p className="shopBuyerNote">Resellers and home buyers are welcome. Walk in with no registration fee, or send us item codes online and arrange Lalamove with our team.</p>
          <div className="seoLinks">
            <a href="/japan-surplus-philippines">Japan Surplus Philippines</a>
            <a href="/japan-surplus-laguna">Japan Surplus Laguna</a>
            <a href="/japan-surplus-furniture">Japan Surplus Furniture</a>
            <a href="/location">Visit our Biñan, Laguna warehouse</a>
            <a href="/how-to-order">How to Order</a>
          </div>
        </div>
        <div className="shopIntroVideoWrap">
          <video
            className="shopIntroVideo"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/warehouse.jpg"
            width={720}
            height={1280}
            aria-label="JAPAN FINDS WHOLESALE warehouse and shopping scenes (silent video)"
          >
            <source src="/videos/japan-finds-warehouse-muted.mp4" type="video/mp4" />
          </video>
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

      <section className="contentWrap shopFaq" aria-labelledby="shopFaqHeading">
        <p className="eyebrow">BEFORE YOU SHOP</p>
        <h2 id="shopFaqHeading">Frequently Asked Questions</h2>
        {SHOP_FAQ.map(({ question, answer, href, linkText }) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
            {href ? <a className="textLink" href={href}>{linkText} →</a> : null}
          </details>
        ))}
      </section>

      <div className="contentWrap storeSection">
        <StoreDetails />
      </div>

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
        <p><a className="textLink" href="/">日本の事業者様へ →</a></p>
      </section>
    </main>
  );
}
