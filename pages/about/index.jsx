import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiFramer,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "projects",
    info: [
      {
        title: "Portfolio Website",
        stage: "React",
      },
      {
        title: "Online Learning Platform",
        stage: "React + Vite",
      },
      {
        title: "Aryass E-commerce",
        stage: "JavaScript",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Built a responsive personal portfolio",
        stage: "2026",
      },
      {
        title: "Built a component-based learning platform",
        stage: "2026",
      },
      {
        title: "Built a responsive e-commerce experience",
        stage: "2026",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "B.Tech — Computer Science Engineering",
        stage: "In progress",
      },
    ],
  },
];

const stats = [
  { value: "B.Tech", label: "Computer Science" },
  { value: "3+", label: "Web Projects" },
  { value: "Full Stack", label: "Learning & Building" },
  { value: "2026", label: "Portfolio" },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative min-h-full overflow-x-hidden bg-primary/30 pb-28 pt-36 text-center sm:pt-40 xl:h-full xl:py-32 xl:text-left">
      <Circles />

      <div className="container mx-auto flex min-h-full flex-col items-center gap-x-6 gap-y-8 xl:h-full xl:flex-row xl:gap-y-0">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Turning <span className="text-accent">Ideas</span> Into Digital
            Experiences.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I&apos;m Raj Vardhan Singh, a Computer Science Engineering student
            and passionate web developer. I specialize in building modern,
            responsive websites and interactive digital experiences. I enjoy
            transforming creative ideas into functional, user-friendly
            products.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="mx-auto mb-4 grid w-full max-w-xl grid-cols-2 gap-y-5 px-2 sm:px-0 md:mb-8 xl:mx-0 xl:max-w-none xl:grid-cols-4"
          >
            <div className="contents">
              {stats.map((stat, statI) => (
                <div
                  key={stat.label}
                  className={`relative min-w-0 px-2 first:pl-0 ${
                    statI % 2 === 0
                      ? "after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white/10"
                      : ""
                  } ${
                    statI === 1
                      ? "xl:after:absolute xl:after:right-0 xl:after:top-0 xl:after:h-full xl:after:w-[1px] xl:after:bg-white/10"
                      : ""
                  }`}
                >
                  <div className="mb-2 text-lg font-extrabold text-accent sm:text-xl xl:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[110px]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="relative z-20 flex w-full min-w-0 flex-col xl:h-[480px] xl:max-w-[48%]"
        >
          <div className="mx-auto mb-4 flex w-full max-w-[420px] flex-nowrap items-center justify-between gap-2 sm:w-auto sm:max-w-none sm:justify-start sm:gap-x-4 xl:mx-0 xl:gap-x-8">
            {aboutData.map((item, itemI) => (
              <button
                type="button"
                key={itemI}
                className={`relative min-h-[44px] shrink-0 cursor-pointer text-center text-[clamp(12px,3.5vw,16px)] capitalize after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all after:duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:min-h-0 xl:text-lg ${
                  index === itemI
                    ? "text-accent after:w-full after:bg-accent"
                    : "after:w-8 after:bg-white"
                }`}
                onClick={() => setIndex(itemI)}
                aria-pressed={index === itemI}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center gap-y-2 py-2 xl:items-start xl:gap-y-4 xl:py-6" aria-live="polite">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
