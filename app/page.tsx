import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "日本の中古品事業者様へ | フィリピンの海外販路 JAPAN FINDS",
  description:
    "JAPAN FINDS WHOLESALEはフィリピン・ラグナ州Biñanで日本の中古家具・雑貨を販売しています。中古品輸出業者様、遺品整理業者様からの取引相談を募集しています。",
  alternates: { canonical: "/" },
};

export default function SupplierHome() {
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "どのような事業者を募集していますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "中古品の輸出を行っている事業者様と、遺品整理などで再利用可能な中古品を取り扱う事業者様からのご相談を募集しています。",
        },
      },
      {
        "@type": "Question",
        name: "取引条件はサイトで確認できますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "具体的な取引条件は、取扱商品や数量などを確認したうえで個別にご説明しています。",
        },
      },
    ],
  };

  return (
    <main lang="ja" className="jpSite">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      <section className="jpHero">
        <img src="/images/warehouse.jpg" alt="フィリピン・BiñanのJAPAN FINDS WHOLESALE倉庫" className="jpHeroImage" />
        <div className="jpHeroShade" />
        <div className="jpHeroContent">
          <p className="jpKicker">日本の中古品事業者様へ</p>
          <h1>日本の中古品に、<br />フィリピンという新しい販路を。</h1>
          <p>
            JAPAN FINDS WHOLESALEは、フィリピン・ラグナ州Biñanで
            日本から届く中古家具・雑貨などを販売する倉庫店舗です。
          </p>
          <div className="jpHeroActions">
            <a className="primaryButton" href="/contact">取引について相談する</a>
            <a className="jpGhostButton" href="/available-items">For Shopping in Philippines</a>
          </div>
        </div>
      </section>

      <section className="contentWrap jpSection">
        <p className="eyebrow">PARTNERS</p>
        <h2>コンテナ輸出パートナー様を募集しています</h2>
        <div className="jpTwoCol">
          <article className="jpCard">
            <span className="jpCardNo">01</span>
            <h3>中古品の輸出を行っている事業者様</h3>
            <p>
              日本の中古家具・雑貨などについて、フィリピンでの新たな販売先をお探しの事業者様からのご相談をお待ちしています。
            </p>
          </article>
          <article className="jpCard">
            <span className="jpCardNo">02</span>
            <h3>遺品整理業者様</h3>
            <p>
              遺品整理などで引き取った再利用可能な品物について、廃棄以外の選択肢として海外販路をご検討いただけます。
            </p>
          </article>
        </div>
        <p className="jpNote">
          募集商品の具体的なカテゴリー・状態・数量は、ご相談内容を確認しながら個別にすり合わせます。
        </p>
      </section>

      <section className="jpBand">
        <div className="contentWrap jpSection">
          <p className="eyebrow">WHY JAPAN FINDS</p>
          <h2>日本からフィリピンの販売現場へ</h2>
          <div className="jpThreeCol">
            <div><strong>現地販売拠点</strong><p>Biñan, Lagunaに倉庫店舗を構え、現地のお客様へ販売しています。</p></div>
            <div><strong>リセラーと個人顧客</strong><p>現地のリセラーと個人のお客様の双方に、店舗・オンラインで商品を案内しています。</p></div>
            <div><strong>販売状況を確認可能</strong><p>現在販売している商品の一部をWeb上で公開し、現地での販売実態をご確認いただけます。</p></div>
          </div>
          <a className="outlineButton" href="/available-items">フィリピンでの販売商品を見る</a>
        </div>
      </section>

      <section className="contentWrap jpSection">
        <p className="eyebrow">PROCESS</p>
        <h2>取引開始までの流れ</h2>
        <ol className="jpSteps">
          <li><span>1</span><div><strong>お問い合わせ</strong><p>取扱商品や現在の状況を簡単にお知らせください。</p></div></li>
          <li><span>2</span><div><strong>内容確認・ご説明</strong><p>取扱商品や数量などを確認し、取引方法や条件について個別にご説明します。</p></div></li>
          <li><span>3</span><div><strong>条件のすり合わせ</strong><p>双方で取引条件を確認し、必要な調整を行います。</p></div></li>
          <li><span>4</span><div><strong>取引開始</strong><p>条件合意後、実際の取引を開始します。</p></div></li>
        </ol>
        <p className="jpNote">送金割合・費用負担・精算条件などの詳細条件はWebサイトでは公開せず、商談時にご説明します。</p>
      </section>

      <section className="contentWrap jpSection jpCta">
        <p className="eyebrow">CONTACT</p>
        <h2>まずは取扱商品についてお聞かせください</h2>
        <p>取引方式をあらかじめ限定せず、商品の内容や状況を確認したうえでご相談を進めます。</p>
        <div className="jpHeroActions">
          <a className="primaryButton" href="/contact">取引について相談する</a>
          <a className="jpGhostButton dark" href="/partners">募集内容を詳しく見る</a>
        </div>
      </section>
    </main>
  );
}
