import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import CatalogView from "@/components/CatalogView";
import { getGroupBySlug, getVisibleProducts } from "@/lib/catalog";
import { getCatalogHeading, getCatalogHref, getCatalogMetadata, type CatalogParams } from "@/lib/catalog-seo";

type Props = { searchParams: Promise<CatalogParams> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const category = typeof params.category === "string" ? params.category : undefined;
  return getCatalogMetadata(getGroupBySlug(params.group), category);
}

export default async function AvailableItems({ searchParams }: Props) {
  const params = await searchParams;
  const group = getGroupBySlug(params.group);
  const category = typeof params.category === "string" ? params.category : undefined;
  if (group && (group.slug === "furniture-items" || group.slug === "cabinets")) {
    permanentRedirect(getCatalogHref(group, category));
  }
  const products = await getVisibleProducts();
  return (
    <main className="contentWrap pageTop">
      <p className="eyebrow">ONLINE CATALOG</p>
      <h1>{getCatalogHeading(group, category)}</h1>
      <p className="catalogIntro">Browse photos, prices and item codes. Resellers and walk-in buyers are welcome. <a href="/how-to-order">Order online through Messenger</a> or <a href="/location">visit our Biñan warehouse</a>.</p>
      <CatalogView products={products} group={group} category={category} />
    </main>
  );
}
