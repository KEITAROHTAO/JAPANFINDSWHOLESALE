import type { Metadata } from "next";
import GroupCatalogPage from "@/components/GroupCatalogPage";
import { getGroupBySlug } from "@/lib/catalog";
import { getCatalogMetadata, type CatalogParams } from "@/lib/catalog-seo";

type Props = { searchParams: Promise<CatalogParams> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { category } = await searchParams;
  return getCatalogMetadata(getGroupBySlug("cabinets"), typeof category === "string" ? category : undefined);
}

export default async function Page({ searchParams }: Props) {
  const { category } = await searchParams;
  return <GroupCatalogPage slug="cabinets" category={typeof category === "string" ? category : undefined} />;
}
