import type { MouseEvent } from "react";

export type SectionItem = {
  id: string;
  label: string;
};

type Props = {
  items: SectionItem[];
  activeId?: string;
};

export default function FloatingNav({ items, activeId }: Props) {
  const handleClick =
    (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      const element = document.getElementById(id);

      if (!element) {
        return;
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", `#${id}`);
    };

  return (
    <aside
      className="
        fixed right-5 top-1/2 z-20 -translate-y-1/2
        rounded-2xl border border-[#E5E5E5]
        bg-white/90 px-2 py-2.5 shadow-sm backdrop-blur-xl
        max-[900px]:hidden
      "
      aria-label="Section navigation"
    >
      <nav>
        <ul className="m-0 list-none space-y-1 p-0">
          {items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={handleClick(item.id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`
                    flex items-center gap-2 rounded-[10px]
                    px-2.5 py-[7px] text-[13px]
                    transition-colors duration-150
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-brand
                    ${
                      isActive
                        ? "bg-brand/10 text-brand"
                        : "text-[#6B6B6B] hover:bg-[#F7F7F5] hover:text-[#111111]"
                    }
                  `}
                >
                  <span
                    aria-hidden="true"
                    className={`
                      h-[6px] w-[6px] flex-shrink-0 rounded-full
                      transition-all duration-200
                      ${isActive ? "bg-brand" : "bg-[#E5E5E5]"}
                    `}
                  />

                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
