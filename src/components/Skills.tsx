const groups: [string, string[]][] = [
    ["Languages",       ["TypeScript", "JavaScript", "Python", "SQL"]],
    ["Frontend",        ["Next.js", "React", "React Native", "Tailwind CSS"]],
    ["Backend",         ["Node.js", "Express.js", "REST API Design", "JWT Auth"]],
    ["Database",        ["PostgreSQL", "Prisma ORM"]],
    ["DevOps & Tools",  ["Docker", "GitHub Actions", "Linux", "Cloudflare", "Swagger/OpenAPI"]],
    ["Spoken Languages", ["English (B2)", "Mandarin (native)", "Finnish (beginner)"]],
];

export default function Skills() {
    return (
        <>
            <p className="font-mono text-[13px] text-[#6B6B6B] mb-4">{"// skills"}</p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
                {groups.map(([title, list]) => (
                    <div
                        key={title}
                        className="bg-[#F7F7F5] border border-[#E5E5E5] rounded-[14px] p-5"
                    >
                        <p className="text-[14px] font-semibold text-[#111111] mb-3">{title}</p>
                        <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0">
                            {list.map((s) => (
                                <li
                                    key={s}
                                    className="font-mono text-[12px] px-2.5 py-1 rounded-md
                                               border border-[#E5E5E5] text-[#6B6B6B]"
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
