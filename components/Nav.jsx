import Link from "next/link";
import { useRouter } from "next/router";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    Icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    Icon: HiEnvelope,
  },
];

const Nav = () => {
  const { asPath } = useRouter();
  const currentPath = asPath.split(/[?#]/)[0].replace(/\/$/, "") || "/";

  return (
    <nav aria-label="Main navigation" className="fixed bottom-0 z-50 flex h-auto w-full items-center xl:right-[2%] xl:top-0 xl:h-screen xl:w-16 xl:justify-center">
      <div className="flex min-h-[72px] w-full items-center justify-between bg-white/10 px-1 py-2 pb-[max(8px,env(safe-area-inset-bottom))] text-2xl backdrop-blur-sm sm:px-4 md:px-20 xl:h-max xl:min-h-0 xl:flex-col xl:justify-center xl:gap-y-10 xl:rounded-full xl:px-0 xl:py-8 xl:text-xl">
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === currentPath && "text-accent"
            } group relative flex min-h-[44px] min-w-[44px] items-center justify-center transition-all duration-300 hover:text-accent xl:min-h-0 xl:min-w-0`}
            href={link.path}
            key={i}
            aria-label={link.name}
            aria-current={link.path === currentPath ? "page" : undefined}
          >
            {/* tolltip */}
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                {/* triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            {/* icon */}
            <div>
              <link.Icon aria-hidden />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
