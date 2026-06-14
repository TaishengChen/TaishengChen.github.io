type Item = {
    role: string;
    org: string;
    period: string;
    bullets?: string[];
};

const items: Item[] = [
    {
        role: "Freelance Full-Stack Developer",
        org: "404found",
        period: "Mar 2025 - Dec 2025",
        bullets: [
            "Built and shipped a production web platform for a hospitality client in Oulu, handling the full delivery cycle independently.",
            "System active since July 2025; processed 3,000+ reservations with zero conflicts.",
        ],
    },
];

export default function Experience() {
    return (
        <>
            <p className="font-mono text-[13px] text-[#6B6B6B] mb-4">// experience</p>

            <div className="space-y-4">
                {items.map((item) => (
                    <div
                        key={item.role}
                        className="bg-[#F7F7F5] border border-[#E5E5E5] rounded-[14px] p-6"
                    >
                        <div className="flex items-baseline justify-between gap-4 flex-wrap mb-1">
                            <p className="text-[18px] font-semibold text-[#111111] m-0">{item.role}</p>
                            <span className="font-mono text-[13px] text-[#6B6B6B] flex-shrink-0">{item.period}</span>
                        </div>

                        <p className="text-[15px] text-[#6B6B6B] mb-3">{item.org}</p>

                        {item.bullets && (
                            <ul className="list-none p-0 m-0 space-y-1.5">
                                {item.bullets.map((b) => (
                                    <li key={b} className="relative pl-4 text-[15px] text-[#6B6B6B] leading-[1.65]">
                                        <span className="absolute left-0 top-[1px] text-brand">-</span>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
