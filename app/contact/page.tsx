import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "取引相談 | JAPAN FINDS WHOLESALE",
  description: "JAPAN FINDS WHOLESALEとの新規取引をご検討の日本の事業者様向け相談ページです。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main lang="ja" className="contentWrap pageTop prosePage jpProse">
      <p className="eyebrow">CONTACT</p>
      <h1>取引についてのご相談</h1>
      <p className="jpLead">
        中古品の新たな販売先をお探しの事業者様、遺品整理で引き取った再利用可能な品物の販路をお探しの事業者様は、ぜひご相談ください。
      </p>

      <div className="jpContactNotice">
        <strong>お問い合わせフォームの送信先を設定中です。</strong>
        <p>
          ページ構成と入力項目は準備済みです。公開用の連絡先が確定後、送信機能を有効化します。
        </p>
      </div>

      <form className="jpContactForm">
        <label>会社名<input type="text" name="company" disabled /></label>
        <label>ご担当者名<input type="text" name="name" disabled /></label>
        <label>メールアドレス<input type="email" name="email" disabled /></label>
        <label>事業内容
          <select name="business" disabled>
            <option>選択してください</option>
            <option>中古品輸出</option>
            <option>遺品整理</option>
            <option>その他</option>
          </select>
        </label>
        <label>取扱商品・ご相談内容<textarea name="message" rows={7} disabled /></label>
        <button type="button" className="primaryButton" disabled>送信先設定後に利用できます</button>
      </form>

      <p><a className="textLink" href="/partners">募集内容・取引の流れを確認する →</a></p>
    </main>
  );
}
