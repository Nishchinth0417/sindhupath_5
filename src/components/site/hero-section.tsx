import Link from "next/link";
import { ArrowUpRight, MessageCircle, Compass, Radar } from "lucide-react";
import { NavigationRadar } from "./navigation-radar";
import { SINDHUPATH_CONFIG } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#071322] text-white pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20"
    >
      {/* Static atmospheric backdrop (replaces former aurora animation) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 25% 10%, rgba(8,127,134,0.22) 0%, transparent 60%), radial-gradient(50% 40% at 80% 30%, rgba(232,185,79,0.12) 0%, transparent 60%), radial-gradient(70% 60% at 60% 90%, rgba(11,35,69,0.6) 0%, transparent 70%)",
        }}
      />
      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220,239,237,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(220,239,237,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(circle at 50% 30%, black 0%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Copy column */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Eyebrow with motto */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8B94F]/30 bg-[#E8B94F]/5 px-4 py-1.5">
              <Compass className="h-3.5 w-3.5 text-[#E8B94F]" aria-hidden="true" />
              <span className="font-subhead uppercase tracking-[0.22em] text-[11px] sm:text-xs text-[#E8B94F]">
                {SINDHUPATH_CONFIG.motto}
              </span>
            </div>

            {/* H1 */}
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-6xl xl:text-7xl leading-[0.92] tracking-[0.01em] text-white">
              <span className="block">Prepare for the Sea</span>
              <span className="block text-[#E8B94F] mt-1">with Master Mariners</span>
            </h1>

            {/* Lead */}
            <p className="mt-6 font-body text-base sm:text-lg text-[#DCEFED]/85 leading-relaxed max-w-xl">
              India&rsquo;s merit-based Merchant Navy coaching academy. Structured{" "}
              <span className="text-white font-semibold">IMU-CET</span> and{" "}
              <span className="text-white font-semibold">DNS Sponsorship</span>{" "}
              mentoring by active Master Mariners and Chief Engineers — engineered
              with technical rigor, free of placement-selling middlemen.
            </p>

            {/* Institutional subhead */}
            <p className="mt-3 font-subhead uppercase tracking-[0.16em] text-xs text-[#087F86]">
              {SINDHUPATH_CONFIG.subhead}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={SINDHUPATH_CONFIG.platformUrl}
                className="cta-link inline-flex items-center justify-center gap-2 font-subhead uppercase tracking-[0.12em] text-sm text-[#071322] bg-[#E8B94F] hover:bg-[#FFE8A8] px-6 sm:px-7 py-4 rounded-md font-semibold min-h-[52px] shadow-[0_4px_20px_rgba(232,185,79,0.4)] transition-colors"
              >
                Explore SindhuPath Platform
                <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
              </a>
              <a
                href={SINDHUPATH_CONFIG.admissionsWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-subhead uppercase tracking-[0.12em] text-sm text-[#DCEFED] hover:text-white border border-[#DCEFED]/30 hover:border-[#DCEFED] px-6 sm:px-7 py-4 rounded-md min-h-[52px] transition-colors"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Counselor on WhatsApp
              </a>
            </div>

            {/* Verified trust strip */}
            <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-xl border-t border-white/10 pt-6">
              <TrustItem label="Mentorship" value="Active Mariners" />
              <TrustItem label="Guidance" value="100% Merit" />
              <TrustItem label="Base" value="Bengaluru · Pan-India" />
            </dl>
          </div>

          {/* Visual column */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <NavigationRadar className="w-full h-auto" />
            </div>
            {/* Spec card — placed below the SVG, no overlap */}
            <div className="mt-4 sm:mt-5 flex items-center gap-3 bg-[#0B2345]/95 backdrop-blur-sm border border-[#087F86]/30 rounded-lg px-4 py-3 shadow-xl">
              <Radar className="h-5 w-5 text-[#E8B94F] shrink-0" aria-hidden="true" />
              <div className="min-w-0">
                <div className="font-subhead uppercase tracking-[0.14em] text-[10px] text-[#087F86]">
                  Verified Course Pathway
                </div>
                <div className="font-subhead text-sm text-white tracking-wide truncate">
                  IMU-CET · DNS · Viva · CBT Mocks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider into the next section */}
      <div aria-hidden="true" className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] sm:h-[60px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C240,80 480,0 720,32 C960,64 1200,16 1440,48 L1440,80 L0,80 Z" fill="#F7F9FC" />
          <path d="M0,52 C240,84 480,28 720,48 C960,68 1200,32 1440,56" fill="none" stroke="#087F86" strokeWidth="1" opacity="0.4" />
        </svg>
      </div>
    </section>
  );
}

function TrustItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-subhead uppercase tracking-[0.16em] text-[10px] sm:text-[11px] text-[#087F86]">
        {label}
      </dt>
      <dd className="mt-1 font-subhead text-sm sm:text-base text-white tracking-wide">
        {value}
      </dd>
    </div>
  );
}
