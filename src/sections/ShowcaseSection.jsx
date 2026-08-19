import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader.jsx";
import ProjectModal from "../components/ProjectModal.jsx";
import { projectFilters, projects } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const previewRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeId, setActiveId] = useState(projects[0]?.id);
  const [caseStudy, setCaseStudy] = useState(null);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  const activeProject =
    visibleProjects.find((project) => project.id === activeId) || visibleProjects[0];

  useEffect(() => {
    setActiveId(visibleProjects[0]?.id);
  }, [activeFilter, visibleProjects]);

  useGSAP(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.2 });
  }, []);

  useGSAP(
    () => {
      if (!previewRef.current) return;
      gsap.fromTo(
        previewRef.current,
        { opacity: 0.35, y: 16 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
      );
    },
    { dependencies: [activeProject?.id] }
  );

  const onListKeyDown = (event) => {
    const index = visibleProjects.findIndex((project) => project.id === activeProject?.id);
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      const next = visibleProjects[(index + 1) % visibleProjects.length];
      setActiveId(next.id);
    }
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      const prev = visibleProjects[(index - 1 + visibleProjects.length) % visibleProjects.length];
      setActiveId(prev.id);
    }
    if (event.key === "Enter" && activeProject) {
      setCaseStudy(activeProject);
    }
  };

  return (
    <section id="work" ref={sectionRef} className="section-padding">
      <div className="w-full md:px-10 px-5">
        <TitleHeader
          title="Selected work"
          sub="🧩 Hover a title to preview. Open a case study for the full story."
        />

        <div className="project-filters" role="tablist" aria-label="Filter projects">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              className={`project-filter ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {activeProject && (
          <div className="work-stage">
            <div
              className="work-index"
              role="listbox"
              aria-label="Projects"
              tabIndex={0}
              onKeyDown={onListKeyDown}
            >
              {visibleProjects.map((project, index) => {
                const isActive = project.id === activeProject.id;
                return (
                  <button
                    key={project.id}
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    className={`work-index-item ${isActive ? "is-active" : ""}`}
                    onMouseEnter={() => setActiveId(project.id)}
                    onFocus={() => setActiveId(project.id)}
                    onClick={() => setActiveId(project.id)}
                  >
                    <span className="work-index-num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="work-index-copy">
                      <span className="work-index-title">{project.title}</span>
                      <span className="work-index-meta">{project.categories.join(" / ")}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <article ref={previewRef} className="work-preview card-border">
              <button
                type="button"
                className="work-preview-media"
                style={{ backgroundColor: activeProject.cover || "#1c1c21" }}
                onClick={() => setCaseStudy(activeProject)}
                aria-label={`Open ${activeProject.title} case study`}
              >
                {activeProject.imgPath ? (
                  <img
                    key={activeProject.imgPath}
                    src={activeProject.imgPath}
                    alt={`${activeProject.title} preview`}
                  />
                ) : (
                  <span className="text-white-50 px-6">{activeProject.subtitle}</span>
                )}
                <div className="work-preview-badges">
                  {activeProject.featured && <span className="project-featured-badge">Featured</span>}
                  {activeProject.liveUrl && <span className="project-live-badge">Live</span>}
                </div>
              </button>

              <div className="work-preview-body">
                <p className="work-preview-kicker">{activeProject.role}</p>
                <h3>{activeProject.title}</h3>
                <p className="work-preview-summary">{activeProject.summary}</p>
                <div className="project-card-stack">
                  {activeProject.stack.map((item) => (
                    <span key={item} className="project-chip">
                      {item}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  className="work-preview-cta"
                  onClick={() => setCaseStudy(activeProject)}
                >
                  View case study
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          </div>
        )}
      </div>

      <ProjectModal project={caseStudy} onClose={() => setCaseStudy(null)} />
    </section>
  );
};

export default ShowcaseSection;
