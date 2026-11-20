/**
 * ReadinessStack — Isometric 4-container cadet readiness progression.
 *
 * Each tier is represented by a colored ISO shipping container, ascending
 * from Foundation (gold) to Destination (bronze) — a maritime-themed
 * progression that visually echoes the cargo containers seen on merchant
 * vessels. Each container features corrugated ridges, a container code,
 * door locking bars on the short end, and a tier badge on the roof.
 *
 * Tier 01 Foundation  — gold container     (10+2 PCM + DG Shipping medical)
 * Tier 02 Diagnostics — teal container     (CBT timed mock exams)
 * Tier 03 Command     — navy container      (viva with Master Mariners)
 * Tier 04 Destination — bronze container   (sponsorship & induction)
 */

type ContainerSpec = {
  x: number;
  y: number;
  tier: string;
  title: string;
  caption: string;
  face: string;       // long side (right face) color
  faceDark: string;   // short end (left face) color — slightly darker for depth
  ridge: string;      // corrugation ridge line color
  frame: string;      // steel corner post / edge color
  code: string;       // container registration code
};

const CONTAINERS: ContainerSpec[] = [
  {
    x: 40, y: 410, tier: "01", title: "FOUNDATION", caption: "10+2 PCM · DG Shipping Medical",
    face: "#E8B94F", faceDark: "#C89B3C", ridge: "#7A560D", frame: "#3D2A05",
    code: "SPNU 0001 0",
  },
  {
    x: 200, y: 350, tier: "02", title: "DIAGNOSTICS", caption: "Timed CBT Mock Exams",
    face: "#087F86", faceDark: "#066A70", ridge: "#03232D", frame: "#021A1F",
    code: "SPNU 0002 0",
  },
  {
    x: 360, y: 290, tier: "03", title: "COMMAND", caption: "Viva with Master Mariners",
    face: "#0B2345", faceDark: "#061A35", ridge: "#062F3D", frame: "#02101F",
    code: "SPNU 0003 0",
  },
  {
    x: 520, y: 230, tier: "04", title: "DESTINATION", caption: "Sponsorship & Induction",
    face: "#7A560D", faceDark: "#5A3F0A", ridge: "#3D2A05", frame: "#1F1502",
    code: "SPNU 0004 0",
  },
];

export function ReadinessStack({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 560"
      className={className}
      role="img"
      aria-label="Isometric four-container cadet readiness progression: Foundation, Diagnostics, Command, and Destination — each represented as a colored ISO shipping container."
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Roof (top face) — subtle metallic gradient */}
        <linearGradient id="rs-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F7F3" />
          <stop offset="100%" stopColor="#9FB9B6" />
        </linearGradient>
        {/* Subtle deck shadow under each container */}
        <radialGradient id="rs-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        {/* Destination beacon glow */}
        <radialGradient id="rs-beacon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE8A8" />
          <stop offset="100%" stopColor="#E8B94F" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ===== Connecting gold route between containers (static dashed line) ===== */}
      <path
        d="M 130 470 L 290 410 L 450 350 L 600 290"
        fill="none"
        stroke="#E8B94F"
        strokeWidth="2"
        strokeDasharray="6 6"
        opacity="0.7"
      />

      {/* Radar pings on the route waypoints (container transitions) */}
      <g transform="translate(130 470)">
        <circle r="10" fill="none" stroke="#E8B94F" strokeWidth="1.2" opacity="0.6" className="animate-radar-ping" style={{ animationDelay: "0s" }} />
        <circle r="3" fill="#E8B94F" />
      </g>
      <g transform="translate(290 410)">
        <circle r="10" fill="none" stroke="#E8B94F" strokeWidth="1.2" opacity="0.6" className="animate-radar-ping" style={{ animationDelay: "0.6s" }} />
        <circle r="3" fill="#E8B94F" />
      </g>
      <g transform="translate(450 350)">
        <circle r="10" fill="none" stroke="#E8B94F" strokeWidth="1.2" opacity="0.6" className="animate-radar-ping" style={{ animationDelay: "1.2s" }} />
        <circle r="3" fill="#E8B94F" />
      </g>

      {/* ===== The four ISO cargo containers, stepped ascending ===== */}
      {CONTAINERS.map((c) => (
        <CargoContainer key={c.tier} spec={c} />
      ))}

      {/* Destination beacon glow (above the bronze container) */}
      <circle cx="600" cy="220" r="46" fill="url(#rs-beacon)" opacity="0.6" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Single isometric ISO shipping container                                    */
