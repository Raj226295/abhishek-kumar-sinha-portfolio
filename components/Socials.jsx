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
    link: "https://www.facebook.com/share/1EVE1PekUx/?mibextid=wwXIfr",
    Icon: RiFacebookLine,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_somu_sam.in?vrfl=cGV4N3FrOGkzcndt&utm_source=qr",
    Icon: RiInstagramLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhishek-kumar-sinha-385a93298?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/AbhishekWEBDev1",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-1 text-lg sm:gap-x-5">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent p-[5px] hover:text-white"
              : "hover:text-accent"
          } flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full transition-all duration-300 xl:min-h-0 xl:min-w-0`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
