import { Product, WebGroup } from "./types";

export const WEB_GROUPS: WebGroup[] = [
  { slug: "baby-items", label: "Baby Items", areas: ["B"] },
  { slug: "furniture-items", label: "Furniture Items", areas: ["C", "D"] },
  { slug: "wholesale-small-items", label: "Wholesale Small Items", areas: ["E"] },
  { slug: "wholesale-display-items", label: "Wholesale Display Items", areas: ["A"] },
];

export const WEBSITE_PUBLISH_DELAY_DAYS = 3;
export const SERVICE_CHARGE_RATE = 0.05;

type ApiProduct = {
  code?: string;
  area?: string;
  category?: string;
  price?: number | string;
  width?: number | string;
  length?: number | string;
  height?: number | string;
  status?: string;
  createdAt?: string;
  photoUrl?: string;
  image?: string;
};

const fallbackProducts: Product[] = [
  { code: "B10-101", area: "B", category: "Stroller", price: 840, createdAt: "2026-09-25T09:00:00+08:00" },
  { code: "C10-123", area: "C", category: "Table", price: 1575, size: "W120 × D60 × H72 cm", createdAt: "2026-09-22T09:00:00+08:00" },
  { code: "D10-202", area: "D", category: "Cabinet", price: 3150, size: "W90 × D45 × H180 cm", createdAt: "2026-09-21T09:00:00+08:00" },
  { code: "E10-301", area: "E", category: "Kitchen", price: 105, createdAt: "2026-09-22T09:00:00+08:00" },
  { code: "A10-401", area: "A", category: "Display Item", price: 1050, createdAt: "2026-09-22T09:00:00+08:00" },
];

function parseNumber(value: number | string | undefined) {
  if (typeof value === "number") return value;
  if (!value) return 0;
  return Number(String(value).replace(/,/g, "").trim()) || 0;
}

function finalPrice(basePrice: number) {
  return Math.round(basePrice * (1 + SERVICE_CHARGE_RATE) * 100) / 100;
}

function buildSize(width?: number | string, length?: number | string, height?: number | string) {
  const w = String(width ?? "").trim();
  const l = String(length ?? "").trim();
  const h = String(height ?? "").trim();
  const parts = [w && `W${w}`, l && `D${l}`, h && `H${h}`].filter(Boolean);
  return parts.length ? parts.join(" × ") : undefined;
}

function normalizeImageUrl(url?: string) {
  if (!url) return undefined;
  const value = url.trim();
  const id =
    value.match(/[?&]id=([^&]+)/)?.[1] ||
    value.match(/\/file\/d\/([^/]+)/)?.[1] ||
    value.match(/\/open\?id=([^&]+)/)?.[1];
  return id ? `https://drive.google.com/uc?export=view&id=${id}` : value;
}

function normalizeProduct(row: ApiProduct): Product | null {
  const area = String(row.area || "").trim().toUpperCase();
  const code = String(row.code || "").trim();
  const category = String(row.category || "").trim();
  const basePrice = parseNumber(row.price);
  if (!code || !category || !["A", "B", "C", "D", "E"].includes(area) || basePrice <= 0) return null;

  return {
    code,
    area: area as Product["area"],
    category,
    price: finalPrice(basePrice),
    image: normalizeImageUrl(row.photoUrl || row.image),
    size: buildSize(row.width, row.length, row.height),
    createdAt: String(row.createdAt || ""),
    status: String(row.status || "available").toLowerCase(),
  };
}

function isWebVisible(product: Product, now = new Date()) {
  if (product.status && product.status !== "available") return false;
  const created = new Date(product.createdAt).getTime();
  if (!Number.isFinite(created)) return false;
  return now.getTime() - created >= WEBSITE_PUBLISH_DELAY_DAYS * 24 * 60 * 60 * 1000;
}

export async function getVisibleProducts(now = new Date()): Promise<Product[]> {
  const apiUrl = process.env.PRODUCTS_API_URL || "https://script.google.com/macros/s/AKfycbyR90DV060E8E9iLiHzwKSFCJpO1ZsXa_UWzGjzxIMSStSKZx1DSN2rWw9Cb9hJxt-gMg/exec";
  if (!apiUrl) return fallbackProducts.filter((p) => isWebVisible(p, now));

  try {
    const response = await fetch(apiUrl, { next: { revalidate: 300 } });
    if (!response.ok) throw new Error(`Products API returned ${response.status}`);
    const payload = await response.json();
    const rows: ApiProduct[] = Array.isArray(payload) ? payload : payload.products;
    if (!Array.isArray(rows)) throw new Error("Products API payload is invalid");

    return rows
      .map(normalizeProduct)
      .filter((p): p is Product => Boolean(p))
      .filter((p) => isWebVisible(p, now));
  } catch (error) {
    console.error("Products API error", error);
    return fallbackProducts.filter((p) => isWebVisible(p, now));
  }
}

export function getGroupBySlug(slug: string | null | undefined) {
  return WEB_GROUPS.find((g) => g.slug === slug);
}

export function getProductGroup(product: Product) {
  return WEB_GROUPS.find((g) => g.areas.includes(product.area))!;
}

export function formatPeso(value: number) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}
