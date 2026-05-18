import { Hero } from "@/components/Hero";
import { AboutSkills } from "@/components/AboutSkills";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { CaseStudies } from "@/components/CaseStudies";
import { StrategySection } from "@/components/StrategySection";
import { ClarityBanner } from "@/components/ClarityBanner";
import { WhatYouGet } from "@/components/WhatYouGet";
import { CtaSection } from "@/components/CtaSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSkills />
      <ProjectsGallery />
      <CaseStudies />
      <StrategySection />
      <ClarityBanner />
      <WhatYouGet />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
