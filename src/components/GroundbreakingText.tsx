import { motion } from "framer-motion";

interface GroundbreakingTextProps {
  opacity: number;
}

export function GroundbreakingText({ opacity }: GroundbreakingTextProps) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{ opacity: opacity }}
      transition={{ duration: 0.5 }}
      style={{ zIndex: 10 }}
    >
      <motion.p
        className="text-white font-bold text-center text-[40px] md:text-[85px] lg:text-[135px] 2xl:text-[165px]"
        style={{ lineHeight: 0.8}}
      >
        Groundbreaking
        <br />
        Sound.
      </motion.p>
    </motion.div>
  );
}
