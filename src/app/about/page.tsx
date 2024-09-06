"use client";

import { EducationSection, ExperienceSection, SkillsSection } from "@/sections/about";
import { cn } from "@/utils/cn";

export default function page() {
  return (
    <main className={cn("flex flex-1 flex-col px-6 py-10", "lg:px-24 lg:py-12")}>
      <h1 className="text-center text-2xl font-bold lg:text-5xl">Learn more about me</h1>
      <SkillsSection />
      <hr />
      <ExperienceSection />
      <hr />
      <EducationSection />
    </main>
  );
}
