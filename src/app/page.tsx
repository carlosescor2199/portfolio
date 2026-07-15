import { AmbientVideo } from "@/components/common";
import { AboutSection } from "@/sections/home/about-section";
import { ContactSection } from "@/sections/home/contact-section";
import { CredentialsSection } from "@/sections/home/credentials-section";
import { ExperienceSection } from "@/sections/home/experience-section";
import { HeroSection } from "@/sections/home/hero/hero-section";
import { ProjectsSection } from "@/sections/home/projects-section";
import { SkillsSection } from "@/sections/home/skills-section";

export default function Home() {
  return (
    <main id="top" className="flex flex-1 flex-col">
      <HeroSection />

      <div className="relative">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <AmbientVideo className="opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/25 to-background/80" />
        </div>

        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CredentialsSection />
        <ContactSection />
      </div>
    </main>
  );
}
