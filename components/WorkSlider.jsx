import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const projects = [
  {
    title: "House of Tattva",
    path: "/thumb1.jpg",
    link: "https://www.thehouseoftattva.com/",
  },
  {
    title: "ARYASS",
    path: "/thumb2.jpg",
    link: "https://aryass.com/",
  },
  {
    title: "PK Business Solution",
    path: "/thumb3.jpg",
    link: "https://pkbusinesssolution.in/",
  },
  {
    title: "Ayush Kursela",
    path: "/thumb4.jpg",
    link: "https://ayushkursela.com/",
  },
];

const workSlides = [
  projects,
  [projects[3], projects[0], projects[1], projects[2]],
];

const WorkSlider = () => {
  return (
    <Swiper
      id="projects"
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.map((project) => (
              <div
                className="group relative flex items-center justify-center overflow-hidden rounded-lg"
                key={project.title}
              >
                <div className="group relative flex items-center justify-center overflow-hidden">
                  <Image
                    src={project.path}
                    alt={`${project.title} website homepage`}
                    width={500}
                    height={300}
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 transition-all duration-700 group-hover:opacity-80 group-focus-within:opacity-80"
                    aria-hidden="true"
                  />

                  <div className="absolute bottom-0 translate-y-full transition-all duration-300 group-hover:-translate-y-10 group-focus-within:-translate-y-10 group-hover:xl:-translate-y-20 group-focus-within:xl:-translate-y-20">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live project`}
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <div className="delay-100">LIVE</div>
                      <div className="translate-y-[500%] transition-all delay-150 duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0">
                        PROJECT
                      </div>
                      <div className="translate-y-[500%] text-xl transition-all delay-150 duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0">
                        <BsArrowRight aria-hidden="true" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
