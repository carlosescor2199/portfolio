import { SKILLS } from "@/data/skills";
import { TECHNOLOGIES } from "@/data/technologies";
import { SectionLabel } from "./section-label";

export function SkillsSection() {
  return (
    <section id="skills" className="relative scroll-mt-16 border-t border-line px-6 py-24 md:px-16 md:py-32">
      <SectionLabel index="03" label="Skills" />
      <h2 className="mb-16 font-display text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">Under the Hood</h2>

      <div className="mb-20 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((skill) => (
          <div key={skill.title} className="flex flex-col gap-2 bg-panel p-6">
            <h3 className="font-mono text-xs tracking-[0.2em] text-circuit uppercase">{skill.title}</h3>
            <p className="text-sm text-foreground/80">{skill.description}</p>
          </div>
        ))}
      </div>

      <p className="mb-8 font-mono text-xs tracking-[0.3em] text-muted uppercase">Toolchain</p>
      <div className="grid grid-cols-4 gap-x-6 gap-y-10 lg:grid-cols-8">
        {TECHNOLOGIES.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-3 text-center">
            <div className="text-foreground/70 grayscale transition-all duration-300 hover:text-circuit hover:grayscale-0">
              {tech.icon}
            </div>
            <span className="font-mono text-[11px] tracking-wide text-muted uppercase">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
