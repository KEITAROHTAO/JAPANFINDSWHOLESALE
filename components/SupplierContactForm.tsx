"use client";

import { useState, type FormEvent } from "react";

const EMAIL = "keitaro.tao@borderless-japan.com";

export default function SupplierContactForm() {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `【JAPAN FINDS 取引相談】${company}`;
    const body = [
      "JAPAN FINDS WHOLESALE 取引相談",
      "",
      `会社名：${company}`,
      `ご担当者名：${name}`,
      `メールアドレス：${email}`,
      `事業内容：${business}`,
      "",
      "取扱商品・ご相談内容：",
      message,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="jpContactForm" onSubmit={handleSubmit}>
      <label>会社名<input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} required maxLength={120} autoComplete="organization" /></label>
      <label>ご担当者名<input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required maxLength={100} autoComplete="name" /></label>
      <label>メールアドレス<input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={254} autoComplete="email" /></label>
      <label>事業内容
        <select name="business" value={business} onChange={(e) => setBusiness(e.target.value)} required>
          <option value="">選択してください</option>
          <option value="中古品輸出">中古品輸出</option>
          <option value="遺品整理">遺品整理</option>
          <option value="その他">その他</option>
        </select>
      </label>
      <label>取扱商品・ご相談内容<textarea name="message" rows={7} value={message} onChange={(e) => setMessage(e.target.value)} required maxLength={8000} /></label>
      <button type="submit" className="primaryButton">メールアプリで相談内容を送る</button>
      <p className="jpNote">ボタンを押すとメールアプリが開き、宛先・件名・ご相談内容が自動入力されます。内容を確認してメールアプリから送信してください。この画面だけでは送信は完了しません。</p>
    </form>
  );
}
