import { useEffect, useMemo, useState } from "react";

const ProjectModal = ({ project, onClose }) => {
  const images = useMemo(() => {
    if (!project) return [];
    const list = project.gallery?.length ? project.gallery : [];
    const paths = [project.imgPath, ...list].filter(Boolean);
    return [...new Set(paths)];
  }, [project]);

  const [activeImage, setActiveImage] = useState(project?.imgPath || "");

  useEffect(() => {
    setActiveImage(project?.imgPath || project?.gallery?.[0] || "");
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="project-modal card-border"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        <div
          className="project-modal-cover"
          style={{ backgroundColor: project.cover || "#1c1c21" }}
        >
          {activeImage ? (
            <img src={activeImage} alt={`${project.title} screenshot`} />
          ) : (
            <p className="text-white-50 text-lg px-6">{project.subtitle}</p>
          )}
        </div>

        {images.length > 1 && (
          <div className="project-modal-gallery" aria-label="Project images">
            {images.map((src) => (
              <button
                key={src}
                type="button"
                className={src === activeImage ? "active" : ""}
                onClick={() => setActiveImage(src)}
                aria-label="Show this project image"
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        )}

        <div className="p-6 md:p-8 space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <span key={category} className="project-chip">
                {category}
              </span>
            ))}
          </div>

          <div>
            <h3 id="project-modal-title" className="text-2xl md:text-3xl font-semibold">
              {project.title}
            </h3>
            <p className="text-blue-50 mt-2">{project.role}</p>
            {project.liveUrl && (
              <a
                className="project-modal-link"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit live site ↗
              </a>
            )}
          </div>

          <div>
            <p className="text-sm uppercase tracking-wide text-blue-50 mb-3">
              About / case study
            </p>
            <p className="text-white-50 text-lg leading-relaxed">
              {project.about || project.summary}
            </p>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wide text-blue-50 mb-3">
              Technology
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="project-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-wide text-blue-50 mb-3">
              What I built
            </p>
            <ul className="list-disc ms-5 space-y-2 text-white-50">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
