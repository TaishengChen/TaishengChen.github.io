export default function Education() {
  return (
    <>
      <p className="font-mono text-[13px] text-[#6B6B6B] mb-4">
        {"// education"}
      </p>

      <div className="space-y-4">
        <div className="bg-[#F7F7F5] border border-[#E5E5E5] rounded-[14px] p-6">
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-1">
            <p className="text-[18px] font-semibold text-[#111111] m-0">
              Bachelor of Engineering, Information Technology
            </p>

            <span className="font-mono text-[13px] text-[#6B6B6B] flex-shrink-0">
              Aug 2023 - Apr 2026
            </span>
          </div>

          <p className="text-[15px] text-[#6B6B6B] mb-3">
            Oulu University of Applied Sciences
            <span className="font-mono text-[13px] ml-2">· GPA 4.53 / 5</span>
          </p>

          <ul className="space-y-1.5">
            <li className="text-[14px] text-[#6B6B6B] leading-[1.7]">
              240 ECTS degree completed approximately one year ahead of the
              original study plan.
            </li>
            <li className="text-[14px] text-[#6B6B6B] leading-[1.7]">
              Studies included software development, databases, REST APIs, web
              and mobile development, testing, and software engineering
              fundamentals.
            </li>
          </ul>
        </div>

        <div className="bg-[#F7F7F5] border border-[#E5E5E5] rounded-[14px] p-6">
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-1">
            <p className="text-[18px] font-semibold text-[#111111] m-0">
              Erasmus+ Mobile Development Project
            </p>

            <span className="font-mono text-[13px] text-[#6B6B6B] flex-shrink-0">
              Feb 2025 - Apr 2025
            </span>
          </div>

          <p className="text-[15px] text-[#6B6B6B] mb-3">
            Fontys University of Applied Sciences
          </p>

          <p className="text-[14px] text-[#6B6B6B] leading-[1.7]">
            Worked in an international agile team of eight on a React Native
            mobile application prototype, contributing to map views, venue
            listings, a profile screen, and REST API integration.
          </p>
        </div>
      </div>
    </>
  );
}
