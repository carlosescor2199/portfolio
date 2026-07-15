"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

const POSTER_SRC = "/media/city-ambient-poster.jpg";

export function AmbientVideo({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <Image src={POSTER_SRC} alt="" fill aria-hidden="true" sizes="100vw" className={cn("object-cover", className)} />
    );
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={POSTER_SRC}
      aria-hidden="true"
      className={cn("h-full w-full object-cover", className)}
    >
      <source src="/media/city-ambient.mp4" type="video/mp4" />
    </video>
  );
}
