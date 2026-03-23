export default function Hero() {
    return (
        <div className="relative grid grid-cols-[192px_1fr] gap-11 pt-[88px] pb-16 items-center
                        max-[740px]:grid-cols-1 max-[740px]:text-center max-[740px]:pt-14">

            <div className="max-[740px]:flex max-[740px]:justify-center">
                <img
                    src="/me.jpg"
                    alt="Taisheng portrait"
                    className="w-[168px] h-[168px] rounded-full object-cover block
                               border-2 border-brand/30 shadow-[0_0_52px_rgba(0,173,181,0.12)]"
                />
            </div>

            <div>
                <span className="inline-flex items-center gap-[7px] text-[13px] font-semibold
                                 tracking-[0.04em] px-3.5 py-[5px] rounded-full mb-5
                                 bg-brand/10 border border-brand/30 text-brand">
                    <span className="w-[7px] h-[7px] rounded-full bg-brand flex-shrink-0 animate-blink" />
                    Open to Work
                </span>

                <h1 className="text-[58px] font-extrabold leading-[1.05] tracking-[-0.025em]
                               mb-2 text-[#ddeeff]">
                    Taisheng Chen
                </h1>

                <p className="text-[20px] font-medium text-brand mb-4 tracking-[0.01em]">
                    Software Developer
                </p>

                <p className="text-[18px] text-slate-400 leading-[1.7] max-w-[500px]
                              max-[740px]:max-w-full">
                    I build and ship full stack web applications, from database design to production.
                    I am open to frontend, backend, full stack, DevOps and data roles.
                </p>

                <div className="mt-7 flex gap-3 flex-wrap max-[740px]:justify-center">
                    <a
                        href="/Taisheng-Chen-CV.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center h-[44px] px-5
                                   rounded-[10px] border border-brand bg-brand text-[#001a1b]
                                   text-[15px] font-semibold transition-all duration-200
                                   hover:brightness-110 hover:-translate-y-px"
                    >
                        Download Resume
                    </a>
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center h-[44px] px-5
                                   rounded-[10px] border border-white/[0.07] bg-transparent
                                   text-[#ddeeff] text-[15px] font-semibold transition-all duration-200
                                   hover:bg-white/[0.05] hover:-translate-y-px"
                    >
                        View My Work
                    </a>
                </div>
            </div>
        </div>
    );
}
