import { notFound } from "next/navigation";
import AddToOrderButton from "@/components/AddToOrderButton";
import { formatPeso, getProductGroup, getVisibleProducts } from "@/lib/catalog";

export default async function ProductPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const product = getVisibleProducts().find((p) => p.code === decodeURIComponent(code));
  if (!product) notFound();
  const group = getProductGroup(product);

  return (
    <main className="contentWrap pageTop productDetail">
      <div className="detailImage productImagePlaceholder"><span>{product.category}</span></div>
      <div className="detailInfo">
        <p className="eyebrow">{group.label}</p>
        <h1>{product.category}</h1>
        <div className="detailPrice">{formatPeso(product.price)}</div>
        <dl className="detailList">
          <div><dt>Item Code</dt><dd>{product.code}</dd></div>
          <div><dt>Category</dt><dd>{product.category}</dd></div>
          {product.size && <div><dt>Size</dt><dd>{product.size}</dd></div>}
        </dl>
        <p className="finePrint">Price includes the service charge. Availability is subject to final confirmation by our staff.</p>
        <AddToOrderButton code={product.code} />
      </div>
    </main>
  );
}
