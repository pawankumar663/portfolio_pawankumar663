import { useEffect, useState } from "react";
import { navLinks } from "../constants/index.js";

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Pawan Kumar
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={resumeHref}
          target="_blank"
          rel="noreferrer"
          className="cta-contact-wrapper"
        >
          <div className="contact-btn group">
            <div className="bg-circle" />
            <p className="text">Resume</p>
            <div className="arrow-wrapper">
              <img
                src={`${import.meta.env.BASE_URL}images/arrow-down.svg`}
                alt=""
              />
            </div>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
