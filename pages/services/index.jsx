import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="relative min-h-full overflow-x-hidden bg-primary/30 pb-28 pt-36 xl:h-full xl:py-36">
      <Circles />
      <div className="container mx-auto min-h-full flex items-center">
        <div className="flex w-full flex-col gap-y-8 xl:flex-row xl:gap-x-10 xl:gap-y-0">
          {/* text */}
          <div className="flex flex-col text-center xl:w-[30%] xl:shrink-0 xl:text-left">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My <span className="text-accent">Services.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mx-auto mb-4 max-w-[400px] xl:mx-0"
            >
              I create modern, responsive, and interactive digital experiences,
              combining creative design with powerful functionality to bring
              ideas to life.
            </motion.p>
          </div>

          {/* services slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="min-w-0 w-full xl:max-w-[70%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
