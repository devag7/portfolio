import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WorkSection } from "@/components/WorkSection";
import { ProjectsGallery } from "@/components/ProjectsGallery";
import { AboutSkills } from "@/components/AboutSkills";
import { CtaSection } from "@/components/CtaSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div id="top-sentinel" aria-hidden="true" />
      <main id="main">
        <Hero />
        <ExperienceSection />
        <WorkSection />
        <ProjectsGallery />
        <AboutSkills />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
