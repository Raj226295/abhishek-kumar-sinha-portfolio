import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

import Socials from "../components/Socials";
import { navData } from "../components/Nav";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { asPath } = useRouter();

  useEffect(() => setMenuOpen(false), [asPath]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="absolute z-30 w-full items-center px-4 sm:px-8 md:px-16 xl:h-[90px] xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-4 py-6 sm:py-8 lg:flex-row">
          {/* logo */}
          <div className="flex w-full items-center justify-between sm:w-auto">
            <Link
              href="/"
              aria-label="Abhishek Kumar Sinha — home"
              className="whitespace-nowrap text-[clamp(18px,5.5vw,28px)] leading-none"
              onClick={() => setMenuOpen(false)}
            >
              <span className="font-semibold">abhishek</span>{" "}
              <span className="font-light">kumar sinha</span>
              <span className="text-accent font-semibold">.</span>
            </Link>
            <button
              type="button"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/20 bg-white/10 text-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <HiXMark aria-hidden /> : <HiBars3 aria-hidden />}
            </button>
          </div>

          {/* socials */}
          <Socials />
        </div>
        <nav
          id="mobile-menu"
          aria-label="Mobile menu"
          aria-hidden={!menuOpen}
          className={`${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-2 opacity-0"
          } absolute left-4 right-4 top-full z-50 grid grid-cols-2 gap-2 rounded-xl border border-white/20 bg-primary/95 p-3 shadow-2xl backdrop-blur-md transition-all duration-200 sm:hidden motion-reduce:transition-none`}
        >
          {navData.map(({ name, path, Icon }) => (
            <Link
              key={path}
              href={path}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-[44px] items-center gap-2 rounded-lg px-2 capitalize hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Icon className="text-accent" aria-hidden />
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
