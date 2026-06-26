import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #172B36 0%, #114C5A 56%, #FFC801 100%)",
          color: "#F1F6F4",
          fontFamily: "Inter, sans-serif",
          padding: 56
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            border: "1px solid rgba(241,246,244,0.22)",
            borderRadius: 32,
            padding: 48,
            background: "rgba(23,43,54,0.28)"
          }}
        >
          <div style={{ fontSize: 24, letterSpacing: 2, textTransform: "uppercase", opacity: 0.85 }}>
            MotiveX AI
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 860 }}>
            <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1.03 }}>
              Enterprise AI automation that turns data operations into a compounding advantage.
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.35, color: "#D9E8E2" }}>
              Orchestrate pipelines, resolve bottlenecks, and ship insights faster with a premium control plane for modern teams.
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
