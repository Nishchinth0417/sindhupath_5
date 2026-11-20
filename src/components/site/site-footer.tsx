import Link from "next/link";
import { Linkedin, Instagram, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { LogoMark } from "./logo-mark";
import { SINDHUPATH_CONFIG } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#03232D] text-[#DCEFED]/80 border-t border-white/5">
      {/* Top gold hairline */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8B94F]/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid gap-10 lg:gap-12 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <LogoMark size={48} withWordmark variant="light" />
            <p className="mt-5 font-body text-sm leading-relaxed max-w-md">
              {SINDHUPATH_CONFIG.brandName} — merit-based Merchant Navy coaching
              mentored by active Master Mariners and Chief Engineers, engineered
              by a DNS graduate and a multidisciplinary technical team. Based in{" "}
              {SINDHUPATH_CONFIG.baseCity}.
            </p>
            <p className="mt-4 font-subhead uppercase tracking-[0.16em] text-[11px] text-[#E8B94F]">
              {SINDHUPATH_CONFIG.motto}
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={SINDHUPATH_CONFIG.admissionsWhatsApp} label="WhatsApp" external>
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </SocialLink>
              <SocialLink href={`mailto:${SINDHUPATH_CONFIG.admissionsEmail}`} label="Email">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </SocialLink>
              <SocialLink href={SINDHUPATH_CONFIG.linkedIn} label="LinkedIn" external>
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </SocialLink>
              <SocialLink href={SINDHUPATH_CONFIG.instagram} label="Instagram" external>
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </SocialLink>
            </div>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-3">
            <FooterHeading>Explore</FooterHeading>
            <ul className="space-y-2.5">
              <FooterLink href="#training">Training Modules</FooterLink>
              <FooterLink href="#difference">The SindhuPath Difference</FooterLink>
              <FooterLink href="#pathway">Cadet Preparation Pathway</FooterLink>
              <FooterLink href="#faq">Institutional FAQ</FooterLink>
              <FooterLink href="#enroll">Enroll</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-4">
            <FooterHeading>Contact</FooterHeading>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={SINDHUPATH_CONFIG.admissionsWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm hover:text-[#E8B94F] transition-colors"
                >
                  WhatsApp · {SINDHUPATH_CONFIG.admissionsPhone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SINDHUPATH_CONFIG.admissionsEmail}`}
                  className="font-body text-sm hover:text-[#E8B94F] transition-colors"
                >
                  {SINDHUPATH_CONFIG.admissionsEmail}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SINDHUPATH_CONFIG.admissionsEmailAlt}`}
                  className="font-body text-sm hover:text-[#E8B94F] transition-colors"
                >
                  {SINDHUPATH_CONFIG.admissionsEmailAlt}
                </a>
              </li>
              <li className="font-body text-sm text-[#64748B]">{SINDHUPATH_CONFIG.baseCity}</li>
            </ul>

            <FooterHeading className="mt-7">Academy Platform</FooterHeading>
            <a
              href={SINDHUPATH_CONFIG.platformUrl}
              className="cta-link inline-flex items-center gap-1.5 font-subhead uppercase tracking-[0.12em] text-sm text-[#E8B94F] hover:text-[#FFE8A8] transition-colors"
            >
              merchant-navy-academy.sindhupath.com
              <ExternalLink className="h-3.5 w-3.5 cta-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Disclaimers / Legal */}
        <div className="mt-12 pt-6 border-t border-white/10 space-y-3">
          <p className="font-body text-xs text-[#64748B] leading-relaxed">
            <span className="font-semibold text-[#9FB9B6]">Disclaimers.</span>{" "}
            SindhuPath is an educational and mentorship preparatory academy. It is
            <strong className="text-[#9FB9B6]"> not</strong> a DG Shipping-accredited
            pre-sea maritime college, <strong className="text-[#9FB9B6]"> not</strong> a
            recruitment or manning agency, and does not hold or claim an RPSL
            license. SindhuPath does not guarantee selection, placement,
            sponsorship, or sea-time availability. All company selections are
            won by candidates independently on merit.
          </p>
          <p className="font-body text-xs text-[#64748B] leading-relaxed">
            <span className="font-semibold text-[#9FB9B6]">Trademarks.</span>{" "}
            References to shipping lines (Maersk, MSC, Fleet Management, Synergy,
            Great Eastern, Anglo-Eastern) are made solely for the purpose of
            fleet-specific interview preparation context and do not imply any
            endorsement, partnership, or affiliation.
          </p>
        </div>

        {/* Bottom strip */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-body text-xs text-[#64748B]">
            &copy; {year} {SINDHUPATH_CONFIG.brandName}. All rights reserved.
          </p>
          <p className="font-subhead uppercase tracking-[0.14em] text-[10px] text-[#087F86]">
            {SINDHUPATH_CONFIG.subhead}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`font-subhead uppercase tracking-[0.18em] text-[11px] text-[#087F86] mb-4 ${className}`}>
      {children}
    </h3>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="font-body text-sm hover:text-[#E8B94F] transition-colors">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/15 text-[#DCEFED] hover:text-[#071322] hover:bg-[#E8B94F] hover:border-[#E8B94F] transition-colors"
    >
      {children}
    </a>
  );
}
