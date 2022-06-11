import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://whispering-dawn-97364.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div id="project" style={{ background: "#191919" }} className="py-20">
      <h2 className="text-3xl lg:text-5xl font-bold text-center text-white font">
        My Latest Projects
      </h2>
      <p className="font text-gray-400 text-center my-5">
        There are some of my latest projects {projects.length}
      </p>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5">
            {projects.map((project) => (
              <Project key={project._id} project={project}></Project>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
