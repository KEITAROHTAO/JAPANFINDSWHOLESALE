import type { Metadata } from "next";
import { getGroupHref } from "@/lib/catalog-seo";
import { notFound } from "next/navigation";
import AddToOrderButton from "@/components/AddToOrderButton";
import { getProductGroup, getVisibleProducts } from "@/lib/catalog";
import { formatPeso } from "@/lib/format";

type Props = { params: Promise<{ code: string }> };

async function findProduct(code: string) {
  const product = (await getVisibleProducts()).find((p) => p.code === code);
  if (!product) notFound();
  return product;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const product = await findProduct(code);
  const title = `${product.category} ${product.code} | Japan Surplus`;
  const description = `View this Japan surplus ${product.category.toLowerCase()} (${product.code}) at JAPAN FINDS in Biñan, Laguna. ${formatPeso(product.price)} including 5% service charge. Message us to confirm availability and order.`;
  const url = `/products/${encodeURIComponent(product.code)}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, ...(product.image ? { images: [{ url: product.image, alt: `${product.category} ${product.code}` }] } : {}) },
    twitter: { card: "summary_large_image", title, description, ...(product.image ? { images: [product.image] } : {}) },
  };
}

export default async function ProductPage({ params }: Props) {
  const { code } = await params;
  const product = await findProduct(code);
  const group = getProductGroup(product);

  return (
    <main className="contentWrap pageTop productDetail">
      {product.image ? (
        <img className="detailImage productImage" src={product.image} alt={`${product.code} ${product.category}`} />
      ) : (
        <div className="detailImage productImagePlaceholder"><span>{product.category}</span></div>
      )}
      <div className="detailInfo">
        <nav className="productBreadcrumb" aria-label="Breadcrumb">
          <a href="/shop">Shop</a><span aria-hidden="true"> / </span>
          <a href={getGroupHref(group.slug)}>{group.label}</a>
        </nav>
        <p className="eyebrow">{group.label}</p>
        <h1>{product.category}</h1>
        <div className="detailPrice">{formatPeso(product.price)}</div>
        <dl className="detailList">
          <div><dt>Item Code</dt><dd>{product.code}</dd></div>
          <div><dt>Category</dt><dd>{product.category}</dd></div>
          {product.size && <div><dt>Size</dt><dd>{product.size}</dd></div>}
        </dl>
        <p className="finePrint">Price includes 5% service charge. Availability is subject to final confirmation by our staff.</p>
        <AddToOrderButton product={product} />
      </div>
    </main>
  );
}
