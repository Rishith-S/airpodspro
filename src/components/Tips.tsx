import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useRef, useState } from "react";
import tipsXS from "../assets/tipsXS.jpg";
import tipsS from "../assets/tipsS.jpg";
import tipsM from "../assets/tipsM.jpg";
import tipsL from "../assets/tipsL.jpg";
import tip from "../assets/tip.jpg";

const Tips = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest * 100);
  });
  return (
    <div ref={containerRef} className="relative lg:p-42 p-16 z-20 w-screen h-fit bg-transparent text-white flex flex-col gap-8 justify-center">
        <p className="text-xl w-2/3  text-neutral-400"><span className="text-white">Four pairs of silicone tips</span><span className="text-neutral-400"> are included to fit a wide range of ears. The tips secure AirPods Pro 2 in place and create an </span><span className="text-white"><span className="text-[#00ff41]">acoustic seal</span> <span className="text-neutral-400">that closes in the sound.</span></span></p>
        <div className="w-full h-1/2 flex lg:gap-16 gap-8 justify-between">
            <motion.div className="w-fit lg:h-[42%] h-[30%] mt-9" initial={{ opacity: 0 }} animate={{ opacity: progress > 40 ? 1 : 0 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
                <img src={tipsXS} alt="tips" className="w-full h-full object-contain" />
                <p className="text-xl text-[#00ff41] mt-8">XS</p>
            </motion.div>
            <motion.div className="w-fit lg:h-[46%] h-[34%] mt-7" initial={{ opacity: 0 }} animate={{ opacity: progress > 30 ? 1 : 0 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
                <img src={tipsS} alt="tips" className="w-full h-full object-contain" />
                <p className="text-xl text-[#00ff41] mt-7">S</p>
            </motion.div>
            <motion.div className="w-fit lg:h-[50%] h-[38%] mt-5" initial={{ opacity: 0 }} animate={{ opacity: progress > 20 ? 1 : 0 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
                <img src={tipsM} alt="tips" className="w-full h-full object-contain" />
                <p className="text-xl text-[#00ff41] mt-6">M</p>
            </motion.div>
            <motion.div className="w-fit lg:h-[54%] h-[42%] mt-3" initial={{ opacity: 0 }} animate={{ opacity: progress > 10 ? 1 : 0 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
                <img src={tipsL} alt="tips" className="w-full h-full object-contain" />
                <p className="text-xl text-[#00ff41] mt-4">L</p>
            </ motion.div>
            <motion.div className="w-fit lg:h-full h-[80%]" initial={{ opacity: 0 }} animate={{ opacity: progress > 3 ? 1 : 0 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
                <img src={tip} alt="tips" className="w-full h-full object-contain" />
            </motion.div>
        </div>
    </div>
  )
}

export default Tips