import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="relative min-h-[100dvh] bg-primary/60 xl:h-full xl:min-h-0">
      {/* text */}
      <div className="relative z-10 min-h-[100dvh] w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 xl:pointer-events-none xl:h-full xl:min-h-0">
        <div className="container mx-auto flex min-h-[100dvh] flex-col justify-center px-4 pb-28 pt-36 text-center sm:px-[15px] xl:h-full xl:min-h-0 xl:pb-0 xl:pt-40 xl:text-left">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 break-words"
          >
            Crafting Digital <br />
            <span className="text-accent">Experiences That Inspire.</span>
          </motion.h1>

          {/* portrait on smaller screens */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="relative mx-auto mb-4 h-[clamp(180px,55vw,280px)] w-full max-w-[280px] xl:hidden"
          >
            <Avatar />
          </motion.div>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-8 max-w-sm xl:mx-0 xl:mb-16 xl:max-w-xl"
          >
            I&apos;m Raj Vardhan Singh, a Computer Science student and passionate
            Web Developer. I build modern, responsive, and interactive websites
            that combine creative design with seamless functionality.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:pointer-events-auto xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-full w-full overflow-hidden xl:pointer-events-auto xl:w-[1280px]">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute -bottom-32 hidden h-full w-full max-h-[678px] max-w-[737px] lg:bottom-0 lg:right-[8%] xl:block"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
