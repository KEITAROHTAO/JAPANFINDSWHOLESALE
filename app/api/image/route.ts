import { NextRequest } from "next/server";

const DEFAULT_API_URL =
  "https://script.google.com/macros/s/AKfycbyR90DV060E8E9iLiHzwKSFCJpO1ZsXa_UWzGjzxIMSStSKZx1DSN2rWw9Cb9hJxt-gMg/exec";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  const asset = request.nextUrl.searchParams.get("asset");

  if (!id && asset !== "logo" && asset !== "warehouse") {
    return new Response("Invalid image request", { status: 400 });
  }

  if (id && !/^[A-Za-z0-9_-]{10,}$/.test(id)) {
    return new Response("Invalid image id", { status: 400 });
  }

  const apiUrl = process.env.PRODUCTS_API_URL || DEFAULT_API_URL;
  const upstream = new URL(apiUrl);
  if (id) upstream.searchParams.set("image", id);
  if (asset) upstream.searchParams.set("asset", asset);

  try {
    const response = await fetch(upstream.toString(), {
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      return new Response("Image source unavailable", { status: 502 });
    }

    const data = await response.json();
    if (!data?.base64 || !data?.mimeType) {
      return new Response("Image not found", { status: 404 });
    }

    const bytes = Buffer.from(data.base64, "base64");
    return new Response(bytes, {
      status: 200,
      headers: {
        "Content-Type": data.mimeType,
        "Cache-Control": "public, max-age=86400, s-maxage=604800",
      },
    });
  } catch (error) {
    console.error("Image proxy error", error);
    return new Response("Image proxy error", { status: 500 });
  }
}
