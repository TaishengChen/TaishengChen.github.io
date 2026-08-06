type Item = {
  role: string;
  org: string;
  period: string;
  bullets?: string[];
};

const items: Item[] = [
  {
    role: "Freelance Software Developer",
    org: "404found · Oulu, Finland",
    period: "Mar 2025 - Present",
    bullets: [
      "Worked on a production restaurant platform supporting customer-facing and internal operational workflows.",
      "Contributed to requirements clarification, business rules, frontend and backend integration, manual testing, deployment support, troubleshooting, and production maintenance.",
    ],
  },
  {
    role: "HVAC Engineer",
    org: "Industrial and building-services projects · Wuxi, China",
    period: "2019 - 2023",
    bullets: [
      "Worked on technical requirements, detailed engineering, site surveys, cross-discipline coordination, issue follow-up, and project delivery.",
      "Developed a structured approach to clarifying requirements, understanding system dependencies, documenting decisions, and verifying results.",
    ],
  },
];

export default function Experience() {
  return (
    <>
      <h2 className="mb-4 font-mono text-[13px] font-normal text-[#6B6B6B]">
        {"// experience"}
      </h2>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.role}
            className="bg-[#F7F7F5] border border-[#E5E5E5] rounded-[14px] p-6"
          >
            <div className="flex items-baseline justify-between gap-4 flex-wrap mb-1">
              <h3 className="m-0 text-[18px] font-semibold text-[#111111]">
                {item.role}
              </h3>
              <span className="font-mono text-[13px] text-[#6B6B6B] flex-shrink-0">
                {item.period}
              </span>
            </div>

            <p className="text-[15px] text-[#6B6B6B] mb-3">{item.org}</p>

            {item.bullets && (
              <ul className="list-none p-0 m-0 space-y-1.5">
                {item.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative pl-4 text-[15px] text-[#6B6B6B] leading-[1.65]"
                  >
                    <span className="absolute left-0 top-[1px] text-brand">
                      -
                    </span>
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
