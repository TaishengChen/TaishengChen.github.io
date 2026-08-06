const groups: [string, string[]][] = [
  ["Programming", ["TypeScript", "JavaScript", "Python", "SQL"]],
  [
    "Backend and data",
    [
      "Node.js",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "Prisma",
      "Flask",
      "SQLite",
    ],
  ],
  [
    "Web project experience",
    ["Next.js", "React", "React Native", "Frontend-backend integration"],
  ],
  [
    "Testing and troubleshooting",
    [
      "Swagger",
      "Postman",
      "Browser DevTools",
      "Manual integration testing",
      "Release verification",
    ],
  ],
  [
    "Tools and delivery",
    [
      "Git",
      "Docker",
      "Docker Compose",
      "Nginx",
      "Linux command line",
      "GitHub Actions",
    ],
  ],
  [
    "Languages",
    [
      "Chinese — native",
      "English — professional working proficiency",
      "Finnish — basic",
    ],
  ],
];

export default function Skills() {
  return (
    <>
      <p className="font-mono text-[13px] text-[#6B6B6B] mb-4">{"// skills"}</p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {groups.map(([title, list]) => (
          <div
            key={title}
            className="min-w-0 rounded-[14px] border border-[#E5E5E5] bg-[#F7F7F5] p-5"
          >
            <p className="mb-3 text-[14px] font-semibold text-[#111111]">
              {title}
            </p>

            <ul className="m-0 flex min-w-0 list-none flex-wrap items-start gap-1.5 p-0">
              {list.map((skill) => (
                <li
                  key={skill}
                  className="
                    max-w-[180px]
                    break-words
                    whitespace-normal
                    rounded-md
                    border border-[#E5E5E5]
                    px-2.5 py-1
                    font-mono text-[12px]
                    leading-[1.45]
                    text-[#6B6B6B]
                  "
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
