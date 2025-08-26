import batteryMagsafe from "../assets/batteryMagsafe.jpg";

export default function Gestures() {
    return (
        <div className="w-screen relative z-20 lg:h-screen h-fit border-b-1 border-neutral-500 bg-black text-white">
            <div className="grid lg:grid-cols-2 grid-cols-1 h-full  justify-between">
                <div className="flex flex-col p-16 lg:p-0  justify-center border-r-1 border-neutral-500 gap-10">
                    <div className="flex flex-col h-full justify-center text-center">
                        <p className="text-xl">Up to</p>
                        <p className="text-[6rem] font-bold leading-none"><span className="text-[#00ff41] text-[7rem]">6</span> hours</p>
                        <p className="text-xl">of listening time with</p>
                        <p className="text-xl">pro-level Active Noise Cancellation enabled.</p>
                    </div>
                    <div className="flex flex-col text-center h-full justify-start">
                        <p className="text-xl">Up to</p>
                        <p className="text-[6rem] font-bold leading-none"><span className="text-[#00ff41] text-[7rem]">30</span> hours</p>
                        <p className="text-xl">of total listening time with</p>
                        <p className="text-xl">pro-level Active Noise Cancellation</p>
                        <p className="text-xl">enabled, using the case.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center border-t-1 lg:border-t-0 border-neutral-500 justify-between">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-xl font-semibold p-16">Recharge the <span className="text-neutral-400">MagSafe Charging Case</span> with a USB‑C connector, Apple Watch charger, or MagSafe charger.<span className="text-neutral-400"> You can also use a Qi‑certified charger.</span></p>
                    </div>
                    <img src={batteryMagsafe} alt="Gestures" className="lg:w-[75%] lg:h-[65%] w-[60%] h-[60%] object-fit" />
                </div>
            </div>
        </div>
    );
}