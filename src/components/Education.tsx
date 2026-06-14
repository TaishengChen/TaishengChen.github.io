export default function Education() {
    return (
        <>
            <p className="font-mono text-[13px] text-[#6B6B6B] mb-4">// education</p>

            <div className="bg-[#F7F7F5] border border-[#E5E5E5] rounded-[14px] p-6">
                <div className="flex items-baseline justify-between gap-4 flex-wrap mb-1">
                    <p className="text-[18px] font-semibold text-[#111111] m-0">
                        BEng Information Technology (Web Development)
                    </p>
                    <span className="font-mono text-[13px] text-[#6B6B6B] flex-shrink-0">
                        Aug 2023 - Apr 2026
                    </span>
                </div>

                <p className="text-[15px] text-[#6B6B6B] mb-3">
                    Oulu University of Applied Sciences (OAMK)
                    <span className="font-mono text-[13px] ml-2">· GPA 4.53 / 5</span>
                </p>

                <p className="text-[14px] text-[#6B6B6B] leading-[1.7] m-0">
                    <span className="font-medium text-[#111111]">Relevant coursework: </span>
                    Advanced Software Development · Data Structures and Algorithms · Software Testing · Cloud Services · Web Development Frameworks
                </p>
            </div>
        </>
    );
}
