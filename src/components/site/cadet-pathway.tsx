import { ClipboardCheck, BookOpen, MonitorSmartphone, Users, Anchor, ArrowUpRight } from "lucide-react";
import { ReadinessStack } from "./readiness-stack";
import { RevealCard } from "./reveal-card";
import { SINDHUPATH_CONFIG } from "@/lib/site-config";

const STEPS = [
  {
    n: "01",
    icon: ClipboardCheck,
    title: "Eligibility & Physical Criteria Review",
    body: "Verify 10+2 PCM marks, age window, and DG Shipping medical standards — including unaided 6/6 distance vision, color-vision screening, and BMI — using the 14-parameter eligibility framework.",
  },
  {
    n: "02",
    icon: BookOpen,
    title: "Intensive PCM & Maritime Syllabus Coaching",
    body: "Complete IMU-CET syllabus across Mathematics, Physics, Chemistry, English, Aptitude, Reasoning, Maritime Affairs and General Knowledge.",
  },
  {
    n: "03",
    icon: MonitorSmartphone,
    title: "CBT Timed Exam Simulations",
    body: "Computer-Based Test practice replicating official IMU-CET exam software, timed conditions, and negative-marking discipline — with analytics flagging weak areas.",
  },
  {
    n: "04",
    icon: Users,
    title: "1-on-1 Sponsorship Mock Viva with Sailing Captains",
    body: "Live interview simulations conducted by active Master Mariners and Chief Engineers. Fleet-specific profiles, technical questioning, psychometric screening, and officer etiquette.",
  },
  {
    n: "05",
    icon: Anchor,
    title: "Board Selection & Academy Induction",
    body: "When the candidate clears company selection on merit, the academy platform supports induction paperwork, medical file readiness, and pre-sea logistics guidance.",
  },
];

export function CadetPathway() {
  return (
    <section
      id="pathway"
      className="relative bg-[#F7F9FC] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#087F86]/30 bg-[#087F86]/5 px-3.5 py-1.5">
            <span className="font-subhead uppercase tracking-[0.22em] text-[11px] text-[#087F86]">
              Cadet Preparation Pathway
            </span>
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-[0.01em] text-[#0B2345]">
            From Aspiration to Induction — in Five Disciplined Steps
          </h2>
          <p className="mt-4 font-body text-base sm:text-lg text-[#424751] max-w-2xl leading-relaxed">
            A transparent, mentor-driven progression built around verified
            maritime selection realities — not a generic coaching funnel.
          </p>
        </div>

        {/* Two-column layout: isometric stack + steps */}
        <div className="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Isometric readiness stack visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <RevealCard>
              <div className="rounded-2xl bg-gradient-to-br from-[#0B2345] via-[#071322] to-[#03232D] p-5 sm:p-6 border border-[#087F86]/20 shadow-[0_10px_40px_rgba(11,35,69,0.15)]">
                <div className="font-subhead uppercase tracking-[0.18em] text-[10px] text-[#087F86] mb-2">
                  Isometric Readiness Stack
                </div>
                <div className="font-display text-2xl text-white tracking-wide">
                  Four Tiers · One Destination
                </div>
                <ReadinessStack className="mt-4 w-full h-auto" />
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="font-body text-xs text-[#DCEFED]/70">
                    Foundation → Diagnostics → Command → Destination
                  </div>
                  <a
                    href={SINDHUPATH_CONFIG.platformUrl}
                    className="cta-link inline-flex items-center gap-1 font-subhead uppercase tracking-[0.12em] text-[11px] text-[#E8B94F] hover:text-[#FFE8A8]"
                  >
                    Begin
                    <ArrowUpRight className="h-3.5 w-3.5 cta-arrow" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </RevealCard>
          </div>

          {/* Steps */}
          <div className="lg:col-span-7">
            <ol className="relative space-y-4 sm:space-y-5">
              {/* Vertical guide line */}
              <div
                aria-hidden="true"
                className="absolute left-[27px] sm:left-[31px] top-4 bottom-4 w-px bg-gradient-to-b from-[#087F86]/40 via-[#087F86]/30 to-[#E8B94F]/40"
              />
              {STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <RevealCard key={step.n} delay={idx * 60}>
                    <li className="relative flex items-start gap-4 sm:gap-5 group">
                      {/* Number badge */}
                      <div className="relative z-10 flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-full bg-white border-2 border-[#0B2345]/15 group-hover:border-[#E8B94F] transition-colors shadow-[0_4px_12px_rgba(11,35,69,0.08)]">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#0B2345] group-hover:text-[#7A560D] transition-colors" aria-hidden="true" />
                        <span className="absolute -top-2 -right-2 inline-flex items-center justify-center min-w-7 h-7 px-1.5 rounded-full bg-[#0B2345] text-[#E8B94F] font-subhead text-[10px] font-semibold tracking-wider">
                          {step.n}
                        </span>
                      </div>
                      {/* Body */}
                      <div className="flex-1 bg-white border border-[#0B2345]/10 rounded-xl p-5 sm:p-6 group-hover:border-[#E8B94F]/40 group-hover:shadow-[0_6px_24px_rgba(11,35,69,0.06)] transition-all">
                        <h3 className="font-display text-xl sm:text-2xl tracking-wide text-[#0B2345] leading-tight">
                          {step.title}
                        </h3>
                        <p className="mt-2 font-body text-sm text-[#424751] leading-relaxed">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  </RevealCard>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
