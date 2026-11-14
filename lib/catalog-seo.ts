import type { Metadata } from "next";
import type { WebGroup } from "./types";

export type CatalogParams = { group?: string; category?: string };

export function getGroupHref(slug: string) {
  if (slug === "furniture-items") return "/japan-surplus-furniture";
  if (slug === "cabinets") return "/japan-surplus-cabinets";
  return `/available-items?group=${encodeURIComponent(slug)}`;
}

export function getCatalogHref(group?: WebGroup, category?: string) {
  const base = group ? getGroupHref(group.slug) : "/available-items";
  return category ? `${base}${base.includes("?") ? "&" : "?"}category=${encodeURIComponent(category)}` : base;
}

export function getCatalogHeading(group?: WebGroup, category?: string) {
  return category ? `Japan Surplus ${category} in Biñan, Laguna` : group
    ? `Japan Surplus ${group.label} in Biñan, Laguna`
    : "Available Japan Surplus Items";
}

export function getCatalogMetadata(group?: WebGroup, category?: string): Metadata {
  const subject = category || group?.label || "Items";
  const title = `Japan Surplus ${subject} in Biñan, Laguna`;
  const description = `Browse available Japan surplus ${subject.toLowerCase()} at JAPAN FINDS WHOLESALE in Biñan, Laguna. View photos, prices and item codes, then order through Messenger or visit our warehouse.`;
  const url = getCatalogHref(group, category);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { card: "summary_large_image", title, description },
  };
}
