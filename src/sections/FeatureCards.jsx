import { useState } from "react";
import TitleHeader from "../components/TitleHeader.jsx";
import { services } from "../constants/index.js";

const ICONS = {
  ai: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="service-icon">
      <path d="M12 3a4 4 0 0 1 4 4v1.1A4.5 4.5 0 0 1 19.5 12.5V14a2 2 0 0 1-2 2h-.5v1.5a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V16H6.5a2 2 0 0 1-2-2v-1.5A4.5 4.5 0 0 1 8 8.1V7a4 4 0 0 1 4-4Zm-3.5 9.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM9 19.5h6v1.2a.8.8 0 0 1-.8.8h-4.4a.8.8 0 0 1-.8-.8V19.5Z" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="service-icon">
      <path d="M7 2h7a2 2 0 0 1 2 2v11h-2V4H7v16h4v2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
      <rect x="13" y="10" width="8" height="12" rx="1.6" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="service-icon">
      <path d="M3 4h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm9 14v3m-4 0h8" />
    </svg>
  ),
  backend: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="service-icon">
      <path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Zm0 0v4c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 10v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4M4 14v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4" />
    </svg>
  ),
  payments: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="service-icon">
      <path d="M3 6h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm-1 3h20" />
    </svg>
  ),
  maps: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="service-icon">
      <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Zm0-9.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" fillRule="evenodd" />
    </svg>
  ),
  pos: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="service-icon">
      <path d="M4 3h16a1 1 0 0 1 1 1v11H3V4a1 1 0 0 1 1-1Zm6 13h4v5h-4v-5Zm-3 5h10" />
    </svg>
  ),
};

const FeatureCards = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="section-padding">
      <div className="w-full md:px-10 px-5">
        <TitleHeader title="What I build" sub="🛠️ Tap or hover a row to open it." />

        <div className="build-stack mt-16" role="list">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={service.title}
                role="listitem"
                className={`build-row card-border ${isOpen ? "is-open" : ""}`}
                onMouseEnter={() => setOpenIndex(index)}
              >
                <span className="build-row-watermark" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <button
                  type="button"
                  className="build-row-head"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(index)}
                >
                  <span className="build-row-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="build-row-title">{service.title}</span>
                  <span className="service-icon-wrap">{ICONS[service.icon]}</span>
                </button>

                <div className="build-row-body">
                  <div className="build-row-inner">
                    <p>{service.desc}</p>
                    <div className="build-row-tags">
                      {service.tags.map((tag) => (
                        <span key={tag} className="project-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
