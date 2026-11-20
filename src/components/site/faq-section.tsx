"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SINDHUPATH_CONFIG } from "@/lib/site-config";
import { RevealCard } from "./reveal-card";

const FAQS = [
  {
    q: "What is IMU-CET and who should take it?",
    a: "The Indian Maritime University Common Entrance Test (IMU-CET) is the national-level entrance examination conducted by IMU for admission into undergraduate maritime programs — including B.Sc. Nautical Science, B.Tech Marine Engineering, and Diploma in Nautical Science (DNS). It is intended for serious aspirants who have completed 10+2 with Physics, Chemistry, and Mathematics, and who intend to pursue a career as a deck or engineering officer in the Merchant Navy. SindhuPath prepares candidates for the full syllabus — Mathematics, Physics, Chemistry, English, Aptitude & Reasoning, and Maritime Affairs & General Knowledge.",
  },
  {
    q: "What does DNS Sponsorship mean in the Merchant Navy?",
    a: "DNS Sponsorship refers to a shipping company formally sponsoring a candidate's Diploma in Nautical Science seat at an IMU-affiliated maritime college, typically as a pre-sea cadet who will then serve that company post-completion. Sponsorship selection involves technical viva, aptitude screening, medical fitness, and personal interview rounds conducted by the company itself. SindhuPath mentors candidates specifically for these sponsorship interviews — including fleet-specific preparation for shipping lines such as Maersk, MSC, Fleet Management, Synergy, Great Eastern, and Anglo-Eastern.",
  },
  {
    q: "What are the mandatory educational and medical standards?",
    a: "Educationally, candidates need 10+2 with Physics, Chemistry, and Mathematics (PCM) with marks meeting the IMU-CET eligibility threshold, and must satisfy the age window set by DG Shipping. Medically, candidates must meet DG Shipping standards — including unaided 6/6 distance vision in each eye, absence of color blindness, normal BMI, and general physical fitness. SindhuPath's free 14-parameter eligibility framework evaluates these criteria before a candidate commits to the journey, so that aspirants and their families understand the path clearly.",
  },
  {
    q: "How does SindhuPath mentor candidates across India?",
    a: "SindhuPath operates from Bengaluru with a pan-India cadet reach. Mentorship is delivered through structured online coaching modules, live 1-on-1 viva simulations with active Master Mariners and Chief Engineers serving on international fleets, and Computer-Based Test (CBT) mock examinations that replicate the official IMU-CET exam software. The companion platform at merchant-navy-academy.sindhupath.com hosts learning resources, diagnostics, and mock tests — while the admissions helpline on WhatsApp (" + SINDHUPATH_CONFIG.admissionsPhone + ") provides one-on-one counseling.",
  },
  {
    q: "Does SindhuPath guarantee placement or sponsorship?",
    a: "No. SindhuPath is explicitly a preparatory academy — not a recruitment or manning agency, and not a DG Shipping-accredited pre-sea maritime college. It does not sell jobs, seat sponsorships, or sea-time, and does not guarantee selection, placement, sponsorship, or sea-time availability. The academy's role is to prepare candidates to win independent company selections on the basis of merit. Any promise of guaranteed placement by any coaching provider should be treated with caution.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative bg-[#F7F9FC] py-20 sm:py-24 lg:py-28 border-t border-[#0B2345]/8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Header column */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#087F86]/30 bg-[#087F86]/5 px-3.5 py-1.5">
              <span className="font-subhead uppercase tracking-[0.22em] text-[11px] text-[#087F86]">
                Institutional FAQ
              </span>
            </div>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-[0.95] tracking-[0.01em] text-[#0B2345]">
              Answers From the Bridge
            </h2>
            <p className="mt-4 font-body text-base text-[#424751] leading-relaxed">
              Clear, verified answers to the questions serious aspirants and
              their families ask before choosing a maritime preparatory academy.
            </p>

            <div className="mt-8 rounded-xl bg-[#0B2345] p-6 text-white">
              <div className="font-subhead uppercase tracking-[0.16em] text-[10px] text-[#087F86]">
                Still have questions?
              </div>
              <div className="mt-2 font-display text-2xl tracking-wide">
                Speak with a counselor
              </div>
              <p className="mt-2 font-body text-sm text-[#DCEFED]/80">
                Reach the admissions helpline directly — we walk families through
                eligibility, syllabus, and mentorship structure honestly.
              </p>
              <a
                href={SINDHUPATH_CONFIG.admissionsWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-link mt-4 inline-flex items-center gap-2 font-subhead uppercase tracking-[0.12em] text-sm text-[#071322] bg-[#E8B94F] hover:bg-[#FFE8A8] px-5 py-3 rounded-md font-semibold min-h-[44px] transition-colors"
              >
                WhatsApp {SINDHUPATH_CONFIG.admissionsPhone}
              </a>
            </div>
          </div>

          {/* Accordion column */}
          <div className="lg:col-span-8">
            <RevealCard>
              <Accordion type="single" collapsible defaultValue="faq-0" className="w-full">
                {FAQS.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="border-b border-[#0B2345]/12 first:border-t"
                  >
                    <AccordionTrigger className="text-left py-5 sm:py-6 hover:no-underline group">
                      <span className="flex items-start gap-3 sm:gap-4">
                        <span className="font-subhead text-[#087F86] text-sm tracking-[0.12em] mt-0.5 shrink-0">
                          Q{String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-xl sm:text-2xl tracking-wide text-[#0B2345] group-hover:text-[#7A560D] transition-colors leading-tight">
                          {item.q}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 sm:pb-6 pl-9 sm:pl-12">
                      <p className="font-body text-sm sm:text-[15px] text-[#424751] leading-relaxed">
                        {item.a}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </RevealCard>
          </div>
        </div>
      </div>
    </section>
  );
}
