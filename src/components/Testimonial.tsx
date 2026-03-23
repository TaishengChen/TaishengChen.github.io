const facts = [
    { label: "Location",  value: "Oulu, Finland (open to relocation and remote)" },
    { label: "Languages", value: "English (B2) · Mandarin (Native) · Finnish (Beginner)" },
    { label: "Available", value: "Open to work from June 2026. Available for part-time roles sooner." },
    { label: "Contact",   value: "ists.chen@gmail.com", href: "mailto:ists.chen@gmail.com" },
];

export default function About() {
    return (
        <div className="bg-[#0f1929]/80 border border-white/[0.07] p-5 px-6
                        rounded-[14px] backdrop-blur-sm transition-colors duration-300
                        hover:border-brand/[0.18]">

            <div className="flex items-center gap-3.5 mb-7">
                <h2 className="text-[20px] font-bold tracking-[0.13em] uppercase text-brand whitespace-nowrap">
                    About Me
                </h2>
                <span className="flex-1 max-w-[160px] h-px bg-gradient-to-r from-brand/30 to-transparent" />
            </div>

            <p className="text-[18px] text-slate-400 leading-[1.75] mb-4">
                I am a software developer based in Oulu, Finland. I started studying information
                technology at OAMK in 2023 and will graduate in June 2026. During my studies,
                I built and deployed a full commercial web platform for a local business.
                I worked on the whole project alone, from the first line of code to production.
            </p>
            <p className="text-[18px] text-slate-400 leading-[1.75] mb-0">
                I work well on my own and in a team. I like building things that are useful in the
                real world. I am currently looking for work in software development. I am open to
                frontend, backend, full stack, DevOps and data roles. I am also interested in
                internships, summer trainee roles and graduate positions.
            </p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-2.5 mt-6">
                {facts.map((f) => (
                    <div
                        key={f.label}
                        className="flex flex-col gap-[5px] bg-white/[0.025] border border-white/[0.07]
                                   rounded-[10px] px-4 py-3.5 transition-colors duration-200
                                   hover:border-brand/[0.22]"
                    >
                        <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-slate-300">
                            {f.label}
                        </span>
                        {f.href ? (
                            <a
                                href={f.href}
                                className="text-[17px] text-[#ddeeff] leading-snug hover:text-brand transition-colors duration-200"
                            >
                                {f.value}
                            </a>
                        ) : (
                            <span className="text-[17px] text-[#ddeeff] leading-snug">{f.value}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
