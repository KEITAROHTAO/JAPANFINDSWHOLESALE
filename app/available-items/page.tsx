import ProductCard from "@/components/ProductCard";
import { getGroupBySlug, getVisibleProducts, WEB_GROUPS } from "@/lib/catalog";

export default async function AvailableItems({ searchParams }: { searchParams: Promise<{ group?: string; category?: string }> }) {
  const params = await searchParams;
  const group = getGroupBySlug(params.group);
  const all = await getVisibleProducts();
  const groupProducts = group ? all.filter((p) => group.areas.includes(p.area)) : all;
  const categories = [...new Set(groupProducts.map((p) => p.category))].sort();
  const shown = params.category ? groupProducts.filter((p) => p.category === params.category) : groupProducts;

  return (
    <main className="contentWrap pageTop">
      <p className="eyebrow">ONLINE CATALOG</p>
      <h1>Available Items</h1>
      <div className="chipRow groupChips">
        <a className={!group ? "chip active" : "chip"} href="/available-items">All</a>
        {WEB_GROUPS.map((g) => <a key={g.slug} className={group?.slug === g.slug ? "chip active" : "chip"} href={`/available-items?group=${g.slug}`}>{g.label}</a>)}
      </div>
      {group && categories.length > 0 && (
        <div className="chipRow subChips">
          <a className={!params.category ? "chip active" : "chip"} href={`/available-items?group=${group.slug}`}>All {group.label}</a>
          {categories.map((category) => <a key={category} className={params.category === category ? "chip active" : "chip"} href={`/available-items?group=${group.slug}&category=${encodeURIComponent(category)}`}>{category}</a>)}
        </div>
      )}
      <p className="itemCount">{shown.length} item{shown.length === 1 ? "" : "s"}</p>
      <div className="productGrid">
        {shown.map((product) => <ProductCard key={product.code} product={product} />)}
      </div>
    </main>
  );
}
