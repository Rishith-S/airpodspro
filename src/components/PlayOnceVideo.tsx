import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface PlayOnceVideoProps {
  src: string;
  className: string;
}

export function PlayOnceVideo({ src, className }: PlayOnceVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleViewportEnter = () => {
    if (videoRef.current && !hasPlayed) {
      videoRef.current.currentTime = 0; // Reset to beginning
      videoRef.current.play();
      setHasPlayed(true);
    }
  };

  const handleViewportLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setHasPlayed(false); // Reset flag for next time
    }
  };

  return (
    <motion.div
      onViewportEnter={handleViewportEnter}
      onViewportLeave={handleViewportLeave}
      viewport={{ once: false }}
      className="w-full h-full object-cover items-center justify-center flex"
    >
      <video
        ref={videoRef}
        src={src}
        className={className}
        muted
        loop={false}
      />
    </motion.div>
  );
}
