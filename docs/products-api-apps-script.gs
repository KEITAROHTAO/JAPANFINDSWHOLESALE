/**
 * JAPAN FINDS WHOLESALE - Products Data JSON API
 *
 * Deploy this as a Web App:
 * Execute as: Me
 * Who has access: Anyone
 *
 * This exposes only the product fields needed by the website.
 */
const SPREADSHEET_ID = "1AOAX7xHelgA2gESAC9RsYBCeGMrmFuYbmQcEiVJYzjo";
const SHEET_NAME = "products data";

function doGet() {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  if (!sheet) {
    return json_({ products: [], error: "products data sheet not found" });
  }

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

      if (!code || !["A", "B", "C", "D", "E"].includes(area) || status !== "available") return null;

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

function json_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
