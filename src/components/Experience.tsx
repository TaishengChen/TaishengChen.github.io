type Item = {
    role: string;
    org: string;
    period: string;
    details?: string;
    bullets?: string[];
};

const education: Item = {
    role:    "B.Eng. Information Technology",
    org:     "Oulu University of Applied Sciences (OAMK)",
    period:  "Aug 2023 – May 2026",
    details: "Cloud Services · Web Development Frameworks · Advanced Software Development · Software Testing · Data Structures and Algorithms · Data Analysis",
};

const workItems: Item[] = [
    {
        role:   "Freelance Full Stack Developer",
        org:    "Local Food and Hospitality Business, Oulu",
        period: "Mar 2025 – Present",
        bullets: [
            "Designed and built a commercial web platform that is running in production",
            "Built a restaurant site with table reservations and takeaway ordering",
            "Implemented over 60 REST API endpoints with role based authentication",
            "Processed over 2000 reservations without booking errors",
            "Containerised with Docker and deployed to Oracle Cloud with GitHub Actions CI/CD",
        ],
    },
    {
        role:    "Frontend Developer",
        org:     "X-it Escape Room App · Student Team Project",
        period:  "Feb 2025 – Apr 2025",
        details: "International student team project. Built interactive room management and map features using React Native. Collaborated in English within a distributed team.",
    },
];

const otherItems: Item[] = [
    { role: "HVAC Engineer",                   org: "Wuxi Yosun Equipment Co., China", period: "Apr 2022 – Jul 2023" },
    { role: "Environmental Engineer Assistant", org: "Kone Elevator Co., China",        period: "Aug 2018 – Nov 2018" },
];

function BlockTitle({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-slate-300 mb-4">
            {children}
        </p>
    );
}

function TimelineItem({ item }: { item: Item }) {
    return (
        <div className="pl-4 border-l-2 border-brand/[0.22]">
            <p className="text-[18px] font-bold text-[#ddeeff] mb-0.5">{item.role}</p>
            <p className="text-[17px] text-slate-400 mb-1">{item.org}</p>
            <p className="text-[15px] font-semibold text-brand tracking-[0.02em] mb-2">{item.period}</p>
            {item.details && (
                <p className="text-[17px] text-slate-400 leading-[1.65] m-0">{item.details}</p>
            )}
            {item.bullets && (
                <ul className="list-none p-0 mt-2 space-y-[5px]">
                    {item.bullets.map((b) => (
                        <li key={b} className="relative pl-4 text-[17px] text-slate-400 leading-[1.65]">
                            <span className="absolute left-0 top-[3px] text-[12px] text-brand/60">→</span>
                            {b}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function Experience() {
    return (
        <>
            <div className="flex items-center gap-3.5 mb-7">
                <h2 className="text-[20px] font-bold tracking-[0.13em] uppercase text-brand whitespace-nowrap">
                    Experience
                </h2>
                <span className="flex-1 max-w-[160px] h-px bg-gradient-to-r from-brand/30 to-transparent" />
            </div>

            <div className="bg-[#0f1929]/80 border border-white/[0.07] p-5 px-6
                            rounded-[14px] backdrop-blur-sm transition-colors duration-300
                            hover:border-brand/[0.18]">

                <div>
                    <BlockTitle>Education</BlockTitle>
                    <TimelineItem item={education} />
                </div>

                <div className="mt-6 pt-6 border-t border-white/[0.07]">
                    <BlockTitle>Work Experience</BlockTitle>
                    <div className="space-y-[22px]">
                        {workItems.map((item) => <TimelineItem key={item.role} item={item} />)}
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/[0.07]">
                    <BlockTitle>Other Experience</BlockTitle>
                    <div className="space-y-[22px]">
                        {otherItems.map((item) => <TimelineItem key={item.role} item={item} />)}
                    </div>
                </div>

            </div>
        </>
    );
}
