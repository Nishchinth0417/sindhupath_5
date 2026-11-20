/**
 * ReadinessStack — Isometric 4-tier cadet readiness progression.
 *
 * Tier 01 Foundation  — isometric chart table (10+2 PCM + DG Shipping medical)
 * Tier 02 Diagnostics — isometric CBT screen terminal (timed mock exams)
 * Tier 03 Command     — isometric ship's bridge panel (technical viva)
 * Tier 04 Destination — isometric vessel gangway (sponsorship induction)
 *
 * Each tier is a labelled isometric block; reveal-on-scroll handled by parent.
 */
import type { CSSProperties } from "react";

type TierKind = "foundation" | "diagnostics" | "command" | "destination";

export function ReadinessStack({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 560"
      className={className}
      role="img"
      aria-label="Isometric four-tier cadet readiness progression: Foundation, Diagnostics, Command, and Destination."
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="rs-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F7F3" />
          <stop offset="100%" stopColor="#DCEFED" />
        </linearGradient>
        <linearGradient id="rs-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B2345" />
          <stop offset="100%" stopColor="#062F3D" />
        </linearGradient>
        <linearGradient id="rs-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#062F3D" />
          <stop offset="100%" stopColor="#03232D" />
        </linearGradient>
        <linearGradient id="rs-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8B94F" />
          <stop offset="100%" stopColor="#C89B3C" />
        </linearGradient>
        <radialGradient id="rs-beacon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE8A8" />
          <stop offset="100%" stopColor="#E8B94F" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Connecting gold route between tiers */}
      <path
        d="M 130 470 L 290 410 L 450 350 L 600 290"
        fill="none"
        stroke="#E8B94F"
        strokeWidth="2"
        strokeDasharray="6 6"
        opacity="0.7"
        className="animate-route-dash"
      />

      {/* TIER 01 — FOUNDATION (chart table) */}
      <TierBlock x={40} y={410} kind="foundation" tier="01" title="FOUNDATION" caption="10+2 PCM · DG Shipping Medical" />
      {/* TIER 02 — DIAGNOSTICS (CBT terminal) */}
      <TierBlock x={200} y={350} kind="diagnostics" tier="02" title="DIAGNOSTICS" caption="Timed CBT Mock Exams" />
      {/* TIER 03 — COMMAND (bridge panel) */}
      <TierBlock x={360} y={290} kind="command" tier="03" title="COMMAND" caption="Viva with Master Mariners" />
      {/* TIER 04 — DESTINATION (gangway) */}
      <TierBlock x={520} y={230} kind="destination" tier="04" title="DESTINATION" caption="Sponsorship & Induction" />

      {/* Destination beacon glow */}
      <circle cx="600" cy="240" r="46" fill="url(#rs-beacon)" opacity="0.6" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Single isometric tier block (40px tall, 120px wide platform)              */
/* -------------------------------------------------------------------------- */

function TierBlock({
  x,
  y,
  kind,
  tier,
  title,
  caption,
}: {
  x: number;
  y: number;
  kind: TierKind;
  tier: string;
  title: string;
  caption: string;
}) {
  // Isometric parallelogram geometry — w=120, d=40, h=80
  const w = 120;
  const d = 40;
  const h = 80;
  // top face (rhombus)
  const top = `${x},${y} ${x + w},${y} ${x + w + d},${y - d} ${x + d},${y - d}`;
  // left face
  const left = `${x},${y} ${x + d},${y - d} ${x + d},${y - d + h} ${x},${y + h}`;
  // right face
  const right = `${x + w},${y} ${x + w + d},${y - d} ${x + w + d},${y - d + h} ${x + w},${y + h}`;

  return (
    <g>
      {/* base block */}
      <polygon points={left} fill="url(#rs-left)" stroke="#087F86" strokeWidth="0.75" />
      <polygon points={right} fill="url(#rs-right)" stroke="#087F86" strokeWidth="0.75" />
      <polygon points={top} fill="url(#rs-top)" stroke="#0B2345" strokeWidth="0.75" />

      {/* Tier-specific isometric motif on top face */}
      <TierMotif kind={kind} x={x + d} y={y - d} w={w} />

      {/* Tier badge (gold disc) */}
      <g transform={`translate(${x + 6} ${y + 6})`}>
        <rect x="0" y="0" width="44" height="22" rx="3" fill="#0B2345" stroke="#E8B94F" strokeWidth="1" />
        <text x="22" y="16" textAnchor="middle" fontFamily="var(--font-oswald), sans-serif" fontSize="13" fontWeight="700" fill="#E8B94F" letterSpacing="0.06em">
          T{tier}
        </text>
      </g>

      {/* Title + caption */}
      <text x={x + d} y={y + h + 22} fontFamily="var(--font-bebas), sans-serif" fontSize="20" letterSpacing="0.08em" fill="#F5F7F3">
        {title}
      </text>
      <text x={x + d} y={y + h + 40} fontFamily="var(--font-montserrat), sans-serif" fontSize="11" fill="#9FB9B6">
        {caption}
      </text>
    </g>
  );
}

function TierMotif({ kind, x, y, w }: { kind: TierKind; x: number; y: number; w: number }) {
  const cx = x + w / 2;
  const top: CSSProperties = { pointerEvents: "none" };

  if (kind === "foundation") {
    // isometric chart table with grid + bar
    return (
      <g style={top}>
        {/* table top */}
        <polygon points={`${x + 14},${y + 8} ${x + w - 14},${y + 8} ${x + w - 4},${y + 18} ${x + 4},${y + 18}`} fill="#0B2345" stroke="#087F86" strokeWidth="0.5" />
        {/* legs */}
        <line x1={x + 18} y1={y + 14} x2={x + 14} y2={y + 28} stroke="#087F86" strokeWidth="1" />
        <line x1={x + w - 18} y1={y + 14} x2={x + w - 14} y2={y + 28} stroke="#087F86" strokeWidth="1" />
        {/* grid bars */}
        <rect x={x + 24} y={y + 4} width="6" height="6" fill="#E8B94F" transform={`skewX(-30) translate(0 0)`} />
        <rect x={x + 38} y={y + 1} width="6" height="9" fill="#087F86" transform={`skewX(-30)`} />
        <rect x={x + 52} y={y + 6} width="6" height="4" fill="#DCEFED" transform={`skewX(-30)`} />
      </g>
    );
  }

  if (kind === "diagnostics") {
    // CBT screen terminal
    return (
      <g style={top}>
        {/* monitor base */}
        <polygon points={`${cx - 26},${y + 24} ${cx + 26},${y + 24} ${cx + 32},${y + 18} ${cx - 20},${y + 18}`} fill="#0B2345" />
        {/* screen */}
        <rect x={cx - 24} y={y - 8} width={48} height={26} rx="2" fill="#03232D" stroke="#087F86" strokeWidth="1" />
        {/* screen content — timed bars */}
        <line x1={cx - 18} y1={y - 2} x2={cx - 4} y2={y - 2} stroke="#E8B94F" strokeWidth="1.5" />
        <line x1={cx - 18} y1={y + 4} x2={cx + 8} y2={y + 4} stroke="#087F86" strokeWidth="1.5" />
        <line x1={cx - 18} y1={y + 10} x2={cx} y2={y + 10} stroke="#DCEFED" strokeWidth="1.5" />
        {/* progress dot */}
        <circle cx={cx + 14} cy={y + 4} r="2" fill="#E8B94F" className="animate-beacon-core" />
      </g>
    );
  }

  if (kind === "command") {
    // ship's bridge panel — wheel + radar
    return (
      <g style={top}>
        {/* radar console */}
        <rect x={cx - 22} y={y - 6} width={44} height={26} rx="2" fill="#0B2345" stroke="#E8B94F" strokeWidth="0.75" />
        {/* radar sweep */}
        <g transform={`translate(${cx} ${y + 6})`}>
          <circle r="10" fill="none" stroke="#087F86" strokeWidth="0.75" opacity="0.6" />
          <circle r="6" fill="none" stroke="#087F86" strokeWidth="0.5" opacity="0.4" />
          <path d="M 0 0 L 10 0 A 10 10 0 0 1 5 8.66 Z" fill="#E8B94F" opacity="0.7" className="animate-radar-sweep" />
        </g>
        {/* wheel spokes */}
        <line x1={cx - 14} y1={y + 24} x2={cx + 14} y2={y + 24} stroke="#E8B94F" strokeWidth="1" />
        <circle cx={cx} cy={y + 24} r="2" fill="#E8B94F" />
      </g>
    );
  }

  // destination — gangway plank + vessel hull
  return (
    <g style={top}>
      {/* vessel hull (isometric wedge) */}
      <polygon points={`${x + 14},${y + 16} ${x + w - 14},${y + 16} ${x + w - 22},${y + 24} ${x + 22},${y + 24}`} fill="url(#rs-gold)" stroke="#7A560D" strokeWidth="0.5" />
      <polygon points={`${x + 14},${y + 16} ${x + 22},${y + 24} ${x + 22},${y + 26} ${x + 14},${y + 18}`} fill="#7A560D" />
      {/* gangway */}
      <line x1={x + 4} y1={y + 22} x2={x + 22} y2={y + 18} stroke="#087F86" strokeWidth="1.5" strokeDasharray="2 2" />
      {/* beacon at gangway end */}
      <circle cx={x + 22} cy={y + 16} r="3" fill="#E8B94F" className="animate-beacon-core" />
    </g>
  );
}
