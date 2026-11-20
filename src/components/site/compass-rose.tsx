/**
 * CompassRose — Inline SVG of a gyro compass rose, relocated from the hero
 * radar visual to the end of the page (near the footer).
 *
 *  - Outermost fixed boundary ring
 *  - Outer rose ring slowly rotating (animate-compass-spin)
 *  - 24 cardinal/intercardinal tick marks every 15°
 *  - N/E/S/W cardinal letters + NE/SE/SW/NW intercardinal markers
 *  - 8-point compass rose star (decorative)
 *  - Wobbling needle with gold north pointer + teal south pointer (animate-compass-needle)
 *
 * Pure inline SVG + CSS keyframe animations. Honors prefers-reduced-motion.
 */
export function CompassRose({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      className={className}
      role="img"
      aria-label="Gyro compass rose with a wobbling needle finding true north and a slowly rotating outer ring of cardinal markings."
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Compass glow */}
        <radialGradient id="cr-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8B94F" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E8B94F" stopOpacity="0" />
        </radialGradient>

        {/* Needle gradients */}
        <linearGradient id="cr-needle-north" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE8A8" />
          <stop offset="100%" stopColor="#E8B94F" />
        </linearGradient>
        <linearGradient id="cr-needle-south" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#087F86" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0B2345" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Compass glow halo */}
      <circle cx="160" cy="160" r="150" fill="url(#cr-glow)" />

      <g transform="translate(160 160)">
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
            fill="url(#cr-needle-north)"
            stroke="#7A560D"
            strokeWidth="0.6"
          />
          {/* South pointer (teal) */}
          <polygon
            points="0,80 -7,0 0,-8 7,0"
            fill="url(#cr-needle-south)"
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
    </svg>
  );
}
