import type { SVGProps } from "react";

type DecorProps = SVGProps<SVGSVGElement>;

export function WireGlobe(props: DecorProps) {
  return (
    <svg
      viewBox="0 0 120 60"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      aria-hidden="true"
      {...props}
    >
      <ellipse cx="60" cy="30" rx="58" ry="28" />
      <ellipse cx="60" cy="30" rx="38" ry="28" />
      <ellipse cx="60" cy="30" rx="18" ry="28" />
      <ellipse cx="60" cy="30" rx="58" ry="10" />
      <line x1="60" y1="2" x2="60" y2="58" />
      <line x1="2" y1="30" x2="118" y2="30" />
    </svg>
  );
}

export function SealIcon(props: DecorProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      aria-hidden="true"
      {...props}
    >
      <circle cx="20" cy="20" r="18" />
      <circle cx="20" cy="20" r="13" strokeDasharray="2 3" />
      <path
        d="M20 14c.4 3.4 2.6 5.6 6 6-3.4.4-5.6 2.6-6 6-.4-3.4-2.6-5.6-6-6 3.4-.4 5.6-2.6 6-6Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

const ridgeRows = Array.from({ length: 7 }, (_, i) => i);

export function WireMountains(props: DecorProps) {
  return (
    <svg
      viewBox="0 0 100 50"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.6}
      aria-hidden="true"
      {...props}
    >
      {ridgeRows.map((i) => {
        const y = 14 + i * 6;
        const h = 14 - i * 1.6;
        return (
          <path
            key={i}
            d={`M0 ${y} L18 ${y - h * 0.5} L32 ${y - h * 0.2} L50 ${y - h} L66 ${y - h * 0.35} L82 ${y - h * 0.7} L100 ${y}`}
          />
        );
      })}
    </svg>
  );
}

const rays = Array.from({ length: 16 }, (_, i) => i);

export function Starburst(props: DecorProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      stroke="currentColor"
      strokeWidth={0.8}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      {rays.map((i) => {
        const angle = (i / rays.length) * Math.PI * 2;
        const length = i % 2 === 0 ? 48 : 28;
        return (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={50 + Math.cos(angle) * length}
            y2={50 + Math.sin(angle) * length}
          />
        );
      })}
    </svg>
  );
}

export function Planet(props: DecorProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" aria-hidden="true" {...props}>
      <g
        transform="rotate(-25 30 30)"
        stroke="var(--color-cream)"
        strokeWidth={1.5}
      >
        <path d="M2 30A28 8 0 0 1 58 30" />
        <circle cx="30" cy="30" r="16" fill="currentColor" stroke="none" />
        <path d="M58 30A28 8 0 0 1 2 30" />
      </g>
    </svg>
  );
}

const torusRings = Array.from({ length: 18 }, (_, i) => i * 10);
const speakerLines = Array.from({ length: 7 }, (_, i) => 100 + i * 6);

export function RetroTv(props: DecorProps) {
  return (
    <svg viewBox="0 0 200 175" aria-hidden="true" {...props}>
      {/* legs */}
      <rect x="40" y="158" width="16" height="14" rx="3" fill="#8a6f3e" />
      <rect x="144" y="158" width="16" height="14" rx="3" fill="#8a6f3e" />

      {/* body */}
      <rect x="6" y="8" width="188" height="154" rx="24" fill="#b8975a" />
      <rect
        x="12"
        y="14"
        width="176"
        height="142"
        rx="20"
        fill="none"
        stroke="#8a6f3e"
        strokeWidth={2}
      />

      {/* screen */}
      <rect
        x="22"
        y="24"
        width="124"
        height="104"
        rx="18"
        fill="var(--color-ink)"
        stroke="#6e5730"
        strokeWidth={4}
      />
      <g
        transform="translate(84 76)"
        fill="none"
        stroke="var(--color-cream)"
        strokeWidth={0.6}
        opacity={0.85}
      >
        {torusRings.map((angle) => (
          <ellipse key={angle} rx="38" ry="15" transform={`rotate(${angle})`} />
        ))}
      </g>

      {/* knobs */}
      <circle cx="168" cy="48" r="11" fill="#6e5730" />
      <circle cx="168" cy="48" r="4" fill="#b8975a" />
      <circle cx="168" cy="78" r="7" fill="#6e5730" />

      {/* speaker and grille */}
      {speakerLines.map((y) => (
        <line
          key={y}
          x1="156"
          y1={y}
          x2="180"
          y2={y}
          stroke="#6e5730"
          strokeWidth={2}
          strokeLinecap="round"
        />
      ))}
      <rect x="30" y="136" width="108" height="14" rx="4" fill="#6e5730" />
    </svg>
  );
}

const SPHERE_R = 40;
const meridians = [10, 22, 32];
const parallels = [-28, -14, 0, 14, 28];

export function WireSphere(props: DecorProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.6}
      aria-hidden="true"
      {...props}
    >
      <circle cx="50" cy="50" r={SPHERE_R} />
      {meridians.map((rx) => (
        <ellipse key={rx} cx="50" cy="50" rx={rx} ry={SPHERE_R} />
      ))}
      {parallels.map((dy) => {
        const rx = Math.sqrt(SPHERE_R ** 2 - dy ** 2);
        return <ellipse key={dy} cx="50" cy={50 + dy} rx={rx} ry={rx * 0.18} />;
      })}
    </svg>
  );
}
