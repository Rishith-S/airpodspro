import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import airpodsCase from "../assets/airpodsCase.png";
import iphone1 from "../assets/iphone1.jpg";
import iphone2 from "../assets/iphone2.jpeg";
import iphoneBase from "../assets/iphoneBase.jpg";

export default function Experience() {
    const containerRef = useRef(null);
    const [progress, setProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setProgress(latest);
    });

    return (
        <div ref={containerRef} className="w-screen h-fit bg-black text-white">
            <div
                className="flex flex-col h-screen gap-8 justify-center w-2/3 xl:px-32 px-16"
            >
                <motion.p
                    className="text-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Magical experience
                </motion.p>
                <motion.p
                    className="text-[6rem] font-bold leading-none"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Simplicity on a grand scale.
                </motion.p>
                <motion.p
                    className="text-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    From instant setup to Siri commands, AirPods Pro 2 hold all the qualities that make the AirPods family so magical. And thoughtful features give you the ability to move through more tasks with unprecedented ease.
                </motion.p>
            </div>

            <div className="w-screen h-[100vh]">
                <motion.div
                    className="fixed z-50 top-0 left-0 w-screen grid grid-cols-3 h-screen justify-center items-center bg-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: progress > 0.20 ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >   
                    {/* Left: AirPods Case */}
                    <div className="col-span-1 z-10 relative w-full h-full flex justify-center">
                        <div className="w-64 h-64 absolute bottom-[6%] 2xl:bottom-[13%] -right-[50%]">
                            <motion.img
                                className="w-full h-full object-contain"
                                src={airpodsCase}
                                alt="AirPods Case"
                                initial={{ opacity: 0, scale: 1.8 }}
                                animate={{ 
                                    opacity: progress > 0.20 ? 1 : 0,
                                    scale: progress > 0.40 ? 1 : 1.5-progress
                                }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            />
                        </div>
                    </div>

                    {/* Center: iPhone */}
                    <div className="col-span-1 z-5 w-full h-full flex items-center justify-center px-4 sm:px-8 lg:px-16">
                        <motion.div className="w-full max-w-[16rem] sm:max-w-[18rem] lg:max-w-[20rem] xl:max-w-[22rem] aspect-[9/19] px-1 py-2 pb-3 rounded-6xl items-center justify-center flex overflow-hidden" style={{ backgroundImage: `url(${iphoneBase})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.40 ? 1 : 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            <div className="w-full h-full rounded-6xl flex items-center justify-center relative overflow-hidden">
                                {/* First iPhone Image */}
                                <motion.img
                                    src={iphone1}
                                    alt="Experience"
                                    className="w-full h-full object-fit absolute inset-0"
                                    style={{ borderRadius: '52px' }}
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: progress < 0.60 ? 0 : 1 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                />
                                
                                {/* Second iPhone Image */}
                                <motion.img
                                    src={iphone2}
                                    alt="Experience"
                                    className="w-full h-full object-fit absolute inset-0"
                                    style={{ borderRadius: '52px' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: progress < 0.60 ? 1 : 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Audio Sharing Text */}
                    <div className="col-span-1 w-full h-full flex items-center justify-start">
                        <motion.p
                            className="text-xl font-semibold text-neutral-400 leading-relaxed text-left"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: progress > 0.40 ? 1 : 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            <span className="text-white">Audio Sharing</span><br />
                            Easily share a song or show<br />
                            between any two sets of<br />
                            AirPods. Simply bring<br />
                            AirPods near the iPhone,<br />
                            iPad, or Apple TV you're<br />
                            listening to and<br />
                            connect instantly. 18
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}