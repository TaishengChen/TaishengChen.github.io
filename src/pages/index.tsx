import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import Hero       from "@/components/Hero";
import Skills     from "@/components/Skills";
import Projects   from "@/components/Projects";
import Experience from "@/components/Experience";
import About      from "@/components/Testimonial";
import FloatingNav, { SectionItem } from "@/components/FloatingNav";

/* ── Footer icons ──────────────────────────────── */
function GitHubIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function EmailIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 7l10 7 10-7" />
        </svg>
    );
}

/* ── Page ───────────────────────────────────────── */
export default function Home() {
    const sections = useMemo<SectionItem[]>(
        () => [
            { id: "hero",       label: "Home"       },
            { id: "skills",     label: "Skills"     },
            { id: "projects",   label: "Projects"   },
            { id: "experience", label: "Experience" },
            { id: "about",      label: "About"      },
        ],
        []
    );

    const [active, setActive] = useState<string>("hero");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible?.target?.id) setActive(visible.target.id);
            },
            { root: null, rootMargin: "0px 0px -60% 0px", threshold: [0.2, 0.6, 1] }
        );
        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [sections]);

    return (
        <>
            <Head>
                <title>Taisheng Chen — Software Developer</title>
                <meta
                    name="description"
                    content="Portfolio of Taisheng Chen: software developer based in Oulu, Finland. Available from June 2026."
                />
            </Head>

            <FloatingNav items={sections} activeId={active} />

            <main className="max-w-[1080px] mx-auto px-6 min-h-full pb-10">
                <section id="hero"><Hero /></section>
                <section id="skills"     className="my-20"><Skills     /></section>
                <section id="projects"   className="my-20"><Projects   /></section>
                <section id="experience" className="my-20"><Experience /></section>
                <section id="about"      className="my-20"><About      /></section>
            </main>

            {/* ── Footer ── */}
            <footer className="mt-20 border-t border-white/[0.06] bg-[#0f1929]">
                <div className="max-w-[1080px] mx-auto px-6 py-14 flex flex-col items-center gap-6">

                    {/* Name */}
                    <p className="text-[17px] font-semibold text-slate-200 tracking-wide">
                        Taisheng Chen
                    </p>

                    {/* Social icons */}
                    <div className="flex items-center gap-5">
                        <a
                            href="https://github.com/TaishengChen"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="text-slate-500 hover:text-[#ddeeff] transition-colors duration-200"
                        >
                            <GitHubIcon />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/taishengchen"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="text-slate-500 hover:text-[#ddeeff] transition-colors duration-200"
                        >
                            <LinkedInIcon />
                        </a>
                        <a
                            href="mailto:ists.chen@gmail.com"
                            aria-label="Email"
                            className="text-slate-500 hover:text-[#ddeeff] transition-colors duration-200"
                        >
                            <EmailIcon />
                        </a>
                    </div>

                    {/* Links row */}
                    <div className="flex items-center gap-4 text-[15px] text-slate-500 flex-wrap justify-center">
                        <a
                            href="/Taisheng_Chen_Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-slate-300 transition-colors duration-200"
                        >
                            Resume PDF
                        </a>
                        <span aria-hidden>·</span>
                        <span>&copy; {new Date().getFullYear()} Taisheng Chen</span>
                    </div>

                </div>
            </footer>
        </>
    );
}
