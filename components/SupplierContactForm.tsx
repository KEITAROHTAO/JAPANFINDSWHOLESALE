"use client";

import { useRef, useState, type FormEvent } from "react";

const EMAIL = "keitaro.tao@borderless-japan.com";

export default function SupplierContactForm({ directSendEnabled = false }: { directSendEnabled?: boolean }) {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const submission = useRef<{ payload: string; id: string } | null>(null);
  const sending = useRef(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending.current || status === "sent") return;
    if (directSendEnabled) {
      const form = new FormData(event.currentTarget);
      const payload = { company, name, email, business, message, website: String(form.get("website") || "") };
      const serialized = JSON.stringify(payload);
      if (submission.current?.payload !== serialized) submission.current = { payload: serialized, id: crypto.randomUUID() };
      sending.current = true;
      setStatus("sending");
      setError("");
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...payload, requestId: submission.current!.id }),
          signal: AbortSignal.timeout(25_000),
        });
        const result = await response.json();
        if (!response.ok || result.ok !== true) throw new Error(result.message || "送信を確認できませんでした。再度お試しください。");
        setStatus("sent");
      } catch (cause) {
        setStatus("error");
        setError(cause instanceof Error && cause.name === "Error" ? cause.message : "送信を確認できませんでした。入力内容は保持されています。再度お試しいただくか、メールでお問い合わせください。");
      } finally {
        sending.current = false;
      }
      return;
    }
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

  if (status === "sent") {
    return (
      <div className="jpContactSuccess" role="status" aria-live="polite">
        <h2>お問い合わせを受け付けました</h2>
        <p>ご相談いただきありがとうございます。内容を確認し、ご入力いただいたメールアドレスへ担当者からご連絡します。</p>
        <p>自動返信メールはお送りしていません。</p>
      </div>
    );
  }

  return (
    <form className="jpContactForm" onSubmit={handleSubmit} aria-busy={status === "sending"}>
      <fieldset className="jpContactFields" disabled={status === "sending"}>
      {directSendEnabled && <label className="jpContactTrap" aria-hidden="true">Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>}
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
      </fieldset>
      {status === "error" && <p className="jpContactError" role="alert">{error} <a className="textLink" href={`mailto:${EMAIL}`}>メールで問い合わせる</a></p>}
      <button type="submit" className="primaryButton" disabled={status === "sending"}>{status === "sending" ? "送信しています…" : directSendEnabled ? "相談内容を送信する" : "メールアプリで相談内容を送る"}</button>
      <p className="jpNote">{directSendEnabled ? "ご入力いただいた情報は、お問い合わせへの対応・取引のご相談のために使用します。" : "ボタンを押すとメールアプリが開き、宛先・件名・ご相談内容が自動入力されます。内容を確認してメールアプリから送信してください。この画面だけでは送信は完了しません。"}</p>
    </form>
  );
}
