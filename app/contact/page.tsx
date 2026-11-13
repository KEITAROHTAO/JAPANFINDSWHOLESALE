import type { Metadata } from "next";
import SupplierContactForm from "@/components/SupplierContactForm";
import { contactEnabled } from "@/lib/contact";

export const dynamic = "force-dynamic";

const email = "keitaro.tao@borderless-japan.com";

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
      <p>
        お問い合わせ先：<a className="textLink" href={`mailto:${email}`}>{email}</a>
      </p>

      <SupplierContactForm directSendEnabled={contactEnabled()} />

      <p><a className="textLink" href="/partners">募集内容・取引の流れを確認する →</a></p>
    </main>
  );
}
