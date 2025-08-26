import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bgNoice from "../assets/bgNoice.jpg";
import noiseCancellation from "../assets/noiseCancellation.jpg";

export default function ControlText() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const heightProgress = useTransform(scrollYProgress, [0, 0.5], ["0%", "50%"]);
    return (
        <div className="relative z-20 bg-transparent text-white flex flex-col gap-8 justify-center">
            <motion.div className="w-screen h-full lg:h-screen text-white flex flex-col gap-8 justify-center px-16 py-16 lg:px-32">
                <motion.p className="text-[1.5rem] lg:text-[2.5rem] font-bold leading-relaxed">Intelligent noise control</motion.p>
                <motion.p className="text-[3.5rem] lg:text-[7rem] font-bold leading-relaxed" style={{ lineHeight: 0.8 }}>Unheard-of sound. On every level.</motion.p>
                <motion.p className="max-w-4xl text-[1.5rem] mt-6 lg:mt-0 lg:text-3xl" style={{ lineHeight: 1 }}>The H2-powered AirPods Pro 2 feature Adaptive Audio, automatically prioritizing sounds that need your attention as you move through the world. By seamlessly blending pro‑level Active Noise Cancellation with Transparency mode when you need it, Adaptive Audio magically delivers the right mix of sound for any environment.⁶</motion.p>
            </motion.div>
            <div ref={containerRef} className="w-screen h-[110vh] text-white flex flex-col md:flex-row justify-center border-y-1 border-neutral-500">
                {/* First div with 2 column divs */}
                <div className="lg:w-1/2 w-full md:border-r-1 border-neutral-500 flex flex-col h-full">
                    <div className="relative w-full lg:h-1/2 h-full">
                        <div className="absolute w-full h-full z-0">
                            <img src={bgNoice} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute inset-0 w-full h-full bg-transparent z-20 flex flex-col items-center justify-center">
                            <p className="text-xl leading-relaxed">Up to</p><span className="text-[7rem] text-[#00ff41] font-bold leading-none">2x</span><p className="text-xl leading-relaxed font-bold w-62 text-center   ">quiter with pro-level Active Noise Cancellation.</p>
                        </div>
                    </div>
                    <div className="w-full border-y-1 lg:border-y-0 border-neutral-500 lg:border-t-1 border-neutral-500 lg:h-1/2 h-full bg-transparent z-10 flex flex-col items-center justify-center">
                        <p className="text-[1rem] text-neutral-400 xl:text-[1.5rem] px-16 2xl:px-38 font-semibold leading-relaxed">A driver and acoustic algorithms help <span className="text-white">pro‑level Active Noise Cancellation</span> remove more unwanted noise. With control over what you hear — and don’t hear — you can immerse yourself in music and podcasts, or simply stay focused, like never before.</p>
                    </div>
                </div>
                {/* Second div */}
                <div className="lg:w-1/2 w-full h-full flex flex-col">
                    <div className="relative w-full h-full lg:h-full overflow-hidden">
                        <div className="absolute -right-14 -bottom-10 xl:-bottom-20 w-full h-[75%] lg:h-[60%] xl:h-[75%] z-0">
                            <img src={noiseCancellation} className="w-full h-full object-contain" />
                        </div>
                        <div className="absolute inset-0 gap-4 pt-16 w-full h-full bg-transparent z-20 flex flex-row">
                            <p className="text-lg xl:w-[62%] lg:w-[72%] w-full lg:px-16 px-8 leading-relaxed">
                                Noise-cancelling microphones and a rear vent are optimally placed to quickly detect sound coming in, working together to counter noise before it reaches your ear.
                            </p>
                            <motion.div 
                                style={{ 
                                    height: heightProgress,
                                    minHeight: '0%'
                                }} 
                                className="w-0.5 mt-15 bg-neutral-500 flex flex-col items-center justify-end relative"
                            >
                                <div className="absolute w-2 h-2 rounded-full bg-neutral-500" />
                                <div className="absolute w-2 h-2 rounded-full bg-neutral-500" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}