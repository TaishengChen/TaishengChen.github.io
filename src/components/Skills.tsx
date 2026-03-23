const groups: Record<string, string[]> = {
    Frontend:         ["Next.js", "React", "TypeScript", "Tailwind CSS", "Material UI", "CSS Modules", "Responsive UI"],
    Backend:          ["Node.js", "Express.js", "REST API", "Prisma", "JWT Auth", "Supabase", "Flask"],
    "Tools & DevOps": ["Docker", "PostgreSQL", "Git", "GitHub Actions", "CI/CD", "Linux", "Swagger"],
    Languages:        ["English (B2)", "Mandarin (Native)", "Finnish (Beginner)"],
};

export default function Skills() {
    return (
        <>
            <div className="flex items-center gap-3.5 mb-7">
                <h2 className="text-[20px] font-bold tracking-[0.13em] uppercase text-brand whitespace-nowrap">
                    Skills
                </h2>
                <span className="flex-1 max-w-[160px] h-px bg-gradient-to-r from-brand/30 to-transparent" />
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3.5">
                {Object.entries(groups).map(([title, list]) => (
                    <div
                        key={title}
                        className="bg-[#0f1929]/80 border border-white/[0.07] p-5 px-6
                                   rounded-[14px] backdrop-blur-sm transition-colors duration-300
                                   hover:border-brand/[0.18]"
                    >
                        <p className="text-[16px] font-bold mb-2.5 text-[#ddeeff]">{title}</p>
                        <ul className="flex flex-wrap gap-1.5 p-0 m-0 list-none mt-2">
                            {list.map((s) => (
                                <li
                                    key={s}
                                    className="text-[15px] font-medium px-3 py-[5px] rounded-full
                                               bg-brand/[0.06] border border-brand/[0.15] text-slate-400
                                               transition-colors duration-200 hover:border-brand/40 hover:text-[#ddeeff]"
                                >
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}
