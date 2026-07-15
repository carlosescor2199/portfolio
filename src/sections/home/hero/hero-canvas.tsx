"use client";

import { useEffect, useRef } from "react";
import { useMotionValueEvent, type MotionValue } from "framer-motion";
import { useHeroFrames } from "./use-hero-frames";
import { TOTAL_FRAMES } from "./constants";

function drawCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement, canvasWidth: number, canvasHeight: number) {
  const imageRatio = img.naturalWidth / img.naturalHeight;
  const canvasRatio = canvasWidth / canvasHeight;

  let sx = 0;
  let sy = 0;
  let sw = img.naturalWidth;
  let sh = img.naturalHeight;

  if (imageRatio > canvasRatio) {
    sw = img.naturalHeight * canvasRatio;
    sx = (img.naturalWidth - sw) / 2;
  } else {
    sh = img.naturalWidth / canvasRatio;
    sy = (img.naturalHeight - sh) / 2;
  }

  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvasWidth, canvasHeight);
}

export function HeroCanvas({ progress }: { progress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastDrawnIndex = useRef(-1);
  const { images, firstFrameReady } = useHeroFrames();

  const resolveDrawableIndex = (requested: number) => {
    if (images.current[requested]) return requested;
    for (let i = requested - 1; i >= 0; i -= 1) {
      if (images.current[i]) return i;
    }
    return lastDrawnIndex.current;
  };

  const drawIndex = (index: number) => {
    const canvas = canvasRef.current;
    const img = index >= 0 ? images.current[index] : undefined;
    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    drawCover(ctx, img, canvas.width, canvas.height);
    lastDrawnIndex.current = index;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      const requested = Math.round(progress.get() * (TOTAL_FRAMES - 1));
      drawIndex(resolveDrawableIndex(requested));
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- resize only needs to be wired once; it reads live refs internally.
  }, []);

  useEffect(() => {
    if (firstFrameReady) drawIndex(resolveDrawableIndex(0));
    // eslint-disable-next-line react-hooks/exhaustive-deps -- draw only when the first frame flips ready.
  }, [firstFrameReady]);

  useMotionValueEvent(progress, "change", (latest) => {
    const requested = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(latest * (TOTAL_FRAMES - 1))));
    const index = resolveDrawableIndex(requested);
    if (index >= 0 && index !== lastDrawnIndex.current) drawIndex(index);
  });

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
