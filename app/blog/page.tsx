import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ブログ｜フィリピン現地の中古品販売・海外販路",
  description: "JAPAN FINDS WHOLESALEがフィリピンの中古品販売現場、商品、海外販路に関する一次情報を紹介します。",
  alternates: { canonical: "/blog" },
};
export default function BlogIndex() {
  return (
    <main lang="ja" className="jpSite contentWrap pageTop prosePage">
      <p className="eyebrow">FIELD REPORTS</p>
      <h1>ブログ・現地販売レポート</h1>
      <p className="jpLead">日本から輸入した中古品が、フィリピンの現地でどのように販売されているか。JAPAN FINDS WHOLESALEの現場からお伝えします。</p>
      <article className="jpCard" style={{ maxWidth: 760, marginTop: 36 }}>
        <Link href="/blog/japan-used-goods-philippines">
          <img src="/images/warehouse.jpg" alt="JAPAN FINDS WHOLESALEのフィリピン倉庫" style={{ display: "block", width: "100%", maxHeight: 340, objectFit: "cover", marginBottom: 24 }} />
          <h2 style={{ lineHeight: 1.4, fontSize: 25 }}>フィリピンで日本の中古品は本当に売れる？現地販売事業者が実例を紹介</h2>
          <p>日本の中古家具・雑貨をコンテナで輸入し、現地の一般購入者とリセラーに販売するJAPAN FINDSの現場をご紹介します。</p>
          <span style={{ color: "var(--blue-dark)", fontWeight: 700 }}>記事を読む →</span>
        </Link>
      </article>
    </main>
  );
}
