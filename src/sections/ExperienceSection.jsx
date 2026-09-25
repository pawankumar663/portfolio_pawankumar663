import TitleHeader from "../components/TitleHeader.jsx";
import { expCards } from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { numberToWords } from "../utils/tools.js";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        endTrigger: "#experience",
        end: "bottom 72%",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, []);

  return (
    <section id="experience" className="experience-section w-full md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional work experience"
          sub={`💼 ${numberToWords(expCards.length)} companies — web, mobile & product delivery`}
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={card.id} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div>
                      <img
                        src={card.imgPath}
                        alt={card.company}
                        className="w-full max-h-40 object-contain"
                      />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        {card.logoPath ? (
                          <img
                            src={card.logoPath}
                            alt={`${card.company} logo`}
                            className="max-h-[72%] max-w-[80%] object-contain"
                          />
                        ) : (
                          <span className="text-sm font-semibold">{card.logoText}</span>
                        )}
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        {card.companyUrl ? (
                          <a
                            href={card.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white-50 mt-2 inline-block hover:text-white"
                          >
                            {card.company}
                          </a>
                        ) : (
                          <p className="text-white-50 mt-2">{card.company}</p>
                        )}
                        <p className="text-[#839CB5] italic mt-4">Responsibilities</p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((responsibility) => (
                            <li key={responsibility} className="text-lg">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
