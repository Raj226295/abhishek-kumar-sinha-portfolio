import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full overflow-y-auto overflow-x-hidden bg-primary/30 py-32 xl:py-36">
      <Circles />
      <div className="container mx-auto flex min-h-full items-center">
        <div className="flex w-full flex-col gap-x-8 xl:flex-row">
          {/* text */}
          <div className="mb-8 flex flex-col text-center lg:text-left xl:mb-0 xl:w-[30vw]">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My Work<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-4 max-w-[430px] lg:mx-0"
            >
              Explore a collection of websites and applications I&apos;ve worked
              on, combining creative design, modern technologies, and
              functional user experiences.
            </motion.p>
          </div>

          {/* projects */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
