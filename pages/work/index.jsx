import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="relative min-h-full overflow-x-hidden bg-primary/30 pb-28 pt-36 xl:h-full xl:py-36">
      <Circles />
      <div className="container mx-auto flex min-h-full items-center">
        <div className="flex w-full flex-col gap-x-8 xl:flex-row">
          {/* text */}
          <div className="mb-8 flex flex-col text-center xl:mb-0 xl:w-[30vw] xl:text-left">
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
              className="mx-auto mb-4 max-w-[430px] xl:mx-0"
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
            className="min-w-0 w-full xl:max-w-[65%]"
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
