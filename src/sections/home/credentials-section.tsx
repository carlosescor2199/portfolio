import Image from "next/image";
import { CERTIFICATIONS, EDUCATION } from "@/data/credentials";
import { SectionLabel } from "./section-label";

export function CredentialsSection() {
  return (
    <section id="credentials" className="relative scroll-mt-16 border-t border-line px-6 py-24 md:px-16 md:py-32">
      <SectionLabel index="05" label="Credentials" />
      <h2 className="mb-16 font-display text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">Certified</h2>

      <div className="grid gap-16 lg:grid-cols-[1fr_320px] lg:gap-20">
        <div className="grid gap-16 sm:grid-cols-2">
          <div>
            <p className="mb-6 font-mono text-xs tracking-[0.3em] text-circuit uppercase">Certifications</p>
            <ul className="flex flex-col gap-6">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.title} className="border-l-2 border-line pl-4">
                  <p className="font-medium text-foreground">{cert.title}</p>
                  <p className="mt-1 font-mono text-xs text-muted uppercase">
                    {cert.issuer} · {cert.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-6 font-mono text-xs tracking-[0.3em] text-circuit uppercase">Education</p>
            <ul className="flex flex-col gap-6">
              {EDUCATION.map((entry) => (
                <li key={entry.degree} className="border-l-2 border-line pl-4">
                  <p className="font-medium text-foreground">{entry.degree}</p>
                  <p className="mt-1 font-mono text-xs text-muted uppercase">
                    {entry.school} · {entry.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="group relative aspect-square w-full overflow-hidden border border-line bg-panel">
            <Image
              src="/media/model-macro.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 320px, 100vw"
              className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 ring-1 ring-line ring-inset" />
          </div>
          <p className="font-mono text-xs tracking-widest text-muted uppercase">Fig. 02 — Masterplan</p>
        </div>
      </div>
    </section>
  );
}