/*  - w=140 (length, along x-axis)                                            */
/*  - d=40  (depth, into isometric up-right)                                  */
/*  - h=56  (height, downward)                                                */
/*  - Right face = long side (corrugated + container code)                    */
/*  - Left face  = short end (corrugated + door locking bars)                 */
/*  - Top face   = roof (metallic, with tier badge)                          */
/* -------------------------------------------------------------------------- */

function CargoContainer({ spec }: { spec: ContainerSpec }) {
  const { x, y, tier, title, caption, face, faceDark, ridge, frame, code } = spec;

  const w = 140;
  const d = 40;
  const h = 56;

  // Face polygons
  const top = `${x},${y} ${x + w},${y} ${x + w + d},${y - d} ${x + d},${y - d}`;
  const left = `${x},${y} ${x + d},${y - d} ${x + d},${y - d + h} ${x},${y + h}`;
  const right = `${x + w},${y} ${x + w + d},${y - d} ${x + w + d},${y - d + h} ${x + w},${y + h}`;

  // Corrugation ridges on the RIGHT (long) face — vertical lines parallel
  // to the face's vertical edges. The face's "horizontal" axis runs from
  // (x+w, y) [bottom-left of face] to (x+w+d, y-d) [top-right of face].
  // A ridge at parameter t (0..1) along that axis runs from
  // (x+w + t*d, y - t*d) [top] to (x+w + t*d, y - t*d + h) [bottom].
  const rightRidges = Array.from({ length: 13 }, (_, i) => {
    const t = (i + 1) / 14; // skip the corner edges (0 and 1)
    const xt = x + w + t * d;
    const yt = y - t * d;
    return { xt, yt };
  });

  // Corrugation ridges on the LEFT (short end) face — vertical lines parallel
  // to the face's vertical edges. The face's "horizontal" axis runs from
  // (x, y) [bottom-left of face] to (x+d, y-d) [top-right of face].
  // A ridge at parameter t (0..1) runs from (x + t*d, y - t*d) [top]
  // to (x + t*d, y - t*d + h) [bottom].
  const leftRidges = Array.from({ length: 3 }, (_, i) => {
    const t = (i + 1) / 4;
    const xt = x + t * d;
    const yt = y - t * d;
    return { xt, yt };
  });

  // Container code text position — center it on the right face
  // Center of right face: midpoint of its diagonal corners
  const codeX = x + w + d / 2;
  const codeY = y - d / 2 + h / 2;

  return (
    <g>
      {/* Subtle deck shadow under the container */}
      <ellipse
        cx={x + w / 2 + d / 2}
        cy={y + h + 4}
        rx={w / 2 + 14}
        ry={8}
        fill="url(#rs-shadow)"
      />

      {/* ===== Left face (short end — door side) ===== */}
      <polygon points={left} fill={faceDark} stroke={frame} strokeWidth="1" />
      {/* Corrugation ridges on left face */}
      <g stroke={ridge} strokeWidth="0.6" opacity="0.55">
        {leftRidges.map((r, i) => (
          <line
            key={`l-${i}`}
            x1={r.xt}
            y1={r.yt}
            x2={r.xt}
            y2={r.yt + h}
          />
        ))}
      </g>
      {/* Door locking bars — two vertical cam-lock bars across the door */}
      <g stroke={frame} strokeWidth="1.4" opacity="0.85">
        {/* Bar 1 */}
        <line
          x1={x + d * 0.32}
          y1={y - d * 0.32}
          x2={x + d * 0.32}
          y2={y - d * 0.32 + h}
        />
        {/* Bar 2 */}
        <line
          x1={x + d * 0.68}
          y1={y - d * 0.68}
          x2={x + d * 0.68}
          y2={y - d * 0.68 + h}
        />
      </g>
      {/* Horizontal handle bar */}
      <line
        x1={x + d * 0.15}
        y1={y - d * 0.15 + h * 0.55}
        x2={x + d * 0.85}
        y2={y - d * 0.85 + h * 0.55}
        stroke={frame}
        strokeWidth="0.9"
        opacity="0.7"
      />
      {/* Locking handles (small dots at top + bottom of each bar) */}
      <g fill={ridge}>
        <circle cx={x + d * 0.32} cy={y - d * 0.32 + 4} r="1.6" />
        <circle cx={x + d * 0.32} cy={y - d * 0.32 + h - 4} r="1.6" />
        <circle cx={x + d * 0.68} cy={y - d * 0.68 + 4} r="1.6" />
        <circle cx={x + d * 0.68} cy={y - d * 0.68 + h - 4} r="1.6" />
      </g>

      {/* ===== Right face (long side — corrugated with container code) ===== */}
      <polygon points={right} fill={face} stroke={frame} strokeWidth="1" />
      {/* Corrugation ridges on right face */}
      <g stroke={ridge} strokeWidth="0.6" opacity="0.5">
        {rightRidges.map((r, i) => (
          <line
            key={`r-${i}`}
            x1={r.xt}
            y1={r.yt}
            x2={r.xt}
            y2={r.yt + h}
          />
        ))}
      </g>
      {/* Top edge highlight strip (subtle metallic gleam along the top of the long side) */}
      <line
        x1={x + w}
        y1={y}
        x2={x + w + d}
        y2={y - d}
        stroke="#FFFFFF"
        strokeWidth="0.5"
        opacity="0.35"
      />
      {/* Container code — printed on the long side */}
      <text
        x={codeX}
        y={codeY - 4}
        textAnchor="middle"
        fontFamily="var(--font-oswald), sans-serif"
        fontSize="9"
        fontWeight="600"
        fill="#FFFFFF"
        opacity="0.92"
        letterSpacing="0.16em"
        transform={`skewY(-45) rotate(0) translate(0 ${-(codeY - 4)})`}
        style={{ transformBox: "fill-box" }}
      >
        {code}
      </text>
      {/* Sub-label (tier name on the long side, small) */}
      <text
        x={codeX}
        y={codeY + 8}
        textAnchor="middle"
        fontFamily="var(--font-bebas), sans-serif"
        fontSize="11"
        fill="#FFFFFF"
        opacity="0.7"
        letterSpacing="0.18em"
      >
        {title}
      </text>

      {/* ===== Top face (roof) ===== */}
      <polygon points={top} fill="url(#rs-top)" stroke={frame} strokeWidth="0.9" />
      {/* Roof ridges — running along the length (front edge to back edge) */}
      <g stroke="#9FB9B6" strokeWidth="0.4" opacity="0.5">
        {[0.2, 0.4, 0.6, 0.8].map((t, i) => (
          <line
            key={`t-${i}`}
            x1={x + w * t}
            y1={y}
            x2={x + w * t + d}
            y2={y - d}
          />
        ))}
      </g>

      {/* ===== Corner posts (steel frame) — emphasize the 4 vertical corners ===== */}
      <g stroke={frame} strokeWidth="1.5" strokeLinecap="round">
        {/* Front-left corner post */}
        <line x1={x} y1={y} x2={x} y2={y + h} />
        {/* Front-right corner post (shared with right face front edge) */}
        <line x1={x + w} y1={y} x2={x + w} y2={y + h} />
        {/* Back-left corner post (top-left of left face going up) */}
        <line x1={x + d} y1={y - d} x2={x + d} y2={y - d + h} />
        {/* Back-right corner post (top-right of right face going up) */}
        <line x1={x + w + d} y1={y - d} x2={x + w + d} y2={y - d + h} />
      </g>

      {/* ===== Tier badge on the roof ===== */}
      <g transform={`translate(${x + w / 2 + d / 2 - 22} ${y - d / 2 - 11})`}>
        <rect x="0" y="0" width="44" height="22" rx="3" fill="#0B2345" stroke="#E8B94F" strokeWidth="1.2" />
        <text
          x="22"
          y="16"
          textAnchor="middle"
          fontFamily="var(--font-oswald), sans-serif"
          fontSize="13"
          fontWeight="700"
          fill="#E8B94F"
          letterSpacing="0.06em"
        >
          T{tier}
        </text>
      </g>

      {/* ===== Title + caption below the container ===== */}
      <text
        x={x + d}
        y={y + h + 22}
        fontFamily="var(--font-bebas), sans-serif"
        fontSize="20"
        letterSpacing="0.08em"
        fill="#F5F7F3"
      >
        {title}
      </text>
      <text
        x={x + d}
        y={y + h + 40}
        fontFamily="var(--font-montserrat), sans-serif"
        fontSize="11"
        fill="#9FB9B6"
      >
        {caption}
      </text>
    </g>
  );
}
