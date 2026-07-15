import { Download, Mail } from "lucide-react";
import { SectionLabel } from "./section-label";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="relative scroll-mt-16 border-t border-line px-6 py-24 md:px-16 md:py-32">
      <SectionLabel index="06" label="Contact" />

      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="flex flex-col items-start">
          <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
            Let&apos;s build something.
          </h2>

          <a
            href="mailto:carlos.escudero.corpas@gmail.com"
            className="mt-8 inline-block max-w-full font-mono text-xl font-medium break-words text-foreground transition-colors hover:text-circuit sm:text-2xl lg:text-3xl"
          >
            carlos.escudero.corpas
            <wbr />
            @gmail.com
          </a>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="mailto:carlos.escudero.corpas@gmail.com"
              className="inline-flex items-center gap-2 bg-foreground px-6 py-3 font-mono text-xs tracking-widest text-background uppercase transition-colors hover:bg-circuit"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact me
            </a>
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
          </div>
        </div>

        <div className="border border-line bg-panel p-8 md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
