import React from "react";
import { useNavigate } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import "./Projects.css";

const Project = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div className="p-5 rounded-md hover-effect">
      <SwiperSlide>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center items-center">
            <img className="w-24 rounded-md" src={project.img} alt="" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{project.name}</h2>
            <p className="font-bold text-gray-400">Technology:</p>
            <p className="text-gray-400">{project.technology}</p>
            <div>
              <button
                onClick={() => navigate(`/projects/${project._id}`)}
                className="btn btn-xs btn-primary mt-10"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </div>
  );
};

export default Project;
