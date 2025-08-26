import { motion } from "framer-motion";
import { PlayOnceVideo } from "./PlayOnceVideo";
import chipVideo from "../assets/chipVideo.mp4";

export function ChipPerformance() {
  return (
    <motion.div className="w-screen relative mt-20 z-20 bg-transparent text-white flex flex-col items-center justify-center md:grid md:grid-cols-2 border-y-1 border-neutral-500">
      <div className="flex flex-col items-center w-full h-full justify-center">
        <PlayOnceVideo src={chipVideo} className="w-[50%] h-[50%] lg:w-[75%] lg:h-[75%] object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center lg:px-24 px-16 py-10 lg:py-24 h-full border-t-1 md:border-t-0 md:border-l-1 border-neutral-500">
        <p className="text-neutral-500 lg:text-[1.6rem] text-[1.2rem] font-semibold leading-relaxed">
          <span>AirPods Pro 2 pair with Apple Vision Pro to deliver</span>
          <span className="text-white"> Lossless Audio with ultra-low latency,</span> <span>for an unprecedented sound experience.⁶ Both feature the </span>
          <span className="text-white">H2 chip</span>
          <span>, communicating at industry-shattering speed and unlocking a revolutionary new format rendering pure, uncompressed sound in real time. So your movies, shows, and games become breathtakingly immersive.</span>
        </p>
      </div>
    </motion.div>
  );
}
