type Project = { title: string; blurb: string; stack: string[]; img: string; link?: string };

const projects: Project[] = [
    {
        title: "Okiniiri Web Platform",
        blurb: "Full-stack restaurant system: bilingual UI, Express APIs, Prisma schema, Docker + CI/CD.",
        stack: ["Next.js", "Express", "TypeScript", "PostgreSQL", "Docker"],
        img: "/images/project-okiniiri.png",
    },
    {
        title: "X-it Escape Room App",
        blurb: "Company-facing mobile app with login, room management and map features.",
        stack: ["React Native", "Expo", "REST", "Fetch API"],
        img: "/images/project-xit.png",
    },
    {
        title: "Movie Info & Showtime",
        blurb: "APIs for search/filter using TMDB & Finnkino data; production-like repo structure.",
        stack: ["Express", "PostgreSQL", "Git"],
        img: "/images/project-movie.png",
    }
];

export default function Projects() {
    return (
        <>
            <h2 className="section__title">Projects</h2>
            <div className="grid">
                {projects.map((p) => (
                    <article key={p.title} className="card project">
                        <img src={p.img} alt="" className="project__img" />
                        <h3>{p.title}</h3>
                        <p>{p.blurb}</p>
                        <ul className="stack">{p.stack.map(s => <li key={s} className="tag">{s}</li>)}</ul>
                        {p.link && <a className="project__link" href={p.link} target="_blank" rel="noreferrer">Read More</a>}
                    </article>
                ))}
            </div>
        </>
    );
}
