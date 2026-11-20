/**
 * NavigationRadar — Inline SVG hero visual featuring two animated instruments:
 *
 *  1. A naval RADAR SCOPE on the right with:
 *     - Concentric range rings + crosshairs
 *     - A rotating sweep line + fading trail wedge (animate-radar-sweep)
 *     - Expanding ping rings from the center (animate-radar-ping)
 *     - A vessel blip being tracked on the scope
 *
 *  2. A COMPASS ROSE on the left with:
 *     - Cardinal/intercardinal ticks
 *     - An outer rose ring slowly rotating (animate-compass-spin)
 *     - A needle wobbling as it finds north (animate-compass-needle)
 *
 * Pure inline SVG + CSS keyframe animations (no Canvas, no Lottie).
 * Honors prefers-reduced-motion via globals.css overrides.
 */
export function NavigationRadar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 620"
      className={className}
      role="img"
      aria-label="Naval navigation instruments: a sweeping radar scope tracking a vessel, beside a compass rose with a wobbling needle finding north."
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

        {/* Radar sweep trail (fading wedge) */}
        <linearGradient id="nr-sweep-trail" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E8B94F" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#E8B94F" stopOpacity="0" />
        </linearGradient>

        {/* Radar center glow */}
        <radialGradient id="nr-radar-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#087F86" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#087F86" stopOpacity="0" />
        </radialGradient>

        {/* Compass glow */}
        <radialGradient id="nr-compass-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8B94F" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#E8B94F" stopOpacity="0" />
        </radialGradient>

        {/* Needle gradients */}
        <linearGradient id="nr-needle-north" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE8A8" />
          <stop offset="100%" stopColor="#E8B94F" />
        </linearGradient>
        <linearGradient id="nr-needle-south" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#087F86" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0B2345" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* ===== Background sky wash ===== */}
      <rect x="0" y="0" width="720" height="620" fill="url(#nr-sky)" />

      {/* ===== Constellation stars (upper sky) ===== */}
      <g fill="#E8B94F" opacity="0.7">
        <circle cx="80" cy="50" r="1.5" />
        <circle cx="180" cy="30" r="1" />
        <circle cx="280" cy="70" r="1.5" />
        <circle cx="380" cy="40" r="1" />
        <circle cx="480" cy="80" r="1.5" opacity="0.6" />
        <circle cx="580" cy="30" r="1" />
        <circle cx="640" cy="60" r="1" opacity="0.6" />
        <circle cx="220" cy="120" r="1" opacity="0.5" />
        <circle cx="500" cy="140" r="1" opacity="0.5" />
      </g>
      {/* Faint constellation lines */}
      <g stroke="#E8B94F" strokeWidth="0.4" opacity="0.2" fill="none">
        <path d="M 80 50 L 180 30 L 280 70" />
        <path d="M 480 80 L 580 30 L 640 60" />
      </g>

      {/* ===== Distant horizon grid ===== */}
      <g stroke="#087F86" strokeWidth="0.5" opacity="0.18">
        <line x1="0" y1="170" x2="720" y2="170" />
        <line x1="0" y1="200" x2="720" y2="200" />
      </g>

      {/* ====================================================================== */}
      {/* COMPASS ROSE — left side                                                */}
      {/* ====================================================================== */}
      {/* Compass glow halo */}
      <circle cx="160" cy="420" r="150" fill="url(#nr-compass-glow)" />

      <g transform="translate(160 420)">
        {/* Outermost fixed ring (boundary) */}
        <circle r="118" fill="none" stroke="#087F86" strokeWidth="0.75" opacity="0.35" />

        {/* Outer rotating rose ring (slowly spins) */}
        <g className="animate-compass-spin">
          {/* Tick marks around the ring — 24 ticks every 15° */}
          <g stroke="#087F86" strokeWidth="1" opacity="0.7">
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 15 * Math.PI) / 180;
              const isMajor = i % 6 === 0; // every 90°
              const isMid = i % 3 === 0;   // every 45°
              const innerR = isMajor ? 100 : isMid ? 105 : 110;
              const outerR = 116;
              return (
                <line
                  key={i}
                  x1={Math.cos(angle) * innerR}
                  y1={Math.sin(angle) * innerR}
                  x2={Math.cos(angle) * outerR}
                  y2={Math.sin(angle) * outerR}
                  strokeWidth={isMajor ? 1.5 : isMid ? 1 : 0.5}
                />
              );
            })}
          </g>

          {/* Cardinal letters */}
          <text x="0" y="-92" textAnchor="middle" fontFamily="var(--font-bebas), sans-serif" fontSize="16" fill="#E8B94F" letterSpacing="0.1em">N</text>
          <text x="92" y="5" textAnchor="middle" fontFamily="var(--font-bebas), sans-serif" fontSize="13" fill="#087F86" letterSpacing="0.1em">E</text>
          <text x="0" y="98" textAnchor="middle" fontFamily="var(--font-bebas), sans-serif" fontSize="13" fill="#087F86" letterSpacing="0.1em">S</text>
          <text x="-92" y="5" textAnchor="middle" fontFamily="var(--font-bebas), sans-serif" fontSize="13" fill="#087F86" letterSpacing="0.1em">W</text>

          {/* Intercardinal markers (small) */}
          <text x="65" y="-65" textAnchor="middle" fontFamily="var(--font-bebas), sans-serif" fontSize="9" fill="#087F86" opacity="0.6">NE</text>
          <text x="65" y="70" textAnchor="middle" fontFamily="var(--font-bebas), sans-serif" fontSize="9" fill="#087F86" opacity="0.6">SE</text>
          <text x="-65" y="70" textAnchor="middle" fontFamily="var(--font-bebas), sans-serif" fontSize="9" fill="#087F86" opacity="0.6">SW</text>
          <text x="-65" y="-65" textAnchor="middle" fontFamily="var(--font-bebas), sans-serif" fontSize="9" fill="#087F86" opacity="0.6">NW</text>

          {/* Inner compass ring */}
          <circle r="86" fill="none" stroke="#087F86" strokeWidth="0.6" opacity="0.5" />
          <circle r="70" fill="none" stroke="#087F86" strokeWidth="0.4" opacity="0.35" />

          {/* Compass rose star (8-point star, decorative) */}
          <g opacity="0.55">
            <polygon
              points="0,-86 8,-8 86,0 8,8 0,86 -8,8 -86,0 -8,-8"
              fill="#087F86"
              opacity="0.18"
            />
            <polygon
              points="0,-86 6,-12 60,-60 12,-6 0,0 -12,-6 -60,-60 -6,-12"
              fill="#0B2345"
              opacity="0.4"
            />
          </g>
        </g>

        {/* Needle (wobbling, layered above the rotating ring) */}
        <g className="animate-compass-needle">
          {/* North pointer (gold) */}
          <polygon
            points="0,-80 -7,0 0,8 7,0"
            fill="url(#nr-needle-north)"
            stroke="#7A560D"
            strokeWidth="0.6"
          />
          {/* South pointer (teal) */}
          <polygon
            points="0,80 -7,0 0,-8 7,0"
            fill="url(#nr-needle-south)"
            stroke="#087F86"
            strokeWidth="0.4"
          />
          {/* N marker triangle above needle */}
          <polygon points="0,-80 -4,-72 4,-72" fill="#FFE8A8" />

          {/* Center pivot */}
          <circle r="6" fill="#0B2345" stroke="#E8B94F" strokeWidth="1.2" />
          <circle r="2" fill="#E8B94F" />
        </g>

        {/* Compass label */}
        <text x="0" y="-130" textAnchor="middle" fontFamily="var(--font-bebas), sans-serif" fontSize="14" fill="#087F86" letterSpacing="0.28em" opacity="0.8">
          GYRO COMPASS
        </text>
      </g>

      {/* ====================================================================== */}
      {/* RADAR SCOPE — right side                                               */}
      {/* ====================================================================== */}
      {/* Radar glow halo */}
      <circle cx="520" cy="350" r="240" fill="url(#nr-radar-glow)" />

      <g transform="translate(520 350)">
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

        {/* ===== Ping rings (animate-radar-ping) ===== */}
        <circle r="40" fill="none" stroke="#E8B94F" strokeWidth="1.5" opacity="0.6" className="animate-radar-ping" style={{ animationDelay: "0s" }} />
        <circle r="40" fill="none" stroke="#E8B94F" strokeWidth="1.5" opacity="0.6" className="animate-radar-ping" style={{ animationDelay: "1s" }} />
        <circle r="40" fill="none" stroke="#E8B94F" strokeWidth="1.5" opacity="0.6" className="animate-radar-ping" style={{ animationDelay: "2s" }} />

        {/* ===== Sweeping scan line + trail wedge (animate-radar-sweep) ===== */}
        <g className="animate-radar-sweep">
          {/* Trail wedge — fading sector behind the sweep line */}
          <path
            d="M 0 0 L 180 0 A 180 180 0 0 0 127.3 -127.3 Z"
            fill="url(#nr-sweep-trail)"
            opacity="0.6"
          />
          {/* Sweep line */}
          <line x1="0" y1="0" x2="180" y2="0" stroke="#FFE8A8" strokeWidth="2" strokeLinecap="round" />
          {/* Leading-edge blip */}
          <circle cx="180" cy="0" r="3.5" fill="#FFFFFF" />
          <circle cx="180" cy="0" r="6" fill="#E8B94F" opacity="0.4" />
        </g>

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

      {/* ===== Decorative connector line between compass & radar ===== */}
      <g opacity="0.3">
        <line x1="280" y1="420" x2="320" y2="380" stroke="#087F86" strokeWidth="0.5" strokeDasharray="2 4" />
      </g>
    </svg>
  );
}
