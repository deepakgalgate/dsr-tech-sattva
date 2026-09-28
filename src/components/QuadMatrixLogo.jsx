// Quad Matrix mark: four diamonds in a plus formation around a center node.
// Three arms in Midnight Navy, one arm (right) in Electric Blue, center node in Signal Teal.
export default function QuadMatrixLogo({ size = 40, reversed = false, className = "" }) {
  const navy = reversed ? "#FFFFFF" : "#0A1F3D";
  const blue = "#1B6BFF";
  const teal = "#14B8C4";

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="DSR TechSattva logo: four diamonds in a plus formation around a teal center node"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* top diamond */}
      <path d="M32 4 L42 16 L32 28 L22 16 Z" fill={navy} />
      {/* left diamond */}
      <path d="M4 32 L16 22 L28 32 L16 42 Z" fill={navy} />
      {/* bottom diamond */}
      <path d="M32 60 L22 48 L32 36 L42 48 Z" fill={navy} />
      {/* right diamond — accent arm in Electric Blue */}
      <path d="M60 32 L48 42 L36 32 L48 22 Z" fill={blue} />
      {/* center node — Signal Teal */}
      <circle cx="32" cy="32" r="6" fill={teal} />
    </svg>
  );
}
