type Site    = { label: string; url: string };
type Project = { title: string; blurb: string; stack: string[]; img: string; link?: string; badge?: string; sites?: Site[] };

const projects: Project[] = [
    {
        title: "Okiniiri Web Platform",
        blurb: "A commercial full stack web system for a local food and hospitality business in Oulu. The system includes a customer facing restaurant site with table reservations and takeaway ordering, a grocery store site, an admin management panel, and a shared REST API backend. It supports Finnish and English. Built and maintained independently over more than a year, with ongoing work.",
        stack: ["Next.js", "TypeScript", "Express.js", "Node.js", "PostgreSQL", "Prisma", "Docker", "MUI", "i18n"],
        img:   "/okiniiri_project.png",
        badge: "Commercial · NDA",
        sites: [
            { label: "okiniiri.fi",  url: "https://okiniiri.fi" },
            { label: "restaurant",  url: "https://okiniiri.fi/restaurant" },
            { label: "milktea",     url: "https://okiniiri.fi/milktea" },
            { label: "market",      url: "https://okiniiri.fi/market" },
        ],
    },
    {
        title: "Vocabulary Learning App",
        blurb: "A full stack app for learning vocabulary from real world images. Point your camera at any text and the app runs OCR entirely in the browser. No image is ever uploaded. You tap words to select them and they are saved as flashcards in lists. Supports English, Finnish and Spanish recognition. Built with a privacy focused architecture and deployed on Vercel with Supabase.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Tesseract.js", "Web Speech API"],
        img:   "/vocabulary.jpg",
        badge: "In development",
    },
];

export default function Projects() {
    return (
        <>
            <div className="flex items-center gap-3.5 mb-7">
                <h2 className="text-[20px] font-bold tracking-[0.13em] uppercase text-brand whitespace-nowrap">
                    Projects
                </h2>
                <span className="flex-1 max-w-[160px] h-px bg-gradient-to-r from-brand/30 to-transparent" />
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-4">

                {projects.map((p) => (
                    <article
                        key={p.title}
                        className="bg-[#0f1929]/80 border border-white/[0.07] p-5 px-6
                                   rounded-[14px] backdrop-blur-sm transition-colors duration-300
                                   hover:border-brand/[0.18] flex flex-col"
                    >
                        <img
                            src={p.img}
                            alt=""
                            className="w-full h-[158px] object-cover rounded-[10px] mb-3.5 bg-brand/[0.05]"
                        />

                        <div className="flex items-center gap-2.5 flex-wrap mb-2">
                            <h3 className="text-[18px] font-bold text-[#ddeeff] m-0">{p.title}</h3>
                            {p.badge && (
                                <span className="text-[13px] font-semibold px-2.5 py-[3px] rounded-full
                                                 bg-brand/[0.08] border border-brand/[0.22] text-brand">
                                    {p.badge}
                                </span>
                            )}
                        </div>

                        <p className="text-[18px] text-slate-400 leading-[1.7] m-0 flex-1">{p.blurb}</p>

                        <ul className="flex flex-wrap gap-1.5 p-0 mt-3.5 mb-0 list-none">
                            {p.stack.map(s => (
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

                        {p.sites && (
                            <div className="mt-4 pt-4 border-t border-white/[0.06]">
                                <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-slate-500 mb-2">
                                    Live Sites
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {p.sites.map(s => (
                                        <a
                                            key={s.url}
                                            href={s.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-[15px] font-medium px-2.5 py-1 rounded-md
                                                       bg-white/[0.04] border border-white/[0.07] text-slate-300
                                                       transition-colors duration-200 hover:border-brand/40 hover:text-brand"
                                        >
                                            {s.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {p.link && (
                            <a
                                href={p.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 mt-3.5 text-[15px] font-semibold
                                           text-brand border-b border-transparent transition-colors duration-200
                                           hover:border-brand self-start"
                            >
                                View on GitHub
                            </a>
                        )}
                    </article>
                ))}

                {/* More card */}
                <article className="border border-dashed border-brand/[0.18] rounded-[14px]
                                    flex items-center justify-center text-center min-h-[230px]
                                    transition-all duration-300 hover:border-brand/40 hover:bg-brand/[0.03]">
                    <div className="flex flex-col items-center gap-3 p-6">
                        <h3 className="text-[18px] font-bold text-[#ddeeff] m-0">More in Development</h3>
                        <p className="text-[17px] text-slate-400 max-w-[210px] leading-relaxed m-0">
                            New projects are actively being built. See the latest work on GitHub.
                        </p>
                        <a
                            href="https://github.com/TaishengChen"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center h-[40px] px-4
                                       rounded-[10px] border border-white/[0.07] bg-transparent
                                       text-[#ddeeff] text-[15px] font-semibold mt-1
                                       transition-all duration-200 hover:bg-white/[0.05] hover:-translate-y-px"
                        >
                            GitHub Profile
                        </a>
                    </div>
                </article>

            </div>
        </>
    );
}
