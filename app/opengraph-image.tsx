import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "JAPAN FINDS WHOLESALE - Japan Surplus in Laguna, Philippines";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          background: "#ffffff",
          overflow: "hidden",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <img
          src="https://japanfinds.site/images/warehouse.jpg"
          alt=""
          width="1200"
          height="630"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 42%, rgba(255,255,255,0.20) 72%, rgba(0,0,0,0.08) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "68%",
            padding: "54px 64px",
          }}
        >
          <img
            src="https://japanfinds.site/images/japan-finds-logo.jpg"
            alt="JAPAN FINDS WHOLESALE"
            width="330"
            height="120"
            style={{
              width: "330px",
              height: "120px",
              objectFit: "contain",
              objectPosition: "left center",
              marginBottom: "28px",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: "54px",
              lineHeight: 1.04,
              fontWeight: 800,
              color: "#101417",
              letterSpacing: "-2px",
              marginBottom: "10px",
            }}
          >
            Japan Surplus in
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "58px",
              lineHeight: 1.04,
              fontWeight: 800,
              color: "#087fb4",
              letterSpacing: "-2px",
              marginBottom: "26px",
            }}
          >
            Laguna, Philippines
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: "#26343c",
              fontWeight: 700,
              marginBottom: "30px",
            }}
          >
            Furniture  •  Baby Items  •  Wholesale Items
          </div>
          <div
            style={{
              display: "flex",
              width: "fit-content",
              padding: "14px 24px",
              borderRadius: "999px",
              background: "#169bd5",
              color: "#ffffff",
              fontSize: "25px",
              fontWeight: 800,
            }}
          >
            japanfinds.site
          </div>
        </div>
      </div>
    ),
    size
  );
}
