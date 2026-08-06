import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="hero-fade grid grid-cols-[1fr_auto] gap-12 pt-[88px] pb-16 items-center
                        max-[740px]:grid-cols-1 max-[740px]:pt-14"
    >
      <div>
        <span className="font-mono text-[13px] text-brand mb-5 block">
          {"// junior software developer"}
        </span>

        <h1 className="text-[52px] max-[520px]:text-[42px] font-bold leading-[1.05] tracking-[-0.02em] text-[#111111] mb-4">
          Taisheng Chen
        </h1>

        <p className="text-[20px] font-medium text-[#111111] mb-3">
          Backend-oriented software developer
        </p>

        <p className="text-[16px] text-[#6B6B6B] leading-[1.7] max-w-[600px]">
          Experience with APIs, databases, business workflows, testing,
          deployment, and production support through a live restaurant platform.
        </p>

        <p className="text-[14px] text-[#6B6B6B] leading-[1.7] mt-3">
          Oulu, Finland · Authorised to work full-time in Finland · Open to
          relocation
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
            View Resume
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
          alt="Portrait of Taisheng Chen"
          width={160}
          height={160}
          className="rounded-full object-cover border border-[#E5E5E5]"
        />
      </div>
    </div>
  );
}
