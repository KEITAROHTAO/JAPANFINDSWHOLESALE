/**
 * JAPAN FINDS WHOLESALE - Products Data + Image API
 *
 * Deploy as Web App
 * Execute as: Me
 * Who has access: Anyone
 */
const SPREADSHEET_ID = "1AOAX7xHelgA2gESAC9RsYBCeGMrmFuYbmQcEiVJYzjo";
const SHEET_NAME = "products data";

const SITE_ASSETS = {
  logo: "1Kr1bHWQGqn3NXd2_iV32-ClImB0txslZ",
  warehouse: "1qpvb15WY2uRlXPKs6KFuF4yUemEwvZ9I"
};

function doGet(e) {
  const params = (e && e.parameter) || {};

  if (params.asset) return serveSiteAsset_(params.asset);
  if (params.image) return serveProductImage_(params.image);

  return serveProducts_();
}

function serveProducts_() {
  const sheet = getProductsSheet_();
  if (!sheet) return json_({ products: [], error: "products data sheet not found" });

  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return json_({ products: [] });

  const headers = values[0].map(String);
  const col = {};
  headers.forEach((name, i) => col[name.trim()] = i);

  const get = (row, name) => {
    const i = col[name];
    return i === undefined ? "" : row[i];
  };

  const products = values.slice(1)
    .map(row => {
      const area = String(get(row, "Area") || "").trim().toUpperCase();
      const status = String(get(row, "Status") || "").trim().toLowerCase();
      const code = String(get(row, "Item Code") || "").trim();

      if (!code || !["A", "B", "C", "D", "E"].includes(area) || status !== "available") {
        return null;
      }

      const created = get(row, "Created At");
      const createdAt = created instanceof Date ? created.toISOString() : String(created || "");

      return {
        code,
        category: String(get(row, "Category") || "").trim(),
        area,
        width: get(row, "Width"),
        length: get(row, "Length"),
        height: get(row, "Height"),
        price: get(row, "Price (PHP)"),
        status,
        createdAt,
        photoUrl: String(get(row, "Photo URL") || "").trim()
      };
    })
    .filter(Boolean);

  return json_({
    updatedAt: new Date().toISOString(),
    products
  });
}

function serveSiteAsset_(name) {
  const fileId = SITE_ASSETS[String(name || "").trim()];
  if (!fileId) return json_({ error: "asset not found" });
  return imageJson_(fileId);
}

function serveProductImage_(fileId) {
  fileId = String(fileId || "").trim();

  if (!/^[A-Za-z0-9_-]{10,}$/.test(fileId)) {
    return json_({ error: "invalid image id" });
  }

  const allowedIds = getAllowedPhotoIds_();
  if (allowedIds.indexOf(fileId) === -1) {
    return json_({ error: "image is not part of products data" });
  }

  return imageJson_(fileId);
}

function imageJson_(fileId) {
  try {
    const file = DriveApp.getFileById(fileId);
    const blob = file.getBlob();

    return json_({
      mimeType: blob.getContentType() || "image/jpeg",
      base64: Utilities.base64Encode(blob.getBytes())
    });
  } catch (err) {
    return json_({ error: "image unavailable" });
  }
}

function getAllowedPhotoIds_() {
  const cache = CacheService.getScriptCache();
  const cached = cache.get("allowed_product_photo_ids_v1");
  if (cached) return JSON.parse(cached);

  const sheet = getProductsSheet_();
  if (!sheet) return [];

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getDisplayValues()[0];
  const photoIndex = headers.indexOf("Photo URL");
  if (photoIndex === -1 || sheet.getLastRow() < 2) return [];

  const urls = sheet
    .getRange(2, photoIndex + 1, sheet.getLastRow() - 1, 1)
    .getDisplayValues()
    .flat();

  const ids = [];
  urls.forEach(url => {
    const value = String(url || "").trim();
    if (!value) return;

    const match =
      value.match(/[?&]id=([^&]+)/) ||
      value.match(/\/file\/d\/([^/]+)/) ||
      value.match(/\/open\?id=([^&]+)/);

    if (match && match[1]) ids.push(match[1]);
  });

  const unique = [...new Set(ids)];
  cache.put("allowed_product_photo_ids_v1", JSON.stringify(unique), 600);
  return unique;
}

function getProductsSheet_() {
  return SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
}

function json_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
