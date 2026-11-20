import { BookOpen, Compass, Users, MonitorSmartphone, ArrowUpRight, MessageCircle } from "lucide-react";
import { SINDHUPATH_CONFIG } from "@/lib/site-config";
import { RevealCard } from "./reveal-card";

type Module = {
  id: string;
  tier: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  duration: string;
  scope: string;
  topics: string[];
  cta: { label: string; href: string; external?: boolean };
};

const MODULES: Module[] = [
  {
    id: "imu-cet",
    tier: "01",
    title: "IMU-CET Comprehensive Coaching",
    icon: BookOpen,
    duration: "Full syllabus · 6–10 months",
    scope: "Complete mastery for the Indian Maritime University Common Entrance Test.",
    topics: [
      "Mathematics & Physics",
      "Chemistry fundamentals",
      "English Grammar & Aptitude",
      "Logical Reasoning",
      "Maritime Affairs & GK",
    ],
    cta: { label: "Counsel on WhatsApp", href: SINDHUPATH_CONFIG.admissionsWhatsApp, external: true },
  },
  {
    id: "dns-sponsorship",
    tier: "02",
    title: "DNS Sponsorship Preparation",
    icon: Compass,
    duration: "Technical viva · Modular",
    scope: "Dedicated preparation for Diploma in Nautical Science sponsorships with leading global shipping lines.",
    topics: [
      "Technical nautical viva",
      "Shipboard basics",
      "Fleet intelligence briefings",
      "Deck seamanship fundamentals",
    ],
    cta: { label: "Counsel on WhatsApp", href: SINDHUPATH_CONFIG.admissionsWhatsApp, external: true },
  },
  {
    id: "viva-mentoring",
    tier: "03",
    title: "Sponsorship Interviews & 1-on-1 Viva",
    icon: Users,
    duration: "1-on-1 simulations",
    scope: "Live interview simulations with active Captains and Chief Engineers serving on international fleets.",
    topics: [
      "Fleet-specific profiles (Maersk, MSC, FLEET, Synergy, G E, Anglo-Eastern)",
      "Psychometric screening",
      "Officer etiquette & grooming",
      "Personal interview technique",
    ],
    cta: { label: "Counsel on WhatsApp", href: SINDHUPATH_CONFIG.admissionsWhatsApp, external: true },
  },
  {
    id: "cbt-mocks",
    tier: "04",
    title: "CBT Mock Examination Series & Diagnostics",
    icon: MonitorSmartphone,
    duration: "Timed · Performance analytics",
    scope: "Computer-Based Test simulations replicating official IMU-CET exam software, timed conditions and negative marking.",
    topics: [
      "Official IMU-CET software clone",
      "Timed test conditions",
      "Negative marking discipline",
      "Performance analytics & weak-area flags",
    ],
    cta: { label: "Open Platform", href: SINDHUPATH_CONFIG.platformUrl },
  },
];

export function TrainingModules() {
  return (
    <section
      id="training"
      className="relative bg-[#F7F9FC] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#087F86]/30 bg-[#087F86]/5 px-3.5 py-1.5">
            <span className="font-subhead uppercase tracking-[0.22em] text-[11px] text-[#087F86]">
              Core Training Modules
            </span>
          </div>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-[0.01em] text-[#0B2345]">
            Four Verified Pathways to the Deck
          </h2>
          <p className="mt-4 font-body text-base sm:text-lg text-[#424751] max-w-2xl leading-relaxed">
            Every SindhuPath program is engineered around merit, current shipping
            fleet realities, and authentic maritime discipline — not commercial
            guesswork.
          </p>
        </div>

        {/* Module cards grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {MODULES.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <RevealCard key={mod.id} delay={idx * 80}>
                <article className="compass-card group h-full flex flex-col bg-white border border-[#0B2345]/10 rounded-xl overflow-hidden hover:border-[#E8B94F]/50 hover:shadow-[0_8px_30px_rgba(11,35,69,0.08)] transition-all">
                  {/* Top tier strip */}
                  <div className="relative bg-[#0B2345] px-5 py-4 border-b border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="font-subhead uppercase tracking-[0.22em] text-[10px] text-[#087F86]">
                        Tier {mod.tier}
                      </span>
                      <span className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/5 border border-[#E8B94F]/30">
                        <Icon className="h-4.5 w-4.5 text-[#E8B94F]" aria-hidden="true" />
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex-1 flex flex-col p-5">
                    <h3 className="font-display text-2xl leading-tight tracking-wide text-[#0B2345]">
                      {mod.title}
                    </h3>
                    <p className="mt-2 font-body text-sm text-[#64748B] leading-relaxed">
                      {mod.scope}
                    </p>

                    <div className="mt-4 font-subhead uppercase tracking-[0.14em] text-[10px] text-[#7A560D]">
                      {mod.duration}
                    </div>

                    <ul className="mt-3 space-y-1.5 flex-1">
                      {mod.topics.map((t) => (
                        <li key={t} className="flex items-start gap-2 font-body text-[13px] text-[#1A1A1A]">
                          <span aria-hidden="true" className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#087F86] shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href={mod.cta.href}
                      target={mod.cta.external ? "_blank" : undefined}
                      rel={mod.cta.external ? "noopener noreferrer" : undefined}
                      className="cta-link mt-5 inline-flex items-center justify-between gap-2 text-sm font-subhead uppercase tracking-[0.12em] text-[#0B2345] hover:text-[#7A560D] border-t border-[#0B2345]/10 pt-3.5 group/cta"
                    >
                      <span className="flex items-center gap-2">
                        {mod.cta.external && <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />}
                        {mod.cta.label}
                      </span>
                      <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </RevealCard>
            );
          })}
        </div>

        {/* Eligibility checker strip — supporting tool */}
        <div className="mt-10 rounded-xl border border-[#087F86]/20 bg-gradient-to-r from-[#DCEFED]/40 via-white to-[#DCEFED]/40 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <div className="flex-1">
            <div className="font-subhead uppercase tracking-[0.16em] text-[11px] text-[#087F86]">
              Supporting Tool · Free
            </div>
            <h3 className="mt-1 font-display text-2xl tracking-wide text-[#0B2345]">
              Merchant Navy Eligibility Check
            </h3>
            <p className="mt-1 font-body text-sm text-[#424751]">
              Evaluate 10+2 PCM marks, age limits, and DG Shipping medical
              standards (unaided 6/6 vision, absence of color blindness, BMI)
              before committing to the journey.
            </p>
          </div>
          <a
            href={SINDHUPATH_CONFIG.platformUrl}
            className="cta-link inline-flex items-center gap-2 font-subhead uppercase tracking-[0.12em] text-sm text-white bg-[#0B2345] hover:bg-[#062F3D] px-6 py-3.5 rounded-md min-h-[48px] transition-colors shrink-0"
          >
            Check Eligibility
            <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
