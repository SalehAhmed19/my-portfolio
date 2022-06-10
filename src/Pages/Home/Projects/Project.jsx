import React from "react";
import { SwiperSlide } from "swiper/react";
import "./Projects.css";

const Project = ({ project }) => {
  return (
    <div className="p-5 rounded-md hover-effect">
      <SwiperSlide>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <img className="w-24" src={project.img} alt="" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{project.name}</h2>
            <p>{project.des}</p>
            <div>
              <button className="btn btn-xs btn-primary mt-10">Details</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </div>
  );
};

export default Project;
