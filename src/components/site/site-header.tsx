"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, ArrowUpRight } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { LogoMark } from "./logo-mark";
import { SINDHUPATH_CONFIG } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "#training", label: "Training" },
  { href: "#difference", label: "Difference" },
  { href: "#pathway", label: "Pathway" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#071322]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
          : "bg-gradient-to-b from-[#071322]/80 to-transparent border-b border-transparent"
      }`}
    >
      {/* Subtle gold hairline at very top */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#E8B94F]/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / wordmark */}
          <Link
            href="#top"
            aria-label="SindhuPath Merchant Navy Academy — home"
            className="flex items-center transition-opacity hover:opacity-90"
          >
            <LogoMark size={40} withWordmark variant="light" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-subhead uppercase tracking-[0.14em] text-sm text-[#DCEFED]/85 hover:text-white px-4 py-2 rounded-md transition-colors hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SINDHUPATH_CONFIG.admissionsWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-subhead uppercase tracking-[0.12em] text-[#E8B94F] hover:text-[#FFE8A8] px-3 py-2 rounded-md border border-[#E8B94F]/40 hover:border-[#E8B94F] transition-colors min-h-[44px]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span className="hidden lg:inline">WhatsApp</span>
              <span className="lg:hidden">Help</span>
            </a>
            <a
              href={SINDHUPATH_CONFIG.platformUrl}
              className="cta-link inline-flex items-center gap-1.5 text-sm font-subhead uppercase tracking-[0.12em] text-[#071322] bg-[#E8B94F] hover:bg-[#FFE8A8] px-5 py-2.5 rounded-md font-semibold transition-colors min-h-[44px] shadow-[0_2px_12px_rgba(232,185,79,0.35)]"
            >
              Platform
              <ArrowUpRight className="h-4 w-4 cta-arrow" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile sheet trigger */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="inline-flex items-center justify-center h-11 w-11 rounded-md text-[#DCEFED] hover:bg-white/10 transition-colors"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[88vw] max-w-sm bg-[#071322] border-l border-white/10 p-0">
                <SheetTitle className="sr-only">SindhuPath navigation menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-5 border-b border-white/10">
                    <LogoMark size={36} withWordmark variant="light" />
                    <SheetClose asChild>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center h-11 w-11 rounded-md text-[#DCEFED] hover:bg-white/10"
                        aria-label="Close navigation menu"
                      >
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col p-4 gap-1" aria-label="Mobile primary">
                    {NAV_LINKS.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="font-subhead uppercase tracking-[0.14em] text-base text-[#DCEFED] hover:text-white px-4 py-3.5 rounded-md hover:bg-white/5 min-h-[44px] flex items-center"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto p-5 border-t border-white/10 flex flex-col gap-3">
                    <a
                      href={SINDHUPATH_CONFIG.admissionsWhatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-sm font-subhead uppercase tracking-[0.12em] text-[#E8B94F] px-4 py-3 rounded-md border border-[#E8B94F]/40 hover:bg-[#E8B94F]/10 min-h-[44px]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      WhatsApp {SINDHUPATH_CONFIG.admissionsPhone}
                    </a>
                    <a
                      href={SINDHUPATH_CONFIG.platformUrl}
                      className="inline-flex items-center justify-center gap-1.5 text-sm font-subhead uppercase tracking-[0.12em] text-[#071322] bg-[#E8B94F] hover:bg-[#FFE8A8] px-5 py-3 rounded-md font-semibold min-h-[44px]"
                    >
                      Launch Platform
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
