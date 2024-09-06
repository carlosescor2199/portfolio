"use client";

import { ContactMeButton } from "@/components/common";
import { EducationSection, ExperienceSection, PresentationSection, SkillsSection } from "@/sections/about";
import { cn } from "@/utils/cn";

export default function page() {
  return (
    <>
      <main className={cn("flex flex-1 flex-col px-6 py-10", "lg:px-24 lg:py-12")}>
        <PresentationSection />
        <SkillsSection />
        <hr />
        <ExperienceSection />
        <hr />
        <EducationSection />
      </main>
      <ContactMeButton />
    </>
  );
}
