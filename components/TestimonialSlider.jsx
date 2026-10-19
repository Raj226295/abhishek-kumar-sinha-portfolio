import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projectHighlights = [
  {
    image: "/projects/house-of-tattva.png",
    name: "House of Tattva",
    category: "E-Commerce Website",
    description:
      "A modern e-commerce platform with product listings, cart, wishlist, and secure checkout.",
    link: "https://www.thehouseoftattva.com/",
  },
  {
    image: "/projects/aryass.png",
    name: "ARYASS",
    category: "Retail & Wholesale Platform",
    description:
      "A retail and wholesale shopping platform with product variants, cart, and order management.",
    link: "https://aryass.com/",
  },
  {
    image: "/projects/pk-business.png",
    name: "PK Business Solution",
    category: "Business Services Platform",
    description:
      "A digital services platform for GST, accounting, business registration, influencer marketing, and web development.",
    link: "https://pkbusinesssolution.in/",
  },
  {
    image: "/projects/ayush-kursela.png",
    name: "Ayush Kursela",
    category: "Snacks & Food E-Commerce Website",
    description:
      "A responsive food e-commerce website showcasing traditional Indian snacks, product collections, shopping functionality, and an engaging user experience.",
    link: "https://ayushkursela.com/",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[500px] sm:h-[440px]"
    >
      {projectHighlights.map((project) => (
        <SwiperSlide key={project.name}>
          <div className="flex h-full flex-col items-center justify-center gap-6 px-12 md:flex-row md:gap-x-10 md:px-16 xl:gap-x-14">
            <div className="relative aspect-video w-full max-w-[460px] overflow-hidden rounded-xl border border-white/10 bg-primary/50 shadow-2xl">
              <Image
                src={project.image}
                alt={`${project.name} website homepage`}
                fill
                sizes="(max-width: 767px) calc(100vw - 96px), 460px"
                className="object-cover object-top transition-transform duration-500 hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
              />
            </div>

            <div className="relative flex max-w-[480px] flex-1 flex-col justify-center text-center md:min-h-[230px] md:border-l md:border-white/20 md:pl-10 md:text-left xl:pl-14">
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-accent">
                {project.category}
              </p>
              <h3 className="mb-3 text-2xl font-semibold text-white xl:text-3xl">
                {project.name}
              </h3>
              <p className="mb-6 leading-relaxed text-white/70">
                {project.description}
              </p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} live project`}
                className="mx-auto inline-flex w-fit items-center gap-2 border-b border-accent pb-1 text-sm font-medium uppercase tracking-wider text-white transition-colors duration-300 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:mx-0 motion-reduce:transition-none"
              >
                View Live Project
                <BsArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
