import Image from "next/image";

/**
 * LogoMark — renders the SindhuPath emblem (PNG) with an optional wordmark.
 * The logo PNG is monochrome navy on transparent background.
 */
export function LogoMark({
  size = 44,
  withWordmark = true,
  variant = "dark",
  className = "",
}: {
  size?: number;
  withWordmark?: boolean;
  variant?: "dark" | "light";
  className?: string;
}) {
  const wordmarkColor = variant === "light" ? "text-white" : "text-[#0B2345]";
  const subColor = variant === "light" ? "text-[#DCEFED]" : "text-[#087F86]";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/sindhupath-logo.png"
        alt="SindhuPath Merchant Navy Academy logo"
        width={size}
        height={size}
        priority={size >= 40}
        fetchPriority={size >= 40 ? "high" : "auto"}
        className="shrink-0 select-none"
        style={{ width: size, height: size }}
      />
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display ${wordmarkColor}`}
            style={{ fontSize: Math.max(18, size * 0.46), letterSpacing: "0.08em" }}
          >
            SINDHUPATH
          </span>
          <span
            className={`font-subhead ${subColor}`}
            style={{ fontSize: Math.max(8, size * 0.22), letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500 }}
          >
            Merchant Navy Academy
          </span>
        </span>
      )}
    </span>
  );
}
