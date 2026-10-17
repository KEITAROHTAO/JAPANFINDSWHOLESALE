import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#169bd5",
          borderRadius: "96px",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 900,
          fontSize: "230px",
          letterSpacing: "-18px",
          color: "#ffffff",
        }}
      >
        JF
      </div>
    ),
    size
  );
}
