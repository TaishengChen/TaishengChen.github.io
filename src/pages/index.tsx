import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonial from "@/components/Testimonial";
import FloatingNav, { SectionItem } from "@/components/FloatingNav";

export default function Home() {
    // list sections in DOM order for active highlighting
    const sections = useMemo<SectionItem[]>(
        () => [
            { id: "hero", label: "Home" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "experience", label: "Experience" },
            { id: "quote", label: "Quote" }
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
                <title>Taisheng Chen — Full-Stack Developer</title>
                <meta
                    name="description"
                    content="Portfolio of Taisheng Chen: backend-first full-stack developer."
                />
            </Head>

            {/* Floating right-side nav */}
            <FloatingNav items={sections} activeId={active} />

            <main className="container">
                <section id="hero"><Hero /></section>
                <section id="skills" className="section"><Skills /></section>
                <section id="projects" className="section"><Projects /></section>
                <section id="experience" className="section"><Experience /></section>
                <section id="quote" className="section"><Testimonial /></section>
            </main>

            <footer className="footer">
                <div className="container footer__inner">
                    <p>© {new Date().getFullYear()} Taisheng Chen</p>
                    <div className="footer__links">
                        <a href="mailto:ists.chen@gmail.com">ists.chen@gmail.com</a>
                        <a href="https://github.com/TaishengChen" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="/Taisheng-Chen-CV.pdf" target="_blank" rel="noreferrer">Resume (PDF)</a>
                    </div>
                </div>
            </footer>
        </>
    );
}
