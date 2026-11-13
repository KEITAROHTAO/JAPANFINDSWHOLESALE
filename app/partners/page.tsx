import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "取引パートナー募集 | 中古品の海外販路 JAPAN FINDS",
  description:
    "JAPAN FINDS WHOLESALEが募集する日本の取引パートナー、想定する商品、フィリピンでの販売体制、取引開始までの流れをご案内します。",
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <main lang="ja" className="contentWrap pageTop prosePage jpProse">
      <p className="eyebrow">SUPPLIER PARTNERS</p>
      <h1>日本の取引パートナーを募集しています</h1>
      <p className="jpLead">
        JAPAN FINDS WHOLESALEでは、日本からフィリピンへ中古品をつなぐ新しい取引先を募集しています。
        現時点では、中古品輸出業者様と遺品整理業者様を主な対象としています。
      </p>

      <h2>募集している事業者様</h2>
      <div className="jpTwoCol">
        <article className="jpCard">
          <h3>中古品輸出業者様</h3>
          <p>既存の販売先に加えて、フィリピンでの新たな販路を検討されている事業者様。</p>
        </article>
        <article className="jpCard">
          <h3>遺品整理業者様</h3>
          <p>引き取った品物のうち、再利用可能な中古品について海外での販売可能性を検討されている事業者様。</p>
        </article>
      </div>

      <h2>商品について</h2>
      <p>
        具体的な募集カテゴリー、状態、数量については現在一律の条件として公開していません。
        実際の商品内容を確認しながら、フィリピンで販売可能かを個別に相談します。
      </p>

      <h2>フィリピンでの販売体制</h2>
      <p>
        JAPAN FINDS WHOLESALEはフィリピン・ラグナ州Biñanに倉庫店舗を運営しています。
        現地のリセラーと個人のお客様に対して、店舗およびオンラインで販売しています。
      </p>
      <figure style={{ margin: "24px 0" }}>
        <img
          src="/images/japan-finds-team.webp"
          alt="JAPAN FINDS WHOLESALEの店舗前で撮影したチームの集合写真"
          width={1600}
          height={1600}
          loading="lazy"
          decoding="async"
          style={{ display: "block", width: "100%", height: "auto", borderRadius: 12 }}
        />
        <figcaption style={{ marginTop: 10, color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>
          フィリピンの販売を支えるJAPAN FINDS WHOLESALEのチーム
        </figcaption>
      </figure>
      <p><a className="outlineButton" href="/available-items">現在の販売商品を見る</a></p>

      <h2>取引開始まで</h2>
      <ol className="jpSteps compact">
        <li><span>1</span><div><strong>お問い合わせ</strong><p>会社情報、取扱商品の概要をお知らせください。</p></div></li>
        <li><span>2</span><div><strong>内容確認</strong><p>商品カテゴリー、状態、数量などを確認します。</p></div></li>
        <li><span>3</span><div><strong>取引条件のご説明・調整</strong><p>具体的な条件は商談時に個別にご説明します。</p></div></li>
        <li><span>4</span><div><strong>合意・取引開始</strong><p>双方で条件を確認したうえで開始します。</p></div></li>
      </ol>

      <div className="jpCta inline">
        <h2>取引について相談する</h2>
        <p>具体的な条件を決める前のご相談でも構いません。</p>
        <a className="primaryButton" href="/contact">お問い合わせへ</a>
      </div>
    </main>
  );
}
