const groups: Record<string, string[]> = {
    Backend: ["Node.js", "Express.js", "Flask", "REST API", "Prisma"],
    Frontend: ["Next.js", "React Native", "Responsive UI"],
    Tools: ["Docker", "PostgreSQL", "Git", "GitHub Actions", "Swagger", "Linux"]
};

export default function Skills() {
    return (
        <>
            <h2 className="section__title">Skills</h2>
            <div className="skills">
                {Object.entries(groups).map(([title, list]) => (
                    <div key={title} className="skills__group card">
                        <div className="skills__groupTitle">{title}</div>
                        <ul className="stack">
                            {list.map((s) => <li key={s} className="tag">{s}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}
