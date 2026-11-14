import ProductCard from "@/components/ProductCard";
import { WEB_GROUPS } from "@/lib/catalog";
import { getCatalogHref, getGroupHref } from "@/lib/catalog-seo";
import type { Product, WebGroup } from "@/lib/types";

export default function CatalogView({ products, group, category }: {
  products: Product[];
  group?: WebGroup;
  category?: string;
}) {
  const groupProducts = group ? products.filter((p) => group.areas.includes(p.area)) : products;
  const categories = [...new Set(groupProducts.map((p) => p.category))].sort();
  const shown = category ? groupProducts.filter((p) => p.category === category) : groupProducts;

  return (
    <>
      <nav className="chipRow groupChips" aria-label="Product groups">
        <a className={!group ? "chip active" : "chip"} href="/available-items" aria-current={!group ? "page" : undefined}>All</a>
        {WEB_GROUPS.map((g) => <a key={g.slug} className={group?.slug === g.slug ? "chip active" : "chip"} href={getGroupHref(g.slug)} aria-current={group?.slug === g.slug ? "page" : undefined}>{g.label}</a>)}
      </nav>
      {group && categories.length > 0 && (
        <nav className="chipRow subChips" aria-label={`${group.label} categories`}>
          <a className={!category ? "chip active" : "chip"} href={getCatalogHref(group)}>All {group.label}</a>
          {categories.map((name) => <a key={name} className={category === name ? "chip active" : "chip"} href={getCatalogHref(group, name)}>{name}</a>)}
        </nav>
      )}
      <p className="itemCount">{shown.length} item{shown.length === 1 ? "" : "s"}</p>
      {shown.length ? (
        <div className="productGrid">
          {shown.map((product) => <ProductCard key={product.code} product={product} />)}
        </div>
      ) : (
        <div className="emptyState">
          <p>No items are currently listed in this category. Please check back for new arrivals or message us about what you need.</p>
          <a className="outlineButton" href="/how-to-order">How to Order & Contact Us</a>
        </div>
      )}
    </>
  );
}
