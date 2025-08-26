import { BREAKPOINTS, FONT_CONFIG } from "../constants/config";

const largeImages = Object.values(
  import.meta.glob("/src/assets/large/*.png", {
    eager: true,
    query: "url",
    import: "default",
  })
);

const mediumImages = Object.values(
  import.meta.glob("/src/assets/medium/*.png", {
    eager: true,
    as: "url",
  })
);

const smallImages = Object.values(
  import.meta.glob("/src/assets/small/*.jpg", {
    eager: true,
    as: "url",
  })
);

export function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

export function getImageUrls(screenWidth: number): string[] {
  if (screenWidth >= BREAKPOINTS.LARGE) {
    return largeImages as unknown as string[];
  } else if (screenWidth >= BREAKPOINTS.MEDIUM) {
    return mediumImages;
  } else {
    return smallImages;
  }
}

export function useResponsiveFontSize(screenWidth: number, index: number): number {
  const baseFontSize = Math.round(
    screenWidth >= 1200
      ? FONT_CONFIG.DESKTOP
      : screenWidth >= BREAKPOINTS.LARGE
        ? FONT_CONFIG.LARGE_TABLET +
        ((screenWidth - BREAKPOINTS.LARGE) / 300) * 35
        : screenWidth >= BREAKPOINTS.MEDIUM
          ? FONT_CONFIG.TABLET +
          ((screenWidth - BREAKPOINTS.MEDIUM) / 400) * 60
          : FONT_CONFIG.MOBILE + ((screenWidth - 320) / 180) * 35
  );
  return (
    baseFontSize + index * FONT_CONFIG.SIZE_INCREMENT * FONT_CONFIG.SIZE_MULTIPLIER
  );
}

// helper: is the wheel or touch event happening inside a scrollable element
export function isEventInsideActiveScrollable(target: EventTarget | null, deltaY: number): boolean {
  let node = target as HTMLElement | null;
  while (node && node !== document.body) {
    const style = window.getComputedStyle(node);
    const overflowY = style.overflowY;
    const canScrollY =
      (overflowY === "auto" || overflowY === "scroll") &&
      node.scrollHeight > node.clientHeight;

    if (canScrollY) {
      const atTop = node.scrollTop <= 0;
      const atBottom = node.scrollTop + node.clientHeight >= node.scrollHeight - 1;

      // if the container can move in the direction of the wheel delta, we should not hijack it
      const canScrollUp = !atTop;
      const canScrollDown = !atBottom;

      if ((deltaY < 0 && canScrollUp) || (deltaY > 0 && canScrollDown)) {
        return true;
      }
      // if it is at an edge, we keep walking up to see if a parent can scroll
    }
    node = node.parentElement;
  }
  return false;
}
