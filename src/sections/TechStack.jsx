import React from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import {techStackIcons, techStackImgs, toolkitExtras} from "../constants/index.js";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";


const TechStack = () => {
    useGSAP(()=>{
        gsap.fromTo('.tech-card',{y:50,opacity:0},{
            y:0,
            opacity:1,
            duration:1,
            ease:'power2.out',
            stagger: 0.2,
            scrollTrigger:{
                trigger:'#skills',
                start:'top center '
            }
        })
    })

    return (
        <div id="skills" className={"flex-center section-padding"}>
           <div>
               <TitleHeader
               title={"My preferred tech stack"}
               sub={"🤝 Web, mobile, backend, data & delivery"}
               />
               <div className="toolkit-extras" aria-label="Also used in shipped work">
                   {toolkitExtras.map((item) => (
                       <span key={item} className="project-chip">{item}</span>
                   ))}
               </div>
               {/*<div className={"tech-grid"}>*/}
          {/*         /!*{techStackIcons.map((icon) => (*!/*/}
          {/*         /!*    <div key={icon.name} className={"card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"}>*!/*/}
          {/*         /!*        <div className={"tech-card-animated-bg"}/>*!/*/}
          {/*         /!*        <div className={"tech-card-content"}>*!/*/}
          {/*         /!*             <div className={"tech-icon-wrapper"}>*!/*/}
          {/*         /!*                 <TechIcon model={icon}/>*!/*/}
          {/*         /!*             </div>*!/*/}
          {/*         /!*            <div className={"padding-x w-full"}>*!/*/}
          {/*         /!*                <p>{icon.name}</p>*!/*/}
          {/*         /!*            </div>*!/*/}
          {/*         /!*        </div>*!/*/}
          {/*         /!*    </div>*!/*/}
          {/*         /!*))}*!/*/}
          {/*         /!* This is for the img part *!/*/}
          {/*          {techStackImgs.map((techStackIcon, index) => (*/}
          {/*  <div*/}
          {/*    key={index}*/}
          {/*    className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"*/}
          {/*  >*/}
          {/*    <div className="tech-card-animated-bg" />*/}
          {/*    <div className="tech-card-content">*/}
          {/*      <div className="tech-icon-wrapper">*/}
          {/*        <img src={techStackIcon.imgPath} alt="" />*/}
          {/*      </div>*/}
          {/*      <div className="padding-x w-full">*/}
          {/*        <p>{techStackIcon.name}</p>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*))}*/}
          {/* </div>*/}
               <div
                   className="flex w-full flex-col lg:flex-row justify-center items-center gap-20 mt-20"
               >

                   <div className="w-full flex flex-col items-center space-y-20">
                       <div
                           className=" tech-card h-full w-full flex flex-col justify-center space-y-16 divide-opacity-30  divide-white md:space-y-0 md:divide-x md:flex-row"
                       >
                           <div
                               className="h-full w-full flex flex-col items-center space-y-10"
                               data-aos="fade-left"
                           >
                               <div className="flex flex-col items-center space-y-5">
                                   <svg
                                       aria-hidden="true"
                                       focusable="false"
                                       data-prefix="fas"
                                       data-icon="code"
                                       className="svg-inline--fa fa-code fa-2x text-primary"
                                       role="img"
                                       width="90"
                                       height="90"
                                       xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 640 512"
                                   >
                                       <path
                                           fill="currentColor"
                                           d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                                       ></path>
                                   </svg>
                                   <p className="text-xl font-bold">Frontend Dev</p>
                               </div>
                               <div
                                   className="w-4/5 flex flex-col items-center space-y-10"
                               >
                                   <div
                                       className="w-full flex flex-col items-center space-y-10"
                                       data-aos="zoom-in-up"
                                   >
                                       <p className="text-primary capitalize">
                                           frameworks &amp; runtime
                                       </p>
                                       <div
                                           className="w-full grid grid-cols-2 grid-rows-1 gap-y-10 place-items-center "
                                       >
                                           <div
                                               className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                           >
                                               <div className="h-12 flex items-center scale-75">
                                                   <div>
                                                       <svg
                                                           width="55px"
                                                           height="55px"
                                                           viewBox="0 0 32 32"
                                                           xmlns="http://www.w3.org/2000/svg"
                                                           fill="currentColor"
                                                       >
                                                           <path
                                                               d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"
                                                           ></path>
                                                       </svg>
                                                   </div>
                                               </div>
                                               <p>Next.js</p>
                                           </div>

                                           <div
                                               className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                           >
                                               <div className="h-12 flex items-center scale-75">
                                                   <div>
                                                       <svg
                                                           aria-hidden="true"
                                                           focusable="false"
                                                           data-prefix="fab"
                                                           data-icon="react"
                                                           width="50px"
                                                           height="50px"
                                                           className="svg-inline--fa fa-react fa-w-16 fa-3x"
                                                           role="img"
                                                           xmlns="http://www.w3.org/2000/svg"
                                                           viewBox="0 0 512 512"
                                                       >
                                                           <path
                                                               fill="currentColor"
                                                               d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
                                                           ></path>
                                                       </svg>
                                                   </div>
                                               </div>
                                               <p>React Native</p>
                                           </div>
                                       </div>
                                   </div>
                                   <div
                                       className="w-full flex flex-col items-center space-y-10"
                                       data-aos="zoom-in-up"
                                   >
                                       <p className="text-primary capitalize">languages</p>
                                       <div
                                           className="w-full grid grid-cols-2  gap-y-10 place-items-center"
                                       >
                                           <div
                                               className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                           >
                                               <div className="h-12 flex items-center scale-75">
                                                   <div>
                                                       <svg
                                                           width="50"
                                                           height="50"
                                                           viewBox="0 0 128 128"
                                                       >
                                                           <path
                                                               fill="currentColor"
                                                               d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"
                                                           ></path>
                                                       </svg>
                                                   </div>
                                               </div>
                                               <p>HTML</p>
                                           </div>
                                           <div
                                               className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                           >
                                               <div className="h-12 flex items-center scale-75">
                                                   <div>
                                                       <svg
                                                           width="50"
                                                           height="50"
                                                           viewBox="0 0 128 128"
                                                       >
                                                           <path
                                                               fill="currentColor"
                                                               d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"
                                                           ></path>
                                                       </svg>
                                                   </div>
                                               </div>
                                               <p>CSS</p>
                                           </div>

                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div
                               className="h-full w-full flex flex-col items-center space-y-10"
                               data-aos="fade-right"
                           >
                               <div className="flex flex-col items-center space-y-5">
                                   <svg
                                       aria-hidden="true"
                                       focusable="false"
                                       data-prefix="fas"
                                       data-icon="terminal"
                                       className="svg-inline--fa fa-terminal fa-2x text-primary"
                                       role="img"
                                       width="90"
                                       height="90"
                                       xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 576 512"
                                   >
                                       <path
                                           fill="currentColor"
                                           d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
                                       ></path>
                                   </svg>
                                   <p className="text-xl font-bold">Backend Dev</p>
                               </div>
                               <div
                                   className="w-4/5 flex flex-col items-center space-y-10"
                               >
                                   <div
                                       className="w-full flex flex-col items-center space-y-10"
                                       data-aos="zoom-in-up"
                                   >
                                       <p className="text-primary capitalize">
                                           frameworks &amp; runtime
                                       </p>
                                       <div
                                           className="w-full grid grid-cols-2 grid-rows-1 gap-y-10 place-items-center "
                                       >
                                           <div
                                               className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                           >
                                               <div className="h-12 flex items-center scale-75">
                                                   <div>
                                                       <svg
                                                           xmlns="http://www.w3.org/2000/svg"
                                                           width="50"
                                                           height="50"
                                                           viewBox="0 0 32 32"
                                                           preserveAspectRatio="xMidYMid"
                                                           fill="currentColor"
                                                       >
                                                           <path
                                                               d="M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z"
                                                           ></path>
                                                       </svg>
                                                   </div>
                                               </div>
                                               <p>Node.js</p>
                                           </div>
                                           <div
                                               className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                           >
                                               <div className="h-12 flex items-center scale-75">
                                                   <div>
                                                       <svg
                                                           version="1.0"
                                                           xmlns="http://www.w3.org/2000/svg"
                                                           width="64"
                                                           height="64"
                                                           viewBox="0 0 246.000000 205.000000"
                                                           preserveAspectRatio="xMidYMid meet"
                                                           fill="currentColor"
                                                       >
                                                           <g
                                                               transform="translate(0.000000,205.000000) scale(0.100000,-0.100000)"
                                                               stroke="none"
                                                           >
                                                               <path
                                                                   d="M1035 1905 c-90 -19 -212 -69 -285 -117 -92 -59 -237 -208 -295 -301 -93 -151 -131 -311 -122 -512 8 -203 66 -354 195 -516 360 -451 1043 -449 1408 4 125 157 183 313 191 523 9 210 -33 367 -142 529 -135 202 -339 342 -566 390 -87 18 -301 19 -384 0z m-18 -561 c58 -28 93 -64 127 -133 25 -49 46 -133 46 -181 l0 -30 -250 0 -250 0 0 -43 c0 -128 134 -216 269 -177 39 11 89 54 102 88 7 19 16 22 64 22 54 0 56 -1 49 -22 -24 -80 -72 -134 -149 -170 -72 -33 -209 -32 -279 2 -65 31 -113 81 -144 149 -37 81 -43 232 -13 313 70 183 257 263 428 182z m444 -84 c45 -67 85 -120 90 -118 5 2 46 55 91 118 l83 115 68 3 c37 2 67 0 67 -4 0 -4 -52 -76 -115 -160 -63 -85 -115 -158 -115 -164 0 -6 59 -91 130 -190 72 -99 130 -183 130 -185 0 -3 -33 -5 -73 -5 l-73 0 -94 140 c-51 77 -97 140 -101 140 -4 0 -49 -63 -100 -140 l-94 -139 -67 -1 c-38 0 -68 3 -68 6 0 4 54 83 120 175 66 93 123 175 126 183 3 8 -44 80 -110 171 -64 86 -116 161 -116 166 0 5 31 9 70 9 l69 0 82 -120z"
                                                               ></path>
                                                               <path
                                                                   d="M855 1275 c-5 -2 -22 -6 -37 -9 -58 -13 -128 -98 -128 -156 0 -19 6 -20 190 -20 105 0 190 4 190 9 0 18 -24 78 -42 104 -30 42 -133 85 -173 72z"
                                                               ></path>
                                                           </g>
                                                       </svg>
                                                   </div>
                                               </div>
                                               <p>Express.js</p>
                                           </div>

                                       </div>
                                   </div>
                                   <div
                                       className="w-full flex flex-col items-center space-y-10"
                                       data-aos="zoom-in-up"
                                   >
                                       <p className="text-primary capitalize">languages</p>
                                       <div
                                           className="w-full grid grid-cols-2  gap-y-10 place-items-center "
                                       >
                                           <div
                                               className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                           >
                                               <div className="h-12 flex items-center scale-75">
                                                   <div>
                                                       <svg
                                                           className="rounded-md ml-1 mt-1 text-center"
                                                           width="45px"
                                                           height="45px"
                                                           viewBox="0 0 24 24"
                                                           role="img"
                                                           xmlns="http://www.w3.org/2000/svg"
                                                           fill="currentColor"
                                                       >
                                                           <title>TypeScript icon</title>
                                                           <path
                                                               d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z"
                                                           ></path>
                                                       </svg>
                                                   </div>
                                               </div>
                                               <p>TypeScript</p>
                                           </div>
                                           <div
                                               className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                           >
                                               <div className="h-12 flex items-center scale-75">
                                                   <div>
                                                       <svg
                                                           aria-hidden="true"
                                                           focusable="false"
                                                           data-prefix="fab"
                                                           data-icon="js-square"
                                                           width="45px"
                                                           height="45px"
                                                           className="svg-inline--fa fa-js-square fa-w-14 fa-3x"
                                                           role="img"
                                                           xmlns="http://www.w3.org/2000/svg"
                                                           viewBox="0 0 448 512"
                                                           fill="currentColor"
                                                       >
                                                           <path
                                                               fill="currentColor"
                                                               d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
                                                           ></path>
                                                       </svg>
                                                   </div>
                                               </div>
                                               <p>JavaScript</p>
                                           </div>

                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>


                       <span
                           className="h-[0.5px] w-full bg-white bg-opacity-30 hidden md:block"
                       ></span>
                       <div className="h-full w-full">
                           <div
                               className="h-full w-full flex flex-col items-center space-y-5"
                               data-aos="zoom-in-up"
                           >
                               <div
                                   className="h-fit w-fit flex flex-col items-center space-y-5"
                               >
                                   <svg
                                       aria-hidden="true"
                                       focusable="false"
                                       data-prefix="fas"
                                       data-icon="database"
                                       className="svg-inline--fa fa-database fa-2x text-primary"
                                       role="img"
                                       width="90"
                                       height="90"
                                       xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 448 512"
                                   >
                                       <path
                                           fill="currentColor"
                                           d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"
                                       ></path>
                                   </svg>
                                   <p className="text-xl font-bold">Libraries</p>
                               </div>
                               <div
                                   className="w-full grid grid-cols-3 place-items-center gap-10 md:grid-cols-4 lg:grid-cols-5"
                               >
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <div>
                                               <svg
                                                   aria-hidden="true"
                                                   focusable="false"
                                                   data-prefix="fab"
                                                   data-icon="react"
                                                   width="50px"
                                                   height="50px"
                                                   className="svg-inline--fa fa-react fa-w-16 fa-3x"
                                                   role="img"
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   viewBox="0 0 512 512"
                                               >
                                                    <path
                                                       fill="currentColor"
                                                       d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
                                                   ></path>
                                               </svg>
                                           </div>
                                       </div>
                                       <p>React.js</p>
                                   </div>
                                   {/* <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <div>
                                               <svg
                                                   role="img"
                                                   width="50"
                                                   height="50"
                                                   viewBox="0 0 24 24"
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   fill="currentColor"
                                               >
                                                   <title>Web3.js</title>
                                                   <path
                                                       d="M.889.775S0 1.29 0 2.315V7.44s0 3.079 2.666 4.618c.817.472 1.384.508 1.777.334.394.628.96 1.246 1.778 1.718 2.666 1.54 2.668-1.539 2.668-1.539V7.447c0-1.027.888-1.539.888-1.539l3.557-2.054s.89-.514 1.777 0c.89.513 0 1.027 0 1.027L11.56 6.934l1.775 1.025 3.559-2.055c.052-.03.912-.495 1.773.002.89.514 0 1.026 0 1.026l-3.555 2.054s-.888.514-.888 1.54v5.124s0 1.028-.889.514c-.89-.513-.89-1.539-.89-1.539l-1.778-1.027s.001 3.08 2.668 4.619c2.667 1.539 2.666-1.54 2.666-1.54v-5.126c0-1.026.889-1.537.889-1.537l4.445-2.569s1.776-1.025-.889-2.564c-.819-.474-1.552-.704-2.177-.797-.164-.357-.565-.776-1.377-1.24-2.667-1.523-5.332-.016-5.332-.016L8.004 4.881s-.89.514-.89 1.539v5.125s0 1.027-.89.514c-.889-.514-.89-1.54-.89-1.54V5.396c0-.064.003-.127.01-.188.097-.902.879-1.353.879-1.353L4.445 2.828l-.004.002c-.052.03-.884.544-.884 1.537v5.125s-.002 1.027-.891.514c-.89-.514-.889-1.54-.889-1.54V3.343c0-1.026.889-1.54.889-1.54L.889.776zm9.78 8.735v2.053l1.778 1.025v-2.053L10.67 9.51zm8.442 2.183c-.666.005-1.332.389-1.332 1.909 0 3.039 2.666 4.619 2.666 4.619l.889.513s.89.514.89 1.54-.89.513-.89.513l-3.555-2.053v2.053l3.555 2.053S24 24.379 24 21.3c0-3.077-1.777-4.105-1.777-4.105l-1.778-1.025s-.888-.514-.888-1.54c0-1.028.888-.515.888-.515L24 16.168v-2.053l-3.555-2.05s-.667-.376-1.334-.372Z"
                                                   ></path>
                                               </svg>
                                           </div>
                                       </div>
                                       <p>Web3.js</p>
                                   </div> */}
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <div>
                                               <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   width="64"
                                                   height="64"
                                               >
                                                   <path
                                                       d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z"
                                                       fill="currentColor"
                                                   ></path>
                                               </svg>
                                           </div>
                                       </div>
                                       <p>Tailwind CSS</p>
                                   </div>
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <svg height="60" width="60" viewBox="0 0 24 24">
                                               <path fill="currentColor" d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0-3 1.73V7.67l3-1.732V2.474z"/>

                                           </svg>
                                       </div>
                                       <p>Material UI</p>
                                   </div>
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <div>
                                               <svg
                                                   width="180"
                                                   height="180"
                                                   viewBox="0 0 184 32"
                                                   xmlns="http://www.w3.org/2000/svg"
                                               >
                                                   <g clipPath="url(#logo-___clip0)">
                                                       <path
                                                           d="M49.779 10.41c-1.985 0-3.561.73-4.524 2.248V4.95h-3.152v20.437h3.152v-7.824c0-2.978 1.634-4.204 3.706-4.204 1.985 0 3.27 1.167 3.27 3.386v8.642h3.151v-8.963c0-3.795-2.334-6.014-5.603-6.014zM60.528 19.431h11.616c.058-.409.117-.876.117-1.314 0-4.204-2.977-7.707-7.326-7.707-4.582 0-7.705 3.357-7.705 7.678 0 4.38 3.123 7.678 7.938 7.678 2.86 0 5.05-1.197 6.392-3.182l-2.597-1.518c-.7 1.022-2.014 1.81-3.765 1.81-2.335 0-4.174-1.168-4.67-3.445zm-.03-2.57c.438-2.189 2.044-3.59 4.408-3.59 1.897 0 3.735 1.08 4.173 3.59H60.5zM85.777 10.79v2.072c-1.11-1.518-2.831-2.452-5.108-2.452-3.97 0-7.267 3.328-7.267 7.678 0 4.32 3.298 7.678 7.267 7.678 2.277 0 3.999-.934 5.108-2.481v2.102h3.152V10.789h-3.152zm-4.612 11.97c-2.626 0-4.611-1.957-4.611-4.672s1.985-4.671 4.611-4.671c2.627 0 4.612 1.956 4.612 4.671 0 2.715-1.985 4.671-4.612 4.671zM103.431 4.95v7.912c-1.109-1.518-2.831-2.452-5.108-2.452-3.969 0-7.267 3.328-7.267 7.678 0 4.32 3.298 7.678 7.267 7.678 2.277 0 3.999-.934 5.108-2.481v2.102h3.152V4.95h-3.152zM98.82 22.76c-2.627 0-4.612-1.957-4.612-4.672s1.985-4.671 4.612-4.671c2.626 0 4.611 1.956 4.611 4.671 0 2.715-1.985 4.671-4.611 4.671zM109.527 25.387h3.153V4.075h-3.153v21.312zM118.091 19.431h11.616c.058-.409.117-.876.117-1.314 0-4.204-2.977-7.707-7.326-7.707-4.582 0-7.705 3.357-7.705 7.678 0 4.38 3.123 7.678 7.938 7.678 2.86 0 5.049-1.197 6.392-3.182l-2.598-1.518c-.7 1.022-2.013 1.81-3.765 1.81-2.334 0-4.173-1.168-4.669-3.445zm-.03-2.57c.438-2.189 2.044-3.59 4.408-3.59 1.897 0 3.735 1.08 4.173 3.59h-8.581zM134.128 14.818c0-1.05.993-1.547 2.131-1.547 1.197 0 2.218.525 2.744 1.664l2.656-1.489c-1.022-1.927-3.007-3.036-5.4-3.036-2.977 0-5.341 1.722-5.341 4.467 0 5.225 7.851 3.766 7.851 6.364 0 1.168-1.08 1.635-2.481 1.635-1.605 0-2.772-.788-3.239-2.102l-2.715 1.576c.934 2.102 3.036 3.416 5.954 3.416 3.152 0 5.692-1.576 5.692-4.496 0-5.4-7.852-3.795-7.852-6.452zM145.968 14.818c0-1.05.993-1.547 2.131-1.547 1.196 0 2.218.525 2.743 1.664l2.656-1.489c-1.021-1.927-3.006-3.036-5.399-3.036-2.977 0-5.341 1.722-5.341 4.467 0 5.225 7.851 3.766 7.851 6.364 0 1.168-1.08 1.635-2.481 1.635-1.605 0-2.773-.788-3.24-2.102l-2.714 1.576c.934 2.102 3.035 3.416 5.954 3.416 3.152 0 5.691-1.576 5.691-4.496 0-5.4-7.851-3.795-7.851-6.452zM170.01 22.02c2.187 0 3.806-1.308 3.806-3.453v-6.69h-1.96v6.534c0 .966-.511 1.69-1.846 1.69s-1.847-.724-1.847-1.69v-6.535h-1.945v6.691c0 2.145 1.619 3.452 3.792 3.452zM175.865 11.876v9.944h1.96v-9.944h-1.96z"
                                                           fill="currentColor"
                                                       ></path>
                                                       <path
                                                           fillRule="evenodd"
                                                           clipRule="evenodd"
                                                           d="M177.046 7.107h-10.144a4.059 4.059 0 00-4.058 4.058v10.148a4.059 4.059 0 004.058 4.058h10.144a4.059 4.059 0 004.058-4.058V11.166a4.059 4.059 0 00-4.058-4.06zm-10.144-2.03a6.087 6.087 0 00-6.086 6.088v10.148a6.087 6.087 0 006.086 6.088h10.144a6.087 6.087 0 006.087-6.088V11.166a6.087 6.087 0 00-6.087-6.089h-10.144z"
                                                           fill="currentColor"
                                                       ></path>
                                                       <path
                                                           fillRule="evenodd"
                                                           clipRule="evenodd"
                                                           d="M166.902 7.107h10.144a4.059 4.059 0 014.058 4.058v10.148a4.059 4.059 0 01-4.058 4.058h-10.144a4.059 4.059 0 01-4.058-4.058V11.166a4.059 4.059 0 014.058-4.06zm-6.086 4.058a6.087 6.087 0 016.086-6.088h10.144a6.087 6.087 0 016.087 6.088v10.148a6.087 6.087 0 01-6.087 6.088h-10.144a6.087 6.087 0 01-6.086-6.088V11.166z"
                                                           fill="currentColor"
                                                       ></path>
                                                       <path
                                                           d="M6.495 19.883l19.52-6.518c-.39-2.44-.668-4.07-.99-5.314-.347-1.338-.622-1.696-.73-1.82a3.807 3.807 0 00-1.371-.996c-.152-.065-.578-.216-1.956-.133-1.458.088-3.372.386-6.403.866-3.03.48-4.943.789-6.356 1.155-1.337.347-1.696.623-1.82.731-.43.377-.77.845-.995 1.371-.065.152-.216.578-.133 1.957.088 1.458.386 3.373.866 6.404.134.85.255 1.61.368 2.297z"
                                                           fill="currentColor"
                                                       ></path>
                                                       <path
                                                           fillRule="evenodd"
                                                           clipRule="evenodd"
                                                           d="M1.113 18.38C.185 12.516-.28 9.584.726 7.23a8.885 8.885 0 012.324-3.2C4.977 2.347 7.908 1.883 13.77.954 19.634.024 22.565-.44 24.92.566a8.882 8.882 0 013.198 2.324c1.684 1.928 2.148 4.86 3.076 10.725.929 5.864 1.393 8.797.387 11.15a8.883 8.883 0 01-2.323 3.2c-1.927 1.684-4.859 2.148-10.722 3.077-5.862.929-8.794 1.393-11.147.387a8.883 8.883 0 01-3.198-2.324c-1.684-1.928-2.148-4.86-3.077-10.725zm10.341 10.414c1.57-.095 3.592-.412 6.585-.886 2.994-.474 5.013-.798 6.537-1.193 1.475-.383 2.155-.756 2.594-1.14a5.711 5.711 0 001.493-2.057c.23-.536.375-1.298.283-2.82-.095-1.57-.412-3.593-.886-6.587-.474-2.994-.797-5.015-1.192-6.538-.383-1.476-.757-2.156-1.14-2.595a5.71 5.71 0 00-2.056-1.494c-.536-.23-1.298-.375-2.82-.283-1.57.095-3.591.412-6.585.886-2.993.475-5.013.798-6.536 1.193-1.476.383-2.155.757-2.594 1.14a5.712 5.712 0 00-1.494 2.057c-.229.536-.374 1.298-.282 2.82.095 1.571.411 3.593.886 6.587.474 2.994.797 5.015 1.192 6.538.383 1.476.756 2.156 1.14 2.595a5.711 5.711 0 002.056 1.494c.536.23 1.297.375 2.82.283z"
                                                           fill="currentColor"
                                                       ></path>
                                                   </g>
                                                   <defs>
                                                       <linearGradient
                                                           id="logo-___paint0_linear"
                                                           x1="12.69"
                                                           y1="0"
                                                           x2="17.769"
                                                           y2="31.733"
                                                           gradientUnits="userSpaceOnUse"
                                                       >
                                                           <stop stopColor="#66E3FF"></stop>
                                                           <stop
                                                               offset="1"
                                                               stopColor="#7064F9"
                                                           ></stop>
                                                       </linearGradient>
                                                       <linearGradient
                                                           id="logo-___paint1_linear"
                                                           x1="12.69"
                                                           y1="0"
                                                           x2="17.769"
                                                           y2="31.733"
                                                           gradientUnits="userSpaceOnUse"
                                                       >
                                                           <stop stopColor="#66E3FF"></stop>
                                                           <stop
                                                               offset="1"
                                                               stopColor="#7064F9"
                                                           ></stop>
                                                       </linearGradient>
                                                       <clipPath id="logo-___clip0">
                                                           <path
                                                               fill="#fff"
                                                               d="M0 0h184v32H0z"
                                                           ></path>
                                                       </clipPath>
                                                   </defs>
                                               </svg>
                                           </div>
                                       </div>
                                       <p>Headless UI</p>
                                   </div>
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <svg height="60" width="60" viewBox="0 0 256 256" fill="currentColor">

                                               <rect className="st0" fill="none" width="256" height="256"/>
                                               <line  stroke="currentColor"
                                                   strokeLinecap= "round"
                                                   strokeLinejoin= "round"
                                                   strokeWidth="32px"  x1="208" y1="128" x2="128" y2="208"/>
                                               <line stroke="currentColor"
                                                     strokeLinecap= "round"
                                                     strokeLinejoin= "round"
                                                     strokeWidth="32px"  x1="192" y1="40" x2="40" y2="192"/>

                                           </svg>
                                       </div>
                                       <p>Shadcn/ui</p>
                                   </div>
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <svg height="60" width="60" viewBox="0 0 24 24">
                                               <path fill="currentColor" d="M16.6295 16.563C17.5152 16.4705 18.1871 15.6997 18.1565 14.7748C18.126 13.8499 17.3624 13.1099 16.4462 13.1099H16.3851C15.4384 13.1408 14.7054 13.9424 14.7359 14.8981C14.7665 15.3606 14.9497 15.7614 15.2246 16.0389C14.1862 18.1046 12.5981 19.6153 10.2159 20.8794C8.59718 21.7426 6.91742 22.0509 5.23767 21.8351C3.86332 21.6501 2.79439 21.0335 2.12249 20.0161C1.14517 18.5054 1.05355 16.8713 1.87816 15.2373C2.45844 14.0657 3.37467 13.2024 3.95495 12.7708C3.83278 12.37 3.64954 11.6917 3.55791 11.1984C-0.870533 14.4357 -0.412419 18.8137 0.931386 20.8794C1.93924 22.4209 3.98549 23.3767 6.24552 23.3767C6.85634 23.3767 7.46716 23.315 8.07798 23.1609C11.9872 22.3901 14.9497 20.0469 16.6295 16.563ZM22.0047 12.7399C19.6836 9.99598 16.263 8.48525 12.3537 8.48525H11.8651C11.5902 7.93029 11.0099 7.56032 10.3686 7.56032H10.3075C9.3607 7.59115 8.62772 8.39276 8.65826 9.34853C8.6888 10.2735 9.45233 11.0134 10.3686 11.0134H10.4296C11.1015 10.9826 11.6818 10.5509 11.9261 9.96515H12.4759C14.797 9.96515 16.996 10.6434 18.9811 11.9692C20.5082 12.9866 21.6076 14.3123 22.2185 15.9155C22.7377 17.2105 22.7071 18.4745 22.1574 19.5536C21.3022 21.1877 19.8668 22.0818 17.9733 22.0818C16.7516 22.0818 15.5911 21.7118 14.9803 21.4343C14.6443 21.7426 14.0335 22.2359 13.6059 22.5442C14.9192 23.1609 16.263 23.5 17.5457 23.5C20.4776 23.5 22.646 21.866 23.4706 20.2319C24.3563 18.4437 24.2953 15.3606 22.0047 12.7399ZM6.48985 17.0871C6.52039 18.0121 7.28392 18.752 8.20015 18.752H8.26123C9.208 18.7212 9.94098 17.9196 9.91044 16.9638C9.8799 16.0389 9.11638 15.2989 8.20015 15.2989H8.13906C8.07798 15.2989 7.98636 15.2989 7.92528 15.3298C6.6731 13.2332 6.1539 10.9517 6.33714 8.48525C6.45931 6.63539 7.07013 5.03217 8.13906 3.70643C9.02475 2.56568 10.735 2.01072 11.8956 1.97989C15.133 1.91823 16.5073 5.98794 16.5989 7.62198C16.996 7.71448 17.6679 7.93029 18.126 8.08445C17.7595 3.08981 14.7054 0.5 11.7734 0.5C9.02475 0.5 6.48985 2.50402 5.482 5.46381C4.07711 9.41019 4.99334 13.2024 6.70364 16.193C6.55093 16.4088 6.45931 16.748 6.48985 17.0871Z" />
                                           </svg>
                                       </div>
                                       <p>Redux</p>
                                   </div>
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <div>
                                               <svg
                                                   width="50"
                                                   height="50"
                                                   viewBox="0 0 101 101"
                                               >
                                                   <g>
                                                       <path
                                                           d="M57.8,27.2 L57.7,0.3 L42.7,0.3 L42.8,27.2 L50.3,37.5 L57.8,27.2 Z"
                                                           fill="currentColor"
                                                       ></path>
                                                       <path
                                                           d="M42.8,73.3 L42.8,100.3 L57.8,100.3 L57.8,73.3 L50.3,63 L42.8,73.3 Z"
                                                           fill="currentColor"
                                                       ></path>
                                                       <path
                                                           d="M57.8,73.3 L73.6,95.1 L85.7,86.3 L69.9,64.5 L57.8,60.6 L57.8,73.3 Z"
                                                           fill="currentColor"
                                                       ></path>
                                                       <path
                                                           d="M42.8,27.2 L26.9,5.4 L14.8,14.2 L30.6,36 L42.8,39.9 L42.8,27.2 Z"
                                                           fill="currentColor"
                                                       ></path>
                                                       <path
                                                           d="M30.6,36 L5,27.7 L0.4,41.9 L26,50.3 L38.1,46.3 L30.6,36 Z"
                                                           fill="currentColor"
                                                       ></path>
                                                       <path
                                                           d="M62.4,54.2 L69.9,64.5 L95.5,72.8 L100.1,58.6 L74.5,50.3 L62.4,54.2 Z"
                                                           fill="currentColor"
                                                       ></path>
                                                       <path
                                                           d="M74.5,50.3 L100.1,41.9 L95.5,27.7 L69.9,36 L62.4,46.3 L74.5,50.3 Z"
                                                           fill="currentColor"
                                                       ></path>
                                                       <path
                                                           d="M26,50.3 L0.4,58.6 L5,72.8 L30.6,64.5 L38.1,54.2 L26,50.3 Z"
                                                           fill="currentColor"
                                                       ></path>
                                                       <path
                                                           d="M30.6,64.5 L14.8,86.3 L26.9,95.1 L42.8,73.3 L42.8,60.6 L30.6,64.5 Z"
                                                           fill="currentColor"
                                                       ></path>
                                                       <path
                                                           d="M69.9,36 L85.7,14.2 L73.6,5.4 L57.8,27.2 L57.8,39.9 L69.9,36 Z"
                                                           fill="currentColor"
                                                       ></path>
                                                   </g>
                                               </svg>
                                           </div>
                                       </div>
                                       <p>Json Web Tokens</p>
                                   </div>

                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <svg height="60" width="60" viewBox="0 0 128 128">
                                               <path
                                                   fill="currentColor"
                                                   d="M66.457.014a6.308 6.308 0 0 0-5.812 3.028l-47.87 78.072a6.379 6.379 0 0 0 .048 6.748l23.568 37.186a6.387 6.387 0 0 0 7.22 2.683l68.012-20.407a6.37 6.37 0 0 0 3.96-8.765l-43.72-94.85A6.298 6.298 0 0 0 66.46.014Zm1.795 23.95a2.348 2.348 0 0 1 2.448 1.433l30.16 69.784a2.39 2.39 0 0 1-1.512 3.241l-46.996 14.024a2.39 2.39 0 0 1-3.024-2.76l16.83-83.812a2.353 2.353 0 0 1 2.099-1.91z"
                                               ></path>
                                           </svg>
                                       </div>
                                       <p>Prisma</p>
                                   </div>

                               </div>
                           </div>
                       </div>
                       <span
                           className="h-[0.5px] w-full bg-white bg-opacity-30 hidden md:block"
                       ></span>
                       <div
                           className="w-full md:grid grid-cols-2 justify-center space-y-10 md:space-y-0 md:divide-x divide-opacity-30 divide-white"
                       >
                           <div
                               className="h-full w-full flex flex-col items-center space-y-5"
                               data-aos="zoom-in-right"
                           >
                               <div
                                   className="h-fit w-fit flex flex-col items-center space-y-5"
                               >
                                   <svg
                                       aria-hidden="true"
                                       focusable="false"
                                       data-prefix="fas"
                                       data-icon="database"
                                       className="svg-inline--fa fa-database fa-2x text-primary"
                                       role="img"
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="90"
                                       height="90"
                                       viewBox="0 0 448 512"
                                   >
                                       <path
                                           fill="currentColor"
                                           d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"
                                       ></path>
                                   </svg>
                                   <p className="text-xl font-bold">Database &amp; Cache</p>
                               </div>
                               <div
                                   className="w-full grid grid-cols-3 place-items-center gap-10"
                               >

                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <div>
                                               <svg
                                                   width="64"
                                                   height="64"
                                                   viewBox="0 0 128 128"
                                                   fill="currentColor"
                                               >
                                                   <path
                                                       d="M125.477 122.783l-2.616-2.537c-2.479-3.292-5.668-6.184-9.015-8.585-2.669-1.916-8.661-4.504-9.775-7.609l-.205-.195c1.893-.214 4.103-.898 5.85-1.367 2.934-.786 5.356-.583 8.386-1.365 1.366-.39 2.899-.781 3.899-1.171v-.78c-1-1.571-2.427-3.651-4.097-5.073-4.369-3.72-9.041-7.437-13.951-10.537-2.723-1.718-6.041-2.835-8.926-4.292-.971-.491-2.652-.746-3.294-1.562-1.517-1.932-2.328-4.382-3.498-6.633-2.449-4.717-4.849-9.868-7.019-14.831-1.48-3.384-2.443-6.72-4.289-9.756-8.86-14.567-18.395-23.358-33.167-32-3.145-1.838-6.929-2.563-10.929-3.513-2.144-.129-4.291-.26-6.437-.391-1.311-.546-2.674-2.149-3.902-2.927-4.896-3.092-17.449-9.817-21.074-.975-2.289 5.581 3.42 11.025 5.462 13.854 1.435 1.982 3.27 4.207 4.293 6.438.675 1.467.79 2.938 1.367 4.489 1.418 3.822 2.651 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.95 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.898 21.567 2.537 28.683 1.36 2.186 4.566 6.871 8.975 5.073 3.856-1.57 3.226-6.438 4.329-10.732.249-.972-.185-1.688.815-2.341v.195a128.6 128.6 0 003.282 7.024c2.6 4.187 6.889 8.562 10.798 11.514 2.027 1.531 3.92 4.177 5.92 5.073v-.101h.221c-.507-1-1.302-1.167-1.95-1.804-1.527-1.496-3.226-3.382-4.487-5.097-3.556-4.827-6.698-10.122-9.561-15.622-1.368-2.626-2.557-5.529-3.709-8.201-.443-1.03-.438-2.592-1.364-3.125-1.263 1.958-3.122 3.54-4.099 5.853-1.561 3.696-1.762 8.204-2.341 12.877-.343.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.555-6.07-3.029-15.843-.781-22.829.582-1.809 3.211-7.501 2.146-9.172-.508-1.665-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.123-5.464-2.091-4.731-3.066-10.044-5.268-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.684-6.635-.445-.968-1.051-2.518-.39-3.513.21-.671.507-.951 1.171-1.17 1.133-.873 4.283.29 5.463.779 3.129 1.3 5.741 2.5 8.392 4.256 1.271.844 2.559 1.89 4.097 2.89h1.756c2.747 0 5.824.232 8.391 1.012 4.535 1.379 8.6 3.542 12.292 5.873 11.246 7.102 20.441 17.22 26.732 29.278 1.012 1.942 1.45 3.799 2.341 5.858 1.798 4.153 4.064 8.428 5.853 12.489 1.786 4.053 3.526 8.142 6.05 11.514 1.327 1.772 6.451 2.724 8.78 3.709 1.633.689 4.308 1.409 5.854 2.34 2.953 1.782 5.814 3.904 8.586 5.855 1.384.974 5.64 3.114 5.853 4.878-6.863-.188-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.069 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.576 2.751 5.464 3.902 3.359 2.047 7.107 3.217 10.341 5.268 1.906 1.21 3.958 2.733 5.815 4.097.92.675.891 1.724 2.891 2.147v-.194c-.999-.795-.946-1.893-1.522-2.728zM29.514 23.465c-1.431-.027-2.514.157-3.514.389V24h.198c.683 1 1.888 2.33 2.731 3.538l1.952 4.108.193-.187c1.209-.853 1.763-2.211 1.756-4.291-.483-.509-.556-1.146-.974-1.754-.558-.809-1.639-1.268-2.342-1.949z"
                                                   ></path>
                                               </svg>
                                           </div>
                                       </div>
                                       <p>MySQL</p>
                                   </div>
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <div>
                                               <svg
                                                   width="55px"
                                                   height="55px"
                                                   viewBox="0 0 24 24"
                                                   role="img"
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   fill="currentColor"
                                               >
                                                   <title>MongoDB icon</title>
                                                   <path
                                                       d="M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0c-.002.019-.004.031-.005.049v.013h-.001c-.002.015-.003.025-.004.039v.015h-.002c0 .01-.002.018-.002.026v.026h-.003c-.001.008-.001.018-.003.025v.021h-.002c0 .007 0 .015-.002.021v.02h-.002c0 .01-.001.022-.002.032v.002c-.003.017-.006.034-.009.05v.008h-.002c-.001.004-.003.008-.003.012v.017h-.003v.022h-.005v.018h-.005v.021h-.004v.019h-.004v.017h-.006v.014h-.004v.018h-.004v.014h-.005v.013H11.8v.015h-.004c-.001.001-.001.003-.001.004v.01h-.003c-.001.002-.001.004-.001.006v.006h-.002c-.001.003-.002.008-.002.01-.003.007-.007.014-.01.021v.002c-.002.002-.004.005-.005.007v.008h-.004v.008h-.005v.008h-.003v.01h-.006v.014h-.004v.004h-.004v.008h-.004v.011h-.004v.008h-.006v.011h-.004v.008h-.005v.008h-.003v.01h-.005v.008h-.004v.006h-.004v.008h-.006V.76h-.004v.006h-.005v.008h-.004v.011h-.005v.004h-.003v.008h-.006v.004h-.004v.01h-.004v.004h-.004v.008h-.005v.006h-.003l-.002.004v.004h-.002c-.001.002-.002.002-.002.004v.001h-.001c-.001.003-.002.005-.004.007v.003h-.001c-.005.006-.008.012-.012.018v.001c-.002.002-.007.006-.009.01v.002h-.001c-.001.001-.003.002-.003.003v.003h-.002l-.003.003v.001h-.001c0 .001-.002.002-.003.004v.004h-.003l-.002.002v.002h-.002c0 .002-.002.002-.002.003v.003h-.004c0 .001-.001.002-.002.003V.92h-.003v.004h-.004V.93h-.004v.008h-.005V.93h-.005v.004h-.004V.94h-.005v.008h-.005v.004h-.004v.006h-.004v.004h-.004V.97h-.006v.004h-.004V.98h-.005v.004h-.004v.005h-.005v.01h-.002v.004h-.006v.005h-.004v.002h-.004v.004h-.005v.01h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.005v.004h-.004v.004h-.004v.01h-.004v.005h-.006v.004h-.004v.004h-.005v.006h-.004v.004h-.005v.007h-.004v.004h-.006V1.1h-.002v.004h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.003c-.001.001-.001.002-.001.002v.002h-.002l-.004.004s-.002.002-.004.003v.006h-.004v.005h-.004v.004h-.004v.004h-.003l-.003.003v.003h-.002l-.002.002v.003h-.002c-.005.006-.007.01-.014.016-.002.002-.008.007-.012.01-.012.008-.027.021-.039.032-.008.005-.016.012-.022.017v.001h-.001c-.016.013-.031.025-.049.039v.001c-.024.02-.047.039-.074.062V1.34h-.002c-.057.047-.117.1-.186.159V1.5h-.001c-.169.148-.37.338-.595.568l-.015.015-.004.004C9 3.494 6.857 6.426 6.631 11.164c-.02.392-.016.773.006 1.144v.009c.109 1.867.695 3.461 1.428 4.756v.001c.292.516.607.985.926 1.405v.001c1.102 1.455 2.227 2.317 2.514 2.526.441 1.023.4 2.779.4 2.779l.644.215s-.131-1.701.053-2.522c.057-.257.192-.476.349-.662.106-.075.42-.301.797-.645.018-.019.028-.036.044-.054 1.521-1.418 4.362-4.91 3.388-10.599z"
                                                   ></path>
                                               </svg>
                                           </div>
                                       </div>
                                       <p>MongoDB</p>
                                   </div>
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <div>
                                               <svg
                                                   height="70"
                                                   width="70"
                                                   viewBox="0 0 128 128"
                                               >
                                                   <path
                                                       fill="currentColor"
                                                       d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"
                                                   ></path>
                                               </svg>
                                           </div>
                                       </div>
                                       <p>Firebase</p>
                                   </div>
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <div>
                                               <svg
                                                   width="50"
                                                   height="50"
                                                   viewBox="0 0 128 128"
                                                   fill="currentColor"
                                               >
                                                   <path
                                                       d="M115.95 2.781c-5.504-4.906-12.16-2.933-18.738 2.902a47.9 47.9 0 00-2.918 2.856c-11.246 11.93-21.684 34.02-24.926 50.895 1.262 2.563 2.25 5.832 2.902 8.328.325 1.238.617 2.488.875 3.746 0 0-.101-.379-.515-1.578l-.266-.777a8.12 8.12 0 00-.176-.426c-.734-1.707-2.761-5.309-3.656-6.875a172.299 172.299 0 00-2.008 6.27c2.582 4.714 4.149 12.8 4.149 12.8s-.133-.527-.782-2.355c-.57-1.617-3.437-6.637-4.117-7.809-1.16 4.29-1.62 7.18-1.207 7.883.813 1.363 1.578 3.723 2.25 6.324 1.528 5.868 2.586 13.016 2.586 13.016l.094 1.192c-.203 4.886-.102 9.781.297 14.656.508 6.113 1.457 11.359 2.668 14.172l.824-.45c-1.781-5.535-2.504-12.792-2.184-21.155.477-12.79 3.422-28.215 8.856-44.29 9.191-24.261 21.938-43.733 33.602-53.034-10.63 9.601-25.023 40.695-29.332 52.203C79.404 74.162 75.99 86.252 73.93 97.84c3.555-10.863 15.043-15.527 15.043-15.527s5.637-6.954 12.223-16.883c-3.945.898-10.426 2.441-12.598 3.351-3.2 1.34-4.063 1.797-4.063 1.797s10.371-6.312 19.27-9.172c12.234-19.27 25.566-46.645 12.145-58.625M16.896 5.681c-5.398.02-9.77 4.39-9.785 9.789v88.574c.016 5.398 4.39 9.765 9.785 9.785h50.227a122.816 122.816 0 01-.277-14.438c-.031-.332-.059-.754-.086-1.067a143.095 143.095 0 00-2.523-12.684c-.645-2.507-1.465-4.789-1.965-5.636-.621-1.051-.524-1.653-.52-2.305 0-.64.082-1.305.2-2.059.316-1.878.73-3.738 1.246-5.574l1.156-.148c-.09-.188-.074-.348-.164-.516l-.219-2.031c.64-2.137 1.316-4.262 2.04-6.371l1.066-.102c-.043-.082-.055-.203-.098-.28l-.23-1.685c3.363-17.496 13.8-39.699 25.601-52.219.352-.37.711-.683 1.055-1.035z"
                                                   ></path>
                                               </svg>
                                           </div>
                                       </div>
                                       <p>SQLite</p>
                                   </div>
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <div>
                                               <svg
                                                   width="60px"
                                                   height="60px"
                                                   viewBox="0 0 128 128"
                                                   fill="currentColor"
                                               >
                                                   <path
                                                       d="M6.2 52.7c6.7 3.2 43.7 18.1 49.5 20.9 5.8 2.8 10 2.8 17.4-1 7.4-3.9 42.2-18.1 48.9-21.6 3.4-1.8 4.9-3.2 4.9-4.4V34.1c0-1.3-1.7-2.4-5-3.6-6.5-2.4-41.1-16.1-47.7-18.6-6.6-2.4-9.3-2.3-17.1.5C49.3 15.2 12.6 29.6 6 32.2c-3.2 1.3-5 2.4-5 3.7H.8v12.7c.2 1.2 2.1 2.5 5.4 4.1zm60.4 1.8l-20.3-8.4 29.1-4.5-8.8 12.9zm44.1-20l-17.2 6.8-1.9.7-17.2-6.8 19.1-7.5 17.2 6.8zM60.1 22l-2.8-5.2 8.8 3.4 8.3-2.7-2.2 5.4 8.4 3.2-10.9 1.1-2.4 5.9-3.9-6.5-12.6-1.1 9.3-3.5zm-21.7 7.3c8.6 0 15.6 2.7 15.6 6s-7 6-15.6 6-15.6-2.7-15.6-6 7-6 15.6-6zM122 59.8c-6.7 3.5-41.4 17.8-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1-5.8-2.8-43-17.7-49.6-20.9C2.9 59.9 1 58.6 1 57.3V70c0 1.3 1.9 2.6 5.2 4.2 6.7 3.2 43.7 18.1 49.5 20.9 5.8 2.8 10 2.8 17.4-1 7.4-3.9 42.2-18.1 48.9-21.6 3.4-1.8 4.9-3.2 4.9-4.4V55.6c0 1.1-1.6 2.5-4.9 4.2zm0 20.7c-6.7 3.5-41.4 17.8-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1-5.8-2.8-43-17.7-49.6-20.9C2.9 80.7 1 79.3 1 78v12.7c0 1.3 1.9 2.6 5.2 4.2 6.7 3.2 43.7 18.1 49.5 20.9 5.8 2.8 10 2.8 17.4-1 7.4-3.9 42.2-18.1 48.9-21.6 3.4-1.8 4.9-3.2 4.9-4.4V76.3c0 1.2-1.6 2.5-4.9 4.2z"
                                                   ></path>
                                               </svg>
                                           </div>
                                       </div>
                                       <p>Redis</p>
                                   </div>
                               </div>
                           </div>
                           <div
                               className="h-full w-full flex flex-col items-center space-y-5"
                               data-aos="zoom-in-left"
                           >
                               <div
                                   className="h-fit w-fit flex flex-col items-center space-y-5"
                               >
                                   <svg
                                       aria-hidden="true"
                                       focusable="false"
                                       data-prefix="fas"
                                       data-icon="circle-nodes"
                                       className="svg-inline--fa fa-circle-nodes fa-2x text-primary"
                                       role="img"
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="90"
                                       height="90"
                                       viewBox="0 0 512 512"
                                   >
                                       <path
                                           fill="currentColor"
                                           d="M418.4 157.9c35.3-8.3 61.6-40 61.6-77.9c0-44.2-35.8-80-80-80c-43.4 0-78.7 34.5-80 77.5L136.2 151.1C121.7 136.8 101.9 128 80 128c-44.2 0-80 35.8-80 80s35.8 80 80 80c12.2 0 23.8-2.7 34.1-7.6L259.7 407.8c-2.4 7.6-3.7 15.8-3.7 24.2c0 44.2 35.8 80 80 80s80-35.8 80-80c0-27.7-14-52.1-35.4-66.4l37.8-207.7zM156.3 232.2c2.2-6.9 3.5-14.2 3.7-21.7l183.8-73.5c3.6 3.5 7.4 6.7 11.6 9.5L317.6 354.1c-5.5 1.3-10.8 3.1-15.8 5.5L156.3 232.2z"
                                       ></path>
                                   </svg>
                                   <p className="text-xl font-bold">Infrastructure</p>
                               </div>
                               <div
                                   className="w-full grid grid-cols-2 place-items-center gap-10"
                               >
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <div>
                                               <svg
                                                   width="60"
                                                   height="60"
                                                   viewBox="0 0 128 128"
                                                   fill="currentColor"
                                               >
                                                   <path
                                                       d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2H79V49H66V24H51v12H26v13H13v14H1.8l-.2 1.5c-.5 6.4.3 12.6 3 18.5l1.1 2.2.1.2c7.9 13.4 21.7 19 36.8 19 29.2 0 53.3-13.1 64.3-40.6 7.4.4 15-1.8 18.6-8.9l.9-1.8-1.6-1zM28 39h10v11H28V39zm13.1 44.2c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7.1 3.1 1.4 3.1 3.1zM28 52h10v11H28V52zm-13 0h11v11H15V52zm27.7 50.2c-15.8-.1-24.3-5.4-31.3-12.4 2.1.1 4.1.2 5.9.2 1.6 0 3.2 0 4.7-.1 3.9-.2 7.3-.7 10.1-1.5 2.3 5.3 6.5 10.2 14 13.8h-3.4zM51 63H40V52h11v11zm0-13H40V39h11v11zm13 13H53V52h11v11zm0-13H53V39h11v11zm0-13H53V26h11v11zm13 26H66V52h11v11zM38.8 81.2c-.2-.1-.5-.2-.8-.2-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-.3-.1-.6-.2-.8-.2.3-.4.5-.8.5-.5 0-.9-.4-.9-.9.1-.4.3-.7.5-.8z"
                                                   ></path>
                                               </svg>
                                           </div>
                                       </div>
                                       <p>Docker</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <span
                           className="h-[0.5px] w-full bg-white bg-opacity-30 hidden md:block"
                       ></span>
                       <div
                           className="w-full md:grid grid-cols-7 justify-center space-y-10 md:space-y-0 md:divide-x divide-opacity-30 divide-white"
                       >
                           <div
                               className="h-full w-full flex flex-col items-center col-span-2 space-y-5"
                               data-aos="zoom-in-right"
                           >
                               <div
                                   className="h-fit w-fit flex flex-col items-center space-y-5"
                               >
                                   <svg
                                       width="60"
                                       height="60"
                                       aria-hidden="true"
                                       focusable="false"
                                       data-prefix="fas"
                                       data-icon="code-branch"
                                       className="svg-inline--fa fa-code-branch fa-2x text-primary"
                                       role="img"
                                       xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 448 512"
                                   >
                                       <path
                                           fill="currentColor"
                                           d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
                                       ></path>
                                   </svg>
                                   <p className="text-xl font-bold">Version Control</p>
                               </div>
                               <div
                                   className="w-full grid grid-cols-2 place-items-center gap-10"
                               >
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <svg height="50" width="50" viewBox="0 0 128 128">
                                               <g fill="currentColor">
                                                   <path
                                                       fillRule="evenodd"
                                                       clipRule="evenodd"
                                                       d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                                                   ></path>
                                                   <path
                                                       d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"
                                                   ></path>
                                               </g>
                                           </svg>
                                       </div>
                                       <p>GitHub</p>
                                   </div>
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <svg height="50" width="50" viewBox="0 0 128 128">
                                               <path
                                                   fill="currentColor"
                                                   d="M126.615 72.31l-7.034-21.646-13.94-42.902c-.54-1.662-2.44-2.07-3.654-1.23-.4.276-.724.853-.902 1.398L87.144 51H40.856L31.62 22.41 26.917 7.847a2.748 2.748 0 00-.372-.767c-.078-.104-.18-.194-.27-.28-.937-.89-2.465-.876-3.36.072a2.336 2.336 0 00-.556.894l-13.94 42.9-2.946 9.068L1.385 72.31a4.78 4.78 0 00.85 4.496c.26.317.55.613.89.86L64 121.895l60.874-44.227a4.785 4.785 0 001.74-5.357zm-7.034-21.647z"
                                               ></path>
                                           </svg>
                                       </div>
                                       <p>GitLab</p>
                                   </div>
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <svg height="50" width="50" viewBox="0 0 512 512" fill="currentColor">

                                               <path fill="currentColor" d="M422 130a10 10 0 00-9.9-11.7H100.5a10 10 0 00-10 11.7L136 409a10 10 0 009.9 8.4h221c5 0 9.2-3.5 10 -8.4L422 130zM291 316.8h-69.3l-18.7-98h104.8z"/>
                                               <path fill="currentColor" d="M59.632 25.2H40.94l-3.1 18.3h-13v18.9H52c1 0 1.7-.7 1.8-1.6l5.8-35.6z" transform="translate(89.8 85) scale(5.3285)"/>
                                               <linearGradient id="a" x2="1" gradientTransform="rotate(141 22.239 22.239) scale(31.4)" gradientUnits="userSpaceOnUse">
                                                   <stop offset="0" stopColor="#0052cc"/><stop offset="1" stopColor="#2684ff"/>
                                               </linearGradient>
                                           </svg>
                                       </div>
                                       <p>Bitbucket</p>
                                   </div>
                               </div>
                           </div>
                           <div
                               className="h-full w-full flex flex-col items-center col-span-3 space-y-5"
                               data-aos="zoom-in-up"
                           >
                               <div
                                   className="h-fit w-fit flex flex-col items-center space-y-5"
                               >
                                   <svg
                                       aria-hidden="true"
                                       focusable="false"
                                       data-prefix="fas"
                                       data-icon="cloud"
                                       className="svg-inline--fa fa-cloud fa-2x text-primary"
                                       role="img"
                                       xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 640 512"
                                   >
                                       <path
                                           fill="currentColor"
                                           d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
                                       ></path>
                                   </svg>
                                   <p className="text-xl font-bold">Hosting</p>
                               </div>
                               <div
                                   className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-10 px-10"
                               >
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <div>
                                               <svg
                                                   width="40"
                                                   height="40"
                                                   viewBox="0 0 24 24"
                                                   xmlns="http://www.w3.org/2000/svg"
                                               >
                                                   <path
                                                       d="M12 1L24 22H0L12 1Z"
                                                       fill="currentColor"
                                                   ></path>
                                               </svg>
                                           </div>
                                       </div>
                                       <p>Vercel</p>
                                   </div>

                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <div>
                                               <svg
                                                   width="55px"
                                                   height="55px"
                                                   fill="currentColor"
                                                   viewBox="0 0 128 128"
                                               >
                                                   <g>
                                                       <path
                                                           d="M80.6 40.3h.4l-.2-.2 14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5C36.5 20.8 24.9 32.8 20.7 48c.2-.1.5-.2.8-.2 5.2-3.4 11.4-5.4 17.9-5.4 2.2 0 4.3.2 6.4.6.1-.1.2-.1.3-.1 9-9.9 24.2-11.1 34.6-2.6h-.1z"
                                                       ></path>
                                                       <path
                                                           d="M108.1 47.8c-2.3-8.5-7.1-16.2-13.8-22.1L80 39.9c6 4.9 9.5 12.3 9.3 20v2.5c16.9 0 16.9 25.2 0 25.2H63.9v20h-.1l.1.2h25.4c14.6.1 27.5-9.3 31.8-23.1 4.3-13.8-1-28.8-13-36.9z"
                                                       ></path>
                                                       <path
                                                           d="M39 107.9h26.3V87.7H39c-1.9 0-3.7-.4-5.4-1.1l-15.2 14.6v.2c6 4.3 13.2 6.6 20.7 6.6z"
                                                       ></path>
                                                       <path
                                                           d="M40.2 41.9c-14.9.1-28.1 9.3-32.9 22.8-4.8 13.6 0 28.5 11.8 37.3l15.6-14.9c-8.6-3.7-10.6-14.5-4-20.8 6.6-6.4 17.8-4.4 21.7 3.8L68 55.2C61.4 46.9 51.1 42 40.2 42.1z"
                                                       ></path>
                                                   </g>
                                               </svg>
                                           </div>
                                       </div>
                                       <p>Google Cloud</p>
                                   </div>
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <div>
                                               <svg
                                                   xmlns="http://www.w3.org/2000/svg"
                                                   x="40"
                                                   y="40"
                                                   width="169px"
                                                   height="34px"
                                                   viewBox="0 0 169 34"
                                                   enableBackground="new 0 0 169 34"
                                                   fill="currentColor"
                                               >
                                                   <path
                                                       d="M98.955,23.733h-2.081V0.78h7.009c5.723,0,7.682,3.305,7.682,6.886s-1.959,6.886-7.682,6.886h-4.927V23.733z M98.955,12.624h5.203c4.315,0,5.141-2.755,5.141-4.958s-0.827-4.958-5.141-4.958h-5.203V12.624z M119.193,10.023 c-2.05,0-3.397,0.367-4.591,0.765V8.951c1.347-0.581,3.122-0.826,4.591-0.826c4.591,0,5.785,2.081,5.785,5.141v10.466h-1.194 l-0.459-1.224c-1.377,1.01-3.091,1.53-4.621,1.53c-4.009,0-5.356-2.357-5.356-4.928c0-2.601,1.439-4.529,5.448-4.774l4.04-0.245 v-0.857C122.835,11.002,122.04,10.023,119.193,10.023z M118.642,15.991c-2.173,0.214-3.122,1.347-3.122,3.121 c0,1.377,0.337,3.03,3.244,3.03c1.653,0,2.754-0.46,4.07-1.224v-5.325L118.642,15.991z M131.71,19.449 c-0.337,0.336-0.582,0.765-0.582,1.132c0,0.765,0.367,1.102,1.163,1.193l5.203,0.612c2.877,0.306,4.193,1.439,4.193,4.101 c0,3.734-3.734,5.203-7.957,5.203c-4.285,0-6.855-1.255-6.855-4.621c0-2.081,1.439-3.459,3.153-4.04v-0.031 c-0.582-0.398-0.979-1.01-0.979-2.02c0-0.856,0.52-1.56,1.163-2.081c-1.836-1.01-2.448-2.877-2.448-5.019 c0-3.152,1.346-5.754,5.968-5.754c0.949,0,1.745,0.122,2.449,0.306h5.203v1.163l-2.571,0.735c0.643,0.979,0.887,2.203,0.887,3.55 c0,3.153-1.347,5.754-5.968,5.754C132.965,19.633,132.291,19.571,131.71,19.449z M132.597,23.58c-2.02,0.46-3.734,1.408-3.734,3.367 c0,2.265,1.714,2.908,4.866,2.908c3.061,0,5.937-0.765,5.937-3.367c0-1.561-0.735-2.173-2.601-2.388L132.597,23.58z M137.708,13.879 c0-2.02-0.398-3.887-3.979-3.887s-3.978,1.867-3.978,3.887s0.398,3.886,3.978,3.886S137.708,15.899,137.708,13.879z M149.206,8.125 c5.203,0,5.815,3.55,5.815,7.957v0.979h-10.1c0.123,2.662,0.827,5.081,4.285,5.081c2.203,0,3.55-0.214,5.05-0.857v1.836 c-1.714,0.765-3.55,0.918-5.05,0.918c-5.172,0-6.427-3.55-6.427-7.957S144.033,8.125,149.206,8.125z M144.921,15.317h7.957 c0-2.724-0.153-5.295-3.673-5.295C145.655,10.023,145.013,12.563,144.921,15.317z M163.191,14.95 c4.346,0.398,5.387,1.867,5.387,4.376c0,2.356-1.5,4.713-6.151,4.713c-1.469,0-3.581-0.368-4.56-0.765v-1.836 c0.949,0.336,2.418,0.704,4.591,0.704c3.183,0,4.04-1.347,4.04-2.785c0-1.408-0.429-2.387-3.458-2.632 c-4.438-0.398-5.356-1.959-5.356-4.07c0-2.173,1.408-4.529,5.723-4.529c1.438,0,3.06,0.183,4.407,0.765v1.837 c-1.193-0.398-2.387-0.704-4.438-0.704c-3.03,0-3.673,1.133-3.673,2.632C159.703,14.001,160.253,14.705,163.191,14.95z M17.184,10.327H9.687c-0.194,0-0.35,0.157-0.35,0.35v3.666c0,0.193,0.157,0.35,0.35,0.35h2.925v4.555c0,0-0.657,0.223-2.472,0.223 c-2.142,0-5.134-0.783-5.134-7.362c0-6.582,3.116-7.447,6.041-7.447c2.532,0,3.623,0.446,4.317,0.66 c0.218,0.067,0.42-0.15,0.42-0.344l0.837-3.541c0-0.09-0.031-0.199-0.134-0.274C16.204,0.963,14.484,0,10.139,0 C5.134,0,0,2.129,0,12.366c0,10.241,5.878,11.766,10.832,11.766c4.102,0,6.589-1.752,6.589-1.752c0.102-0.057,0.114-0.2,0.114-0.265 V10.678C17.535,10.484,17.378,10.327,17.184,10.327z M56.129,1.226c0-0.195-0.155-0.352-0.349-0.352h-4.221 c-0.193,0-0.349,0.157-0.349,0.352c0,0.001,0.001,8.158,0.001,8.158h-6.58V1.226c0-0.195-0.156-0.352-0.349-0.352h-4.221 c-0.192,0-0.349,0.157-0.349,0.352v22.095c0,0.194,0.157,0.353,0.349,0.353h4.221c0.193,0,0.349-0.158,0.349-0.353v-9.453h6.58 c0,0-0.012,9.452-0.012,9.453c0,0.194,0.157,0.353,0.349,0.353h4.232c0.193,0,0.348-0.158,0.349-0.353V1.226z M25.303,4.125 c0-1.52-1.218-2.748-2.722-2.748c-1.502,0-2.722,1.228-2.722,2.748c0,1.519,1.22,2.751,2.722,2.751 C24.085,6.876,25.303,5.644,25.303,4.125z M25.002,18.657c0-0.566,0-10.197,0-10.197c0-0.194-0.156-0.352-0.349-0.352h-4.208 c-0.192,0-0.365,0.199-0.365,0.393c0,0,0,12.27,0,14.613c0,0.429,0.268,0.556,0.614,0.556c0,0,1.796,0,3.792,0 c0.416,0,0.518-0.203,0.518-0.564C25.002,22.323,25.002,19.252,25.002,18.657z M72.511,8.141h-4.189 c-0.192,0-0.349,0.158-0.349,0.353v10.831c0,0-1.064,0.779-2.575,0.779c-1.511,0-1.911-0.685-1.911-2.165c0-1.48,0-9.444,0-9.444 c0-0.195-0.156-0.353-0.349-0.353h-4.251c-0.192,0-0.349,0.158-0.349,0.353c0,0,0,5.768,0,10.16c0,4.397,2.448,5.472,5.816,5.472 c2.763,0,4.991-1.526,4.991-1.526s0.106,0.804,0.154,0.9c0.048,0.096,0.173,0.19,0.309,0.19l2.705-0.012 c0.192,0,0.349-0.157,0.349-0.351L72.86,8.495C72.86,8.3,72.704,8.141,72.511,8.141z M84.19,7.645c-2.379,0-3.997,1.061-3.997,1.061 v-7.48c0-0.195-0.156-0.352-0.348-0.352h-4.233c-0.193,0-0.349,0.157-0.349,0.352v22.095c0,0.194,0.156,0.353,0.349,0.353 c0,0,2.937,0,2.937,0c0.132,0,0.232-0.069,0.306-0.188c0.073-0.118,0.178-1.018,0.178-1.018s1.732,1.64,5.009,1.64 c3.847,0,6.053-1.952,6.053-8.764C90.094,8.535,86.571,7.645,84.19,7.645z M82.538,20.091c-1.453-0.045-2.438-0.704-2.438-0.704 v-6.995c0,0,0.971-0.596,2.165-0.702c1.509-0.135,2.962,0.321,2.962,3.919C85.227,19.404,84.571,20.152,82.538,20.091z M37.058,8.106h-3.166c0,0-0.005-4.183-0.005-4.184c0-0.158-0.081-0.238-0.265-0.238h-4.315c-0.168,0-0.258,0.074-0.258,0.235v4.322 c0,0-2.162,0.522-2.309,0.564c-0.145,0.043-0.253,0.177-0.253,0.337v2.716c0,0.195,0.156,0.353,0.349,0.353h2.212 c0,0,0,2.841,0,6.535c0,4.858,3.404,5.335,5.702,5.335c1.05,0,2.305-0.338,2.513-0.414c0.125-0.045,0.198-0.175,0.198-0.317 l0.004-2.991c0-0.195-0.164-0.353-0.35-0.353c-0.184,0-0.657,0.076-1.142,0.076c-1.556,0-2.082-0.723-2.082-1.66 c0-0.935-0.001-6.211-0.001-6.211h3.167c0.193,0,0.349-0.158,0.349-0.353V8.458C37.407,8.263,37.25,8.106,37.058,8.106z"
                                                   ></path>
                                               </svg>
                                           </div>
                                       </div>
                                       <p>GitHub Pages</p>
                                   </div>

                               </div>
                           </div>
                           <div
                               className="h-full w-full flex flex-col items-center col-span-2 space-y-5"
                               data-aos="zoom-in-left"
                           >
                               <div
                                   className="h-fit w-fit flex flex-col items-center space-y-5"
                               >
                                   <svg
                                       aria-hidden="true"
                                       focusable="false"
                                       data-prefix="fas"
                                       data-icon="rocket"
                                       className="svg-inline--fa fa-rocket fa-2x text-primary"
                                       role="img"
                                       xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 512 512"
                                   >
                                       <path
                                           fill="currentColor"
                                           d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                                       ></path>
                                   </svg>
                                   <p className="text-xl font-bold">CI/CD</p>
                               </div>
                               <div
                                   className="w-full grid grid-cols-2 place-items-center gap-10"
                               >
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <svg height="50" width="50" viewBox="0 0 128 128">
                                               <g fill="currentColor">
                                                   <path
                                                       fillRule="evenodd"
                                                       clipRule="evenodd"
                                                       d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                                                   ></path>
                                                   <path
                                                       d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"
                                                   ></path>
                                               </g>
                                           </svg>
                                       </div>
                                       <p>GitHub Action</p>
                                   </div>
                                   <div
                                       className="w-fit flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-white-50 hover:scale-125 hover:text-white-50"
                                   >
                                       <div className="h-12 flex items-center scale-75">
                                           <svg height="50" width="50" viewBox="0 0 128 128">
                                               <path
                                                   fill="currentColor"
                                                   d="M126.615 72.31l-7.034-21.646-13.94-42.902c-.54-1.662-2.44-2.07-3.654-1.23-.4.276-.724.853-.902 1.398L87.144 51H40.856L31.62 22.41 26.917 7.847a2.748 2.748 0 00-.372-.767c-.078-.104-.18-.194-.27-.28-.937-.89-2.465-.876-3.36.072a2.336 2.336 0 00-.556.894l-13.94 42.9-2.946 9.068L1.385 72.31a4.78 4.78 0 00.85 4.496c.26.317.55.613.89.86L64 121.895l60.874-44.227a4.785 4.785 0 001.74-5.357zm-7.034-21.647z"
                                               ></path>
                                           </svg>
                                       </div>
                                       <p>GitLab CI</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>

    )
}
export default TechStack
