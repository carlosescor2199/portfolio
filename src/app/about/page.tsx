"use client";

import { EducationSection, ExperienceSection } from "@/sections/about";
import { cn } from "@/utils/cn";

export default function page() {
  return (
    <main className={cn("flex flex-1 flex-col px-24 py-12")}>
      <h1 className="text-center text-5xl font-bold">Learn more about me</h1>
      <ExperienceSection />
      <hr />
      <EducationSection />
    </main>
  );
}
