"use client";

import { useRef } from "react";
import { useReducedMotion, useScroll } from "framer-motion";
import { HeroCanvas } from "./hero-canvas";
import { HeroOverlay } from "./hero-overlay";
import { HeroStatic } from "./hero-static";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  if (prefersReducedMotion) {
    return <HeroStatic />;
  }

  return (
    <section ref={containerRef} className="relative h-[350vh]">
      <div className="relative sticky top-0 h-screen overflow-hidden bg-background">
        <HeroCanvas progress={scrollYProgress} />
        <div className="grain-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
        <HeroOverlay progress={scrollYProgress} />
      </div>
    </section>
  );
}
