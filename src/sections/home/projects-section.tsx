import { GithubIcon } from "@/components/common";
import { PRODUCTS, PROJECTS } from "@/data/projects";
import { SectionLabel } from "./section-label";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative scroll-mt-16 border-t border-line px-6 py-24 md:px-16 md:py-32">
      <SectionLabel index="04" label="Projects" />
      <h2 className="mb-16 font-display text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">Shipped</h2>

      <p className="mb-4 font-mono text-xs tracking-[0.3em] text-circuit uppercase">
        Products — Founder &amp; Developer
      </p>
      <div className="mb-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
        {PRODUCTS.map((product) => (
          <a
            key={product.title}
            href={product.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between gap-8 bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-panel md:p-10"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-widest text-muted uppercase">{product.tagline}</span>
                <span className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-circuit uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-circuit" aria-hidden="true" />
                  Live
                </span>
              </div>
              <h3 className="font-display text-3xl font-bold uppercase transition-colors group-hover:text-circuit sm:text-4xl">
                {product.title}
              </h3>
              <p className="max-w-md text-sm text-foreground/75">{product.description}</p>
            </div>
            <span className="font-mono text-xs tracking-widest text-muted uppercase transition-colors group-hover:text-circuit">
              {product.url.replace("https://", "")} ↗
            </span>
          </a>
        ))}
      </div>

      <p className="mb-4 font-mono text-xs tracking-[0.3em] text-muted uppercase">Selected work — GitHub</p>
      <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <a
            key={project.title}
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between gap-6 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-panel"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
                <GithubIcon
                  className="h-4 w-4 text-muted transition-colors group-hover:text-circuit"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-display text-xl font-semibold uppercase transition-colors group-hover:text-circuit">
                {project.title}
              </h3>
              <p className="text-sm text-foreground/75">{project.description}</p>
            </div>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] tracking-wide text-muted uppercase">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>

      <a
        href="https://github.com/carlosescor2199"
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-flex items-center gap-2 border border-foreground px-6 py-3 font-mono text-xs tracking-widest uppercase transition-colors hover:border-circuit hover:text-circuit"
      >
        <GithubIcon className="h-4 w-4" aria-hidden="true" />
        View more on GitHub
      </a>
    </section>
  );
}
