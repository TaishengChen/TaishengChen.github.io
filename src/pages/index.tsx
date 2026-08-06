import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import FloatingNav, { type SectionItem } from "@/components/FloatingNav";

export default function Home() {
  const sections = useMemo<SectionItem[]>(
    () => [
      { id: "hero", label: "Home" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "education", label: "Education" },
    ],
    [],
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
      { root: null, rootMargin: "0px 0px -60% 0px", threshold: [0.2, 0.6, 1] },
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
        <title>Taisheng Chen | Junior Software Developer</title>

        <meta
          name="description"
          content="Portfolio of Taisheng Chen, a backend-oriented junior software developer based in Oulu, Finland, with experience in APIs, databases, business systems, testing, deployment, and production support."
        />
        <meta
          property="og:title"
          content="Taisheng Chen | Junior Software Developer"
        />
        <meta
          property="og:description"
          content="Backend-oriented software developer based in Oulu, Finland, with experience in APIs, databases, business systems, and production support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://taishengchen.github.io/" />
        <meta
          property="og:image"
          content="https://taishengchen.github.io/me.jpg"
        />

        <meta name="twitter:card" content="summary" />
      </Head>

      <FloatingNav items={sections} activeId={active} />

      <main className="max-w-[1080px] mx-auto px-6 min-h-full pb-10">
        <section id="hero">
          <Hero />
        </section>

        <section id="projects" className="my-20">
          <Projects />
        </section>

        <section id="experience" className="my-20">
          <Experience />
        </section>

        <section id="skills" className="my-20">
          <Skills />
        </section>

        <section id="education" className="my-20">
          <Education />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-[#E5E5E5]">
        <div className="max-w-[1080px] mx-auto px-6 py-10 flex flex-col gap-3 items-center text-center">
          <p className="text-[14px] text-[#6B6B6B]">
            Taisheng Chen · Oulu, Finland
          </p>

          <p className="text-[13px] text-[#6B6B6B]">
            Authorised to work full-time in Finland · Open to relocation
          </p>
          <div className="flex items-center gap-5 text-[14px] flex-wrap justify-center">
            <a
              href="mailto:ists.chen@gmail.com"
              className="text-[#6B6B6B] hover:text-brand transition-colors duration-200"
            >
              ists.chen@gmail.com
            </a>
            <a
              href="https://github.com/TaishengChen"
              target="_blank"
              rel="noreferrer"
              className="text-[#6B6B6B] hover:text-brand transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/taishengchen"
              target="_blank"
              rel="noreferrer"
              className="text-[#6B6B6B] hover:text-brand transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="/TaishengChen_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-[#6B6B6B] hover:text-brand transition-colors duration-200"
            >
              CV PDF
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
