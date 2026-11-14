import CatalogView from "@/components/CatalogView";
import { getGroupBySlug, getVisibleProducts } from "@/lib/catalog";
import { getCatalogHeading } from "@/lib/catalog-seo";

export default async function GroupCatalogPage({ slug, category }: { slug: string; category?: string }) {
  const group = getGroupBySlug(slug)!;
  const furniture = slug === "furniture-items";
  const products = await getVisibleProducts();
  return (
    <main className="contentWrap pageTop">
      <p className="eyebrow">JAPAN SURPLUS · {group.label.toUpperCase()}</p>
      <h1>{getCatalogHeading(group, category)}</h1>
      <p className="catalogIntro">
        {furniture
          ? "Browse our current Japan surplus furniture, including tables, chairs, sofas and other pieces depending on stock."
          : "Browse our current Japan surplus cabinets, closets, drawers and storage pieces depending on stock."}
        {" "}Available at JAPAN FINDS WHOLESALE in Biñan, Laguna for resellers and home buyers.
        View photos, prices and item codes below. Each item is sold individually.
      </p>
      <div className="seoLinks catalogActions">
        <a href="/how-to-order">How to Order Online</a>
        <a href="/location">Visit Our Warehouse</a>
        <a href={furniture ? "/japan-surplus-cabinets" : "/japan-surplus-furniture"}>{furniture ? "Browse Cabinets" : "Browse Furniture"}</a>
      </div>
      <CatalogView products={products} group={group} category={category} />
      <section className="catalogHelp">
        <h2>How to Buy Japan Surplus {group.label}</h2>
        <p>Add your selected items to the Order List and send the item codes through Messenger. Our staff will confirm availability and arrange Lalamove with you. You can also visit during opening hours with no registration fee.</p>
        <a className="outlineButton" href="/how-to-order">View Ordering Guide</a>
      </section>
    </main>
  );
}
