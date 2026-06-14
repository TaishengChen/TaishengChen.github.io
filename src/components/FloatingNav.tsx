export type SectionItem = { id: string; label: string };

type Props = {
    items: SectionItem[];
    activeId?: string;
};

export default function FloatingNav({ items, activeId }: Props) {
    const handleClick = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${id}`);
    };

    return (
        <aside
            className="fixed right-5 top-1/2 -translate-y-1/2 z-20
                        bg-white/90 border border-[#E5E5E5]
                        rounded-2xl px-2 py-2.5 backdrop-blur-xl shadow-sm"
            aria-label="Section navigation"
        >
            <nav>
                <ul className="list-none p-0 m-0 space-y-1">
                    {items.map((it) => (
                        <li key={it.id}>
                            <a
                                href={`#${it.id}`}
                                onClick={handleClick(it.id)}
                                className={`flex items-center gap-2 text-[13px] px-2.5 py-[7px] rounded-[10px] transition-colors duration-150 ${
                                    activeId === it.id
                                        ? "bg-brand/10 text-brand"
                                        : "text-[#6B6B6B] hover:bg-[#F7F7F5] hover:text-[#111111]"
                                }`}
                            >
                                <span className={`w-[6px] h-[6px] rounded-full flex-shrink-0 transition-all duration-200 ${
                                    activeId === it.id ? "bg-brand" : "bg-[#E5E5E5]"
                                }`} />
                                <span>{it.label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
