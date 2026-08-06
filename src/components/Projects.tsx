type Site = {
  label: string;
  url: string;
};

type Project = {
  title: string;
  role: string;
  date: string;
  summary: string;
  contributions: string[];
  outcome?: string;
  stack: string[];
  sites?: Site[];
};

const projects: Project[] = [
  {
    title: "Okiniiri Restaurant Platform",
    role: "// freelance software project",
    date: "Mar 2025 - Present",
    summary:
      "A production restaurant platform supporting table reservations, takeaway content, announcements, customer and administrator workflows, email notifications, and day-to-day restaurant operations.",
    contributions: [
      "Translated restaurant needs into concrete workflows, business rules, and interface requirements.",
      "Integrated and manually tested features across frontend, backend, database, and deployment contexts.",
      "Investigated issues using Browser DevTools, Swagger, Postman, available logs, and database records.",
      "Supported deployment, release checks, troubleshooting, production maintenance, and follow-up improvements.",
    ],
    outcome:
      "The reservation system had processed more than 2,000 non-cancelled reservations by August 2026.",
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Nginx",
    ],
    sites: [
      {
        label: "Live site",
        url: "https://okiniiri.fi/restaurant/en",
      },
      {
        label: "Sanitized source",
        url: "https://github.com/restaurant-manage-system",
      },
    ],
  },
];

export default function Projects() {
  return (
    <>
      <p className="mb-4 font-mono text-[13px] text-[#6B6B6B]">
        {"// projects"}
      </p>

      <div className="space-y-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-[14px] border border-[#E5E5E5] bg-[#F7F7F5] p-6"
          >
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="m-0 text-[18px] font-semibold text-[#111111]">
                {project.title}
              </h3>

              <span className="flex-shrink-0 font-mono text-[13px] text-[#6B6B6B]">
                {project.date}
              </span>
            </div>

            <p className="mb-4 font-mono text-[13px] text-[#6B6B6B]">
              {project.role}
            </p>

            <p className="mb-4 text-[16px] leading-[1.7] text-[#6B6B6B]">
              {project.summary}
            </p>

            <div className="mb-5">
              <p className="mb-2 text-[14px] font-semibold text-[#111111]">
                My contributions
              </p>

              <ul className="m-0 list-none space-y-2 p-0">
                {project.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="relative pl-5 text-[15px] leading-[1.65] text-[#6B6B6B]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 text-brand"
                    >
                      –
                    </span>

                    {contribution}
                  </li>
                ))}
              </ul>
            </div>

            {project.outcome && (
              <p className="mb-5 text-[15px] leading-[1.65] text-[#6B6B6B]">
                <span className="font-semibold text-[#111111]">
                  In production:
                </span>{" "}
                {project.outcome}
              </p>
            )}

            <div className="mb-5">
              <p className="mb-2 text-[14px] font-semibold text-[#111111]">
                Project technologies
              </p>

              <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
                {project.stack.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-[#E5E5E5] px-2.5 py-1 font-mono text-[12px] text-[#6B6B6B]"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>

            {project.sites && project.sites.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                {project.sites.map((site) => (
                  <a
                    key={site.url}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${site.label} for ${project.title} (opens in a new tab)`}
                    className="rounded-md border border-brand/[0.2] bg-brand/[0.07] px-3 py-1.5 font-mono text-[12px] text-brand transition-colors duration-150 hover:bg-brand/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    {site.label} ↗
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
