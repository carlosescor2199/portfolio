export const TOTAL_FRAMES = 121;
export const EAGER_FRAME_COUNT = 15;

export function framePath(frameNumber: number) {
  return `/media/hero-frames/frame_${String(frameNumber).padStart(4, "0")}.webp`;
}
