import { motion } from "framer-motion";
import bgVideo from "../assets/bgVideo.mp4";

interface BackgroundVideoProps {
  showVideo: boolean;
}

export function BackgroundVideo({ showVideo }: BackgroundVideoProps) {
  return (
    <>
      {showVideo && (
        <motion.video
          src={bgVideo}
          className="fixed top-0 w-full h-screen object-cover pointer-events-none z-0"
          autoPlay
          muted
          loop
          initial={{ opacity: 0 }}
          animate={{ opacity: showVideo ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      )}
    </>
  );
}
