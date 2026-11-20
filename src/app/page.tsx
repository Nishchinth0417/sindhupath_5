import { SiteHeader } from "@/components/site/site-header";
import { HeroSection } from "@/components/site/hero-section";
import { TrainingModules } from "@/components/site/training-modules";
import { WhyUs } from "@/components/site/why-us";
import { CadetPathway } from "@/components/site/cadet-pathway";
import { FaqSection } from "@/components/site/faq-section";
import { ConversionCta } from "@/components/site/conversion-cta";
import { SiteFooter } from "@/components/site/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F9FC]">
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-[#071322] focus:text-[#E8B94F] focus:px-4 focus:py-2 focus:rounded-md focus:font-subhead focus:uppercase focus:text-xs focus:tracking-[0.14em]"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        <HeroSection />
        <TrainingModules />
        <WhyUs />
        <CadetPathway />
        <FaqSection />
        <ConversionCta />
      </main>

      <SiteFooter />
    </div>
  );
}
