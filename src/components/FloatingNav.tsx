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
                        bg-[#0a1120]/85 border border-white/[0.07]
                        rounded-2xl px-2 py-2.5 backdrop-blur-xl"
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
                                        ? "bg-brand/10 text-[#ddeeff] border border-brand/[0.22]"
                                        : "text-slate-400 hover:bg-white/[0.04] hover:text-[#ddeeff]"
                                }`}
                            >
                                <span className={`w-[7px] h-[7px] rounded-full flex-shrink-0 transition-all duration-200 ${
                                    activeId === it.id ? "bg-brand opacity-100" : "bg-slate-400 opacity-45"
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
