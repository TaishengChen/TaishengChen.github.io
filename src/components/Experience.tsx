type Row = { role: string; org: string; period: string; details?: string };

const education: Row = {
    role: "B.Eng. Information Technology",
    org: "Oulu University of Applied Sciences",
    period: "Aug 2023 – Jun 2027",
    details: "Advanced SW Dev, Java, Cloud Services, Data Analysis"
};

const roles: Row[] = [
    { role: "HVAC Engineer", org: "Wuxi Yosun", period: "Apr 2022 – Jul 2023" },
    { role: "Environmental Engineer Assistant", org: "Kone Elevator", period: "Aug 2018 – Nov 2018" }
];

export default function Experience() {
    return (
        <>
            <h2 className="section__title">Experience</h2>
            <div className="exp">
                <div className="timeline card">
                    <div className="timeline__block">
                        <h3>Education</h3>
                        <p><strong>{education.role}</strong> — {education.org}</p>
                        <p className="muted">{education.period} · {education.details}</p>
                    </div>
                    <div className="timeline__block">
                        <h3>Other Experience</h3>
                        {roles.map((r) => (
                            <div key={r.role} className="timeline__item">
                                <p><strong>{r.role}</strong> — {r.org}</p>
                                <p className="muted">{r.period}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
