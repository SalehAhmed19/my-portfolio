import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import project01 from "../../../Assets/Projects/project-01.png";
import project02 from "../../../Assets/Projects/project-02.png";
import project03 from "../../../Assets/Projects/project-03.png";
import project04 from "../../../Assets/Projects/project-04.png";

const Projects = () => {
  return (
    <div id="project" style={{ background: "#191919" }} className="py-20">
      <h2 className="text-3xl lg:text-5xl font-bold text-center text-white font">
        My Latest Projects
      </h2>
      <p className="font text-gray-400 text-center my-5">
        There are some of my latest projects
      </p>
      <div className="w-32 lg:w-96 mx-auto">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a href="https://cars-empire.web.app/">
              <img className="w-52" src={project02} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://fix-manufacturer.web.app/">
              <img className="w-52" src={project01} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://convention-center-s-a-dev.netlify.app/">
              <img className="w-52" src={project03} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://dental-pro-44da6.web.app/">
              <img className="w-52" src={project04} alt="" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
