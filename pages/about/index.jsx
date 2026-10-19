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
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
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
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-4">
              {stats.map((stat, statI) => (
                <div
                  key={stat.label}
                  className={`relative flex-1 px-2 first:pl-0 ${
                    statI < stats.length - 1
                      ? "after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
                      : ""
                  }`}
                >
                  <div className="text-xl xl:text-3xl font-extrabold text-accent mb-2 whitespace-nowrap">
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
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
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
