import Image from "next/image";

export default function Hero() {
    return (
        <div className="hero-fade grid grid-cols-[1fr_auto] gap-12 pt-[88px] pb-16 items-center
                        max-[740px]:grid-cols-1 max-[740px]:pt-14">

            <div>
                <span className="font-mono text-[13px] text-brand mb-5 block">
                    {"// available for work"}
                </span>

                <h1 className="text-[52px] font-bold leading-[1.05] tracking-[-0.02em] text-[#111111] mb-3">
                    Taisheng Chen
                </h1>

                {/* <p className="text-[20px] text-[#6B6B6B] mb-3">
                    Full-stack developer.
                </p> */}

                <p className="text-[17px] text-[#6B6B6B] leading-[1.7] max-w-[480px]">
                    Full-stack developer · Based in Oulu · Open to relocation
                </p>

                <div className="mt-7 flex gap-3 flex-wrap">
                    <a
                        href="/TaishengChen_Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center h-[44px] px-5
                                   rounded-[10px] bg-brand text-white
                                   text-[15px] font-semibold transition-opacity duration-200
                                   hover:opacity-90"
                    >
                        Download CV
                    </a>
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center h-[44px] px-5
                                   rounded-[10px] border border-[#E5E5E5]
                                   text-[#111111] text-[15px] font-semibold transition-colors duration-200
                                   hover:bg-[#F7F7F5]"
                    >
                        View Projects ↓
                    </a>
                </div>
            </div>

            <div className="max-[740px]:hidden">
                <Image
                    src="/me.jpg"
                    alt="Taisheng portrait"
                    width={160}
                    height={160}
                    className="rounded-full object-cover border border-[#E5E5E5]"
                />
            </div>
        </div>
    );
}
