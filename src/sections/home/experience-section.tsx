import { EXPERIENCE } from "@/data/experience";
import { SectionLabel } from "./section-label";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative scroll-mt-16 border-t border-line px-6 py-24 md:px-16 md:py-32">
      <SectionLabel index="02" label="Experience" />
      <h2 className="mb-16 font-display text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">Build Log</h2>

      <ol className="relative border-l border-line">
        {EXPERIENCE.map((entry) => (
          <li key={`${entry.company}-${entry.title}`} className="mb-16 ml-8 last:mb-0 md:ml-12">
            <span aria-hidden="true" className="absolute -left-[5px] mt-2 h-2.5 w-2.5 rounded-full bg-circuit" />
            <p className="font-mono text-xs tracking-[0.25em] text-circuit uppercase">{entry.period}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold uppercase sm:text-3xl">
              {entry.title} <span className="text-muted">— {entry.company}</span>
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-foreground/80">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
