import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          background: "linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#0c0c12",
          borderRadius: 36,
        }}
      >
        SP
      </div>
    ),
    { ...size }
  );
}
