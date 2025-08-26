import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { HighlightZone } from "./HighlightZone";

interface AudioPerformanceProps {
  setShowVideo: React.Dispatch<React.SetStateAction<boolean>>;
}

export function AudioPerformance({ setShowVideo }: AudioPerformanceProps) {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest * 100);
    if (latest * 100 > 15 || latest * 100 < 1) {
      setShowVideo(false);
    } else {
      setShowVideo(true);
    }
  });

  return (
    <div className="w-screen h-[250vh] relative z-20 bg-transparent text-white flex items-center px-16 lg:px-32">
      <motion.p
        className="max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <span className="lg:text-[3.5rem] text-[2rem] font-bold leading-relaxed" style={{ lineHeight: 1 }}>
          <HighlightZone
            text="Up to 2x more Active Noise Cancellation.²"
            textColor={progress > 0 && progress < 4 ? "#FFFFFF" : "#484848"}
          />
          <HighlightZone
            text="Adaptive Audio that tailors noise control to your environment.³"
            textColor={progress > 4 && progress < 6 ? "#FFFFFF" : "#484848"}
          />
          <HighlightZone
            text="Personalized Spatial Audio that immerses you in sound.⁴ "
            textColor={progress > 6 && progress < 8 ? "#FFFFFF" : "#484848"}
          />
          <HighlightZone
            text="And a new end-to-end experience to test,¹ aid,¹ and help protect your hearing.⁵"
            textColor={progress > 8 && progress < 75 ? "#FFFFFF" : "#484848"}
          />
        </span>
      </motion.p>
    </div>
  );
}
