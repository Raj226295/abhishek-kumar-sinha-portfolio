import { motion } from "framer-motion";
import { useState } from "react";
import {
  LuBarChart3,
  LuBot,
  LuCamera,
  LuClapperboard,
  LuCode2,
  LuContact,
  LuDatabase,
  LuFileText,
  LuGlobe,
  LuMegaphone,
  LuPalette,
  LuPenTool,
  LuSmartphone,
  LuSparkles,
  LuTarget,
  LuUsers,
  LuVideo,
  LuWorkflow,
} from "react-icons/lu";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Digital Marketing",
        services: [
          "Social Media Management",
          "Social Media Advertising",
          "Performance Marketing",
          "Meta Ads Management",
          "Google Ads Management",
          "SEO & Local SEO",
          "Google Business Profile Management",
          "Lead Generation",
          "Digital Marketing Strategy",
        ],
        icons: [LuMegaphone, LuTarget, LuBarChart3],
      },
      {
        title: "Creative & Media",
        services: [
          "Content Creation",
          "Graphic Design & Creative Design",
          "Video Production",
          "Video Editing",
          "Cinematic Shoots",
          "Product Photography & Videography",
          "Influencer Marketing & Shoots",
          "UGC Content & UGC Ads",
          "Voiceover & Audio Production",
        ],
        icons: [LuClapperboard, LuCamera, LuVideo],
      },
      {
        title: "AI & Automation",
        services: [
          "AI Image & Video Generation",
          "AI Music & Voice Generation",
          "Marketing Automation",
          "WhatsApp Marketing & Automation",
          "AI Chatbot & WhatsApp AI Agent",
        ],
        icons: [LuBot, LuSparkles, LuWorkflow],
      },
      {
        title: "Branding & Content",
        services: [
          "Branding & Brand Strategy",
          "Content & Ad Copywriting",
        ],
        icons: [LuPalette, LuPenTool, LuFileText],
      },
      {
        title: "Web & App Development",
        services: [
          "Website Development",
          "Web Application Development",
          "Mobile App Development",
          "UI/UX Design",
        ],
        icons: [LuCode2, LuGlobe, LuSmartphone],
      },
      {
        title: "CRM Solutions",
        services: ["CRM Development & Management"],
        icons: [LuDatabase, LuUsers, LuContact],
      },
    ],
  },
  {
    title: "projects",
    info: [
      {
        title: "Performance Marketing Campaigns",
      },
      {
        title: "Social Media Marketing",
      },
      {
        title: "Branding & Creative Design",
      },
      {
        title: "Video Production & Content Creation",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Founder — Market Fuel",
        stage:
          "Leading a digital marketing and creative solutions agency focused on helping businesses grow through strategic marketing, branding, advertising, and technology.",
      },
      {
        title: "Performance Marketer",
        stage:
          "Specializing in Meta Ads, Google Ads, lead generation, audience targeting, campaign optimization, and data-driven digital marketing.",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Diploma in Computer Science",
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
      },
      {
        title: "Minor in Computer Science — IIT Patna",
      },
    ],
  },
];

const stats = [
  { value: "Founder", label: "MARKET FUEL" },
  { value: "30+", label: "DIGITAL SERVICES" },
  { value: "Growth", label: "MARKETING EXPERT" },
  { value: "IIT Patna", label: "CS MINOR" },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [expandedSkill, setExpandedSkill] = useState(null);

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
            Turning <span className="text-accent">Ideas</span> Into <br />
            Powerful Digital Growth.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I&apos;m Abhishek Kumar Sinha, Founder of Market Fuel and a passionate
            Performance Marketer. I specialize in performance marketing,
            social media advertising, branding, creative content, and digital
            strategies that help businesses grow. I combine technical knowledge
            with creative marketing solutions to build strong brands and deliver
            measurable results.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="mx-auto mb-4 grid w-full max-w-xl grid-cols-2 gap-x-4 gap-y-6 px-2 sm:px-0 md:mb-8 md:grid-cols-[max-content_max-content_max-content_max-content] md:justify-between xl:mx-0 xl:max-w-none"
          >
            <div className="contents">
              {stats.map((stat, statI) => (
                <div
                  key={stat.label}
                  className={`grid min-w-0 content-start grid-rows-[auto_1fr] gap-y-3 border-white/10 px-2 ${
                    statI % 2 === 0
                      ? "border-r"
                      : ""
                  } ${
                    statI === 1
                      ? "md:border-r"
                      : ""
                  }`}
                >
                  <div className="min-w-0 whitespace-nowrap text-lg font-extrabold text-accent sm:text-xl xl:text-3xl">
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
            {index === 0 ? (
              <div className="flex w-full flex-col gap-y-2">
                {aboutData[0].info.map((item, itemI) => {
                  const isExpanded = expandedSkill === itemI;
                  const servicesId = `skill-services-${itemI}`;

                  return (
                    <div key={item.title} className="w-full text-white/60">
                      <button
                        type="button"
                        className="flex min-h-[44px] w-full flex-wrap items-center justify-start gap-x-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:flex-nowrap"
                        onClick={() =>
                          setExpandedSkill(isExpanded ? null : itemI)
                        }
                        aria-expanded={isExpanded}
                        aria-controls={servicesId}
                      >
                        <span className="min-w-0 whitespace-normal font-light sm:whitespace-nowrap">
                          {item.title}
                        </span>
                        <span className="flex shrink-0 items-center gap-x-2 sm:gap-x-4">
                          <span aria-hidden="true">-</span>
                          {item.icons.map((Icon, iconI) => (
                            <span
                              key={iconI}
                              className="text-xl text-white sm:text-2xl"
                            >
                              <Icon aria-hidden="true" />
                            </span>
                          ))}
                        </span>
                      </button>

                      <div
                        id={servicesId}
                        aria-hidden={!isExpanded}
                        className={`grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${
                          isExpanded
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <ul className="grid grid-cols-1 gap-x-4 gap-y-1 pb-2 pl-2 text-left sm:grid-cols-2">
                            {item.services.map((service) => (
                              <li key={service} className="min-w-0">
                                • {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : index === 2 ? (
              <div className="flex w-full flex-col gap-y-4">
                {aboutData[2].info.map((item) => (
                  <div
                    key={item.title}
                    className="grid w-full grid-cols-1 items-start text-left text-white/60 md:grid-cols-[max-content_auto_1fr] md:gap-x-2"
                  >
                    <div className="font-light">{item.title}</div>
                    <div className="hidden md:block">-</div>
                    <div>{item.stage}</div>
                  </div>
                ))}
              </div>
            ) : (
              aboutData[index].info.map((item, itemI) => (
                <div
                  key={itemI}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  {item.stage && (
                    <>
                      <div className="hidden md:flex">-</div>
                      <div>{item.stage}</div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
