import { createHash } from "node:crypto";

export const CONTACT_EMAIL = "keitaro.tao@borderless-japan.com";
const BUSINESSES = new Set(["中古品輸出", "遺品整理", "その他"]);
const MAX_BODY_BYTES = 32_768;

export function contactEnabled() {
  return Boolean(process.env.RESEND_API_KEY?.trim() && process.env.CONTACT_FROM_EMAIL?.trim());
}

function reply(message: string, status: number) {
  return Response.json({ ok: false, message }, { status, headers: { "Cache-Control": "no-store" } });
}

export async function handleContact(request: Request): Promise<Response> {
  const allowed = new Set(["https://japanfinds.site"]);
  if (process.env.VERCEL_URL) allowed.add(`https://${process.env.VERCEL_URL}`);
  if (process.env.NODE_ENV !== "production") allowed.add(new URL(request.url).origin);
  if (!allowed.has(request.headers.get("origin") || "")) return reply("このページから再度送信してください。", 403);
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) return reply("入力内容を確認してください。", 415);

  // Bound the streamed body too: Content-Length alone cannot be trusted.
  let raw = "";
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply("入力内容を確認してください。", 400);
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel();
        return reply("ご相談内容が長すぎます。短くして再度送信してください。", 413);
      }
      chunks.push(value);
    }
    raw = Buffer.concat(chunks).toString("utf8");
  } catch {
    return reply("入力内容を確認してください。", 400);
  }

  let data: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error();
    data = parsed as Record<string, unknown>;
  } catch {
    return reply("入力内容を確認してください。", 400);
  }
  const field = (key: string) => typeof data[key] === "string" ? (data[key] as string).trim() : "";
  const company = field("company");
  const name = field("name");
  const email = field("email");
  const business = field("business");
  const message = field("message");
  const requestId = field("requestId");
  if (field("website")) return reply("送信できませんでした。メールでお問い合わせください。", 400);
  if (!company || company.length > 120 || !name || name.length > 100 ||
      email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ||
      !BUSINESSES.has(business) || !message || message.length > 8000 ||
      /[\r\n\x00-\x1f\x7f]/.test(company + name + email) ||
      !/^[a-f0-9-]{36}$/i.test(requestId)) {
    return reply("必須項目とメールアドレスを確認してください。", 400);
  }
  if (!contactEnabled()) return reply("現在フォームを利用できません。下記のメールアドレスからお問い合わせください。", 503);

  const text = ["JAPAN FINDS WHOLESALE 取引相談", "", `会社名：${company}`, `ご担当者名：${name}`,
    `メールアドレス：${email}`, `事業内容：${business}`, "", "取扱商品・ご相談内容：", message].join("\n");
  // A retry of the same submission must not generate a second email.
  const digest = createHash("sha256").update(JSON.stringify({ requestId, company, name, email, business, message })).digest("hex");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY!.trim()}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `supplier-contact/${digest}`,
      },
      body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL!.trim(), to: [CONTACT_EMAIL], reply_to: email,
        subject: `【JAPAN FINDS 取引相談】${company}`, text }),
      signal: AbortSignal.timeout(15_000),
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || typeof result?.id !== "string" || !result.id) {
      // Do not log customer data, API credentials, or provider response bodies.
      console.error("Contact email rejected", response.status);
      return reply("送信を確認できませんでした。少し待って再度送信するか、メールでお問い合わせください。", 502);
    }
    return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    console.error("Contact email request failed");
    return reply("送信を確認できませんでした。入力内容は保持されています。再度送信するか、メールでお問い合わせください。", 502);
  }
}
