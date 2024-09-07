"use client";

import { ContactMeButton } from "@/components/common";
import {
  EducationSection,
  ExperienceSection,
  PresentationSection,
  SkillsSection,
  SoftwareSection,
  TechnologySection,
} from "@/sections/about";
import { cn } from "@/utils/cn";

export default function page() {
  return (
    <>
      <main className={cn("flex flex-1 flex-col px-6 py-10", "lg:px-24 lg:py-12")}>
        <PresentationSection />
        <hr />
        <SkillsSection />
        <hr />
        <TechnologySection />
        <hr />
        <ExperienceSection />
        <hr />
        <EducationSection />
        <hr />
        <SoftwareSection />
      </main>
      <ContactMeButton />
    </>
  );
}
