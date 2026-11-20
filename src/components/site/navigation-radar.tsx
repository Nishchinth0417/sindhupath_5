/**
 * NavigationRadar — Inline SVG hero visual featuring a single naval RADAR SCOPE:
 *
 *  - Outer bezel ring + radial scope background
 *  - Concentric range rings + crosshairs (45° diagonals)
 *  - Bearing ticks every 15° + cardinal bearing labels (000/090/180/270)
 *  - Radar waves forming from the center (animate-radar-ping) — waves expand
 *    outward and slowly fade as they reach the scope boundary
 *  - Two vessel contacts being tracked on the scope (VESS-01, CTC-02)
 *
 * The compass has been relocated to the footer (see compass-rose.tsx).
 *
 * Pure inline SVG + CSS keyframe animations (no Canvas, no Lottie).
 * Honors prefers-reduced-motion via globals.css overrides.
 */
export function NavigationRadar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 620"
      className={className}
      role="img"
      aria-label="Naval navigation radar scope with waves emanating from the center and slowly fading toward the boundary, tracking two vessel contacts."
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Sky wash */}
        <radialGradient id="nr-sky" cx="50%" cy="15%" r="90%">
          <stop offset="0%" stopColor="#0B2345" stopOpacity="0" />
          <stop offset="55%" stopColor="#03232D" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#071322" stopOpacity="0.95" />
        </radialGradient>

        {/* Radar scope background */}
        <radialGradient id="nr-scope-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#087F86" stopOpacity="0.35" />
          <stop offset="65%" stopColor="#062F3D" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#03232D" stopOpacity="0.95" />
        </radialGradient>

        {/* Radar center glow */}
        <radialGradient id="nr-radar-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#087F86" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#087F86" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ===== Background sky wash ===== */}
      <rect x="0" y="0" width="640" height="620" fill="url(#nr-sky)" />

      {/* ===== Constellation stars (upper sky) ===== */}
      <g fill="#E8B94F" opacity="0.7">
        <circle cx="60" cy="50" r="1.5" />
        <circle cx="160" cy="30" r="1" />
        <circle cx="260" cy="70" r="1.5" />
        <circle cx="380" cy="40" r="1" />
        <circle cx="480" cy="80" r="1.5" opacity="0.6" />
        <circle cx="580" cy="30" r="1" />
        <circle cx="100" cy="120" r="1" opacity="0.5" />
        <circle cx="540" cy="140" r="1" opacity="0.5" />
      </g>
      {/* Faint constellation lines */}
      <g stroke="#E8B94F" strokeWidth="0.4" opacity="0.2" fill="none">
        <path d="M 60 50 L 160 30 L 260 70" />
        <path d="M 380 40 L 480 80 L 580 30" />
      </g>

      {/* ===== Distant horizon grid ===== */}
      <g stroke="#087F86" strokeWidth="0.5" opacity="0.18">
        <line x1="0" y1="170" x2="640" y2="170" />
        <line x1="0" y1="200" x2="640" y2="200" />
      </g>

      {/* ====================================================================== */}
      {/* RADAR SCOPE — centered                                                  */}
      {/* ====================================================================== */}
      {/* Radar glow halo */}
      <circle cx="320" cy="340" r="240" fill="url(#nr-radar-glow)" />

      <g transform="translate(320 340)">
        {/* Outer bezel ring */}
        <circle r="200" fill="#0B2345" stroke="#087F86" strokeWidth="2" />
        <circle r="194" fill="none" stroke="#087F86" strokeWidth="0.5" opacity="0.4" />

        {/* Scope background fill */}
        <circle r="186" fill="url(#nr-scope-bg)" />

        {/* Range rings (concentric) */}
        <circle r="150" fill="none" stroke="#087F86" strokeWidth="0.6" opacity="0.45" />
        <circle r="110" fill="none" stroke="#087F86" strokeWidth="0.6" opacity="0.4" />
        <circle r="70" fill="none" stroke="#087F86" strokeWidth="0.6" opacity="0.35" />
        <circle r="30" fill="none" stroke="#087F86" strokeWidth="0.6" opacity="0.3" />

        {/* Crosshair lines */}
        <line x1="-186" y1="0" x2="186" y2="0" stroke="#087F86" strokeWidth="0.5" opacity="0.35" />
        <line x1="0" y1="-186" x2="0" y2="186" stroke="#087F86" strokeWidth="0.5" opacity="0.35" />
        {/* Diagonal crosshair (45°) */}
        <line x1="-131.5" y1="-131.5" x2="131.5" y2="131.5" stroke="#087F86" strokeWidth="0.4" opacity="0.2" />
        <line x1="-131.5" y1="131.5" x2="131.5" y2="-131.5" stroke="#087F86" strokeWidth="0.4" opacity="0.2" />

        {/* Bearing ticks around the rim (every 15°) */}
        <g stroke="#087F86" opacity="0.55">
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const isMajor = i % 6 === 0; // every 90°
            const isMid = i % 2 === 0;
            const innerR = isMajor ? 178 : isMid ? 182 : 184;
            const outerR = 186;
            return (
              <line
                key={i}
                x1={Math.cos(angle) * innerR}
                y1={Math.sin(angle) * innerR}
                x2={Math.cos(angle) * outerR}
                y2={Math.sin(angle) * outerR}
                strokeWidth={isMajor ? 1.5 : isMid ? 0.8 : 0.4}
              />
            );
          })}
        </g>

        {/* Bearing labels */}
        <text x="0" y="-166" textAnchor="middle" fontFamily="var(--font-bebas), sans-serif" fontSize="14" fill="#E8B94F" letterSpacing="0.1em">000</text>
        <text x="166" y="5" textAnchor="middle" fontFamily="var(--font-bebas), sans-serif" fontSize="12" fill="#087F86" letterSpacing="0.1em">090</text>
        <text x="0" y="172" textAnchor="middle" fontFamily="var(--font-bebas), sans-serif" fontSize="12" fill="#087F86" letterSpacing="0.1em">180</text>
        <text x="-166" y="5" textAnchor="middle" fontFamily="var(--font-bebas), sans-serif" fontSize="12" fill="#087F86" letterSpacing="0.1em">270</text>

        {/* ===== Radar waves forming from the center =====
            Three ping rings (base r=90), staggered every ~1.3s, that form as a
            tiny dot at the center and slowly expand outward — fading as they
            reach the scope boundary (r≈186). Base r=90 × scale 2.1 = ~189px,
            so waves dissipate right at the rim. Duration 4s gives a slow,
            stately sonar-like ripple. */}
        <circle r="90" fill="none" stroke="#E8B94F" strokeWidth="1.4" opacity="0.85" className="animate-radar-ping" style={{ animationDelay: "0s" }} />
        <circle r="90" fill="none" stroke="#E8B94F" strokeWidth="1.4" opacity="0.85" className="animate-radar-ping" style={{ animationDelay: "1.3s" }} />
        <circle r="90" fill="none" stroke="#E8B94F" strokeWidth="1.4" opacity="0.85" className="animate-radar-ping" style={{ animationDelay: "2.6s" }} />

        {/* ===== Vessel blip being tracked (NE quadrant) ===== */}
        <g transform="translate(95 -75)">
          {/* Blip halo */}
          <circle r="14" fill="#E8B94F" opacity="0.18" />
          <circle r="8" fill="#E8B94F" opacity="0.35" />
          {/* Blip core */}
          <polygon points="0,-5 4,4 -4,4" fill="#E8B94F" />
          {/* Vector line back to center */}
          <line x1="0" y1="0" x2="-95" y2="75" stroke="#E8B94F" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.5" />
          {/* Label */}
          <text x="12" y="4" fontFamily="var(--font-oswald), sans-serif" fontSize="10" fontWeight="500" fill="#DCEFED" opacity="0.85" letterSpacing="0.1em">VESS-01</text>
          <text x="12" y="16" fontFamily="var(--font-montserrat), sans-serif" fontSize="8" fill="#9FB9B6" opacity="0.7">12.4 nm</text>
        </g>

        {/* ===== Second contact (SW quadrant, smaller) ===== */}
        <g transform="translate(-110 90)">
          <circle r="3" fill="#087F86" opacity="0.8" />
          <text x="8" y="4" fontFamily="var(--font-montserrat), sans-serif" fontSize="8" fill="#9FB9B6" opacity="0.6">CTC-02</text>
        </g>

        {/* Center dot */}
        <circle r="4" fill="#FFE8A8" />
        <circle r="2" fill="#0B2345" />

        {/* Radar label */}
        <text x="0" y="-220" textAnchor="middle" fontFamily="var(--font-bebas), sans-serif" fontSize="18" fill="#087F86" letterSpacing="0.32em" opacity="0.8">
          NAVIGATION RADAR
        </text>
        <text x="0" y="-205" textAnchor="middle" fontFamily="var(--font-montserrat), sans-serif" fontSize="9" fill="#087F86" opacity="0.6" letterSpacing="0.18em">
          X-BAND · 9.4 GHz
        </text>
      </g>
    </svg>
  );
}
