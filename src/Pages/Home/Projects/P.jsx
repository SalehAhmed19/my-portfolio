import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const P = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch(`https://whispering-dawn-97364.herokuapp.com/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [project]);

  return (
    <div
      className="py-10 border border-gray-700"
      style={{ background: "#101010" }}
    >
      <div className="w-1/2 mx-auto">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={project.imgOne} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={project.imgTwo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={project.imgThree} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={project.imgFour} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="px-10">
        <h2 className="text-white font-bold text-2xl">{project.name}</h2>
        <p className="text-gray-400">
          <span className="font-bold text-xl">Technology Used: </span>
          {project.technology}
        </p>
        <div className="my-5">
          <button className="btn btn-sm mx-3">
            <a href={project.liveSite} target="blank">
              Demo
            </a>
          </button>
          <button className="btn btn-sm mx-3">
            <a href={project.clientSide} target="blank">
              GitHub (Client-Side)
            </a>
          </button>
          <button className="btn btn-sm mx-3">
            <a href={project.serverSide} target="blank">
              GitHub (Server-Side)
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default P;
