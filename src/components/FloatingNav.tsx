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
        <aside className="floatnav" aria-label="Section navigation">
            <nav>
                <ul>
                    {items.map((it) => (
                        <li key={it.id}>
                            <a
                                href={`#${it.id}`}
                                onClick={handleClick(it.id)}
                                className={activeId === it.id ? "active" : ""}
                            >
                                <span className="dot" />
                                {it.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
