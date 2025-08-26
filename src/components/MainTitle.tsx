import { motion } from "framer-motion";
import { SPRING_CONFIG } from "../constants/config";

interface MainTitleProps {
  opacity: number;
  springConfig: typeof SPRING_CONFIG;
}

export function MainTitle({ opacity, springConfig }: MainTitleProps) {
  return (
    <div className="items-center justify-center flex flex-col">
      <motion.p
        className={`text-white font-bold w-full
          } items-center text-[50px] md:text-[95px] lg:text-[185px] justify-center flex text-center space-y-6`}
        style={{
          opacity: opacity,
          lineHeight: "0.8",
          wordSpacing: "0.4em",
        }}
        transition={springConfig}
      >
        AirPods Pro
      </motion.p>
    </div>
  );
}
