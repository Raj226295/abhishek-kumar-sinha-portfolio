import {
  RxArrowTopRight,
  RxComponent2,
  RxDesktop,
  RxLayers,
  RxMobile,
  RxPencil2,
  RxRocket,
} from "react-icons/rx";
import { FaDatabase, FaShoppingCart } from "react-icons/fa";

export const serviceData = [
  {
    Icon: RxDesktop,
    title: "Web Development",
    description:
      "Modern, responsive, and high-performance websites built with clean code and seamless user experiences.",
  },
  {
    Icon: FaShoppingCart,
    title: "E-Commerce Development",
    description:
      "Complete online shopping experiences with product management, cart functionality, checkout, and payment integration.",
  },
  {
    Icon: RxMobile,
    title: "App Development",
    description:
      "Modern, user-friendly mobile applications with intuitive interfaces and practical functionality.",
  },
  {
    Icon: RxPencil2,
    title: "UI/UX Design",
    description:
      "Creative and intuitive interface designs focused on usability, accessibility, and engaging digital experiences.",
  },
  {
    Icon: RxComponent2,
    title: "Logo Design",
    description:
      "Unique, modern, and memorable logos that communicate brand identity and create lasting impressions.",
  },
  {
    Icon: RxLayers,
    title: "Graphics Design",
    description:
      "Professional social media graphics, banners, posters, thumbnails, and creative marketing materials.",
  },
  {
    Icon: FaDatabase,
    title: "Backend & Database",
    description:
      "Reliable backend functionality, database integration, APIs, and data management for dynamic web applications.",
  },
  {
    Icon: RxRocket,
    title: "Website Optimization",
    description:
      "Improving website loading speed, SEO fundamentals, mobile responsiveness, performance, and user experience.",
  },
];

const ServiceCard = ({ item }) => (
  <article className="group flex h-[270px] w-[min(85vw,360px)] shrink-0 flex-col rounded-lg border border-white/10 bg-[rgba(65,47,123,0.22)] px-6 py-6 transition-all duration-300 hover:-translate-y-[6px] hover:border-accent/50 hover:bg-[rgba(89,65,169,0.2)] hover:shadow-[0_12px_35px_rgba(241,48,36,0.12)] md:w-[360px] xl:w-[380px] motion-reduce:transform-none motion-reduce:transition-none">
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

const ServiceSlider = () => {
  return (
    <div
      className="services-marquee w-full cursor-grab overflow-x-auto overflow-y-hidden pb-4 scrollbar-none active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
      aria-label="Services carousel"
      tabIndex={0}
    >
      <div className="services-marquee-track flex w-max py-2">
        <div className="services-marquee-sequence flex shrink-0 gap-4 pr-4" role="list">
          {serviceData.map((item) => (
            <div key={item.title} role="listitem">
              <ServiceCard item={item} />
            </div>
          ))}
        </div>

        <div
          className="services-marquee-copy services-marquee-sequence flex shrink-0 gap-4 pr-4"
          aria-hidden="true"
        >
          {serviceData.map((item) => (
            <ServiceCard key={`duplicate-${item.title}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
