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

      <section aria-labelledby="partner-products">
        <h2 id="partner-products">商品について</h2>
        <p>
          日本では販売が難しいものを含め、幅広い商品の取扱いを検討しています。
          商品の種類・状態・数量によって条件が異なりますので、より詳しい内容についてはお気軽にご相談ください。
        </p>
        <p style={{ marginBottom: 16, fontSize: 14, color: "var(--muted)" }}>
          以下はJAPAN FINDS WHOLESALEの現在の商品取扱方針です。「取扱対象外」は法律上の輸出禁止を意味するものではありません。
        </p>
        <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", border: "1px solid var(--line)", borderRadius: 12, marginTop: 20 }}>
          <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 760, fontSize: 15, lineHeight: 1.75, textAlign: "left" }}>
            <thead>
              <tr style={{ background: "#eff7fc" }}>
                {["カテゴリー", "望ましい商品", "少量なら相談可能", "取扱対象外"].map((label) => (
                  <th key={label} scope="col" style={{ padding: "16px 14px", borderBottom: "2px solid #cbdfe9", verticalAlign: "top", whiteSpace: "nowrap" }}>{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { category: "家具", preferred: "ダイニングセット・タンス・食器棚・クローゼット・鏡台", limited: "座敷用テーブル・ソファ・勉強机", excluded: "—" },
                { category: "電化製品", preferred: "ノートパソコン・デジカメ・スマートフォン", limited: "—", excluded: "電気ポット・ドライヤー・ストーブ" },
                { category: "楽器・音響", preferred: "スピーカー・アンプ・ギター・打楽器", limited: "電子ピアノ・エレクトーン", excluded: "—" },
                { category: "小物類", preferred: "贈答品・ぬいぐるみ・アクセサリー・人形・絵画・置物・新品衣類・食器類・キッチン用品・バッグ・靴・傘・置時計・腕時計", limited: "—", excluded: "中古服" },
                { category: "スポーツ", preferred: "自転車・スポーツ用品・ジェットスキー・釣り具", limited: "エクササイズ機材", excluded: "—" },
                { category: "オフィス用品", preferred: "オフィスチェア", limited: "オフィステーブル", excluded: "—" },
                { category: "ベビー用品", preferred: "おもちゃ・フィギュア・ぬいぐるみ・ベビーカー", limited: "ベビーベッド・バウンサー", excluded: "—" },
              ].map((item, index) => (
                <tr key={item.category} style={{ background: index % 2 === 0 ? "#fff" : "#f9fbfc" }}>
                  <th scope="row" style={{ padding: "16px 14px", borderBottom: "1px solid var(--line)", verticalAlign: "top", whiteSpace: "nowrap", fontWeight: 800 }}>{item.category}</th>
                  <td style={{ padding: "16px 14px", borderBottom: "1px solid var(--line)", verticalAlign: "top" }}>{item.preferred}</td>
                  <td style={{ padding: "16px 14px", borderBottom: "1px solid var(--line)", verticalAlign: "top" }}>{item.limited}</td>
                  <td style={{ padding: "16px 14px", borderBottom: "1px solid var(--line)", verticalAlign: "top", color: item.excluded === "—" ? "var(--muted)" : "inherit" }}>{item.excluded}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: 12, fontSize: 13, color: "var(--muted)" }}>
          ※「—」は条件未指定です。取扱可能を保証するものではありません。実際の輸出入可否は商品や状態、関係法令などによって異なります。
        </p>
        <p style={{ marginTop: 18 }}><a href="/contact" style={{ color: "var(--blue-dark)", fontWeight: 700, textDecoration: "underline" }}>取扱商品について相談する</a></p>
      </section>

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
