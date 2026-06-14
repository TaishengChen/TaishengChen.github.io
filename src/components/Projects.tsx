type Site    = { label: string; url: string };
type Project = {
    title: string;
    role: string;
    date: string;
    description: string;
    stack: string[];
    sites?: Site[];
    inDevelopment?: boolean;
};

const projects: Project[] = [
    {
        title: "Restaurant Web Platform",
        role: "// full-stack developer · sole contributor",
        date: "Mar 2025 - Dec 2025",
        description: "A local restaurant had no digital system for reservations or orders; everything ran by phone and paper, causing regular double bookings. I designed and built the complete platform from scratch: a REST API across approximately 60 endpoints with booking conflict detection and JWT authentication, two Next.js interfaces (customer-facing in Finnish and English, staff admin panel), Docker containerisation, and CI/CD via GitHub Actions. The system processed over 3,000 reservations with zero conflicts and received 10,200+ visits in its first three months.",
        stack: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Docker", "GitHub Actions", "Oracle Cloud", "Cloudflare"],
        sites: [
            { label: "okiniiri.fi",  url: "https://okiniiri.fi" },
            { label: "restaurant",   url: "https://okiniiri.fi/restaurant" },
            { label: "milktea",      url: "https://okiniiri.fi/milktea" },
            { label: "market",       url: "https://okiniiri.fi/market" },
        ],
    },
    // {
    //     title: "Vocabulary Learning App",
    //     role: "// full-stack developer · personal project",
    //     date: "In development",
    //     description: "A personal tool for building vocabulary from real-world text. Point your camera at any text and the app runs OCR entirely in the browser; no image is ever uploaded to a server. Tap words to save them as flashcards. Built with a privacy-first architecture; supports English, Finnish, and Spanish.",
    //     stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Tesseract.js", "Web Speech API"],
    //     inDevelopment: true,
    // },
];

export default function Projects() {
    return (
        <>
            <p className="font-mono text-[13px] text-[#6B6B6B] mb-4">{"// projects"}</p>

            <div className="space-y-4">
                {projects.map((p) => (
                    <article
                        key={p.title}
                        className="bg-[#F7F7F5] border border-[#E5E5E5] rounded-[14px] p-6"
                    >
                        <div className="flex items-baseline justify-between gap-4 flex-wrap mb-1">
                            <h3 className="text-[18px] font-semibold text-[#111111] m-0">{p.title}</h3>
                            <span className="font-mono text-[13px] text-[#6B6B6B] flex-shrink-0">{p.date}</span>
                        </div>

                        <p className="font-mono text-[13px] text-[#6B6B6B] mb-4">{p.role}</p>

                        <p className="text-[16px] text-[#6B6B6B] leading-[1.7] mb-4">{p.description}</p>

                        <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0 mb-4">
                            {p.stack.map((s) => (
                                <li
                                    key={s}
                                    className="font-mono text-[12px] px-2.5 py-1 rounded-md
                                               border border-[#E5E5E5] text-[#6B6B6B]"
                                >
                                    {s}
                                </li>
                            ))}
                        </ul>

                        {(p.sites || p.inDevelopment) && (
                            <div className="flex flex-wrap items-center gap-2">
                                {p.sites?.map((s) => (
                                    <a
                                        key={s.url}
                                        href={s.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="font-mono text-[12px] px-3 py-1.5 rounded-md
                                                   bg-brand/[0.07] border border-brand/[0.2] text-brand
                                                   hover:bg-brand/[0.12] transition-colors duration-150"
                                    >
                                        {s.label} ↗
                                    </a>
                                ))}
                                {p.inDevelopment && (
                                    <span className="font-mono text-[12px] text-[#6B6B6B]">
                                        {"// in development"}
                                    </span>
                                )}
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </>
    );
}
