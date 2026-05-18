import { Hero } from "@/components/Hero";
import { StrategySection } from "@/components/StrategySection";
import { ClarityBanner } from "@/components/ClarityBanner";
import { CaseStudies } from "@/components/CaseStudies";
import { WhatYouGet } from "@/components/WhatYouGet";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { AboutSkills } from "@/components/AboutSkills";
import { CtaSection } from "@/components/CtaSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <StrategySection />
      <ClarityBanner />
      <WhatYouGet />
      <CaseStudies />
      <ProjectsGallery />
      <AboutSkills />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
