import { about, socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center gap-1">
          <a href={about.emailHref} className="text-center md:text-start hover:text-white">
            {about.email}
          </a>
          <a href={about.phoneHref} className="text-center md:text-start hover:text-white">
            {about.phone}
          </a>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg) => (
            <a
              href={socialImg.link}
              key={socialImg.name}
              className="icon"
              target="_blank"
              rel="noreferrer"
              aria-label={socialImg.name}
            >
              <img src={socialImg.imgPath} alt="" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Pawan Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
