import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { AudioPerformance } from "./components/AudioPerformance";
import { AudioPerformanceText } from "./components/AudioPerformanceText";
import { BackgroundVideo } from "./components/BackgroundVideo";
import { ChipPerformance } from "./components/ChipPerformance";
import { EmptyState } from "./components/EmptyState";
import { GroundbreakingText } from "./components/GroundbreakingText";
import { ImageCarousel } from "./components/ImageCarousel";
import { MainTitle } from "./components/MainTitle";
import { SCROLL_CONFIG, SPRING_CONFIG } from "./constants/config";
import { clamp, getImageUrls, isEventInsideActiveScrollable } from "./utils/helpers";
import ControlText from "./components/ControlText";
import Tips from "./components/Tips";
import TransparencyMode from "./components/TransparencyMode";
import  Gestures from "./components/Gestures";
import Experience from "./components/Experience";

export default function ScrollGallery() {
  const [index, setIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1920
  );

  const lastScrollTime = useRef(0);
  const accumulatedDelta = useRef(0);
  const resetTimeoutRef = useRef<number | null>(null);

  const urls = useMemo(() => getImageUrls(screenWidth), [screenWidth]);
  const count = urls.length;

  const opacity = 1 - (index / count) * 2;

  useEffect(() => {
    const onResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setIndex(0);
  }, [urls]);

  useEffect(() => {
    urls.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [urls]);

  const step = (dir: number, steps: number = 1) => {
    setIndex((i) => clamp(i + dir * steps, 0, Math.max(0, count - 1)));
  };

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      // if the event is aimed at an inner scrollable container, do not hijack
      if (isEventInsideActiveScrollable(e.target, e.deltaY)) {
        return;
      }

      // only gallery stepping when the window is at top so you still allow
      // the document to scroll once the gallery is finished
      if (window.scrollY === 0) {
        if (e.deltaY > 0 && index < count - 1) {
          e.preventDefault();
          if (Math.abs(e.deltaY) < SCROLL_CONFIG.MIN_THRESHOLD) return;

          const now = Date.now();
          const timeDelta = now - lastScrollTime.current;
          if (timeDelta > SCROLL_CONFIG.RESET_DELAY) accumulatedDelta.current = 0;
          lastScrollTime.current = now;

          accumulatedDelta.current += Math.abs(e.deltaY);
          const velocity =
            timeDelta > 0 && timeDelta < 1000
              ? Math.min(accumulatedDelta.current / Math.max(timeDelta, 16), 50)
              : 0;

          const steps = Math.min(
            Math.max(1, Math.floor(velocity * SCROLL_CONFIG.VELOCITY_MULTIPLIER)),
            SCROLL_CONFIG.MAX_STEPS_PER_SCROLL
          );
          step(1, steps);

          if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
          resetTimeoutRef.current = window.setTimeout(() => {
            accumulatedDelta.current = 0;
            resetTimeoutRef.current = null;
          }, SCROLL_CONFIG.RESET_DELAY);
        } else if (e.deltaY < 0 && index > 0) {
          e.preventDefault();
          if (Math.abs(e.deltaY) < SCROLL_CONFIG.MIN_THRESHOLD) return;

          const now = Date.now();
          const timeDelta = now - lastScrollTime.current;
          if (timeDelta > SCROLL_CONFIG.RESET_DELAY) accumulatedDelta.current = 0;
          lastScrollTime.current = now;

          accumulatedDelta.current += Math.abs(e.deltaY);
          const velocity =
            timeDelta > 0 && timeDelta < 1000
              ? Math.min(accumulatedDelta.current / Math.max(timeDelta, 16), 50)
              : 0;

          const steps = Math.min(
            Math.max(1, Math.floor(velocity * SCROLL_CONFIG.VELOCITY_MULTIPLIER)),
            SCROLL_CONFIG.MAX_STEPS_PER_SCROLL
          );
          step(-1, steps);

          if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
          resetTimeoutRef.current = window.setTimeout(() => {
            accumulatedDelta.current = 0;
            resetTimeoutRef.current = null;
          }, SCROLL_CONFIG.RESET_DELAY);
        }
      }

      if (e.deltaY > 0 && index >= count - 1) {
        // allow the page to scroll once the gallery is done
        // so do not preventDefault here
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel as any);
  }, [count, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // ignore if a focused element is inside a scrollable region
      const active = document.activeElement;
      if (isEventInsideActiveScrollable(active, e.key === "ArrowDown" || e.key === "PageDown" ? 1 : -1)) {
        return;
      }
      if (["ArrowDown", "PageDown"].includes(e.key)) {
        e.preventDefault();
        step(1, 1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        step(-1, 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count]);

  if (count === 0) {
    return <EmptyState />;
  }

  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div className="md:hidden w-screen h-screen bg-black flex justify-center items-center text-white font-bold">
        I could only do till Tablet size. 😭😭😭😭
      </div>
      <div className="hidden md:block relative h-screen w-screen select-none">
        <BackgroundVideo showVideo={showVideo} />
        {index < count - 1 && (
          <motion.div
            onViewportLeave={() => setShowVideo(true)}
            onViewportEnter={() => setShowVideo(false)}
            style={{ opacity: index >= count - 1 ? 0 : 1 }}
            className={[
              "sticky top-0 h-screen w-screen bg-black text-white overflow-hidden",
              "transition-opacity duration-500",
            ].join(" ")}
          >
            <div className="relative flex justify-center items-center h-full w-full" style={{ display: index >= count - 1 ? "none" : "flex" }}>
              <ImageCarousel urls={urls} index={index} springConfig={SPRING_CONFIG} />
              <MainTitle
                opacity={opacity}
                springConfig={SPRING_CONFIG}
              />
            </div>

            {index >= count * 0.75 && index <= count - 1 && <GroundbreakingText
              opacity={1}
            />}
          </motion.div>
        )}

        <AudioPerformance setShowVideo={setShowVideo} />

        <AudioPerformanceText />

        <ChipPerformance />

        <ControlText />

        <Tips />

        <TransparencyMode />

        <Gestures />

        <Experience />

      </div>
    </>
  );
}
