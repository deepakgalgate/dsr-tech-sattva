export default function Wordmark({ reversed = false, size = 19 }) {
  const color = reversed ? "#FFFFFF" : "#0A1F3D";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        gap: "6px",
        color,
        fontSize: `${size}px`,
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      <span style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>DSR</span>
      <span style={{ fontWeight: 400, letterSpacing: "0.09em", fontSize: "0.86em" }}>
        TECHSATTVA
      </span>
    </span>
  );
}
