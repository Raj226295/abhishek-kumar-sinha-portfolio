import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link
            href="/"
            aria-label="Raj Vardhan Singh — home"
            className="text-[24px] md:text-[28px] leading-none whitespace-nowrap"
          >
            <span className="font-semibold">raj</span>{" "}
            <span className="font-light">vardhan singh</span>
            <span className="text-accent font-semibold">.</span>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
