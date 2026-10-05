import { Product, WebGroup } from "./types";

export const WEB_GROUPS: WebGroup[] = [
  { slug: "baby-items", label: "Baby Items", areas: ["B"] },
  { slug: "furniture-items", label: "Furniture Items", areas: ["C", "D"] },
  { slug: "wholesale-small-items", label: "Wholesale Small Items", areas: ["E"] },
  { slug: "wholesale-display-items", label: "Wholesale Display Items", areas: ["A"] },
];

// Replace this adapter with Products Data sync in the next phase.
export const products: Product[] = [
  { code: "B10-101", area: "B", category: "Stroller", price: 840, createdAt: "2026-09-25T09:00:00+08:00" },
  { code: "B10-102", area: "B", category: "Baby Chair", price: 525, createdAt: "2026-09-25T09:00:00+08:00" },
  { code: "B10-103", area: "B", category: "Baby Bed", price: 1260, createdAt: "2026-09-24T09:00:00+08:00" },
  { code: "B10-104", area: "B", category: "Baby Carrier", price: 105, createdAt: "2026-09-24T09:00:00+08:00" },
  { code: "B10-105", area: "B", category: "Toy", price: 315, createdAt: "2026-09-23T09:00:00+08:00" },
  { code: "B10-106", area: "B", category: "Stroller", price: 945, createdAt: "2026-09-20T09:00:00+08:00" },

  { code: "C10-123", area: "C", category: "Table", price: 1575, size: "W120 × D60 × H72 cm", createdAt: "2026-09-22T09:00:00+08:00" },
  { code: "C10-145", area: "C", category: "Chair", price: 2100, size: "W65 × D70 × H84 cm", createdAt: "2026-09-22T09:00:00+08:00" },
  { code: "C10-166", area: "C", category: "Sofa", price: 4725, size: "W180 × D80 × H86 cm", createdAt: "2026-09-21T09:00:00+08:00" },
  { code: "D10-202", area: "D", category: "Cabinet", price: 3150, size: "W90 × D45 × H180 cm", createdAt: "2026-09-21T09:00:00+08:00" },
  { code: "D10-216", area: "D", category: "Shelf", price: 1890, size: "W80 × D35 × H160 cm", createdAt: "2026-09-20T09:00:00+08:00" },
  { code: "C10-181", area: "C", category: "Table", price: 2310, size: "W140 × D80 × H75 cm", createdAt: "2026-09-19T09:00:00+08:00" },

  { code: "E10-301", area: "E", category: "Kitchen", price: 105, createdAt: "2026-09-22T09:00:00+08:00" },
  { code: "E10-302", area: "E", category: "Tableware", price: 53, createdAt: "2026-09-22T09:00:00+08:00" },
  { code: "E10-303", area: "E", category: "Toy", price: 158, createdAt: "2026-09-21T09:00:00+08:00" },
  { code: "E10-304", area: "E", category: "Bag", price: 210, createdAt: "2026-09-21T09:00:00+08:00" },
  { code: "E10-305", area: "E", category: "Decor", price: 105, createdAt: "2026-09-20T09:00:00+08:00" },
  { code: "E10-306", area: "E", category: "Kitchen", price: 263, createdAt: "2026-09-19T09:00:00+08:00" },

  { code: "A10-401", area: "A", category: "Display Item", price: 1050, createdAt: "2026-09-22T09:00:00+08:00" },
  { code: "A10-402", area: "A", category: "Display Item", price: 1575, createdAt: "2026-09-22T09:00:00+08:00" },
  { code: "A10-403", area: "A", category: "Premium Item", price: 2625, createdAt: "2026-09-21T09:00:00+08:00" },
  { code: "A10-404", area: "A", category: "Display Item", price: 840, createdAt: "2026-09-20T09:00:00+08:00" },
  { code: "A10-405", area: "A", category: "Premium Item", price: 3675, createdAt: "2026-09-20T09:00:00+08:00" },
  { code: "A10-406", area: "A", category: "Display Item", price: 735, createdAt: "2026-09-18T09:00:00+08:00" },
];

export const WEBSITE_PUBLISH_DELAY_DAYS = 3;

export function isWebVisible(product: Product, now = new Date()) {
  const created = new Date(product.createdAt).getTime();
  return now.getTime() - created >= WEBSITE_PUBLISH_DELAY_DAYS * 24 * 60 * 60 * 1000;
}

export function getVisibleProducts(now = new Date()) {
  return products.filter((p) => isWebVisible(p, now));
}

export function getGroupBySlug(slug: string | null | undefined) {
  return WEB_GROUPS.find((g) => g.slug === slug);
}

export function getProductGroup(product: Product) {
  return WEB_GROUPS.find((g) => g.areas.includes(product.area))!;
}

export function formatPeso(value: number) {
  return `₱${value.toLocaleString("en-PH")}`;
}
