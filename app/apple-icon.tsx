import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0B0B",
          borderRadius: 40,
        }}
      >
        <svg width="96" height="96" viewBox="0 0 48 48" fill="none">
          <path
            d="M10 10 L10 38 L15.5 38 L15.5 27 L26 38 L33.5 38 L20 24 L33 10 L25.5 10 L15.5 20 L15.5 10 Z"
            fill="#FF6A00"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
