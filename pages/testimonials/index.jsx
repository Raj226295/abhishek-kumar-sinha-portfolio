import { motion } from "framer-motion";

import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="h-full overflow-y-auto overflow-x-hidden bg-primary/30 py-28 text-center md:py-32">
      <div className="container mx-auto flex min-h-full flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          Project <span className="text-accent">Highlights.</span>
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mx-auto mb-2 max-w-[620px] px-4 text-white/70"
        >
          A closer look at the websites I&apos;ve worked on, focused on modern
          design, responsive layouts, and practical user experiences.
        </motion.p>

        {/* project slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
