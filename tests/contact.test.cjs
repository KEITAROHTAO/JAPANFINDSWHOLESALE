const { test, after, afterEach } = require("node:test");
const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const { mkdtempSync, rmSync } = require("node:fs");
const { tmpdir } = require("node:os");
const path = require("node:path");

const output = mkdtempSync(path.join(tmpdir(), "jfw-contact-"));
execFileSync(process.execPath, [require.resolve("typescript/bin/tsc"), "lib/contact.ts", "--outDir", output,
  "--target", "ES2022", "--module", "commonjs", "--skipLibCheck", "--esModuleInterop", "--strict"]);
const { handleContact } = require(path.join(output, "contact.js"));
const originalFetch = global.fetch;
const previousKey = process.env.RESEND_API_KEY;
const previousFrom = process.env.CONTACT_FROM_EMAIL;
const values = { company: "テスト株式会社", name: "テスト担当", email: "test@example.com", business: "中古品輸出",
  message: "家具の取引について相談します。", website: "", requestId: "47c91928-6d1d-4fb4-b55e-99723da32f6d" };
function request(changes = {}, headers = {}) {
  return new Request("https://japanfinds.site/api/contact", { method: "POST",
    headers: { origin: "https://japanfinds.site", "content-type": "application/json", ...headers },
    body: JSON.stringify({ ...values, ...changes }) });
}
function configured() {
  process.env.RESEND_API_KEY = "unit-test-only";
  process.env.CONTACT_FROM_EMAIL = "JAPAN FINDS <contact@example.com>";
}
afterEach(() => {
  global.fetch = originalFetch;
  if (previousKey === undefined) delete process.env.RESEND_API_KEY; else process.env.RESEND_API_KEY = previousKey;
  if (previousFrom === undefined) delete process.env.CONTACT_FROM_EMAIL; else process.env.CONTACT_FROM_EMAIL = previousFrom;
});
after(() => rmSync(output, { recursive: true, force: true }));

test("unconfigured sending returns an explicit failure without sending", async () => {
  delete process.env.RESEND_API_KEY;
  global.fetch = () => { throw new Error("Must not call provider"); };
  assert.equal((await handleContact(request())).status, 503);
});
test("invalid fields, header injection, and honeypot do not reach provider", async () => {
  configured();
  global.fetch = () => { throw new Error("Must not call provider"); };
  for (const invalid of [{ email: "invalid" }, { company: "bad\r\nBcc: injected" }, { business: "anything" },
    { name: " " }, { message: "x".repeat(8001) }, { website: "bot.example.com" }, { requestId: "bad" }]) {
    assert.equal((await handleContact(request(invalid))).status, 400);
  }
});
test("cross-site submissions and non-JSON requests are rejected", async () => {
  assert.equal((await handleContact(request({}, { origin: "https://other.example" }))).status, 403);
  assert.equal((await handleContact(request({}, { "content-type": "text/plain" }))).status, 415);
});
test("oversized streamed bodies and malformed JSON are rejected", async () => {
  assert.equal((await handleContact(request({ message: "あ".repeat(15000) }))).status, 413);
  const malformed = new Request("https://japanfinds.site/api/contact", { method: "POST", headers: {
    origin: "https://japanfinds.site", "content-type": "application/json" }, body: "{" });
  assert.equal((await handleContact(malformed)).status, 400);
});
test("successful sending fixes recipient and reply-to; retries preserve idempotency", async () => {
  configured();
  const calls = [];
  global.fetch = async (url, options) => { calls.push({ url, ...options }); return Response.json({ id: "provider-email-id" }); };
  assert.equal((await (await handleContact(request({ to: "attacker@example.com" }))).json()).ok, true);
  await handleContact(request());
  assert.equal(calls[0].url, "https://api.resend.com/emails");
  const payload = JSON.parse(calls[0].body);
  assert.deepEqual(payload.to, ["keitaro.tao@borderless-japan.com"]);
  assert.equal(payload.reply_to, values.email);
  assert.ok(payload.text.includes(values.message));
  assert.equal(calls[0].headers["Idempotency-Key"], calls[1].headers["Idempotency-Key"]);
  await handleContact(request({ message: "相談内容の変更" }));
  assert.notEqual(calls[1].headers["Idempotency-Key"], calls[2].headers["Idempotency-Key"]);
});
test("provider failures, missing receipts and timeouts never report success", async () => {
  configured();
  for (const response of [Response.json({ error: "rejected" }, { status: 403 }), Response.json({})]) {
    global.fetch = async () => response;
    assert.equal((await handleContact(request())).status, 502);
  }
  global.fetch = async () => { throw new DOMException("Timed out", "TimeoutError"); };
  assert.equal((await handleContact(request())).status, 502);
});
