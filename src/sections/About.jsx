import TitleHeader from "../components/TitleHeader.jsx";
import {
  about,
  certifications,
  education,
  yearsOfExperience,
} from "../constants/index.js";

const metrics = [
  { value: `${yearsOfExperience}+`, label: "Years shipping" },
  { value: "5", label: "Companies" },
  { value: "18+", label: "Products" },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="w-full md:px-10 px-5">
        <TitleHeader
          title="About me"
          sub="👋 Builder of web, mobile, and AI products that shipped"
        />

        <div className="about-bento mt-12 md:mt-16">
          <article className="about-intro card-border">
            <span className="about-watermark" aria-hidden="true">
              PK
            </span>

            <div className="about-intro-top">
              <div className="about-portrait">
                <img
                  src={`${import.meta.env.BASE_URL}images/profile_img.png`}
                  alt=""
                />
              </div>
              <div>
                <p className="about-kicker">{about.location}</p>
                <h3>{about.name}</h3>
                <p className="about-role">{about.title}</p>
              </div>
            </div>

            <p className="about-summary">{about.summary}</p>

            <div className="about-metrics">
              {metrics.map((item) => (
                <div key={item.label} className="about-metric">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="about-pills">
              <a href={about.emailHref}>{about.email}</a>
              <a href={about.phoneHref}>{about.phone}</a>
              <span>{about.location}</span>
            </div>
          </article>

          <div className="about-focus">
            {about.focus.map((item, index) => (
              <article key={item} className="about-focus-tile card-border">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>

          <div className="about-side">
            <div className="about-edu card-border">
              <p className="about-panel-kicker">Education</p>
              <ol className="about-edu-list">
                {education.map((item) => (
                  <li key={item.school} className="about-edu-item">
                    <p className="about-edu-dates">{item.dates}</p>
                    <p className="about-edu-degree">{item.degree}</p>
                    <p className="about-edu-school">{item.school}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="about-certs card-border">
              <p className="about-panel-kicker">Certifications</p>
              <ul className="about-cert-list">
                {certifications.map((item) => (
                  <li key={item.name} className="about-cert">
                    <p>{item.name}</p>
                    <span>{item.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
