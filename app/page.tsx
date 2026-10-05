import HomeGroup from "@/components/HomeGroup";
import { getVisibleProducts, WEB_GROUPS } from "@/lib/catalog";

export default async function Home() {
  const visible = await getVisibleProducts();
  return (
    <main>
      <section className="hero">
        <img src="/api/image?asset=warehouse" alt="JAPAN FINDS WHOLESALE warehouse" className="heroImage" />
        <div className="heroShade" />
        <div className="heroText"><span>Direct Supply of</span><h1>JAPAN<br />SURPLUS</h1></div>
      </section>
      <section className="contentWrap currentSection" id="available">
        <div className="introRow">
          <div><p className="eyebrow">ONLINE CATALOG</p><h1>Current Available Items</h1></div>
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
    </main>
  );
}
