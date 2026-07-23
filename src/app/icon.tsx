import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
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
          background: "linear-gradient(135deg, #a21caf, #4c1d95)",
          borderRadius: 14,
        }}
      >
        <span style={{ fontSize: 38 }}>🕵️</span>
      </div>
    ),
    { ...size }
  );
}
