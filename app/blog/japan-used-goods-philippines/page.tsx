import type { Metadata } from "next";
import Link from "next/link";

const articleTitle = "フィリピンで日本の中古品は本当に売れる？現地販売事業者が実例を紹介";
export const metadata: Metadata = {
  title: articleTitle,
  description: "フィリピンで日本の中古品は実際に売れているのか？JAPAN FINDS WHOLESALEが現地の倉庫、購入者、コンテナ輸入、在庫管理の実例を紹介します。",
  alternates: { canonical: "/blog/japan-used-goods-philippines" },
  openGraph: { title: articleTitle, description: "フィリピン・ビニャンの現地販売事業者が、日本の中古家具や生活雑貨の販売現場を紹介します。", type: "article", images: ["/images/japan-finds-warehouse-article.jpg"] },
};
const section = { marginTop: 42, marginBottom: 16 } as const;
const prose = { lineHeight: 1.95, fontSize: 17 } as const;

export default function JapanUsedGoodsPhilippinesArticle() {
  const structuredData = { "@context": "https://schema.org", "@type": "BlogPosting", headline: articleTitle, inLanguage: "ja", author: { "@type": "Organization", name: "JAPAN FINDS WHOLESALE" }, publisher: { "@type": "Organization", name: "JAPAN FINDS WHOLESALE" }, mainEntityOfPage: "https://japanfinds.site/blog/japan-used-goods-philippines", image: "https://japanfinds.site/images/japan-finds-warehouse-article.jpg" };
  return (
    <main lang="ja" className="jpSite contentWrap pageTop prosePage jpProse" style={{ maxWidth: 900 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <nav aria-label="パンくずリスト" style={{ fontSize: 14, marginBottom: 24 }}><Link href="/">ホーム</Link> / <Link href="/blog">ブログ</Link> / 現地販売の実例</nav>
      <p className="eyebrow">FIELD REPORT · JAPAN FINDS WHOLESALE</p>
      <h1 style={{ lineHeight: 1.35 }}>{articleTitle}</h1>
      <p style={prose}>日本国内で中古品を取り扱う事業者にとって、海外は新たな販売先の選択肢の一つです。</p>
      <p style={prose}>しかし、実際に海外でどのような商品が売れているのか、どのような人が購入しているのかは、日本からではなかなか見えない部分もあります。</p>
      <p style={prose}>私たちJAPAN FINDS WHOLESALEは、日本から中古家具や生活雑貨などをコンテナで輸入し、フィリピンのラグナ州ビニャンにある倉庫で販売しています。</p>
      <p style={prose}>この記事では、フィリピンの販売現場で実際に扱っている商品や、購入者の様子を紹介します。</p>
      <figure style={{ margin: "26px 0 36px" }}><img src="/images/japan-finds-warehouse-article.jpg" alt="フィリピン・ラグナ州ビニャンのJAPAN FINDS WHOLESALE倉庫" style={{ display: "block", width: "100%", height: "auto", borderRadius: 12 }} /><figcaption style={{ fontSize: 13, color: "var(--muted)", marginTop: 9 }}>JAPAN FINDS WHOLESALEの倉庫</figcaption></figure>

      <h2 style={section}>1. フィリピンで販売される日本の中古品</h2>
      <p style={prose}>フィリピンでは、日本から輸入された中古品が「Japan Surplus」と呼ばれ、販売されています。</p>
      <p style={prose}>JAPAN FINDS WHOLESALEでも、日本から輸入した中古家具、生活雑貨、ベビー用品など、さまざまな商品を取り扱っています。</p>
      <p style={prose}>実際に私たちの倉庫で扱っている主な商品は、以下のとおりです。</p>
      <ul style={prose}><li><strong>家具：</strong>キャビネット、収納家具、テーブル、椅子、ソファなど</li><li><strong>生活雑貨：</strong>食器、キッチン用品、収納用品など</li><li><strong>ベビー用品：</strong>ベビー家具、育児関連用品など</li><li><strong>その他：</strong>バッグ、衣類、日用品など</li></ul>
      <p style={prose}>これらの商品は、日本からコンテナで輸送され、フィリピン国内の倉庫で販売されています。</p>

      <h2 style={section}>2. どのような人が日本の中古品を購入しているのか？</h2>
      <p style={prose}>JAPAN FINDS WHOLESALEには、大きく分けて2種類のお客様が来店します。</p>
      <h3 style={{ marginTop: 26 }}>一般のお客様</h3>
      <p style={prose}>自宅で使用する家具や生活用品を探している個人のお客様です。</p>
      <p style={prose}>キャビネット、ソファ、テーブルなどの家具から、食器や日用品まで、さまざまな商品を購入されています。</p>
      <h3 style={{ marginTop: 26 }}>リセラー（再販売事業者）</h3>
      <p style={prose}>フィリピン国内で中古品を再販売するために商品を仕入れるお客様です。</p>
      <p style={prose}>JAPAN FINDSでは、リセラー向けの卸売販売にも対応しています。リセラーは倉庫で実際の商品を確認し、仕入れる商品を選びます。</p>
      <p style={prose}>このように、私たちの販売先は一般消費者だけではありません。</p>
      <p style={prose}><strong>現地のリセラーを通じて、さらに多くのお客様へ日本の中古品が届けられています。</strong></p>

      <h2 style={section}>3. コンテナで輸入した中古品はどのように販売されるのか？</h2>
      <p style={prose}>JAPAN FINDSでは、日本から中古品をコンテナ単位で仕入れています。</p>
      <figure style={{ margin: "22px auto 30px", maxWidth: 640 }}><video controls muted playsInline preload="metadata" aria-label="日本から輸入した中古品コンテナの荷下ろし風景" style={{ display: "block", width: "100%", height: "auto", borderRadius: 12, background: "#111" }}><source src="/videos/japan-finds-container-unloading.mp4" type="video/mp4" />お使いのブラウザでは動画を再生できません。</video><figcaption style={{ marginTop: 8, fontSize: 13, color: "var(--muted)" }}>日本から届いたコンテナの荷下ろし風景</figcaption></figure>
      <p style={prose}>コンテナがフィリピンに到着した後、倉庫で商品の荷下ろしや販売準備を行います。</p>
      <p style={prose}>商品は家具、生活雑貨、衣類などのカテゴリーごとに整理され、店頭に並びます。</p>
      <p style={prose}>また、定期的に新商品を販売する「New Arrival」を開催しています。</p>
      <p style={prose}>New Arrivalでは、新たに入荷した商品を目当てにお客様が倉庫を訪れます。</p>
      <p style={prose}>このほか、FacebookやWebサイトを通じて商品写真を公開し、オンラインでの注文にも対応しています。</p>
      <p style={prose}><strong>日本から輸入した商品を、フィリピン現地で直接販売できることが私たちの事業の特徴です。</strong></p>

      <h2 style={section}>4. 実際に販売されている日本の中古家具</h2>
      <p style={prose}>JAPAN FINDSでは、さまざまな日本の中古家具を販売しています。</p>
      <p style={prose}>例えば、収納家具やキャビネット、ソファ、テーブルなどです。</p>
      <p style={prose}>これらは、一般のお客様が自宅で使用する目的で購入する場合もあれば、リセラーが再販売を目的として仕入れる場合もあります。</p>
      <p style={prose}>ただし、すべての商品が同じように売れるわけではありません。</p>
      <p style={prose}>商品によって価格、状態、デザイン、サイズなどが異なり、販売までにかかる期間にも違いがあります。</p>
      <p style={prose}>私たちは実際の販売を通じて、商品ごとの売れ行きや現地での需要を確認しています。</p>

      <h2 style={section}>5. フィリピン現地で販売するからこそわかること</h2>
      <p style={prose}>海外に中古品を輸出する際、日本側からは現地の販売状況が見えにくいことがあります。</p>
      <p style={prose}>しかし、実際に現地で販売していると、どの商品が売れたのか、どのくらいの期間で販売されたのか、どのような商品が在庫として残っているのかを把握できます。</p>
      <p style={prose}>JAPAN FINDSでは、商品ごとにコードを付けて管理し、販売履歴を記録しています。</p>
      <figure style={{ margin: "22px 0 28px" }}><img src="/images/japan-finds-products-data.webp" alt="JAPAN FINDS WHOLESALEの商品管理スプレッドシート。商品コード、カテゴリー、価格、在庫状況などを管理" style={{ display: "block", width: "100%", height: "auto", borderRadius: 10, border: "1px solid #e7ecef" }} loading="lazy" /><figcaption style={{ fontSize: 13, color: "var(--muted)", marginTop: 8 }}>JAPAN FINDSの商品管理データの一例</figcaption></figure>
      <p style={prose}>これにより、カテゴリー別の販売状況や商品ごとの売れ行きを確認できます。</p>
      <p style={prose}>こうした現地での販売経験とデータは、日本からどのような商品を仕入れるべきかを考えるうえでも役立ちます。</p>
      <p style={prose}>私たちは、日本から商品を輸入するだけでなく、<strong>フィリピンの購入者に販売するまでの過程を自社で経験していること</strong>を大切にしています。</p>

      <h2 style={section}>6. 日本の中古品販売業者・輸出業者の皆様へ</h2>
      <p style={prose}>JAPAN FINDS WHOLESALEは、フィリピンのラグナ州ビニャンを拠点に、日本の中古家具や生活雑貨などを販売しています。</p>
      <p style={prose}>現地で一般のお客様とリセラーの双方に向けて販売しており、日本からの継続的な商品供給を必要としています。</p>
      <p style={prose}>中古家具・生活雑貨などの海外販路を検討されている事業者様は、ぜひお問い合わせください。</p>
      <p style={prose}>取扱商品や供給量、取引条件などについて、お互いに確認しながら取引の可能性を検討できればと考えています。</p>
      <p style={{ ...prose, marginTop: 34, fontWeight: 800 }}>日本の中古品に、フィリピンという新しい販売先を。</p>
      <p style={prose}>JAPAN FINDS WHOLESALE</p>
      <p style={prose}>公式Webサイト：<Link href="/">https://japanfinds.site</Link></p>
      <p style={{ margin: "24px 0 48px" }}><Link href="/contact" className="primaryButton" style={{ display: "inline-block" }}>取引について問い合わせる</Link></p>
      <p style={{ fontSize: 14 }}><Link href="/blog" style={{ color: "var(--blue-dark)" }}>← 記事一覧に戻る</Link></p>
    </main>
  );
}
