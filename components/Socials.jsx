import Link from "next/link";

import {
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/share/19xcFkkZw8/",
    Icon: RiFacebookLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/iam_rajput9440?obrf=MWM2bWphNmU0ejJvdQ==",
    Icon: RiInstagramLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/raj-vardhan-singh-89178431a/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/Raj226295",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
