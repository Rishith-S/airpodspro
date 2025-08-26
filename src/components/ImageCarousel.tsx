import { AnimatePresence, motion } from "framer-motion";
import { SPRING_CONFIG } from "../constants/config";

interface ImageCarouselProps {
  urls: string[];
  index: number;
  springConfig: typeof SPRING_CONFIG;
}

export function ImageCarousel({ urls, index, springConfig }: ImageCarouselProps) {
  return (
    <AnimatePresence>
      <motion.img
        transition={springConfig}
        key={index}
        src={urls[index]}
        alt={`Slide ${index + 1}`}
        className="absolute object-contain w-screen h-screen xl:scale-110 -mt-30 xl:-mt-50"
        draggable={false}
      />
    </AnimatePresence>
  );
}
