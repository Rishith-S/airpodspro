import noiseVideo from "../assets/noiseVideo.mp4";
import TransparencyModeImage from "../assets/hearingHealth.jpg"
export default function TransparencyMode() {
    return (
        <div className="w-screen h-fit border-y-1 border-neutral-500 relative z-20 bg-transparent text-white">
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center">
                <div className="lg:border-r-1 border-neutral-500 flex items-center justify-center">
                    <p className="text-[1.5rem] text-xl font-semibold text-neutral-400 p-16"><span className="text-white">Transparency mode</span> harnesses the power of H2 to minimize the intensity of loud noises like sirens or power tools — so you can comfortably hear the world around you.</p>
                </div>
                <div className="border-t-1 border-neutral-500 lg:border-t-0 justify-center overflow-hidden">
                    <video src={noiseVideo} autoPlay muted loop className="w-full h-full -mt-6 object-cover scale-110" />
                </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-screen h-fit justify-center border-t-1 border-neutral-500">
                <div className="flex flex-col justify-center  p-16 gap-8">
                    <p className="text-[1.7rem] text-xl text-neutral-400">
                    <span className="text-white font-semibold">Hearing health.</span> AirPods Pro 2 unlock the world’s first end-to-end hearing health experience. It provides a scientifically validated Hearing Test, a clinical-grade Hearing Aid capability, and active Hearing Protection — all available with a free software update on your iPhone or iPad.
                    </p>
                    <div className="flex text-2xl font-semibold items-center justify-start">
                        <p className="hover:underline">Learn more</p>
                        <p> &nbsp; {">"}</p>
                    </div>
                    <p className="text-neutral-400 font-medium text-lg">
                        The Hearing Test and Hearing Aid features are regulated health features that require approval and will be offered after authorization is received. Feature availability varies by region.
                    </p>
                    <div className="flex text-lg text-neutral-400 font-medium items-center justify-start">
                        <p className="hover:underline">View complete list</p>
                        <p> &nbsp; {">"}</p>
                    </div>
                </div>
                <div className="flex items-end justify-center">
                    <div className="justify-center overflow-hidden w-[45%] lg:h-[75%] h-full">
                        <img src={TransparencyModeImage} alt="transparency mode" className="object-fit w-full h-full" />
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-[75vh] h-fit justify-center border-t-1 border-neutral-500">
                <div className="flex flex-col justify-center border-r-1 border-neutral-500 p-16 gap-8">
                    <p className="text-[1.7rem] text-xl text-neutral-400">
                    <span className="text-white font-semibold">Voice Isolation</span> improves the quality of your phone calls in loud or windy conditions. Using advanced computational audio, it reduces background noise while isolating and clarifying the sound of your voice for the person you’re speaking to. 
                    </p>
                </div>
                <div className="flex flex-col border-t-1 border-neutral-500 lg:border-t-0 justify-center">
                    <div className="px-16 py-16 lg:py-0 flex flex-col w-full h-full items-center justify-center">
                        <p className="text-[1.7rem] text-xl text-neutral-400">
                            <span className="text-white font-semibold">Personalized Volume</span> uses machine learning to understand your listening preferences in different environments, and automatically adapts sound based on your patterns over time.
                        </p>
                    </div>
                    <div className="border-t-1 border-neutral-500 px-16 py-16 lg:py-0 flex flex-col w-full h-full items-center justify-center">
                        <p className="text-[1.7rem] text-xl text-neutral-400">When you’re speaking with someone nearby,
                        <span className="text-white font-semibold">Conversation Awareness</span> automatically lowers the volume of what’s playing and brings it right back up when you’re done.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}