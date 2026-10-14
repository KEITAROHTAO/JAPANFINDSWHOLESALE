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
          background: "#ffffff",
          padding: "42px",
        }}
      >
        <img
          src="https://japanfinds.site/images/japan-finds-logo.jpg"
          alt="JAPAN FINDS"
          width="428"
          height="428"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    ),
    size
  );
}
