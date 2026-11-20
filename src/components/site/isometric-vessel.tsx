/**
 * IsometricVessel — Inline SVG: isometric container/cargo training vessel
 * sailing on a faceted isometric ocean plane, with a dashed navigational
 * route line extending toward a pulsing harbor beacon with radial ripples.
 *
 * Pure inline SVG + CSS keyframe animations (no Canvas, no Lottie).
 * Honors prefers-reduced-motion via globals.css overrides.
 */
export function IsometricVessel({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 600"
      className={className}
      role="img"
      aria-label="Isometric illustration of a SindhuPath training vessel sailing toward a harbor beacon along a dashed navigational route."
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Ocean facet gradients */}
        <linearGradient id="sp-sea-1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B2345" />
          <stop offset="100%" stopColor="#062F3D" />
        </linearGradient>
        <linearGradient id="sp-sea-2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#062F3D" />
          <stop offset="100%" stopColor="#03232D" />
        </linearGradient>
        <linearGradient id="sp-sea-3" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#087F86" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0B2345" stopOpacity="0" />
        </linearGradient>

        {/* Hull & deck gradient — brightened for contrast on dark sea */}
        <linearGradient id="sp-hull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F5F7F3" />
          <stop offset="100%" stopColor="#DCEFED" />
        </linearGradient>
        <linearGradient id="sp-deck" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B2345" />
          <stop offset="100%" stopColor="#03232D" />
        </linearGradient>

        {/* Container stack gradient */}
        <linearGradient id="sp-container" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8B94F" />
          <stop offset="100%" stopColor="#C89B3C" />
        </linearGradient>

        {/* Beacon glow */}
        <radialGradient id="sp-beacon-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8B94F" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#E8B94F" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#E8B94F" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sp-beacon-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#FFE8A8" />
          <stop offset="100%" stopColor="#E8B94F" />
        </radialGradient>

        {/* Soft sky wash */}
        <radialGradient id="sp-sky" cx="40%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#0B2345" stopOpacity="0" />
          <stop offset="60%" stopColor="#03232D" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#071322" stopOpacity="0.95" />
        </radialGradient>

        {/* Soft glow halo behind the ship */}
        <radialGradient id="sp-ship-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#087F86" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#087F86" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sky wash */}
      <rect x="0" y="0" width="720" height="600" fill="url(#sp-sky)" />

      {/* ===== Constellation / navigational stars ===== */}
      <g fill="#E8B94F" opacity="0.7">
        <circle cx="120" cy="80" r="1.5" />
        <circle cx="180" cy="120" r="1" />
        <circle cx="240" cy="60" r="2" />
        <circle cx="340" cy="100" r="1" />
        <circle cx="80" cy="180" r="1.5" />
        <circle cx="440" cy="80" r="1" />
        <circle cx="540" cy="140" r="1.5" opacity="0.6" />
        <circle cx="640" cy="60" r="1" />
        <circle cx="200" cy="200" r="1" opacity="0.5" />
        <circle cx="460" cy="200" r="1" opacity="0.5" />
      </g>
      {/* Subtle constellation lines */}
      <g stroke="#E8B94F" strokeWidth="0.5" opacity="0.25" fill="none">
        <path d="M 120 80 L 180 120 L 240 60" />
        <path d="M 440 80 L 540 140 L 640 60" />
      </g>

      {/* Distant horizon grid */}
      <g stroke="#087F86" strokeWidth="0.5" opacity="0.2">
        <line x1="0" y1="220" x2="720" y2="220" />
        <line x1="0" y1="250" x2="720" y2="250" />
      </g>

      {/* ===== Distant vessel silhouette on horizon ===== */}
      <g opacity="0.55" fill="#0B2345">
        <polygon points="540,300 580,295 600,300 590,310 530,310" />
        <rect x="555" y="280" width="3" height="20" />
        <polygon points="552,275 568,275 568,290 552,290" fill="#0B2345" />
      </g>

      {/* ===== Isometric ocean plane (3 faceted polygons) ===== */}
      <g>
        <polygon points="0,420 360,300 720,420 720,600 0,600" fill="url(#sp-sea-1)" />
        <polygon points="0,420 360,300 720,420 360,480" fill="url(#sp-sea-3)" opacity="0.6" />
        <polygon points="60,600 360,480 660,600" fill="url(#sp-sea-2)" />
        {/* Sea facets */}
        <polygon points="0,420 360,300 360,480 0,600" fill="url(#sp-sea-2)" opacity="0.5" />
        <polygon points="720,420 360,300 360,480 720,600" fill="url(#sp-sea-2)" opacity="0.3" />
        {/* Lane highlight */}
        <polyline
          points="120,540 240,500 360,460 480,420 600,380"
          fill="none"
          stroke="#087F86"
          strokeWidth="1.5"
          opacity="0.45"
          strokeDasharray="2 6"
        />
      </g>

      {/* ===== Navigational route line (animated dash) ===== */}
      <g>
        <path
          d="M 100 510 C 220 470, 320 440, 420 400 S 560 330, 620 310"
          fill="none"
          stroke="#E8B94F"
          strokeWidth="2.5"
          strokeDasharray="10 8"
          strokeLinecap="round"
          className="animate-route-dash"
          opacity="0.85"
        />
        {/* Route waypoints */}
        <circle cx="100" cy="510" r="4" fill="#E8B94F" />
        <circle cx="100" cy="510" r="8" fill="none" stroke="#E8B94F" strokeWidth="1" opacity="0.4" />
        <circle cx="620" cy="310" r="4" fill="#E8B94F" />
      </g>

      {/* ===== Harbor beacon (destination) with pulsing ripples ===== */}
      <g transform="translate(620 310)">
        {/* Radial ripple rings */}
        <circle r="14" fill="none" stroke="#E8B94F" strokeWidth="1.5" opacity="0.6" className="animate-beacon-pulse" style={{ animationDelay: "0s" }} />
        <circle r="14" fill="none" stroke="#E8B94F" strokeWidth="1.5" opacity="0.6" className="animate-beacon-pulse" style={{ animationDelay: "1.1s" }} />
        <circle r="14" fill="none" stroke="#E8B94F" strokeWidth="1.5" opacity="0.6" className="animate-beacon-pulse" style={{ animationDelay: "2.2s" }} />
        {/* Glow halo */}
        <circle r="50" fill="url(#sp-beacon-glow)" opacity="0.7" />
        {/* Core */}
        <circle r="10" fill="url(#sp-beacon-core)" className="animate-beacon-core" />
        {/* Lighthouse stack */}
        <rect x="-4" y="8" width="8" height="32" fill="#0B2345" />
        <rect x="-9" y="3" width="18" height="8" rx="1" fill="#087F86" />
      </g>

      {/* ===== Ship glow halo (behind vessel for emphasis) ===== */}
      <ellipse cx="380" cy="450" rx="240" ry="80" fill="url(#sp-ship-glow)" />

      {/* ===== Isometric training vessel (scaled + centered + floating) ===== */}
      <g transform="translate(-200 -340) scale(1.5)">
        <g className="animate-vessel-float">
          {/* Hull (isometric parallelogram) */}
          <polygon
            points="220,400 380,360 480,400 320,440"
            fill="url(#sp-hull)"
            stroke="#0B2345"
            strokeWidth="1.2"
          />
          {/* Hull side shadow */}
          <polygon points="220,400 320,440 320,452 220,412" fill="#0B2345" opacity="0.55" />
          <polygon points="480,400 320,440 320,452 480,412" fill="#03232D" opacity="0.7" />
          {/* Deck */}
          <polygon points="240,396 380,362 460,396 320,430" fill="url(#sp-deck)" stroke="#087F86" strokeWidth="0.75" />

          {/* Bridge / superstructure (white block with windows) */}
          <polygon points="320,360 360,348 392,360 352,372" fill="#FFFFFF" stroke="#0B2345" strokeWidth="1" />
          <polygon points="320,360 352,372 352,392 320,380" fill="#9FB9B6" />
          <polygon points="392,360 352,372 352,392 392,380" fill="#DCEFED" />
          {/* Bridge windows */}
          <polygon points="328,364 350,357 360,360 338,367" fill="#087F86" opacity="0.95" />

          {/* Funnel / mast */}
          <line x1="362" y1="356" x2="362" y2="320" stroke="#0B2345" strokeWidth="2" />
          <rect x="356" y="324" width="12" height="14" fill="url(#sp-container)" stroke="#7A560D" strokeWidth="0.5" />
          {/* Mast top beacon */}
          <circle cx="362" cy="318" r="2" fill="#E8B94F" className="animate-beacon-core" />

          {/* Container stacks on deck */}
          <g>
            <polygon points="252,392 282,384 312,392 282,400" fill="url(#sp-container)" stroke="#7A560D" strokeWidth="0.5" />
            <polygon points="282,384 312,392 312,378 282,370" fill="#C89B3C" stroke="#7A560D" strokeWidth="0.5" />
            <polygon points="252,392 282,400 282,386 252,378" fill="#8A6414" stroke="#7A560D" strokeWidth="0.5" />
          </g>
          <g>
            <polygon points="402,392 432,384 442,388 412,396" fill="url(#sp-container)" stroke="#7A560D" strokeWidth="0.5" />
            <polygon points="432,384 442,388 442,378 432,374" fill="#C89B3C" />
          </g>

          {/* Bow accent */}
          <line x1="220" y1="400" x2="240" y2="396" stroke="#E8B94F" strokeWidth="1.5" />
        </g>
      </g>

      {/* Subtle hull wake */}
      <g opacity="0.45">
        <polyline points="280,490 240,510 200,530" fill="none" stroke="#DCEFED" strokeWidth="1.2" strokeDasharray="3 5" />
        <polyline points="540,490 580,510 620,530" fill="none" stroke="#DCEFED" strokeWidth="1.2" strokeDasharray="3 5" />
      </g>

      {/* ===== Compass rose — top-left corner anchor ===== */}
      <g transform="translate(90 160)" opacity="0.95">
        <circle r="44" fill="none" stroke="#087F86" strokeWidth="1" opacity="0.7" />
        <circle r="30" fill="none" stroke="#087F86" strokeWidth="0.6" opacity="0.5" />
        <circle r="4" fill="#E8B94F" />
        {/* N S E W points */}
        <polygon points="0,-40 -5,-8 0,0 5,-8" fill="#E8B94F" />
        <polygon points="0,40 -5,8 0,0 5,8" fill="#087F86" opacity="0.8" />
        <polygon points="-40,0 -8,-5 0,0 -8,5" fill="#087F86" opacity="0.8" />
        <polygon points="40,0 8,-5 0,0 8,5" fill="#087F86" opacity="0.8" />
        <text x="0" y="-50" textAnchor="middle" fontFamily="var(--font-bebas), sans-serif" fontSize="14" fill="#E8B94F" letterSpacing="0.1em">N</text>
      </g>
    </svg>
  );
}
