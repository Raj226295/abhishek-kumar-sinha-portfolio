import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);
    formData.set("_replyto", formData.get("email"));
    formData.set("_url", window.location.href);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/rvardhan692@rku.ac.in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(Object.fromEntries(formData)),
        }
      );
      const result = await response.json();

      if (
        result.success === "false" &&
        result.message?.toLowerCase().includes("activation")
      ) {
        return;
      }

      if (!response.ok || result.success !== "true") {
        throw new Error(result.message || "Unable to send your message.");
      }

      myForm.reset();
      alert("Thank you! Your message has been sent successfully.");
    } catch (error) {
      alert("Message could not be sent. Please try again shortly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
          >
            <input
              type="hidden"
              name="_subject"
              value="New portfolio contact message"
            />
            <input type="hidden" name="_template" value="table" />
            <input
              type="text"
              name="_honey"
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />

            {/* input group */}
            <div className="flex w-full flex-col gap-6 sm:flex-row sm:gap-x-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                aria-label="Name"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                aria-label="Email address"
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              aria-label="Subject"
              className="input"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              placeholder="Message..."
              aria-label="Message"
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {isLoading ? "Sending..." : "Let's talk"}
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>

          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
