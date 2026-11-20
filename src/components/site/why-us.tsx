import { Ship, ShieldCheck, Radar, Stethoscope } from "lucide-react";
import { RevealCard } from "./reveal-card";

const DIFFERENCES = [
  {
    icon: Ship,
    title: "Active Deep-Sea Command Mentors",
    body: "Instruction and viva mentorship come directly from Master Mariners and Chief Engineers currently serving on international container, tanker, and bulk-carrier fleets. They know the interview criteria because they sit on the other side of the table.",
    tag: "Verified Mentorship",
  },
  {
    icon: ShieldCheck,
    title: "100% Merit Guidance — Zero Placement Selling",
    body: "SindhuPath explicitly does not sell jobs, seat sponsorships, or sea-time. It is a preparatory academy that equips candidates to win independent company selections on merit. No false promises, no middleman fees.",
    tag: "Ethical Stance",
  },
  {
    icon: Radar,
    title: "Current Shipping Fleet Intelligence",
    body: "Mentors translate real-time shipping company interview profiles — Maersk, MSC, Fleet Management, Synergy, Great Eastern, Anglo-Eastern — into precise viva preparation, not generic textbook answers.",
    tag: "Fleet-Specific",
  },
  {
    icon: Stethoscope,
    title: "Transparent Medical & DG Shipping Fitness Counseling",
    body: "An objective 14-parameter eligibility framework — built with insights from Urban Planning, Architecture, and Robotics Engineering — evaluates PCM marks, age limits, vision standards, and BMI before you commit.",
    tag: "14-Parameter Framework",
  },
];

export function WhyUs() {
  return (
    <section
      id="difference"
      className="relative bg-[#0B2345] text-white py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220,239,237,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(220,239,237,0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Radial accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(232,185,79,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E8B94F]/30 bg-[#E8B94F]/5 px-3.5 py-1.5">
            <span className="font-subhead uppercase tracking-[0.22em] text-[11px] text-[#E8B94F]">
              The SindhuPath Difference
            </span>
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-[0.01em]">
            Why Serious Aspirants
            <span className="block text-[#E8B94F]">Choose This Academy</span>
          </h2>
          <p className="mt-4 font-body text-base sm:text-lg text-[#DCEFED]/80 max-w-2xl leading-relaxed">
            We do not sell jobs. We do not chase placement-rate vanity. We build
            cadets who pass exams and clear sponsorship interviews because they
            are genuinely ready for the sea.
          </p>
        </div>

        {/* Difference cards */}
        <div className="mt-12 grid sm:grid-cols-2 gap-5 lg:gap-6">
          {DIFFERENCES.map((d, idx) => {
            const Icon = d.icon;
            return (
              <RevealCard key={d.title} delay={idx * 70}>
                <article className="compass-card group h-full bg-white/[0.03] border border-white/10 hover:border-[#E8B94F]/40 rounded-xl p-6 sm:p-7 transition-all hover:bg-white/[0.05]">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex items-center justify-center h-12 w-12 shrink-0 rounded-md bg-[#E8B94F]/10 border border-[#E8B94F]/30">
                      <Icon className="h-5 w-5 text-[#E8B94F]" aria-hidden="true" />
                    </span>
                    <div className="flex-1">
                      <div className="font-subhead uppercase tracking-[0.16em] text-[10px] text-[#087F86]">
                        {d.tag}
                      </div>
                      <h3 className="mt-1 font-display text-2xl tracking-wide text-white">
                        {d.title}
                      </h3>
                      <p className="mt-3 font-body text-sm text-[#DCEFED]/80 leading-relaxed">
                        {d.body}
                      </p>
                    </div>
                  </div>
                </article>
              </RevealCard>
            );
          })}
        </div>

        {/* Verified disclaimer strip */}
        <div className="mt-10 flex items-start gap-3 rounded-lg border border-[#087F86]/30 bg-[#087F86]/[0.06] p-4 sm:p-5">
          <ShieldCheck className="h-5 w-5 text-[#087F86] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="font-body text-sm text-[#DCEFED]/85 leading-relaxed">
            <span className="font-semibold text-white">Verified disclaimer:</span>{" "}
            SindhuPath is a preparatory academy — not a DG Shipping-accredited
            pre-sea maritime college, not an RPSL recruitment agency. We do not
            guarantee selection, placement, sponsorship, or sea-time availability.
            We prepare cadets to earn those outcomes on merit.
          </p>
        </div>
      </div>
    </section>
  );
}
