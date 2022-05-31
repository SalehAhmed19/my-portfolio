import React from "react";
import s from "../../../Assets/Img/s.jpg";
import "./Banner.css";
import Typical from "react-typical";

const Banner = () => {
  return (
    <div
      style={{
        backgroundColor: "#000",
      }}
      className="flex justify-between"
    >
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
        <div className="pl-3 lg:pl-20 py-32 lg:py-0">
          <h3 className="text-gray-400 font-secondary uppercase mb-5">
            <span className="mr-3">W e l c o m e</span>{" "}
            <span className="mr-3">t o</span> <span className="mr-3">m y</span>{" "}
            <span className="mr-3">w o r l d</span>
          </h3>
          <h1 className="text-white font-bold text-3xl lg:text-5xl font-heading">
            Hi, I'm Saleh Ahmed Mahin
          </h1>
          <h1 className="text-red-500 font-bold text-3xl lg:text-5xl font-heading">
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "MERN Stack Developer",
                1000,
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
            ></Typical>
          </h1>
        </div>
      </div>
      <div className="hidden lg:block">
        <div class="avatar">
          <div class="w-full rounded-full ring ring-red-500 ring-offset-red-500 ring-offset-2 m-5">
            <img src={s} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
