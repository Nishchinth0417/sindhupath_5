import { ArrowUpRight, MessageCircle } from "lucide-react";
import { SINDHUPATH_CONFIG } from "@/lib/site-config";

export function ConversionCta() {
  return (
    <section
      id="enroll"
      className="relative bg-[#071322] text-white py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Aurora backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 100%, rgba(8,127,134,0.25) 0%, transparent 60%), radial-gradient(40% 50% at 50% 0%, rgba(232,185,79,0.10) 0%, transparent 70%)",
        }}
      />
      {/* Compass ornament */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
        style={{
          width: "min(80vw, 720px)",
          aspectRatio: "1",
          backgroundImage:
            "repeating-conic-gradient(from 0deg, #E8B94F 0deg 8deg, transparent 8deg 45deg)",
          borderRadius: "50%",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E8B94F]/30 bg-[#E8B94F]/5 px-3.5 py-1.5">
          <span className="font-subhead uppercase tracking-[0.22em] text-[11px] text-[#E8B94F]">
            {SINDHUPATH_CONFIG.motto}
          </span>
        </div>

        <h2 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.92] tracking-[0.01em]">
          Ready to Chart Your
          <span className="block text-[#E8B94F]">Course to Sea?</span>
        </h2>

        <p className="mt-6 mx-auto max-w-2xl font-body text-base sm:text-lg text-[#DCEFED]/85 leading-relaxed">
          Begin your merit-based preparation with mentors who actually sail.
          The SindhuPath Academy Platform hosts your syllabus, mock tests, and
          mentor-led viva simulations — accessible from anywhere in India.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:justify-center">
          <a
            href={SINDHUPATH_CONFIG.platformUrl}
            className="cta-link inline-flex items-center justify-center gap-2 font-subhead uppercase tracking-[0.12em] text-sm text-[#071322] bg-[#E8B94F] hover:bg-[#FFE8A8] px-8 py-4 rounded-md font-semibold min-h-[52px] shadow-[0_4px_24px_rgba(232,185,79,0.45)] transition-colors"
          >
            Launch Academy Platform
            <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
          </a>
          <a
            href={SINDHUPATH_CONFIG.admissionsWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-subhead uppercase tracking-[0.12em] text-sm text-[#DCEFED] hover:text-white border border-[#DCEFED]/30 hover:border-[#DCEFED] px-8 py-4 rounded-md min-h-[52px] transition-colors"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Counselor on WhatsApp
          </a>
        </div>

        {/* Helpline meta */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-subhead uppercase tracking-[0.14em] text-[11px] text-[#087F86]">
          <span>Helpline · {SINDHUPATH_CONFIG.admissionsPhone}</span>
          <span aria-hidden="true" className="hidden sm:inline text-[#E8B94F]/40">·</span>
          <span>
            <a href={`mailto:${SINDHUPATH_CONFIG.admissionsEmail}`} className="hover:text-[#DCEFED] transition-colors normal-case tracking-normal">
              {SINDHUPATH_CONFIG.admissionsEmail}
            </a>
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-[#E8B94F]/40">·</span>
          <span>Based in {SINDHUPATH_CONFIG.baseCity}</span>
        </div>
      </div>
    </section>
  );
}
