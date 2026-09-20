import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0B0B0B",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(255,106,0,0.28), transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,106,0,0.16), transparent 40%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              background: "linear-gradient(135deg,#FF8A3D,#FF6A00)",
              color: "#0B0B0B",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            K
          </div>
          <span style={{ fontSize: 30, color: "#FFFFFF", fontWeight: 600, letterSpacing: -0.5 }}>
            karsient
          </span>
        </div>
        <div style={{ display: "flex", marginTop: 48 }}>
          <span style={{ fontSize: 58, color: "#FFFFFF", fontWeight: 700, lineHeight: 1.15, maxWidth: 900 }}>
            Engineering tomorrow&apos;s intelligent enterprises.
          </span>
        </div>
        <div style={{ display: "flex", marginTop: 28 }}>
          <span style={{ fontSize: 26, color: "#FF8A3D", fontWeight: 500 }}>
            {site.tagline}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
