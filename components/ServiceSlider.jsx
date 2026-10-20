import { useCallback, useEffect, useRef, useState } from "react";
import {
  RxArrowLeft,
  RxArrowRight,
  RxArrowTopRight,
} from "react-icons/rx";
import {
  LuBot,
  LuClapperboard,
  LuCode2,
  LuMegaphone,
  LuPalette,
  LuTarget,
} from "react-icons/lu";

export const serviceData = [
  {
    Icon: LuTarget,
    title: "Performance Marketing",
    description:
      "Drive measurable business growth through Meta Ads, Google Ads, lead generation, and data-driven advertising strategies.",
    services: [
      "Performance Marketing",
      "Meta Ads Management",
      "Google Ads Management",
      "Social Media Advertising",
      "Lead Generation",
      "Digital Marketing Strategy",
    ],
  },
  {
    Icon: LuMegaphone,
    title: "Social Media & SEO",
    description:
      "Strengthen your online presence with social media management, SEO, local search optimization, and strategic audience engagement.",
    services: [
      "Social Media Management",
      "SEO & Local SEO",
      "Google Business Profile Management",
    ],
  },
  {
    Icon: LuClapperboard,
    title: "Creative & Media Production",
    description:
      "Create engaging content through professional video production, photography, editing, graphic design, and visual storytelling.",
    services: [
      "Content Creation",
      "Graphic Design & Creative Design",
      "Video Production",
      "Video Editing",
      "Cinematic Shoots",
      "Product Photography & Videography",
      "Voiceover & Audio Production",
    ],
  },
  {
    Icon: LuPalette,
    title: "Branding & Influencer Marketing",
    description:
      "Build memorable brands through creative strategies, influencer collaborations, UGC campaigns, and compelling advertising content.",
    services: [
      "Branding & Brand Strategy",
      "Influencer Marketing & Shoots",
      "UGC Content & UGC Ads",
      "Content & Ad Copywriting",
    ],
  },
  {
    Icon: LuBot,
    title: "AI & Marketing Automation",
    description:
      "Simplify business operations with AI-generated content, intelligent chatbots, WhatsApp automation, and smart marketing workflows.",
    services: [
      "AI Image & Video Generation",
      "AI Music & Voice Generation",
      "Marketing Automation",
      "WhatsApp Marketing & Automation",
      "AI Chatbot & WhatsApp AI Agent",
    ],
  },
  {
    Icon: LuCode2,
    title: "Web, App & CRM Solutions",
    description:
      "Develop modern websites, mobile applications, intuitive user experiences, and custom CRM solutions for growing businesses.",
    services: [
      "Website Development",
      "Web Application Development",
      "Mobile App Development",
      "UI/UX Design",
      "CRM Development & Management",
    ],
  },
];

const ServiceCard = ({ item }) => (
  <article className="group flex h-auto min-h-[300px] w-full flex-col rounded-lg border border-white/10 bg-[rgba(65,47,123,0.22)] px-6 py-6 transition-all duration-300 hover:-translate-y-[6px] hover:border-accent/50 hover:bg-[rgba(89,65,169,0.2)] hover:shadow-[0_12px_35px_rgba(241,48,36,0.12)] sm:h-[270px] sm:min-h-0 motion-reduce:transform-none motion-reduce:transition-none">
    <div className="mb-4 text-4xl text-accent transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none">
      <item.Icon aria-hidden />
    </div>

    <div className="flex-1">
      <h3 className="mb-2 text-lg font-medium leading-snug text-white">
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed text-white/60">
        {item.description}
      </p>
    </div>

    <div className="mt-5 text-2xl text-white" aria-hidden>
      <RxArrowTopRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none" />
    </div>
  </article>
);

const getScrollBehavior = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";

const ServiceSlider = () => {
  const scrollerRef = useRef(null);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateNavigation = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
    setCanScrollPrevious(scroller.scrollLeft > 1);
    setCanScrollNext(scroller.scrollLeft < maxScrollLeft - 1);
  }, []);

  const handleWheel = useCallback((event) => {
    const scroller = scrollerRef.current;
    if (!scroller || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;

    const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
    const canMove =
      (event.deltaY < 0 && scroller.scrollLeft > 1) ||
      (event.deltaY > 0 && scroller.scrollLeft < maxScrollLeft - 1);

    if (!canMove) return;

    event.preventDefault();
    scroller.scrollBy({ left: event.deltaY, behavior: "auto" });
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return undefined;

    updateNavigation();
    scroller.addEventListener("scroll", updateNavigation, { passive: true });
    scroller.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", updateNavigation);

    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(updateNavigation);
    resizeObserver?.observe(scroller);

    return () => {
      scroller.removeEventListener("scroll", updateNavigation);
      scroller.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", updateNavigation);
      resizeObserver?.disconnect();
    };
  }, [handleWheel, updateNavigation]);

  const scrollByCard = useCallback((direction) => {
    const scroller = scrollerRef.current;
    const card = scroller?.querySelector("[data-service-card]");
    if (!scroller || !card) return;

    const styles = window.getComputedStyle(scroller);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    const distance = card.getBoundingClientRect().width + gap;

    scroller.scrollBy({
      left: direction * distance,
      behavior: getScrollBehavior(),
    });
  }, []);

  const handleKeyDown = (event) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByCard(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByCard(1);
    } else if (event.key === "Home") {
      event.preventDefault();
      scroller.scrollTo({ left: 0, behavior: getScrollBehavior() });
    } else if (event.key === "End") {
      event.preventDefault();
      scroller.scrollTo({
        left: scroller.scrollWidth,
        behavior: getScrollBehavior(),
      });
    }
  };

  return (
    <div className="w-full min-w-0">
      <div className="mb-3 hidden items-center justify-end gap-2 md:flex">
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-xl text-white transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white motion-reduce:transition-none"
          onClick={() => scrollByCard(-1)}
          disabled={!canScrollPrevious}
          aria-label="Previous service"
        >
          <RxArrowLeft aria-hidden />
        </button>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-xl text-white transition-colors duration-300 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white motion-reduce:transition-none"
          onClick={() => scrollByCard(1)}
          disabled={!canScrollNext}
          aria-label="Next service"
        >
          <RxArrowRight aria-hidden />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="services-marquee flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden scroll-smooth pb-4 pt-2 scrollbar-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 motion-reduce:scroll-auto"
        onKeyDown={handleKeyDown}
        aria-label="Services carousel"
        role="list"
        tabIndex={0}
      >
        {serviceData.map((item) => (
          <div
            key={item.title}
            className="w-[85%] min-w-[85%] snap-start md:w-[calc((100%-1rem)/2)] md:min-w-[calc((100%-1rem)/2)]"
            data-service-card
            role="listitem"
          >
            <ServiceCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSlider;
