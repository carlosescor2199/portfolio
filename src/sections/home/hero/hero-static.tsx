import Image from "next/image";
import { framePath, TOTAL_FRAMES } from "./constants";

export function HeroStatic() {
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-background px-6 py-10 md:px-16 md:py-14">
      <Image src={framePath(TOTAL_FRAMES)} alt="" fill priority sizes="100vw" className="object-cover opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />

      <p className="relative font-mono text-xs tracking-[0.3em] text-circuit uppercase">Sincelejo, Colombia</p>

      <div className="relative my-auto">
        <h1 className="font-display text-[16vw] leading-[0.84] font-black tracking-tight uppercase sm:text-[12vw] lg:text-[9vw]">
          Carlos
          <br />
          Escudero
        </h1>
        <p className="mt-5 max-w-xl font-mono text-sm text-muted sm:text-base">
          Fullstack Software Engineer — AI Integration &amp; Secure Development
        </p>
      </div>

      <p className="relative font-mono text-xs tracking-widest text-muted uppercase">
        Foundations / Modules / Connections / Skyline — scalable solutions, built with care until results light up.
      </p>
    </section>
  );
}
