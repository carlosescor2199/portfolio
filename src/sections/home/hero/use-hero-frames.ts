"use client";

import { useEffect, useRef, useState } from "react";
import { EAGER_FRAME_COUNT, framePath, TOTAL_FRAMES } from "./constants";

/**
 * Loads the 121 exploded-keyboard frames progressively so the hero never
 * blocks first paint:
 *  - frames 1..EAGER_FRAME_COUNT load immediately (frame 1 is what's visible
 *    at rest before any scroll happens).
 *  - frames EAGER_FRAME_COUNT+1..TOTAL_FRAMES stream in one at a time via
 *    requestIdleCallback, so they never compete with the eager batch or with
 *    hydration/interaction work.
 * The canvas reads directly from `images.current`; frames that haven't
 * arrived yet are simply undefined and the draw loop falls back to the last
 * successfully drawn frame instead of blanking.
 */
export function useHeroFrames() {
  const images = useRef<(HTMLImageElement | undefined)[]>(new Array(TOTAL_FRAMES).fill(undefined));
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    for (let frameNumber = 1; frameNumber <= EAGER_FRAME_COUNT; frameNumber += 1) {
      const img = new window.Image();
      img.decoding = "async";
      img.onload = () => {
        if (cancelled) return;
        images.current[frameNumber - 1] = img;
        if (frameNumber === 1) setFirstFrameReady(true);
      };
      img.src = framePath(frameNumber);
    }

    function scheduleIdle(callback: () => void) {
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(callback, { timeout: 1000 });
      } else {
        window.setTimeout(callback, 200);
      }
    }

    let nextFrame = EAGER_FRAME_COUNT + 1;
    const loadNext = () => {
      if (cancelled || nextFrame > TOTAL_FRAMES) return;
      const frameNumber = nextFrame;
      nextFrame += 1;
      const img = new window.Image();
      img.decoding = "async";
      img.onload = () => {
        if (!cancelled) images.current[frameNumber - 1] = img;
      };
      img.src = framePath(frameNumber);
      scheduleIdle(loadNext);
    };
    scheduleIdle(loadNext);

    return () => {
      cancelled = true;
    };
  }, []);

  return { images, firstFrameReady };
}
