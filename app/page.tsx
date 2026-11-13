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
          <h1>中古品の新たな販路を、<br />フィリピンに。</h1>
          <p>
            日本の中古品をフィリピンで直接販売する、新しい海外卸売のかたち。
          </p>
          <div className="jpHeroActions">
            <a className="primaryButton" href="/contact">取引について相談する</a>
            <a className="jpGhostButton" href="/available-items">For Shopping in Philippines</a>
          </div>
        </div>
      </section>

      <section className="contentWrap jpSection jpAboutSection" aria-labelledby="jpAboutHeading">
        <div className="jpAboutGrid">
          <div className="jpAboutCopy">
            <p className="eyebrow">ABOUT US</p>
            <h2 id="jpAboutHeading">私たちは、フィリピンの小さな商人たちが集まる中古品卸売倉庫です。</h2>
            <p>
              日本から届いた中古家具や雑貨を、現地のリセラーや個人のお客様に直接販売しています。
              小さな商人たちのビジネスを支えながら、日本の中古品に新しい価値と販路を生み出しています。
            </p>
          </div>
          <div className="jpAboutVideoWrap">
            <iframe
              className="jpAboutVideo"
              src="https://drive.google.com/file/d/1NPYpKSN8meiemK_GEA6NhzOgj1eHapIs/preview"
              title="JAPAN FINDS WHOLESALEの倉庫と販売風景"
              loading="lazy"
              allow="autoplay; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <section className="jpBand">
        <div className="contentWrap jpSection">
          <p className="eyebrow">WHY JAPAN FINDS</p>
          <p className="jpValueHeadline">現地に日本人がいる、<br />顔の見える海外販路</p>
          <div className="jpValueDivider" aria-hidden="true" />
          <div className="jpThreeCol jpValueCards">
            <div>
              <span className="jpValueIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" /><path d="m7 16 4-4 3 2 6-7" /><path d="M16 7h4v4" />
                </svg>
              </span>
              <strong>売り上げを改善するためのフィードバック</strong>
              <p>コンテナごとに、何が売れたか、何が売れ残ったか、どの価格帯が適切だったかを写真とともにデータ共有いたします。次回の商品の選定やコンテナ構成に活かすことが可能です。</p>
            </div>
            <div>
              <span className="jpValueIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2" /><path d="M17 5a3 3 0 0 1 0 6" /><path d="M18 14a5 5 0 0 1 3 5v1" />
                </svg>
              </span>
              <strong>リセラーだけに依存しない販売力</strong>
              <p>オークションとは異なり、リセラーへの卸売に加えて、個人顧客にも直接販売をしています。商品によってはリセラー価格より高い価格で販売が可能です。高く販売できることはコンテナ1つあたりの送金額に影響します。</p>
            </div>
            <div>
              <span className="jpValueIcon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.9 8.9 0 0 1-4-.9L3 21l1.9-5.5a8.9 8.9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3a8.5 8.5 0 0 1 8.5 8.5Z" /><path d="M8 11.5h9M8 15h6" />
                </svg>
              </span>
              <strong>日本人が現地で販売を理解し、日本語で説明できる</strong>
              <p>常駐の日本人が売り方の改善を常に行っています。現地の顧客ニーズや販売状況を、日本人が丁寧に確認してお伝えします。</p>
            </div>
          </div>
          <a className="outlineButton" href="/available-items">フィリピンでの販売商品を見る</a>
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
