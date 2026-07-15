"use client";

import { useRef } from "react";
import { useMotionValueEvent, type MotionValue } from "framer-motion";

type Band = [number, number, number, number];

const ANNOTATIONS: { code: string; label: string; text: string; band: Band; holdToEnd?: boolean }[] = [
  {
    code: "01",
    label: "FOUNDATIONS",
    text: "Scalable solutions, engineered from the ground up.",
    band: [0.16, 0.24, 0.34, 0.4],
  },
  {
    code: "02",
    label: "MODULES",
    text: "Leading teams — every skill placed where it excels.",
    band: [0.42, 0.48, 0.58, 0.64],
  },
  {
    code: "03",
    label: "CONNECTIONS",
    text: "Listening first: every viewpoint shapes the build.",
    band: [0.66, 0.72, 0.82, 0.88],
  },
  {
    code: "04",
    label: "SKYLINE",
    text: "Meticulous to the last detail, until results light up.",
    band: [0.9, 0.95, 1, 1],
    holdToEnd: true,
  },
];

function ramp(progress: number, from: number, to: number) {
  if (to === from) return progress >= to ? 1 : 0;
  return Math.min(1, Math.max(0, (progress - from) / (to - from)));
}

function bandOpacity(progress: number, [inStart, inEnd, outStart, outEnd]: Band, holdToEnd?: boolean) {
  const rise = ramp(progress, inStart, inEnd);
  if (holdToEnd) return rise;
  return Math.min(rise, 1 - ramp(progress, outStart, outEnd));
}

// Styles are written imperatively from a single scroll-driven writer instead of
// motion-component style bindings: a second animation source on the same
// property (WAAPI) leaves the overlay stuck at stale opacities on fast scrolls.
export function HeroOverlay({ progress }: { progress: MotionValue<number> }) {
  const introRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const annotationRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useMotionValueEvent(progress, "change", (value) => {
    const intro = introRef.current;
    if (intro) {
      const t = ramp(value, 0, 0.12);
      intro.style.opacity = String(1 - t);
      intro.style.transform = `translateY(${-32 * t}px)`;
    }
    const indicator = indicatorRef.current;
    if (indicator) {
      indicator.style.opacity = String(1 - ramp(value, 0, 0.06));
    }
    ANNOTATIONS.forEach((annotation, index) => {
      const el = annotationRefs.current[index];
      if (!el) return;
      el.style.opacity = String(bandOpacity(value, annotation.band, annotation.holdToEnd));
      el.style.transform = `translateY(${14 * (1 - ramp(value, annotation.band[0], annotation.band[1]))}px)`;
    });
  });

  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between px-6 pt-24 pb-10 md:px-16 md:pt-28 md:pb-14">
      <div className="flex items-start justify-between">
        <p className="font-mono text-xs tracking-[0.3em] text-circuit uppercase">Sincelejo, Colombia</p>
        <div
          ref={indicatorRef}
          className="hidden flex-col items-end gap-2 font-mono text-xs tracking-[0.3em] text-muted uppercase sm:flex"
        >
          <span>Scroll</span>
          <span className="h-8 w-px bg-current" />
        </div>
      </div>

      <div ref={introRef} className="my-auto">
        <h1 className="font-display text-[16vw] leading-[0.84] font-black tracking-tight text-balance uppercase sm:text-[12vw] lg:text-[9vw]">
          Carlos
          <br />
          Escudero
        </h1>
        <p className="mt-5 max-w-xl font-mono text-sm text-muted sm:text-base">
          Fullstack Software Engineer — AI Integration &amp; Secure Development
        </p>
      </div>

      <div aria-hidden="true" className="relative h-12">
        {ANNOTATIONS.map((annotation, index) => (
          <p
            key={annotation.code}
            ref={(el) => {
              annotationRefs.current[index] = el;
            }}
            style={{ opacity: 0 }}
            className="absolute inset-x-0 bottom-0 font-mono text-sm tracking-wide text-foreground sm:text-base"
          >
            <span className="text-circuit">{annotation.code}</span> <span className="text-muted">/</span>{" "}
            <span className="font-medium">{annotation.label}</span>{" "}
            <span className="text-muted">— {annotation.text}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
