import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { SectionLabel } from "./section-label";

export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-16 border-t border-line px-6 py-24 md:px-16 md:py-32">
      <SectionLabel index="01" label="About" />

      <div className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-16 lg:grid-cols-[340px_1fr]">
        <div className="flex flex-col gap-3">
          <div className="group relative aspect-square w-full overflow-hidden border border-line bg-panel">
            <Image
              src="/images/profile.png"
              alt="Carlos Escudero"
              fill
              sizes="(min-width: 768px) 340px, 100vw"
              className="object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-line ring-inset" />
          </div>
          <p className="font-mono text-xs tracking-widest text-muted uppercase">Fig. 01 — Operator</p>
        </div>

        <div className="flex flex-col justify-center gap-8">
          <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">About</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground/90">
            Hi! I&apos;m a Fullstack Software Engineer based in Sincelejo, Colombia. I have more than 5 years building
            APIs and robust applications — from electronic invoicing to AI-powered chat systems and LLM integration in
            production. I&apos;m proficient in React.js, Next.js, NestJS, Node.js, TypeScript, and AWS, with practical
            application of secure development (OWASP Top 10, Secure SDLC). I use AI tools like Claude Code to deliver
            high-quality software efficiently and mentor junior developers on their learning journey. I&apos;m also the
            founder and developer of two products: Primeventory and Flypzy.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/Resume_Carlos_Escudero_Updated.pdf"
              download
              className="inline-flex items-center gap-2 border border-foreground px-6 py-3 font-mono text-xs tracking-widest uppercase transition-colors hover:border-circuit hover:text-circuit"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume — EN
            </a>
            <a
              href="/Resume_Carlos_Escudero_ES.pdf"
              download
              className="inline-flex items-center gap-2 border border-foreground px-6 py-3 font-mono text-xs tracking-widest uppercase transition-colors hover:border-circuit hover:text-circuit"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              CV — ES
            </a>
            <a
              href="mailto:carlos.escudero.corpas@gmail.com"
              className="inline-flex items-center gap-2 bg-foreground px-6 py-3 font-mono text-xs tracking-widest text-background uppercase transition-colors hover:bg-circuit"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
