import { motion } from "framer-motion";

export function AudioPerformanceText() {
  return (
    <motion.div className="w-screen h-full lg:h-screen relative z-20 bg-transparent">
      <motion.div
        className="text-white p-6 max-w-4xl mx-16 lg:mx-34 flex flex-col gap-4"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <p className="text-4xl">Audio performance</p>
        <p className="lg:text-[8rem] text-[5rem] mb-4 leading-none" style={{ lineHeight: 0.8 }}>
          H2. More <br />
          immersive by <br />
          every measure.
        </p>
        <p className="lg:text-3xl text-xl">
          The Apple-designed H2 chip is the force behind the advanced audio performance of AirPods Pro 2, working with the driver and amplifier to create crisp, high-definition sound. It uses computational algorithms to deliver noise cancellation, superior three-dimensional sound, efficient battery life, and imperceivable end-to-end wireless audio latency for games — all at once.
        </p>
      </motion.div>
    </motion.div>
  );
}
