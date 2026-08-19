import { useRef } from "react";
import Button from "../components/Button.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import { yearsOfExperience } from "../constants/index.js";

const Hero = () => {
  const imageRef = useRef(null);
  const headOneRef = useRef(null);
  const headTwoRef = useRef(null);
  const headThreeRef = useRef(null);

  useGSAP(() => {
    const animList = [
      headOneRef.current,
      headTwoRef.current,
      headThreeRef.current,
    ];
    animList.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 2.5,
          delay: 0.3 * (index + 1),
          ease: "power2.inOut",
        }
      );
    });
  });

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      {
        y: 50,
        opacity: 0,
        rotationY: 90,
        transformPerspective: 800,
        transformOrigin: "center",
      },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        stagger: 0.2,
        duration: 2.5,
        delay: 0.3 * 2,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src={`${import.meta.env.BASE_URL}images/bg.png`} alt="" />
      </div>

        <div className="w-11/12 max-w-3xl text-center mx-auto min-h-[100svh] flex flex-col items-center justify-center gap-3 md:gap-4 pt-24 md:pt-28 pb-8">
        <div className="transition ease-in-out duration-500 motion-safe:hover:scale-105">
          <div
            ref={imageRef}
            className="rounded-full md:w-50 w-28 sm:w-32 p-1 animate-rotate-border bg-conic/[from_var(--border-angle)] from-[#d9ecff] via-[#6a329f] to-[#d9ecff]"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/profile_img.png`}
              alt="Portrait of Pawan Kumar"
              className="rounded-full md:w-48 w-24 sm:w-32"
            />
          </div>
        </div>
        <h3
          ref={headOneRef}
          className="flex items-end gap-2 text-lg sm:text-xl md:text-2xl mb-1 md:mb-3 font-Ovo"
        >
          Hi! I&apos;m Pawan Kumar
          <img
            src={`${import.meta.env.BASE_URL}images/hand-icon.png`}
            alt=""
            className="w-5 sm:w-6"
          />
        </h3>
        <h1
          ref={headTwoRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[66px] font-Ovo leading-tight px-1"
        >
          Full-stack web &amp; mobile developer
        </h1>
        <p ref={headThreeRef} className="max-w-2xl mx-auto font-Ovo text-white-50 text-sm sm:text-base px-1">
          React, React Native, and Node.js — websites, APIs, and store-released
          iOS/Android apps. {yearsOfExperience}+ years shipping e-commerce, hospitality SaaS,
          rentals, and appointment products.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 mt-4 w-full max-w-lg">
          <Button text="View work" id="work" className="w-full sm:flex-1" />
          <Button text="Contact" id="contact" className="w-full sm:flex-1" />
        </div>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
